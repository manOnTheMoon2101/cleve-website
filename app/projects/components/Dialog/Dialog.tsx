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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { TbBrowser } from "react-icons/tb";

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
        className="flex max-w-[270px] flex-col overflow-hidden border  border-primary"
      >
        <MorphingDialogImage
          src={title.image}
          alt="Image"
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2 bg-background">
          <div>
            <MorphingDialogTitle className="text-primary font-bold">
              {title.title ? title.title : title.description}
              <div className="flex gap-2 my-2">
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
              </div>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {title.link ? title.link : title.body}
            </MorphingDialogSubtitle>
          </div>
          {/* <Button
            className="flex h-6 w-6"
            aria-label="Open dialog"
          >
            <PlusIcon className="text-white" size={21} />
          </Button> */}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden  bg-background  sm:w-[500px]"
        >
          <MorphingDialogImage
            src={title.image}
            alt="Image"
            className="h-full w-full"
          />
          <div className="p-6">
          <MorphingDialogTitle className="text-primary font-bold">
              {title.title}
              <div className="flex gap-2 mt-2">
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
              </div>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-black">
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
             
             <div className="my-2">
             <div className="flex flex-row items-center">
              <TbBrowser color="black"/>
             <a
                className="inline-flex text-foreground underline"
                href={title.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title.link}
              </a>
             </div>

              <div className="flex flex-row items-center">
                <FaGithub color="black"/>
              <a
                className="inline-flex text-foreground underline"
                href={title.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title.github}
              </a>
              </div>
             </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}