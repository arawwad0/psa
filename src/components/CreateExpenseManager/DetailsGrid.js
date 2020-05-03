import React from "react";
import Grid from "components/global/Grid";

import detailsGridFields from "values/detailsGridFields";

const DetailsGrid = ({data}) => (
  <Grid
    data={data}
    style={{ height: "700px" }}
    columns={detailsGridFields}
  />
);

export default DetailsGrid;