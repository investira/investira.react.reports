import { memo } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { formats } from "investira.sdk";
import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
const Ativos = memo((props) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function formatCell(pValue, pType) {
    const xTypesFormat = {
      string: (pValue) => pValue,
      number: (pValue) => formats.formatNumber(pValue, 2, true, false),
    };

    return xTypesFormat[pType](pValue);
  }

  return (
    <TableBody>
      {props.data.map((row, rowIndex) => {
        return (
          <StyledTableRow key={`ativo-${rowIndex}`}>
            {props.cols.map((col, colIndex) => {
              return (
                <TableCell
                  key={`ativo-${rowIndex}-${colIndex}`}
                  sx={
                    colIndex === 0
                      ? { paddingLeft: (props.indent * 4) / 4 }
                      : {}
                  }
                  align={col.type === "number" ? "right" : "left"}
                >
                  <Typography variant="caption" noWrap>
                    {formatCell(row[col.key], col.type)}
                  </Typography>
                </TableCell>
              );
            })}
          </StyledTableRow>
        );
      })}
    </TableBody>
  );
});

Ativos.propTypes = {
  data: PropTypes.array,
  cols: PropTypes.array,
  indent: PropTypes.number,
};

Ativos.displayName = "Ativos";

export default Ativos;
