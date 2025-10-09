import { InView } from "@/components/ui/in-view";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Spline_Sans_Mono } from "next/font/google";
import baby from "@/public/images/baby.jpg";
import { Cursor } from '@/components/motion-primitives/cursor';
import { Eye } from "lucide-react";
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
export function InViewBasic() {
  return (
    <div className={`${spline.className} my-40 text-6xl`}>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-center md:text-left">
          My name's <span className="text-accent italic">@cleve</span>,
          <br />
          I'm a <span className="underline">Software Developer</span>
        </p>
      </InView>

      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="my-40 text-center md:text-right">
          I fell in L❤️ve with Tech at a young age
          <br />
          <span className="text-4xl italic text-yellow-900">
            
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3, },
            animate: { height: 'auto', opacity: 1, scale: 1, },
            exit: { height: 0, opacity: 0, scale: 0.3 ,},
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0.1,
          }}
          className='overflow-hidden'
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img
            src={baby.src}
            alt='Cleve'
            className='h-40 w-40'
          />
        </Cursor>
       
       (since i was chewing batteries as a baby)
      
    
          </span>
        </div>
      </InView>

      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-center md:text-left my-40 ">
          <span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="">"Plat op die aarde"</span>
                </TooltipTrigger>
                <TooltipContent>
                  <span>Down to earth</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>{" "}
          Christian guy
          <br />
          who enjoys the{" "}
          <span className="text-2xl italic text-yellow-900">little</span> things
          in life.
        </p>
      </InView>

      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="my-40 text-center text-4xl text-accent">
          "It is like a mustard seed, which is the smallest of all seeds on
          earth.
          <br />
          Yet when planted, it grows and becomes the largest of all garden
          plants, with such big branches that the birds can perch in its shade”
          <span className="text-2xl">-Mark 4-31</span>
        </p>
      </InView>
    </div>
  );
}
