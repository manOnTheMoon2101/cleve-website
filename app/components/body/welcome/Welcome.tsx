"use client";
import React from "react";
import cleve from "../../../../public/images/Cleve (3).png";
import linkedin from "../../../../public/icons/linkedin.svg";
import github from "../../../../public/icons/github.svg";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Prompt } from "next/font/google";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
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
        <div className="p-10">
          <h2
            className={`text-6xl text-center md:text-8xl font-bold text-center tracking-wide ${prompt.className}`}
          >
            npm <span className="text-emerald-400 italic underline">init</span>?
          </h2>
        </div>
        <div className="w-full p-10">
          <p className={`text-4xl italic tracking-tight`}>
            my name' cleve
            <br />i make apps for a <br />
            {/* <code className="text-emerald-400 text-xl">
              {" "}
              <span className="text-slate-600"> const x : string =</span>{" "}
              'living...'{" "}
            </code> */}
          </p>
          <div className="w-full my-5 text-2xl">
            <CodeBlock
              showLineNumbers={false}
              theme={dracula}
              text={'const x : string = "living"'}
              language={"typescript"}
            />
          </div>
          <div className="w-full">
            {/* Full-width container with padding for left alignment */}
            <p className={`text-4xl text-left italic tracking-tight`}>
              i love the outdoors (🌻) <br /> and putting a (😁) on faces!{" "}
            </p>
          </div>
          <div className="mt-20">
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
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
                        <Image
                          src={linkedin}
                          alt={"Linkedin"}
                          height={60}
                          width={60}
                        />
                      </div>
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
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
                        <Image
                          src={github}
                          alt={"Github"}
                          height={60}
                          width={60}
                        />
                      </div>
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
        {/* <div className="flex flex-row justify-center">
          <FaArrowDown className="animate-bounce " size={60} />
        </div> */}

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
