"use client";
import React from "react";
import { ModeToggle } from "../../header/provider/Button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Socials } from "./components/socials/Socials";
import { usePathname } from "next/navigation";
import { Prompt } from "next/font/google";
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
        <ul className="flex flex-row items-baseline">
          <li className="mx-20 flex flex-row">
            <Link href="/">
              <FaHome
                className={`white ${isActive("/") ? "text-emerald-400" : ""}`}
                size={25}
              />
            </Link>
          </li>
          <li className="mx-5">
            <Link
              href="/pages/about"
              className={
                isActive("/pages/about") ? "text-emerald-400 underline" : ""
              }
            >
              about
            </Link>
          </li>
          <li className="mx-5">
            <Link
              href="/pages/projects"
              className={
                isActive("/pages/projects") ? "text-emerald-400 underline" : ""
              }
            >
              projects
            </Link>
          </li>
          <Socials />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
