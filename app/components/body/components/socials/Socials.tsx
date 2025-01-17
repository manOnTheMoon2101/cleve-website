"use client";
import * as React from "react";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import linkedin from "@/public/icons/linkedin.svg";
import github from "@/public/icons/github.svg";
import email from "@/public/icons/email.svg";
import { MessageCircle } from "lucide-react";
import { IoShareSocialSharp } from "react-icons/io5";
import { Prompt } from "next/font/google";
import { Spline_Sans_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
export function Socials() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <MessageCircle className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mt-10">
            <DialogTitle className={`text-center text-4xl ${spline.className}`}>
              Say hey!
            </DialogTitle>
            <div className="flex flex-row justify-center m-10">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/cleve-clayton/"
                      target="_blank"
                      className="px-5"
                      rel="noopener noreferrer"
                    >
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="mailto:clevejohnclayton.2101@gmail.com"
                      target="_blank"
                      className="px-5"
                      rel="noopener noreferrer"
                    >
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
                        <Image
                          src={email}
                          alt={"Email"}
                          height={60}
                          width={60}
                        />
                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email : clevejohnclayton.2101@gmail.com</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="flex flex-row w-full justify-evenly my-2">
          <IoShareSocialSharp className="w-1/2" />
          <span className="w-1/2">Socials</span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-10">
          <h2 className={`text-center text-4xl ${spline.className}`}>
            Say hey!
          </h2>
          <div className="flex flex-row justify-center m-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/cleve-clayton/"
                    target="_blank"
                    className="px-5"
                    rel="noopener noreferrer"
                  >
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:clevejohnclayton.2101@gmail.com"
                    target="_blank"
                    className="px-5"
                    rel="noopener noreferrer"
                  >
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom  transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
                      <Image src={email} alt={"Email"} height={60} width={60} />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email : clevejohnclayton.2101@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
