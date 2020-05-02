import React from "react";
import { shape, string, oneOf, number } from "prop-types";
import { useActiveStat } from "contexts/activeStat";
import styles from "./Stat.module.css";

const Stat = ({ statistic }) => {
  const { activeStat, setActiveStat } = useActiveStat();
  const classes = [
    styles.stat,
    activeStat === statistic.status ? styles.activeStat : "",
  ].join(" ");
  return (
    <button className={classes} onClick={() => setActiveStat(statistic.status)}>
      <div className={styles.status}>{statistic.status}</div>
      <div className={styles.count}>{statistic.count}</div>
      <div className={styles.amount}>{statistic.amount}</div>
    </button>
  );
};

export const statisticShape = shape({
  status: oneOf(["submit", "progress", "waiting"]).isRequired,
  count: number.isRequired,
  amount: string.isRequired,
});

Stat.propTypes = {
  statistic: statisticShape.isRequired,
};

export default Stat;
