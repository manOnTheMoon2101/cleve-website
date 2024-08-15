"use client";
import React from "react";
import { ModeToggle } from "../../header/provider/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex flex-row justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
