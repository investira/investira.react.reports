import { memo } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { formats } from "investira.sdk";
import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import utils from "../../utils";

const Ativos = memo((props) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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
                  align={col.type === "string" ? "left" : "right"}
                >
                  <Typography variant="caption" noWrap>
                    {utils.table.formatCell(row[col.key], col.type)}
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

Ativos.defaultProps = {
  indent: 1,
};

Ativos.displayName = "Ativos";

export default Ativos;
