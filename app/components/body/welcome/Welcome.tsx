import React from "react";
import cleve from "../../../../public/images/Cleve.png";
import styles from "../../../page.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Welcome = () => {
  return (
    <div>
      <div className="float-left w-6/12 text-center flex flex-col items-center justify-center">
        <Image alt="Cleve" src={cleve} />
      </div>

      <div className="float-left w-6/12 bg-green-100">
        <h2 className="text-5xl font-bold">npm init?</h2>
        <p className="text-slate-800 text-xl">
          i make apps
          <br />
          (apps that look good btw)
        </p>
        <p>
          checkout my personal projects that i've worked on{" "}
          <FaArrowDown className="animate-bounce" />
        </p>
      </div>
      <div className="float-left w-6/12 bg-green-100">
        <p>
          Linkedin:
          <FaLinkedin />
        </p>
      </div>
    </div>
  );
};

export default Welcome;
