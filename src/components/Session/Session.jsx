import React from "react";
import PropTypes from "prop-types";
import { Stack, Card, Typography, Divider } from "@mui/material";
import { Icon } from "../";

const Session = (props) => {
  return (
    <Stack sx={{ mb: 2 }}>
      <Card variant="outlined">
        {props.label && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              mx={2}
              my={2}
              spacing={1.5}
            >
              {props.iconName && <Icon iconName={props.iconName} />}
              <Typography variant="h6">{props.label}</Typography>
            </Stack>

            <Divider />
          </>
        )}
        {/* <Stack mx={2} my={1}> */}
        {props.children}
        {/* </Stack> */}
      </Card>
    </Stack>
  );
};

Session.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
};

export default Session;
