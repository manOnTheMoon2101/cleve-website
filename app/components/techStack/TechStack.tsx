"use client";

import React from "react";
import react from "../../../public/stack_icons/react-svgrepo-com.svg";
import python from "../../../public/stack_icons/python-svgrepo-com.svg";
import javascript from "../../../public/stack_icons/javascript-svgrepo-com.svg";
import flutter from "../../../public/stack_icons/flutter-svgrepo-com.svg";
import mongodb from "../../../public/stack_icons/mongodb-logo-svgrepo-com.svg";
import mysql from "../../../public/stack_icons/mysql-logo-svgrepo-com.svg";
import nextjs from "../../../public/stack_icons/nextjs-fill-svgrepo-com.svg";
import vuejs from "../../../public/stack_icons/vue-9-logo-svgrepo-com.svg";
import typescript from "../../../public/stack_icons/typescript-svgrepo-com.svg";
import Image from "next/image";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
const TechStack = () => {
  const [isJavaScriptVisible, setIsJavaScriptVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJavaScriptVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stack: any = {
    react: {
      name: "React",
      icon: <Image alt="reactJS" src={react} height={100} width={100} />,
    },
    python: {
      name: "Python",
      icon: <Image alt="python3" src={python} height={100} width={100} />,
    },
    vue: {
      name: "VueJS",
      icon: <Image alt="vueJS" src={vuejs} height={100} width={100} />,
    },
    javascript: {
      name: "Javascript",
      icon: (
        <Image
          alt="Javascript"
          src={javascript}
          height={100}
          width={100}
          className={isJavaScriptVisible ? styles.fadeIn : styles.fadeOut}
        />
      ),
    },
    typescript: {
      name: "TypeScript",
      icon: (
        <Image
          alt="Typescript"
          src={typescript}
          height={100}
          width={100}
          className={!isJavaScriptVisible ? styles.fadeIn : styles.fadeOut}
        />
      ),
    },
    flutter: {
      name: "Flutter",
      icon: <Image alt="Flutter" src={flutter} height={100} width={100} />,
    },
    mongodb: {
      name: "MongoDB",
      icon: <Image alt="MongoDB" src={mongodb} height={100} width={100} />,
    },
    mysql: {
      name: "MySQL",
      icon: <Image alt="MySQL" src={mysql} height={100} width={100} />,
    },
    nextjs: {
      name: "NextJS",
      icon: <Image alt="NextJS" src={nextjs} height={100} width={100} />,
    },
  };
  return (
    <div>
      <h2>Stack</h2>
      {Object.values(stack).map((tech: any) => (
        <div key={tech.name}>
          {/* <div className={styles.popup}> {tech.name}</div> */}
          <div className={styles.icon}>{tech.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
