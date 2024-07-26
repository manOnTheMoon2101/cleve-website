import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center">
        <FaLinkedin className="m-1 text-linkedin" size={25} />
        <FaGithub className="m-1 text-github" size={25} />
      </div>

      <div className="flex row justify-between">
        <div>@2024 </div>
        <div>made by @cleveclayton</div>
      </div>
    </div>
  );
};

export default Footer;
