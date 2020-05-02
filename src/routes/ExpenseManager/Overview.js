import React from "react";
import { useQuery } from "react-query";

import { fetchStats, fetchReports } from "service";

import { useActiveStat } from "contexts/activeStat";
import StatsContainer from "components/ExpenseManager/Overview/StatsContainer";

import Grid from "components/global/Grid";
import Loader from "components/global/Loader";
import styles from "./index.module.css";

import overviewGridFields from "values/overviewGridFields";

const Overview = () => {
  const { activeStat } = useActiveStat();

  const { data: statusData = {} } = useQuery("stats", fetchStats);

  const { status: reportsStatus, data: reportsData = {} } = useQuery(
    activeStat,
    (activeStat) => fetchReports({ status: activeStat })
  );

  return (
    <div className={styles.wrapper}>
      <StatsContainer stats={statusData.data} />
      {reportsStatus === "loading" ? (
        <Loader />
      ) : (
        <Grid
          data={reportsData.data}
          style={{ height: "700px" }}
          columns={overviewGridFields}
        />
      )}
    </div>
  );
};

export default Overview;
