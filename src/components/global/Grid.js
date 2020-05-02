import React from "react";
import {
  Grid as KendoGrid,
  GridColumn,
} from "@progress/kendo-react-grid";

const Grid = ({ columns, ...props }) => (
  <KendoGrid {...props}>
    {columns.map((column) => (
      <GridColumn
        key={column.field}
        field={column.field}
        title={column.title}
      />
    ))}
  </KendoGrid>
);

export default Grid;
