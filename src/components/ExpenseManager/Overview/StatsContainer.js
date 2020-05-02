import React from "react";
import { arrayOf } from "prop-types";
import Stat, { statisticShape } from "./Stat";

const StatsContainer = ({ stats }) => (
  <div>
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
