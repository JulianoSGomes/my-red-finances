import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2a9d8f",
    },
    secondary: {
      main: "#e63946",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#264653",
    },
  },
});

export default theme;
