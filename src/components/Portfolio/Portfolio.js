import React from "react";
import PortfolioCard from "./PortfolioCard";
import styles from "./portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div>
      <h4>Portfolio</h4>
      <div className={styles.portfolio}>
        {props.data.map((item) => (
          <PortfolioCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

/* data {
  name: "something",
  details: "some detail about the project",
  link: "./linkToProject",
  image: "path to image"
}

*/
