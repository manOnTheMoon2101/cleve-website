"use client";
import React from "react";
import cleve from "../../../../public/images/Cleve (3).png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { Suez_One } from "next/font/google";
import { Nova_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { Ramabhadra } from "next/font/google";
import { FaGithub } from "react-icons/fa";
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const ram = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
});
const mono = Nova_Mono({
  subsets: ["latin"],
  weight: "400",
});
const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <Image
          alt="Cleve"
          className="w-22 h-200  md:w-500 md:h-500 "
          src={cleve}
          quality={100}
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="p-4">
          <h2 className={`text-8xl font-bold text-center ${ram.className}`}>
            npm <span className="text-emerald-400">init</span>?
          </h2>
        </div>
        <div className="w-full p-10">
          <p className={`text-4xl  ${poppins.className}`}>
            my name' cleve
            <br />i make apps for a <br />
            <code className="text-emerald-400 text-2xl">
              {" "}
              <span className="text-slate-600"> const x : string =</span>{" "}
              'living...'{" "}
            </code>
          </p>
          <div className="w-full">
            {" "}
            {/* Full-width container with padding for left alignment */}
            <p className={`text-4xl text-left ${poppins.className}`}>
              <br /> i love the outdoors (🌻) <br /> putting smiles (😁) on
              people's faces! <br />
              and coding, of course
              <br />
              {/* 
    <span className="text-xs">
      (mr hacker go go go•
      <span className="text-lime-400"> ılıılıılılıılıılı</span>
      <span className="text-lg">👨🏻‍💻</span>•{" "}
      <span className="text-lime-400"> ılıılıılılıılıılı</span>)
    </span> 
    */}
              <br />
            </p>
          </div>
          <div className="mt-20">
            <p className={`text-4xl text-center`}> </p>
            <div className="flex flex-row justify-around">
              <a
                href="https://www.linkedin.com/in/cleve-clayton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-linkedin" size={40} />
              </a>{" "}
              <a
                href="https://github.com/manOnTheMoon2101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-github" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <FaArrowDown className="animate-bounce " size={60} />
        </div>

        {/* <div className="flex flex-row justify-center">
          <Button>
            {" "}
            <a
              href="assets/cv/Cleve_Clayton.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ram.className}`}
              download
            >
              Download CV
            </a>
          </Button>
        </div> */}
        <div className="p-4 self-start"></div>
      </div>
    </div>
  );
};

export default Welcome;
