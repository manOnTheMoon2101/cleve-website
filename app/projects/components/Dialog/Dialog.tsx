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
        <div className="flex flex-grow flex-row items-end justify-between p-2 bg-background">
          <div>
            <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 font-bold">
              {title.title ? title.title : title.description}
              <div className="flex gap-2 mt-2">
                {Array.isArray(title.stack) &&
                  title.stack.map((item: StackItem, index: number) => (
                    <div key={index} className="relative group">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-2xl"> {item.icon}</span>
                          </TooltipTrigger>
                          <TooltipContent>{item.tooltip}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
              </div>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              <Link href={title.link} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row items-center my-2">
                  <Globe className="text-accent" />
                  Live Demo
                </div>
              </Link>

              <Link href={title.link} target="_blank" rel="noopener noreferrer">
                <Badge className="flex flex-row items-center my-2 bg-white text-accent">
                  <GitBranch className="text-accent" />
                  Github Repo
                </Badge>
              </Link>
            </MorphingDialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-foreground dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon className="text-secondary" size={12} />
          </button>
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
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
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
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
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
              <p>{title.description}</p>
              <a
                className="mt-2 inline-flex text-zinc-500 underline"
                href={title.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title.link}
              </a>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
