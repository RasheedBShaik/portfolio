"use client";
import React from "react";
import { motion } from "framer-motion";
export const Skills = () => {
  return (
    <div id="skills" className="bg-[var(--bg)] px-2 lg:px-0">
      <div
        className="text-center text-xl md:3xl lg:5xl font-semibold m-auto max-w-[350px] tracking-[13px] border-8 border-[var(--text)]
         p-8 text-[var(--text)]"
      >
        SKILLS
      </div>

      <div className="py-18 text-3xl flex justify-center text-center text-[var(--text)] ">
        <div className=" max-w-[762px] text-start w-full">USING NOW: </div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className=" max-w-[762px] py-18 m-auto grid grid-cols-2 lg:grid-cols-4 gap-[75px] justify-between text-[var(--text)]">
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/htmllogo.svg" alt="" />
            <div>HTML 5</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/csslogo.svg" alt="" />
            <div>CSS 3</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/javascriptlogo.svg" alt="" />
            <div>JAVA SCRIPT</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/reactlogo.svg" alt="" />
            <div>REACT</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img
              className="h-[100px] w-[100px]"
              src="https://www.gstatic.com/devrel-devsite/prod/v4fc9d85e6ea95f79bd6a196e3172f0f1dad2b944d8938b8bba07317f8184a4c6/firebase/images/touchicon-180.png"
              alt=""
            />
            <div>FIREBASE</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/bootstraplogo.svg" alt="" />
            <div>BOOTSTRAP</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img className="h-fit w-fit" src="./images/gitlogo.svg" alt="" />
            <div>Git</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/figmalogo.svg" alt="" />
            <div>FIGMA</div>
          </div>
        </div>
      </motion.div>
      <div className="py-18 text-3xl flex justify-center text-center text-[var(--text)] ">
        <div className=" max-w-[762px] text-start w-full">LEARNING: </div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="  max-w-[762px] py-18 m-auto grid grid-cols-2 lg:grid-cols-4 justify-between text-[var(--text)]">
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/nodejslogo.png" alt="" />
            <div>NODE JS</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img
              className="w-[100px] h-[80px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
              alt=""
            />
            <div>TAILWIND CSS</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/mongodblogo.png" alt="" />
            <div>MONGODB</div>
          </div>
          <div className=" flex gap-4 flex-col text-bold items-center ">
            <img src="./images/typescriptlogo.png" alt="" />
            <div>TYPE SCRIPT</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
