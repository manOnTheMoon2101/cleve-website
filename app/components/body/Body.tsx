import React from "react";
import { Prompt } from "next/font/google";
import "animate.css";
import { TextRoll } from "@/components/ui/text-roll";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import email from "@/public/icons/email.svg";
import Image from "next/image";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const Hero = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("clevejohnclayton.2101@gmail.com");
      toast.success("Email copied to clipboard");
    } catch (err) {
      return null;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative ">
      <h1
        className={`text-8xl font-bold relative animate__animated animate__zoomInUp ${prompt.className}`}
      >
        Cleve Clayton
      </h1>
      <TextRoll
        className={`text-xl text-secondary relative mt-6 tracking-tight flex flex-row flex-wrap`}
      >
        software{" "}
        <span className="text-accent animate-pulse mx-2 font-bold">
          developer
        </span>{" "}
        <span className="text-foreground mx-2">x</span> ux{" "}
        <span className="text-accent animate-pulse mx-2 font-bold">
          designer
        </span>
      </TextRoll>
      <div
        className={`text-xl mt-6 flex flex-row items-center`}
      >
      <div>
      <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                className="mx-2 cursor-pointer transition-transform duration-200 hover:scale-90"
                src={email}
                alt={"Email"}
                height={30}
                width={30}
                onClick={copyToClipboard}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
       <div>
       <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/cleve-clayton-a1667836a/"
                target="_blank"
                className="px-5"
                rel="noopener noreferrer"
              >
                <Image
                  className="mx-2 cursor-pointer transition-transform duration-200 hover:scale-90"
                  src={linkedin}
                  alt={"LinkedIn"}
                  height={30}
                  width={30}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
       </div>
      <div>
      <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/manOnTheMoon2101"
                target="_blank"
                className="px-5"
                rel="noopener noreferrer"
              >
                <Image
                  className="mx-2 cursor-pointer transition-transform duration-200 hover:scale-90"
                  src={github}
                  alt={"Github"}
                  height={30}
                  width={30}
                />
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
  );
};

export default Hero;
