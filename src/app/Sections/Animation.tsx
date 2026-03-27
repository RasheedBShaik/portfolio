"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

// --- Static Assets (Pre-defined outside component to prevent lag) ---
const COUNT = 2000;
const positionBuffer = new Float32Array(COUNT * 3);
const colorBuffer = new Float32Array(COUNT * 3);
const colors = [new THREE.Color('#6366f1'), new THREE.Color('#a855f7'), new THREE.Color('#22d3ee')];

// Create a procedural circle texture once (Global)
const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  
  // Draw soft circle
  const centerX = 32;
  const centerY = 32;
  const radius = 30;

  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Fill buffers outside to ensure 0-ms mounting
for (let i = 0; i < COUNT; i++) {
  const i3 = i * 3;
  positionBuffer[i3] = (Math.random() - 0.5) * 100;
  positionBuffer[i3 + 1] = (Math.random() - 0.5) * 100;
  positionBuffer[i3 + 2] = (Math.random() - 0.5) * 50;
  const col = colors[Math.floor(Math.random() * colors.length)];
  colorBuffer[i3] = col.r;
  colorBuffer[i3 + 1] = col.g;
  colorBuffer[i3 + 2] = col.b;
}

const InteractiveBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    // 1. Instant Renderer Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, 
      powerPreference: "high-performance" 
    });

    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 2. Optimized Geometry
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positionBuffer, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colorBuffer, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.2, // Increased size slightly because circles look smaller than squares
      map: createCircleTexture(), // This turns the squares into circles
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);
    camera.position.z = 40;

    // 3. GSAP High-Speed Interactivity
    const mouse = { x: 0, y: 0 };
    const moveCamera = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 15;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * -15;
    };

    window.addEventListener('mousemove', moveCamera, { passive: true });

    // Entry Animation
    gsap.from(camera.position, {
      z: 150,
      duration: 1.5,
      ease: "expo.out"
    });

    // 4. GSAP Ticker
    const update = () => {
      particles.rotation.y += 0.0008;
      
      camera.position.x += (mouse.x - camera.position.x) * 0.07;
      camera.position.y += (mouse.y - camera.position.y) * 0.07;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    gsap.ticker.add(update);

    // 5. Cleanup
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('mousemove', moveCamera);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
      sceneRef.current = null;
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#020108] pointer-events-none">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020108_100%)]" />
    </div>
  );
};

export default InteractiveBackground;