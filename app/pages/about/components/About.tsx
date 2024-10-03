import React from "react";
import styles from "../components/styles.module.css";
import { Prompt } from "next/font/google";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import sign from "@/public/images/sign.png";
import Image from "next/image";
import lion from "@/public/images/lion.jpeg";
import beach from "@/public/images/beach.jpeg";
import food from "@/public/images/food.jpeg";
import cleveC from "@/public/images/cleveC.jpeg";
import { Spline_Sans_Mono } from "next/font/google";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
const AboutContent = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className={`${styles.gallery}`}>
          <Image src={lion} alt="Photo of a lion" priority quality={100} />
          <Image src={beach} alt="Photo of a beach" priority quality={100} />
          <Image src={food} alt="Photo of pancakes" priority quality={100} />
          <Image
            src={cleveC}
            alt="Photo of Cleve Drinking a cocount"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className={`${spline.className} my-40 text-6xl`}>
        <p className="text-center md:text-left">
          My name's <span className="text-emerald-400 italic">@cleve</span>,
          <br />
          I'm a <span className="underline">Software Developer</span>
        </p>
        <p className="my-40 text-center md:text-right">
          I fell in L❤️ve with Tech at a young age
          <br />
          <span className="text-4xl text-slate-400 italic">
            (since i was chewing batteries as a baby)
          </span>
        </p>
        <p className="text-center md:text-left my-40 ">
          <span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="">"Plat op die aarde"</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Down to earth</p>
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
        <p className="my-40 text-center text-4xl text-emerald-400">
          "It is like a mustard seed, which is the smallest of all seeds on
          earth.
          <br />
          Yet when planted, it grows and becomes the largest of all garden
          plants, with such big branches that the birds can perch in its shade”-
          <span className="text-4xl text-slate-400">Mark 4-31</span>
        </p>
        <div className="flex flex-row justify-center">
          <Image src={sign} alt="singnature" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
