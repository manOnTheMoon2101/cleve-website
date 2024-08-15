"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { Suez_One } from "next/font/google";
import { Nova_Mono } from "next/font/google";
import { Ramabhadra } from "next/font/google";
import Spline from "@splinetool/react-spline/next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const mono = Nova_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ram = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
});
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative ">
      <div className="absolute top-0 left-20 right-0 bottom-0 z-10">
        <Spline scene="https://prod.spline.design/nkb8KaO45fGxJZ-M/scene.splinecode" />
      </div>

      <h1 className={`text-8xl font-bold relative  ${suez.className}`}>
        Cleve Clayton
      </h1>
      <h3 className={`text-sm relative mt-2  ${poppins.className}`}>
        web <span className="text-red-400">designer</span>{" "}
        <span className="text-neutral-600">x</span> full stack
        <span className="text-red-400"> developer</span>{" "}
        <span className="text-neutral-600">x</span> ux{" "}
        <span className="text-red-400">designer</span>
      </h3>
    </div>
  );
};

export default Header;
