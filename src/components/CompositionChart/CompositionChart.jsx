import React, { memo } from "react";
import { Stack, Box } from "@mui/material";

const CompositionChart = memo((props) => {
  const COLORS = ["#46EAC6", "#01E6B3", "#00B38C", "#006650", "#1F6657"];
  return (
    <Stack direction="row">
      <Box sx={{ width: "1%", backgroundColor: COLORS[0] }}></Box>
      <Box sx={{ width: "9%", backgroundColor: COLORS[1] }}></Box>
      <Box sx={{ width: "20%", backgroundColor: COLORS[2] }}></Box>
      <Box sx={{ width: "30%", backgroundColor: COLORS[3] }}></Box>
      <Box sx={{ width: "40%", backgroundColor: COLORS[4] }}></Box>
    </Stack>
  );
});

export default CompositionChart;
