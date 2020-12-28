import React from "react";
import Container from "@material-ui/core/Container";

import {
  Header,
  HeroContainer,
  About,
  Skills,
  Portfolio,
  Conatact,
  Footer,
} from "./components";
import styles from "./app.module.css";

const App = () => {
  const navList = ["Home", "About", "Portfolio", "Contact"];
  const data = [
    {
      name: "React Dashboard",
      details: "Highl customizeable dashboard with dynamic data color input",
      link: "./linkToProject",
      image: "/images/projects/react-dashboard.png",
    },
    {
      name: "Covid19 Tracker",
      details: "created using Material UI and React Chartjs2",
      link: "./linkToProject",
      image: "/images/projects/react-dashboard.png",
    },
    {
      name: "Expense Tracker App",
      details: "Expense Tracker app using React",
      link: "./linkToProject",
      image: "/images/projects/react-dashboard.png",
    },
    {
      name: "Red Queen race",
      details: "React Webkit animation project",
      link: "./linkToProject",
      image: "/images/projects/react-dashboard.png",
    },
    {
      name: "Food finder App",
      details: "Food finder | using vanilla js ",
      link: "./linkToProject",
      image: "/images/projects/react-dashboard.png",
    },
  ];
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Header list={navList} />
      <HeroContainer />
      <About />
      <Skills />
      <Portfolio data={data} />
      <Conatact />
      <Footer />
    </Container>
  );
};

export default App;
