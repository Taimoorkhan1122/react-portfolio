import React from "react";

import CreateSKills from "./CreateSKills";

import styles from "./skills.module.css";
const Skills = () => {
  const skills = [
    { name: "js", color: "yellow" },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3", color: "blue" },
    { name: "git-alt", color: "orange" },
    { name: "github", color: "orange" },
    { name: "docker", color: "orange" },
    { name: "kubernetes", color: "orange" },
    { name: "python", color: "orange" },
    { name: "rust", color: "brown" },
  ];
  return (
    <div>
      <h2 className={styles.heading}>Development Skills</h2>
      <CreateSKills skills={skills} />
    </div>
  );
};

export default Skills;
