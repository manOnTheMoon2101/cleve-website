import React from "react";
import styles from "../../page.module.css";
const Header = () => {
  return (
    <div>
      <h1 style={{ lineHeight: "5px", fontSize: "60px" }}>Cleve Clayton</h1>
      <h3 className={styles.descriptionInfo}>
        web designer <span>x</span> full stack developer <span>x</span> ux
        designer
      </h3>
    </div>
  );
};

export default Header;
