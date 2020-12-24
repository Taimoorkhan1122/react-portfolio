import React from "react";

import CreateSKills from "./CreateSKills";

import styles from "./skills.module.css";
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
    <div className={styles.skillContainer}>
      <h2 className={styles.heading}>Development Skills</h2>
      <CreateSKills skills={devSkills} size="9vw" />
      <br />
      <h2 className={styles.heading}>Design Skills</h2>
      <CreateSKills skills={DesignSkills} size="9vw" />
    </div>
  );
};

export default Skills;
