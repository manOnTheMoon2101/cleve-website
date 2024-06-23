import React from "react";
import styles from "../../page.module.css";
import Spline from "@splinetool/react-spline/next";
const Header = () => {
  return (
    <div>
      <div
        style={{
          height: "300px",
          position: "absolute",
          left: "200px",
          bottom: "0px",
        }}
      >
        <Spline
          className={styles.triangleDiv}
          scene="https://prod.spline.design/ecIuHhpQ4E2RUhp2/scene.splinecode"
        />
      </div>

      <h1 style={{ lineHeight: "5px", fontSize: "60px" }}>Cleve Clayton</h1>
      <h3 className={styles.descriptionInfo}>
        web designer <span>x</span> full stack developer <span>x</span> ux
        designer
      </h3>
    </div>
  );
};

export default Header;
