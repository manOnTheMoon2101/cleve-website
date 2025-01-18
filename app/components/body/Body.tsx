"use client";
import React from "react";
import { Prompt } from "next/font/google";
import "animate.css";
import { TextRoll } from "@/components/ui/text-roll";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative ">
      <div className="absolute top-0 left-20 right-0 bottom-0 z-10"></div>
      <h1
        className={`text-8xl font-bold relative animate__animated animate__zoomInUp  ${prompt.className}`}
      >
        Cleve Clayton
      </h1>

      <TextRoll className={`text-xl relative mt-6 tracking-tight flex flex-row flex-wrap`}>
  web <span className="text-emerald-400 animate-pulse mx-2 font-bold">developer</span>{" "}
  <span className="text-neutral-400 mx-2">x</span> software{" "}
  <span className="text-emerald-400 animate-pulse mx-2 font-bold">engineer</span>{" "}
  <span className="text-neutral-400 mx-2">x</span> ux{" "}
  <span className="text-emerald-400 animate-pulse mx-2 font-bold">designer</span>
</TextRoll>
      {/* <div
        className={`text-xl relative mt-6 tracking-tight flex flex-row flex-wrap`}
      >
        web <span className="text-emerald-400 animate-pulse mx-2 font-bold">developer</span>{" "}
        <span className="text-neutral-600 mx-2">x</span> software{" "}
        <span className="text-emerald-400 animate-pulse mx-2 font-bold">engineer</span>{" "}
        <span className="text-neutral-600 mx-2">x</span> ux{" "}
        <span className="text-emerald-400 animate-pulse mx-2 font-bold">designer</span>
      </div> */}
    </div>
  );
};

export default Hero;
