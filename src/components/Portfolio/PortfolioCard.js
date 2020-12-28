import React from "react";
import styles from "./portfolio.module.css";

function PortfolioCard(props) {
  const inlineStyles = {
    backgroundImage: `url("${props.data.image}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
  };

  console.log(inlineStyles.backgroundImage);

  return (
    <div className={styles.projects}>
      <div className={styles.bgimage} style={inlineStyles}></div>
      <div className={styles.data}>
        <h3>{props.data.name}</h3>
        <p>{props.data.details}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
