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
      <h3 className={`text-xl relative mt-6 tracking-tight`}>
        web <span className="text-emerald-400"> developer</span>{" "}
        <span className="text-neutral-600">x</span> software{" "}
        <span className="text-emerald-400"> engineer</span>{" "}
        <span className="text-neutral-600">x</span> ux{" "}
        <span className="text-emerald-400"> designer</span>
      </h3>
    </div>
  );
};

export default Hero;
