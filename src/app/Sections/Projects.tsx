"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="text-[var(--text)] bg-[var(--bg)] px-3 lg:px-3 "
    >
      <div
        className="text-center text-xl md:3xl lg:5xl font-semibold m-auto max-w-[350px] tracking-[13px] border-8 border-[var(--text)]
        p-8   "
      >
        Projects
      </div>
      <div className="py-18 m-auto grid gridcols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-between text-[var(--text)]">

        {/* 1 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl">
            <div className=" flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">Furniro – Furniture Shop</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/furniro-furniture-shop.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div className="rounded-full font-semibold py-1 px-3 text-[#000] bg-[var(--react)] hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  React
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[#2D3328] text-[#6cc24a] hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  NodeJs
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--tailwind)] text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Tailwind
                </div>
              </div>
              <div className="text-md">
                Furniro is a modern and responsive furniture shop website designed to showcase premium furniture collections. It features a clean UI, intuitive navigation, and well-structured product sections to enhance the user experience. This project highlights my skills in responsive design, layout structuring, and creating visually appealing web interfaces.
              </div>
              <div>              
                <div className=" text-3xl mt-0.5">Admin account credentials</div>
                <div className="pl-2">username - admin</div>
                <div className="pl-2">Password - password</div>
              </div>
              <div className="flex justify-between">
                <Link href={"https://github.com/RasheedBShaik/furniture-shop"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                <Link href={"https://furniro-furniture-shop.vercel.app/"} target="_blank" className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl ">
            <div className=" flex flex-col p-5 gap-5">
              <div className="flex flex-col">
              <div className="text-4xl w-full font-bold">Product Store</div>
              <div className=" pl-2">(user and admin two websites)</div>
              </div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/user-site.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div className="rounded-full font-semibold py-1 px-3 bg-white text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  NextJs
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[#2D3328] text-[#6cc24a] hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  NodeJs
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--tailwind)] text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Tailwind
                </div>
              </div>
              <div className="text-md">
                This project includes a user-facing site that displays each product’s name, price, and image in a clean, minimal layout. Authorized administrators can access a connected admin panel through a secure login that requires valid credentials. The admin panel provides full control to add and edit product details, update pricing, and manage images, showcasing both a user-friendly front end and a functional, secure back end.
                <div className=" text-3xl mt-0.5">Credentials</div>
                <div className="pl-2">Name - name</div>
                <div className="pl-2">Password - password</div>
              </div>
              <div className="flex justify-between">
                
                <div className="flex flex-col">
                  <div className="text-center py-1">
                    User-site
                  </div>
                <Link href={"https://github.com/RasheedBShaik/u-product-store"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                </div>

                <div className="flex flex-col">
                  <div className="text-center py-1">
                    Admin-site
                  </div>
                <Link href={"https://github.com/RasheedBShaik/product-store"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                </div>

                <div className="flex flex-col">
                  <div className="text-center py-1">User site</div>
                <Link href={"https://u-product-store-zgez.onrender.com/"} target="_blank" className="text-center text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 3 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl ">
            <div className="flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">Bazar</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/bazar.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div
                  className="rounded-full font-semibold py-1 px-3 text-[#000] bg-[var(--react)]  hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out
                 "
                >
                  React
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--firebase)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Firebase
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--css)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  CSS
                </div>
              </div>
              <div className="text-md">
                Bazar is a front-end book-selling website inspired by Flipkart,
                built with HTML, CSS, JavaScript, React, and Firebase. It
                features a responsive design with search functionality, category
                filters, and user authentication. This project showcases my
                skills in front-end development and integrating modern web
                technologies.
                <div className=" text-3xl mt-0.5">Test credentials or you can create one</div>
                <div className="pl-2">Email - test@gmail.com</div>
                <div className="pl-2">Password - test12345</div>
              </div>

              <div className="flex justify-between">
                <Link href={"https://github.com/rasheedbshaik/bazar"}  target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                <Link href={"https://rasheedbshaik.github.io/bazar"}  target="_blank" className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 4 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl ">
            <div className="flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">Chat App</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition transform duration-600"
                src="./images/chatApp.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div
                  className="rounded-full font-semibold py-1 px-3 text-[#000] bg-[var(--react)] hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out
                 "
                >
                  React
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--javascript)] text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Javascript
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--css)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  CSS
                </div>
              </div>
              <div className="text-md">
                A responsive and interactive front-end Chat App simulating
                real-world messaging platforms. Features a scrollable contact
                list with dynamic chat loading on selection. Includes a chat
                window with message display, input box, and simulated send
                functionality. Offers user actions like viewing profile, mute,
                and block for each contact. Designed with mobile-first
                responsiveness using HTML, CSS, and JavaScript.
              </div>
              <div className="flex justify-between">
                <Link href={"https://github.com/RasheedBShaik/Chat-App"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                <Link href={"https://rasheedbshaik.github.io/Chat-App"} target="_blank" className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 5 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl ">
            <div className="flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">E-Commerce-UI</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/e-commerce.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div className="rounded-full font-semibold py-1 px-3 text-white bg-[var(--html)]  hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out                 ">
                  HTML
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--css)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  CSS
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--githubpages)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  GitHub Pages
                </div>
              </div>
              <div className="text-md">
                A multi-page e-commerce website built using only HTML and CSS,
                featuring product pages, a shopping cart, and a checkout
                process. The design is fully responsive, ensuring a seamless
                experience across devices. HTML was used for structure, and CSS
                for styling and layout, with attention to user-friendly
                navigation and design.
              </div>
              <div className="flex justify-between">
                <Link href={"https://github.com/RasheedBShaik/e-commerce-ui"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                <Link href={"https://rasheedbshaik.github.io/e-commerce-ui"} target="_blank" className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 6 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl ">
            <div className="flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">Monito Pet Store</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/monito.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div
                  className="rounded-full font-semibold py-1 px-3 text-[#000] bg-[var(--react)]  hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out
                 "
                >
                  React
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--tailwind)] text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Tailwind
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--css)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  CSS
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--html)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  HTML
                </div>
              </div>
              <div className="text-md">
                A single-page, responsive pet store built with React and
                Tailwind CSS. Tailwind CSS ensures fast, customizable design,
                while React handles dynamic state management. This project
                demonstrates my ability to integrate modern web technologies and
                create a user-friendly interface. take a look to know more
              </div>
              <div className="flex justify-between">
                <Link href={"https://github.com/RasheedBShaik/monito"} target="_blank" className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </Link>
                <Link href={"https://rasheedbshaik.github.io/monito"} target="_blank" className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/*  cards end */}
      </div>
    </div>
  );
};
