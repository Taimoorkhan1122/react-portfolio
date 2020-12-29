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
      link: "http://react-dashboard-taimoor.surge.sh/",
      image: "/images/projects/react-dashboard.png",
    },
    {
      name: "React Shoe Store",
      details: "Created using React Router v6",
      link: "http://react-store-taimoor.surge.sh/",
      image: "/images/projects/react-shoe-store.png",
    },
    {
      name: "Expense Tracker App",
      details: "Expense Tracker app using React",
      link: "http://expense-tracker-taimoor.surge.sh/",
      image: "/images/projects/expense-tracker-app.png",
    },
    {
      name: "Red Queen race",
      details: "React Webkit animation project",
      link: "http://react-webanimation-taimoor.surge.sh/",
      image: "/images/projects/red-queen-animation.png",
    },
    {
      name: "Covid19 Tracker App",
      details:
        "Covid19 tracker app created using Material UI and React Chartjs2",
      link: "./linkToProject",
      image: "/images/projects/covid19-tracker-app.png",
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
