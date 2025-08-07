import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { PlusIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Globe } from "lucide-react";
import { GitBranch } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import { Eye } from "lucide-react";

import { Spline_Sans_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});

interface StackItem {
  icon: React.ReactNode;
  tooltip: string;
}

export function MorphingDialogBasicOne(title: any) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border  bg-white border-foreground dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={title.image}
          alt="Image"
          className="h-48 w-full object-cover"
        />
        <div>
          <div className="bg-accent">
            <MorphingDialogTitle
              className={`${spline.className} text-white text-center text-xl border-b border-primary mx-2`}
            >
             <h3 className="py-4"> {title.title ? title.title : title.description}</h3>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-white dark:text-zinc-400 flex flex-col justify-start">
              <Link
                href={title.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-start items-center"
              >
                <Badge className="flex flex-row items-center my-2  text-white font-bold bg-accent">
                  <FaGithub size={24} className="text-white mr-1" />
                  Github
                </Badge>
              </Link>

              <Link
                href={title.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-start items-center"
              >
                <Badge className="flex flex-row items-center my-2 bg-accent">
                  <FaLink size={24} className="text-white mr-1" />
                  Live
                </Badge>
              </Link>
              <Button
               className="bg-primary"

                aria-label="Open dialog"
              >
                <Eye className="text-white" size={24} />
              </Button>
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden  bg-accent  sm:w-[500px]"
        >
          <MorphingDialogImage
            src={title.image}
            alt="Image"
            className="h-full w-full"
          />
          <div className="p-6">
            <MorphingDialogTitle
              className={`${spline.className} text-white text-xl border-b border-primary mx-2`}
            >
              <h3 className="py-4"> {title.title ? title.title : title.description}</h3>
              {/* <div className="flex gap-2 mt-2">
                {Array.isArray(title.stack) &&
                  title.stack.map((item: StackItem, index: number) => (
                    <div key={index} className="relative group">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span> {item.icon}</span>
                          </TooltipTrigger>
                          <TooltipContent>{item.tooltip}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
              </div> */}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-white">
              {title.body}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <Link
                href={title.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row"
              >
                <Badge className="flex flex-row items-center my-2  text-white font-bold bg-accent mr-2">
                  <FaGithub size={24} className="text-white" />
                  Github
                </Badge>
              </Link>

              <Link
                href={title.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row"
              >
                <Badge className="flex flex-row items-center my-2 bg-accent mr-2">
                  <FaLink size={24} className="text-white" />
                  Live
                </Badge>
              </Link>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
