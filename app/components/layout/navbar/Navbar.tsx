"use client";
import React from "react";
import { ModeToggle } from "../../header/provider/Button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Socials } from "./components/socials/Socials";
import { usePathname } from "next/navigation";
import { Prompt } from "next/font/google";
import { NavMenu } from "./components/menu/Menu";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className={`sticky top-5 z-10 ${prompt.className}`}>
      <div className="flex flex-row justify-between">
        <ModeToggle />
        <NavMenu/>
      </div>
    </div>
  );
};

export default Navbar;
