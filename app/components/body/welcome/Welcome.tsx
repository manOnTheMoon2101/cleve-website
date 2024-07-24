import React from "react";
import cleve from "../../../../public/images/Cleve.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Welcome = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image alt="Cleve" height={500} width={500} src={cleve} />
      </div>

      <div className="border-4 flex-1 flex flex-col justify-between rounded">
        <div className="p-4">
          <h2 className="text-5xl font-bold text-center">npm init?</h2>
          <p className="text-xl">
            i make apps
            <br />
            that uses all kinds of javascript tech
          </p>
          <p>
            checkout personal projects that i've worked on{" "}
            <FaArrowDown className="animate-bounce " size={60}/>
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
