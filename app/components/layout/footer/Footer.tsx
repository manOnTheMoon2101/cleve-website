import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/cleve-clayton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="m-1 text-linkedin mx-4" size={50} />
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
                rel="noopener noreferrer"
              >
                <FaGithub className="m-1 text-github mx-4" size={50} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="text-center">
        <div>@2024 </div>
        <div>Designed by @cleveclayton</div>
      </div>
    </div>
  );
};

export default Footer;
