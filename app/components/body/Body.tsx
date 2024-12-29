"use client";
import React from "react";
import { Prompt } from "next/font/google";
import "animate.css";
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
      <div className={`text-xl relative mt-6 tracking-tight flex flex-row`}>
        web <h3 className="text-emerald-400 animate-pulse mx-2"> developer</h3>{" "}
        <h3 className="text-neutral-600  mx-2">x</h3> software{" "}
        <h3 className="text-emerald-400  animate-pulse  mx-2"> engineer</h3>{" "}
        <h3 className="text-neutral-600  mx-2">x</h3> ux{" "}
        <h3 className="text-emerald-400  animate-pulse  mx-2"> designer</h3>
      </div>
    </div>
  );
};

export default Hero;
