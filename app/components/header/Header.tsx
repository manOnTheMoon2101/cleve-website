"use client";

import React from "react";
import Spline from "@splinetool/react-spline/next";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative ">
      <div className="absolute top-0 left-20 right-0 bottom-0 z-10">
        <Spline scene="https://prod.spline.design/nkb8KaO45fGxJZ-M/scene.splinecode" />
      </div>

      <h1 className="text-6xl font-bold relative">Cleve Clayton</h1>
      <h3 className="text-sm relative mt-2">
        web designer <span className="text-neutral-600">x</span> full stack
        developer <span className="text-neutral-600">x</span> ux designer
      </h3>
    </div>
  );
};

export default Header;
