import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBlue: "#1e58ff",
    orange: "#FF5C01",
    onyx: "#36313D",
    red: "#d62d20",
    green: "#008744",
    yellow: "#ffa700",
    white: "#fff",
    black: "#000",
    grey: "#e5e5e5",
    lightGrey: "#F5F5F5",
    darkGrey: "#7A7A7A"
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
