"use client";
import React from "react";
import cleve from "../../../../public/images/Cleve (3).png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { Suez_One } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        {/* <Image
          alt="Cleve"
          className="w-22 h-200  md:w-500 md:h-500 "
          src={cleve}
          quality={100}
          priority
        /> */}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="p-10">
          <h2 className={`text-8xl font-bold text-left`}>
            npm <span className="text-emerald-400">init</span>?
          </h2>
        </div>
        <div className="w-full p-10">
          <p className={`text-4xl`}>
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
            <p className={`text-4xl text-left`}>
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
            <div className="flex flex-row">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/cleve-clayton/"
                      target="_blank"
                      className="px-5"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-linkedin" size={40} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/manOnTheMoon2101"
                      target="_blank"
                      className="px-5"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-github" size={40} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
