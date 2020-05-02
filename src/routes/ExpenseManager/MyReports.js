import React from "react";
import {useQuery} from "react-query";

import {fetchReports} from "service";

import Grid from "components/global/Grid";
import Loader from "components/global/Loader";

import styles from "./index.module.css";

import reportsGridFields from "values/reportsGridFields";

const MyReports = () => {
  const { status: reportsStatus, data: reportsData = {} } = useQuery("reports", fetchReports);

  return (
    <div className={styles.wrapper}>
      {reportsStatus === "loading" ? (
        <Loader />
      ) : (
        <Grid
          data={reportsData.data}
          style={{ height: "700px" }}
          columns={reportsGridFields}
        />
      )}
    </div>
  )
};

export default MyReports;