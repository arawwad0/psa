import React from "react";
import { string } from "prop-types";
import styles from "./TotalAmount.module.css";

const TotalAmount = ({ amount }) => (
  <div className={styles.card}>
    <span className={styles.label}>total reimbursable</span>
    <span className={styles.value}>{amount}</span>
  </div>
);

TotalAmount.propTypes = {
  amount: string.isRequired,
};

export default TotalAmount;
