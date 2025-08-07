import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { default as MuiBadge } from "@mui/material/Badge";
import { classList } from "../../../utils/helpers";

const useStyles = makeStyles(
  (theme) => ({
    specialAnchor: {
      "& $badge": {
        right: "40%",
      },
    },
    extraLarge: {
      "& $badge": {
        width: theme.spacing(5),
        height: theme.spacing(5),
        borderRadius: theme.spacing(4),
        "& svg": {
          width: "24px",
          height: "24px",
        },
      },
    },
    large: {
      "& $badge": {
        width: theme.spacing(4),
        height: theme.spacing(4),
        borderRadius: theme.spacing(3),
        "& svg": {
          width: "21px",
          height: "21px",
        },
      },
    },
    small: {
      "& $badge": {
        width: theme.spacing(2),
        height: theme.spacing(2),
        borderRadius: theme.spacing(2),
        "& svg": {
          width: "10px",
          height: "10px",
        },
      },
    },
    badge: {},
  }),
  { name: "MuiBadge" }
);

function Badge(props) {
  const { anchorOrigin, ...propsProps } = props;
  const classes = useStyles();

  const xClassNames = {
    [classes.specialAnchor]: anchorOrigin?.special,
    [classes.extraLarge]: props.size === "XL",
    [classes.large]: props.size === "large",
    [classes.small]: props.size === "small",
  };

  return (
    <MuiBadge
      {...propsProps}
      anchorOrigin={anchorOrigin}
      className={classList(xClassNames)}
    />
  );
}

export default Badge;
