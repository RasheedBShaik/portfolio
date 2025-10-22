import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-12 text-[var(--text)] bg-[var(--bg)]">
      <div className="flex justify-center">
        <Link href="#portfolio">
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-center">
              <img
                className="h-full"
                src="./images/double-arrow.svg"
                alt="Arrow"
              />
            </div>
            <div className="text-white font-bold">BACK TO TOP</div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center gap-7 items-center h-full">
        <Link href="">
          <img src="./images/facebookfooter.svg" alt="" />
        </Link>
        <Link href="https://www.linkedin.com/in/rasheedbshaik/" target="_blank">
          <img src="./images/linkedin-logo.svg" alt="linkedin" />
        </Link>
        <Link href="">
          <img src="./images/instagramfooter.svg" alt="" />
        </Link>
        <Link href="mailto:rasheedbasha.2004@gmail.com">
          <img src="./images/emailfooter.svg" alt="" />
        </Link>
      </div>
      <div className="text-center text-lg md:text-2xl pb-20">
        © 2024 @Rasheed Basha All Rights Reserved.
      </div>
    </div>
  );
};
