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
import { InView } from "@/components/ui/in-view";
import { InViewBasic } from "./Body/Body";
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
      <InViewBasic />

      <div className="flex flex-row justify-center">
        <Image src={sign} alt="singnature" />
      </div>
    </>
  );
};

export default AboutContent;
