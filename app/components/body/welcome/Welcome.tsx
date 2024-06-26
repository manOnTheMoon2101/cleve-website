import React from "react";
import cleve from "../../../../public/images/Cleve.png";
import styles from "../../../page.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Welcome = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image alt="Cleve" height={500} width={500} src={cleve} />
      </div>

      <div className="bg-green-100 flex-1 flex flex-col justify-between">
        <div className="p-4">
          <h2 className="text-5xl font-bold">npm init?</h2>
          <p className="text-slate-800 text-xl">
            i make apps
            <br />
            (apps that look good btw)
          </p>
          <p>
            checkout personal projects that i've worked on{" "}
            <FaArrowDown className="animate-bounce" />
          </p>
        </div>

        <div className="p-4 self-start">
          <p>
            Linkedin:
            <FaLinkedin />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
