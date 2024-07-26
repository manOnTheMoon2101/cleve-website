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
                <FaLinkedin className="m-1 text-linkedin" size={25} />
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
                <FaGithub className="m-1 text-github" size={25} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex row justify-between">
        <div>@2024 </div>
        <div>made by @cleveclayton</div>
      </div>
    </div>
  );
};

export default Footer;
