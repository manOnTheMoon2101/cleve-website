import React from "react";
import styles from "../components/styles.module.css";
import { Prompt } from "next/font/google";
import sa from "../../../../public/icons/sa.svg";
import Image from "next/image";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const AboutContent = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className={styles.gallery}>
          <img
            src="https://picsum.photos/id/815/400/400"
            alt="Two hands creating a heart and showing the sun"
          />
          <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
          <img src="https://picsum.photos/id/603/400/400" alt="a river" />
          <img
            src="https://picsum.photos/id/823/400/400"
            alt="a women with a camera"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="p-10">
          <h2
            className={`text-6xl text-center md:text-9xl font-bold text-center tracking-wide ${prompt.className}`}
          >
            npm <span className="text-emerald-400 italic underline">init</span>?
          </h2>
        </div>
      </div>
      <div className={`${prompt.className} m-5 text-6xl`}>
        <p className="flex flex-row justify-start m-10">
          my name's cleve,i make apps for a living
          <br />
          born and raised in the boland.
        </p>
        <p className=" flex flex-row justify-end m-10">
          started falling in love with tech at a young age
          <br />
          (since i was chewing batteries as a baby).
        </p>
        <p className="flex flex-row justify-start m-10">
          "Plat op die aarde" christian guy
          <br />
          who enjoys the little things in life
        </p>
        <p className=" flex flex-row justify-end m-10">
          always keen to learn new stuff
          <br />
          on a daily basis
        </p>
      </div>
    </>
  );
};

export default AboutContent;
