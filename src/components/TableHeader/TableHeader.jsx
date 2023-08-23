import { memo } from "react";
import PropTypes from "prop-types";
import { Typography, TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = memo((props) => {
  return (
    <TableHead>
      <TableRow>
        {props.cols.map((xCol, xIndex) => {
          if (xIndex === 0) {
            return <TableCell variant="head" key={`col-${xIndex}`}></TableCell>;
          }
          return (
            <TableCell
              variant="head"
              key={`col-${xIndex}`}
              sx={{ verticalAlign: "bottom" }}
            >
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {xCol.label}
              </Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
});

TableHeader.displayName = "TableHeader";

TableHeader.propTypes = {
  cols: PropTypes.array.isRequired,
};

export default TableHeader;
