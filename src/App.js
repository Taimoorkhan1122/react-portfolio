import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import {
  Header,
  HeroContainer,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "./components";
import { data } from "./data";
import styles from "./app.module.css";

const App = () => {
  const navList = ["Home", "About", "Portfolio", "Contact"];
  let [flag, setFlag] = useState(false);
  return (
    <div onScroll={() => setFlag(true)}>
      <Container maxWidth="lg" className={styles.container}>
        <Header list={navList} />
        <HeroContainer />
        <About />
        <Skills />
        <Portfolio data={data} />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
