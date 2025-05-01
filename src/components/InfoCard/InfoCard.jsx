import React from "react";
import PropTypes from "prop-types";
import { validators } from "investira.sdk";
import { Stack, Card, CardContent, Typography } from "@mui/material";

const InfoCard = (props) => {
  if (validators.isEmpty(props.value) && validators.isEmpty()) {
    return null;
  }

  return (
    // <Stack sx={{ ...props.sx, py: 2 }} flexGrow={1}>
    <Card
      variant="outlined"
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: 0,
      }}
    >
      <Stack px={2} py={2} flexGrow={1} justifyContent="space-between">
        <Typography variant="caption" gutterBottom>
          {props.label}
        </Typography>
        <Stack direction="column" justifyContent="flex-end">
          <Typography variant="h5" component="div">
            {`${props.value} ${props.sufix}`}
          </Typography>
          {props.descricao && (
            <Typography
              variant="caption"
              component="div"
              sx={{ fontWeight: 500 }}
            >
              {props.descricao}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Card>
    // </Stack>
  );
};

InfoCard.displayName = "InfoCard";

InfoCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sufix: PropTypes.string,
};

InfoCard.defaultProps = {
  sufix: "",
};

export default InfoCard;
