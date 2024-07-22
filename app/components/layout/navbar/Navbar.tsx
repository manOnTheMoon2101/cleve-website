import React from "react";
import { ModeToggle } from "../../header/provider/Button";

const Navbar = () => {
  return (
    <div className="border-t-2 border-black">
      <div className="flex flex-row justify-end">
        <ModeToggle/>
      </div>
    </div>
  );
};

export default Navbar;
