import React from "react";
import Carousel from "react-elastic-carousel";
import PortfolioCard from "./PortfolioCard";

import styles from "./portfolio.module.css";
import appStyles from "../../app.module.css";
import "./carousel.css";

const Portfolio = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 850, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    // { width: 850, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className={styles.portfolioSection} id="Portfolio">
      <h2 className={appStyles.heading}>Portfolio</h2>
      {/* <div className={styles.portfolio}> */}
      <Carousel breakPoints={breakPoints}>
        {props.data.map((item, index) => (
          <PortfolioCard key={index + 1} index={index} data={item} />
        ))}
      </Carousel>

      {/* </div>  */}
    </div>
  );
};

export default Portfolio;
