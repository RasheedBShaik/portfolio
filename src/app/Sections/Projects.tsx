"use client";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
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
              </div>
              <div className="flex justify-between">
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </div>
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
              <div className="text-4xl w-full font-bold">Portfolio</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/portfolio.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div className="rounded-full font-semibold py-1 px-3 bg-white text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  NextJs
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--firebase)] text-white hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Firebase
                </div>
                <div className="rounded-full font-semibold py-1 px-3 bg-[var(--tailwind)] text-black hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
                  Tailwind
                </div>
              </div>
              <div className="text-md">
                I’m a passionate web developer with experience in building
                responsive, user-friendly websites. Skilled in HTML, CSS,
                React,Next and Tailwind CSS, I create dynamic, visually
                appealing web applications. My projects demonstrate my
                commitment to clean code, performance optimization, and
                delivering great user experiences.
              </div>
              <div className="flex justify-between">
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
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
          <div className=" flex bg-[var(--projectcard)] h-full gap-4 flex-col text-bold items-center rounded-xl">
            <div className=" flex flex-col p-5 gap-5">
              <div className="text-4xl w-full font-bold">Tic-Tac-Toe</div>
              <img
                className=" aspect-[2/1] rounded-xl hover:scale-105 ease-in-out transition-transform duration-600"
                src="./images/TicTacToe.png"
                alt=""
              />
              <div className="flex w-full items-start gap-4">
                <div className="rounded-full font-semibold py-1 px-3 text-[#000] bg-[var(--react)] hover:bg-black hover:text-white transition transform hover:scale-115 duration-500 ease-out">
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
                A responsive Tic Tac Toe game built with React, featuring
                real-time multiplayer using Firebase as a Socket.IO alternative.
                It includes turn tracking, win detection (with draw logic
                removed for a more engaging experience), instant resets, and
                dynamic UI powered by React Hooks. Deployed on GitHub Pages,
                this project showcases my skills in state management and
                real-time interaction.
              </div>
              <div className="flex justify-between">
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </div>
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
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </div>
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
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </div>
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
                <div className="text-xl p-3 bg-[#d1d5db80] text-black font-bold rounded-xl hover:text-white hover:bg-black">
                  Source Code
                </div>
                <div className="text-xl p-3 bg-[#00000050] text-white font-bold rounded-xl hover:bg-white hover:text-black ">
                  View Live
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/*  cards end */}
      </div>
    </div>
  );
};
