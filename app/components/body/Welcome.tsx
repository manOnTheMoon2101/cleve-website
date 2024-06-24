import React from "react";
import cleve from "../../../public/images/Cleve.png";
import styles from "../../page.module.css"
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Welcome = () => {
  return (
    <div>
      <div style={{ float: "left", width: "50%", textAlign: "center" }}>
        <Image alt="Cleve" src={cleve} />
      </div>

      <div style={{ float: "left", width: "50%" }}>
        <h2 style={{ fontSize: "60px", fontWeight: "900" }}>npm init?</h2>
        <p style={{ fontSize: "24px", fontWeight: "400" }}>
          i make apps
          <br />
          (apps that look good btw)
        </p>
        <p style={{ fontSize: "24px" }}>
          checkout my personal projects that i've worked on <FaArrowDown className={styles.arrowDown} />
        </p>
      </div>
      <div style={{ float: "left", width: "50%" }}>
        <p style={{ fontSize: "24px" }}>
          Linkedin:
          <FaLinkedin style={{ color: "#4297C6" }} />
        </p>
      </div>
    </div>
  );
};

export default Welcome;
