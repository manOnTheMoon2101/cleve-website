import React from "react";
import cleve from "../../../../public/images/Cleve.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { Suez_One } from "next/font/google";
import { Nova_Mono } from "next/font/google";
import { Ramabhadra } from "next/font/google";
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const ram = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
});
const mono = Nova_Mono({
  subsets: ["latin"],
  weight: "400",
});
const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <Image
          alt="Cleve"
          className="w-22 h-200 md:w-500 md:h-500"
          src={cleve}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="p-4">
          <h2 className={`text-8xl font-bold text-center ${ram.className}`}>
            npm <span className="text-emerald-400">init</span>?
          </h2>
        </div>
        <div className="p-4 text-center">
          <p>
            my name' cleve,i make apps for a <code> const x : string = 'living...' </code>
            <br /> i love the outdoors(🌻)...  <br /> putting smiles(😁)  on
            peoples faces!... <br />and coding of course<br/>(mr hackerman go go go!!!)
          </p>
          <p>
            {" "}
            view some of my personal projects i worked on,or say hi via
            linkedin,github
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <FaArrowDown className="animate-bounce " size={60} />
        </div>

        {/* <div className="flex flex-row justify-center">
          <Button>
            {" "}
            <a
              href="assets/cv/Cleve_Clayton.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ram.className}`}
              download
            >
              Download CV
            </a>
          </Button>
        </div> */}
        <div className="p-4 self-start"></div>
      </div>
    </div>
  );
};

export default Welcome;
