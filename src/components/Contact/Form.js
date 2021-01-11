import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./contact.module.css";

function Form() {
  const [formState, setFromState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //   const handleSubmit = (event) => alert(JSON.stringify(event.target.values));
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formState));
  };

  const handleChange = (e) => {
    const eventName = e.target.name;
    const value = e.target.value;

    switch (eventName) {
      case "name":
        return setFromState((state) => ({
          ...state,
          name: value,
        }));

      case "email":
        return setFromState((state) => ({
          ...state,
          email: value,
        }));
      case "message":
        return setFromState((state) => ({
          ...state,
          message: value,
        }));
      default:
        return console.log("no value matched");
    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50vh",
      },
      "& #message": {
        height: "10vh",
        justifyContent: "start",
      },
      "& #name, #email": {
        height: "2.5vh",
        justifyContent: "start",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={styles.form}>
      <h1>Contact Me</h1>
      <br />
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          id="name"
          variant="outlined"
          label="Enter your name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />

        <TextField
          id="email"
          variant="outlined"
          label="Email Address"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />

        <TextField
          id="message"
          name="message"
          variant="outlined"
          label="Any Message"
          type="text"
          multiline
          rows="4"
          value={formState.message}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
