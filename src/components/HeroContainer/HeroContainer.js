import React from "react";
import styles from "./hero.module.css";

const HeroContainer = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.bigOne}>
        Hey there <br /> Welcome
      </h1>
    </div>
  );
};

export default HeroContainer;
