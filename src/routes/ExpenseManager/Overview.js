import React from "react";
import { useQuery } from "react-query";

import { fetchStats } from "service";

import { ActiveStataProvider, useActiveStat } from "contexts/activeStat";
import StatsContainer from "components/ExpenseManager/Overview/StatsContainer";

const Overview = () => {
  const { data: statusData = {} } = useQuery("stats", fetchStats);
  return (
    <ActiveStataProvider>
      <StatsContainer stats={statusData.data} />
    </ActiveStataProvider>
  );
};

export default Overview;
