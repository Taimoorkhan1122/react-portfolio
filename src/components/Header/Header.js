import React from "react";

import styles from "./header.module.css";

const Header = ({ list }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h4>TaimoorK.</h4>
      </div>
      <nav className={styles.nav}>
        <ul>
          {list.map((item, index) => (
            <li key={index + 1} className={styles.naveLink}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
