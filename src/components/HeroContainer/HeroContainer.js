import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";
import styles from "./hero.module.css";

const HeroContainer = () => {
  const { ref: refRight } = useWebAnimations({ ...bounceInRight });
  const { ref: refLeft } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className={styles.heroContainer} id="Home">
      <div className={styles.content} ref={refLeft}>
        <h1 className={styles.bigOne}>
          Hey there <br /> Welcome
        </h1>
        <p>
          My name is Taimoor khan I am Front-end Developer. I love to create
          aesthetic UI with user centric approach. <br />
          Thanks for visiting my website have a look at my portfolio and if you
          have any querry you can contact me.
        </p>
      </div>
      <img
        ref={refRight}
        src="./images/header-image.svg"
        alt="developer illustration"
      />
    </div>
  );
};

export default HeroContainer;
