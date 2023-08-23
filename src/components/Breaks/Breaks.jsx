import React, { memo } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { formats, validators } from "investira.sdk";
import {
  Typography,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";

const Breaks = memo((props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: 0,
    backgroundColor: theme.palette.grey[100],
  }));

  const xColSpan = props.cols.length;

  function formatCell(pValue, pType) {
    if (validators.isEmpty(pValue)) {
      return "";
    }

    const xTypesFormat = {
      string: (pValue) => pValue,
      number: (pValue) => formats.formatNumber(pValue, 2, true, false),
    };

    return xTypesFormat[pType](pValue);
  }

  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell
            variant="head"
            component={"th"}
            colSpan={xColSpan}
            sx={{ paddingLeft: (props.indent * 4) / 4 }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {props.title}
            </Typography>
          </StyledTableCell>
        </TableRow>
      </TableHead>
      {props.children}

      {props.totalLabel && (
        <TableBody>
          <TableRow>
            {props.cols.map((col, colIndex) => {
              if (colIndex === 0) {
                return (
                  <TableCell
                    key={colIndex}
                    variant="body"
                    sx={{ paddingLeft: (props.indent * 4) / 4 }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      {props.totalLabel}
                    </Typography>
                  </TableCell>
                );
              } else {
                return (
                  <TableCell key={colIndex} align="right">
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      {formatCell(props.totalData[col.key], "number")}
                    </Typography>
                  </TableCell>
                );
              }
            })}
          </TableRow>
        </TableBody>
      )}
    </>
  );
});

Breaks.displayName = "Breaks";

Breaks.propTypes = {
  indent: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
  cols: PropTypes.array,
};

Breaks.defaultProps = {};

export default Breaks;
