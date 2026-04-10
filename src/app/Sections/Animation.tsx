"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const HyperInteractiveBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    const config = {
      count: isMobile ? 800 : 1800, // Higher density for premium feel
      particleSize: isMobile ? 3.5 : 2.5,
      radius: isMobile ? 30 : 45, // Interaction reach
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    };

    const positionBuffer = new Float32Array(config.count * 3);
    const initialPositions = new Float32Array(config.count * 3);
    const velocities = new Float32Array(config.count * 3);
    const randomFactors = new Float32Array(config.count);
    
    // Vibrant Neon Palette
    const palette = [
      new THREE.Color('#4f46e5'), // Indigo
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#d946ef'), // Fuchsia
      new THREE.Color('#ffffff'), // Glow highlights
    ];

    for (let i = 0; i < config.count; i++) {
      const i3 = i * 3;
      // Start slightly clustered for the "explosion" entry
      const x = (Math.random() - 0.5) * 140;
      const y = (Math.random() - 0.5) * 90;
      const z = (Math.random() - 0.5) * 30;

      positionBuffer[i3] = initialPositions[i3] = x;
      positionBuffer[i3 + 1] = initialPositions[i3 + 1] = y;
      positionBuffer[i3 + 2] = initialPositions[i3 + 2] = z;
      randomFactors[i] = Math.random();
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile,
      powerPreference: "high-performance" 
    });

    renderer.setPixelRatio(config.pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.display = 'block';
    mountRef.current.appendChild(renderer.domElement);

    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positionBuffer, 3));
    
    const colors = new Float32Array(config.count * 3);
    for (let i = 0; i < config.count; i++) {
      const col = palette[Math.floor(Math.random() * palette.length)];
      col.toArray(colors, i * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: config.particleSize,
      map: createGlowTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // --- High-Impact Entry Animation ---
    camera.position.z = 400; // Deep space start
    
    const entryTl = gsap.timeline();
    entryTl.to(camera.position, {
      z: 75,
      duration: 1.2,
      ease: "expo.inOut",
    })
    .to(mat, {
      opacity: 0.85,
      duration: 0.8,
      ease: "power3.out"
    }, 0.2);

    // --- Interaction State ---
    const mouse = { x: 0, y: 0, vX: 0, vY: 0, lastX: 0, lastY: 0 };
    const lerpTarget = new THREE.Vector2(0, 0);

    const onInput = (x: number, y: number) => {
      mouse.x = (x / window.innerWidth - 0.5) * 130;
      mouse.y = (y / window.innerHeight - 0.5) * -90;
      mouse.vX = mouse.x - mouse.lastX;
      mouse.vY = mouse.y - mouse.lastY;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    const onMouseMove = (e: MouseEvent) => onInput(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) onInput(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // --- Animation Loop ---
    const update = (time: number) => {
      const t = time * 0.001;
      lerpTarget.lerp(new THREE.Vector2(mouse.x, mouse.y), 0.12);

      const posAttr = geo.attributes.position;
      const positions = posAttr.array as Float32Array;

      for (let i = 0; i < config.count; i++) {
        const i3 = i * 3;
        const rf = randomFactors[i];

        // Organic Floating Motion
        initialPositions[i3] += Math.sin(t * rf) * 0.02;
        initialPositions[i3+1] += Math.cos(t * rf) * 0.02;

        const ix = initialPositions[i3];
        const iy = initialPositions[i3 + 1];
        const iz = initialPositions[i3 + 2];

        const dx = lerpTarget.x - ix;
        const dy = lerpTarget.y - iy;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist < config.radius) {
          const force = (1 - dist / config.radius) * 2.0;
          // Apply velocity based on mouse movement speed (momentum)
          velocities[i3] += mouse.vX * force * 0.3;
          velocities[i3 + 1] += mouse.vY * force * 0.3;
          // Warp depth
          positions[i3 + 2] = iz + (force * 25);
        }

        // Friction/Damping
        velocities[i3] *= 0.94;
        velocities[i3 + 1] *= 0.94;

        positions[i3] = ix + velocities[i3];
        positions[i3 + 1] = iy + velocities[i3 + 1];
        positions[i3 + 2] += (iz - positions[i3 + 2]) * 0.06;
      }

      posAttr.needsUpdate = true;
      
      // Camera Parallax
      camera.position.x += (lerpTarget.x * 0.2 - camera.position.x) * 0.05;
      camera.position.y += (lerpTarget.y * 0.2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      
      // Decay velocity so particles don't fly away forever if mouse stops
      mouse.vX *= 0.9;
      mouse.vY *= 0.9;
    };

    gsap.ticker.add(update);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#03020b] pointer-events-none overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
      {/* Enhanced radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,5,30,0)_0%,#03020b_90%)]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default HyperInteractiveBackground;