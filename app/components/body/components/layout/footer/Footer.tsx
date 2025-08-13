import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import email from "@/public/icons/email.svg";
import { toast } from "sonner";
const Footer = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("clevejohnclayton.2101@gmail.com");
      toast.success("Email copied to clipboard");
    } catch (err) {
      return null;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className={`text-xl mt-6 flex flex-row items-center`}>
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
                    href="https://www.linkedin.com/in/cleve-clayton-a1667836a"
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
      <div className="text-center">
        <div>Designed by @cleveclayton</div>
        <div>@2025</div>
      </div>
    </div>
  );
};

export default Footer;
