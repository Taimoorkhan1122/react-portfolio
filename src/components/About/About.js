import React from "react";
import styles from "./about.module.css";
import appStyles from "../../app.module.css";
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={appStyles.heading}>About Me</h1>
      <div className={styles.contentContainer}>
        <img src="./images/about-me.svg" alt="developer illustration" />
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
