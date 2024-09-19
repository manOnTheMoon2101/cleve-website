"use client";
import React from "react";
import { ModeToggle } from "../../header/provider/Button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Socials } from "./components/socials/Socials";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex flex-row justify-between">
        <ModeToggle />
        <ul className="flex flex-row items-baseline">
          <li className="mx-10 flex flex-row">
            {" "}
            <Link href="/">
              <FaHome className="text-emerald-400" size={25} />
            </Link>
          </li>
          <li className="mx-5">
            {" "}
            <Link href="/pages/about">about</Link>
          </li>
          <li className="mx-5">
            {" "}
            <Link href="/pages/projects">projects</Link>
          </li>
          <Socials />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
