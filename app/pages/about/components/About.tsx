import React from "react";
import styles from "../components/styles.module.css";
import { Prompt } from "next/font/google";
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
const AboutContent = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className={styles.gallery}>
          <img
            src="https://picsum.photos/id/815/400/400"
            alt="Two hands creating a heart and showing the sun"
          />
          <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
          <img src="https://picsum.photos/id/603/400/400" alt="a river" />
          <img
            src="https://picsum.photos/id/823/400/400"
            alt="a women with a camera"
          />
        </div>
      </div>
      <div className={`${prompt.className} m-5 text-6xl`}>
        <p className="text-left">
          my name's cleve,
          <br />i make apps for a living
        </p>
        <p className="my-40 text-right">
          falled in l❤️ve with tech at a young age
          <br />
          <span className="text-4xl text-slate-400">
            (since i was chewing batteries as a baby)
          </span>
        </p>
        <p className="text-left my-40 ">
          <span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>"Plat op die aarde"</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>down to earth</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>{" "}
          christian guy
          <br />
          who enjoys the little things in life
        </p>
        <p className="my-40 text-center text-4xl text-emerald-400">
          "It is like a mustard seed, which is the smallest of all seeds on
          earth.
          <br />
          Yet when planted, it grows and becomes the largest of all garden
          plants, with such big branches that the birds can perch in its shade”-
          <span className="text-4xl text-slate-400">Mark 4-31</span>
        </p>
      </div>
    </>
  );
};

export default AboutContent;
