"use client";
import React from "react";
import { ModeToggle } from "../../header/provider/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex flex-row justify-between">
        <ModeToggle />
        <ul className="flex flex-row">
          <li className="mx-5">about</li>
          <li className="mx-5">projects</li>
          <li className="mx-5">socials</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
