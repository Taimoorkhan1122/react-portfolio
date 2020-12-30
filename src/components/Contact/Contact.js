import React from "react";

import Form from "./Form";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Wanna Get in Touch</h1>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
