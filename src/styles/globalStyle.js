import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif !important;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif !important;
}
`;

export default GlobalStyle;


