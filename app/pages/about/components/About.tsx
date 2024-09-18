import React from "react";
import styles from "../components/styles.module.css";
import Image from "next/image";
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
        <h2 className="text-6xl">npm init?</h2>
      </div>
      <div>
        <p className="flex flex-row justify-start">
          my name's cleve,i make apps for a living.
        </p>
        <p className=" flex flex-row justify-end">
          born and raised in the boland,my love for tech started at a young
          age(since i was chewing batteries as a baby).
        </p>
        <p className="flex flex-row justify-start">
          "Plat op die aarde" christian dude,who enjoys the little things in
          life,and always keen to learn new things in life.
        </p>
      </div>
    </>
  );
};

export default AboutContent;
