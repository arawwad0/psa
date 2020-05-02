import React from "react";
import { arrayOf } from "prop-types";

import Stat, { statisticShape } from "./Stat";

import styles from "./StatsContainer.module.css";

const StatsContainer = ({ stats }) => (
  <div className={styles.container}>
    {stats.map((statistic) => (
      <Stat key={statistic.status} statistic={statistic} />
    ))}
  </div>
);
StatsContainer.propTypes = {
  stats: arrayOf(statisticShape),
};

StatsContainer.defaultProps = {
  stats: [],
};

export default StatsContainer;
