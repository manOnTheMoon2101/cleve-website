import React from "react";
import styles from "../components/styles.module.css";
import sign from "@/public/images/sign.png";
import Image from "next/image";
import air from "@/public/images/air.jpeg";
import cape from "@/public/images/cape.jpeg";
import food from "@/public/images/food.jpeg";
import cleveC from "@/public/images/cleveC.jpeg";
import { InViewBasic } from "./Body/Body";
import { ArrowBigDown } from "lucide-react";
const AboutContent = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className={`${styles.gallery}`}>
          <Image src={food} alt="Photo of a lion" priority quality={100} />
          <Image src={cape} alt="Photo of a cape" priority quality={100} />
          <Image src={air} alt="Photo of pancakes" priority quality={100} />
          <Image
            src={cleveC}
            alt="Photo of Cleve Drinking a cocount"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center my-6">
      <ArrowBigDown size={60} className="animate-pulse"/>
      </div>
      {/* <InViewBasic /> */}

      {/* <div className="flex flex-row justify-center">
        <Image src={sign} alt="singnature" />
      </div> */}
    </>
  );
};

export default AboutContent;
