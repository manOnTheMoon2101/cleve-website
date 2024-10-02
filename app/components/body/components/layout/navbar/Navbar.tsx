"use client";
import React from "react";
import { ModeToggle } from "../../provider/Button";
import { Prompt } from "next/font/google";
import { NavMenu } from "./components/menu/Menu";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const Navbar = () => {
  return (
    <div className={`sticky top-5 z-10 ${prompt.className}`}>
      <div className="flex flex-row justify-between">
        <ModeToggle />
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
