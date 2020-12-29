import React from "react";
import PortfolioCard from "./PortfolioCard";

import styles from "./portfolio.module.css";
import appStyles from "../../app.module.css";

const Portfolio = (props) => {
  return (
    <div className={styles.portfolioSection}>
      <h2 className={appStyles.heading}>Portfolio</h2>
      <div className={styles.portfolio}>
        {props.data.map((item, index) => (
          <PortfolioCard key={index + 1} index={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
