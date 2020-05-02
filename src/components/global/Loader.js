import React from "react";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.wrapper}>
    <div className={styles.ripple}>
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
