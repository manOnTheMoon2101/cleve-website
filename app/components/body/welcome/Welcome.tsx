import React from "react";
import cleve from "../../../../public/images/Cleve.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
const Welcome = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image alt="Cleve" height={500} width={500} src={cleve} />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="p-4">
          <h2 className="text-8xl font-bold text-center">
            npm <span className="text-emerald-400">init</span>?
          </h2>
        </div>
        <div className="flex flex-row justify-center">
          <FaArrowDown className="animate-bounce " size={60} />
        </div>
        <div className="p-4 self-start"></div>
      </div>
    </div>
  );
};

export default Welcome;
