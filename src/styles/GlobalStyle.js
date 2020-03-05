import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

@keyframes appear {
  0% {
    opacity: 0;
    top: 35px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Spartan", sans-serif !important;
}

button {
  outline: none;
  box-shadow: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Spartan", sans-serif !important;
}
`;

export default GlobalStyle;
