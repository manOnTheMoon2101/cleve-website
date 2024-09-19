import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import linkedin from "../../../../../../public/icons/linkedin.svg";
import github from "../../../../../../public/icons/github.svg";
import email from "../../../../../../public/icons/email.svg";
export function Socials() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <p>socials</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mt-20">
            <div className="flex flex-row justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/cleve-clayton/"
                      target="_blank"
                      className="px-5"
                      rel="noopener noreferrer"
                    >
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-xl shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                      <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
        <p>socials</p>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-20">
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
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-xl shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
                    <div className="flex text-white items-center text-gray-700 font-neucha text-base leading-6 py-3 px-3 inline-block rounded-custom shadow-lg shadow-emerald-900 transition-all duration-235 ease-in-out cursor-pointer select-none touch-manipulation transform hover:translate-y-0.5 focus:ring-0 focus:shadow-lg focus:translate-y-0.5">
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
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
