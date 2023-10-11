import React from "react";
import { default as MuiTable } from "@mui/material/Table";

function Table(props) {
  const { sx, ...restProps } = props;
  return <MuiTable {...restProps} sx={{ ...sx }} />;
  // return <MuiTable {...restProps} sx={{ ...sx, pageBreakInside: "avoid" }} />;
}

export default Table;
