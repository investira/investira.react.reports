import React, { memo } from "react";
import { Stack } from "../wrappers";

const HeaderSpace = memo(() => {
  return (
    <Stack
      component="div"
      sx={{
        height: "112px",
      }}
    ></Stack>
  );
});

HeaderSpace.displayName = "HeaderSpace";

export default HeaderSpace;
