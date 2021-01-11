import React from "react";
import Zoom from "react-reveal/Zoom";

import CreateSKills from "./CreateSKills";

import styles from "./skills.module.css";
import appStyles from "../../app.module.css";
const Skills = () => {
  const devSkills = [
    { name: "js", color: `yellow` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3", color: "blue" },
    { name: "git-alt", color: "orange" },
    { name: "github", color: "grey" },
    { name: "docker", color: "blue" },
    { name: "kubernetes", color: "orange" },
    { name: "python", color: "orange" },
    { name: "rust", color: "brown" },
  ];

  const DesignSkills = [
    { name: "figma", color: `orange` },
    { name: "xd", color: "blue" },
    { name: "photoshop", color: "blue" },
    { name: "ui", color: "blue" },
  ];
  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>Development Skills</h2>
      <Zoom duration={1500} top>
        <CreateSKills skills={devSkills} size="9vw" />
      </Zoom>
      <br />
      <h2 className={appStyles.heading}> Design Skills</h2>
      <Zoom duration={2000} bottom>
        <CreateSKills skills={DesignSkills} size="9vw" />
      </Zoom>
    </div>
  );
};

export default Skills;
