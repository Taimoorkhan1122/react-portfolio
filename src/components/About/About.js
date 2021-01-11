import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import Slide from "react-reveal/Slide";

import styles from "./about.module.css";
import appStyles from "../../app.module.css";
const About = () => {
  const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });

  return (
    <div className={styles.aboutContainer} id="About">
      <h1
        className={appStyles.heading}
        ref={refRubber}
        onClick={() => getAnimation().play()}>
        About Me
      </h1>
      <div className={styles.contentContainer}>
        <Slide left>
          <img src="./images/about-me.svg" alt="developer illustration" />
        </Slide>
        <Slide right>
          <div className={styles.content}>
            <p>
              I am a Front-end React Developer, currently learning react native
              and MERN stack developing. I love to develop aesthetic UI with
              pixel perfect dimensions. With my design skills that help me to
              develop better UI I can develop any sort of complex UI either it
              is for web interface or mobile phone.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
