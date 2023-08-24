import React, { memo } from "react";
import { formats } from "investira.sdk";
import { Stack, Card, CardContent, Typography } from "@mui/material";
import utils from "../../utils";

const TotalCard = memo((props) => {
  const calculatedValue = utils.calc.somaAttr(props.data, props.options);
  const formatedValue = formats.formatNumber(calculatedValue, 2, true, true);

  return (
    <Stack sx={{ ...props.sx }} flexGrow={1}>
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="caption" gutterBottom>
            {props.label || "label"}
          </Typography>
          <Typography variant="h5" component="div">
            {props.value || formatedValue || "0"}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
});

TotalCard.displayName = "TotalCard";

export default TotalCard;
