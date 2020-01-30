import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBlue: "#1e58ff",
    orange: "#ff8200",
    onyx: "#36313D"
  },
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
  fonts: ["sans-serif", "Montserrat"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
