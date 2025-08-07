import { createTheme } from "@mui/material/styles";

export const reportsTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 6,
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 12,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightLight: 400,
  },
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
});
