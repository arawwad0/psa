import React from "react";
import { shape, string, oneOf, number } from "prop-types";
import { useActiveStat } from "contexts/activeStat";

const Stat = ({ statistic }) => {
  const { activeStat, setActiveStat } = useActiveStat();
  return (
    <button
      onClick={() => setActiveStat(statistic.status)}
    >
      {statistic.status}
      {statistic.count}
      {statistic.amount}
      {activeStat === statistic.status && "active"}
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
