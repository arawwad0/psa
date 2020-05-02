import React from "react";
import { useQuery } from "react-query";

import { fetchStats } from "service";

import { ActiveStataProvider, useActiveStat } from "contexts/activeStat";
import StatsContainer from "components/ExpenseManager/Overview/StatsContainer";

import styles from "./index.module.css";

const Overview = () => {
  const { data: statusData = {} } = useQuery("stats", fetchStats);
  return (
    <div className={styles.wrapper}>
      <ActiveStataProvider>
        <StatsContainer stats={statusData.data} />
      </ActiveStataProvider>
    </div>
  );
};

export default Overview;
