import React, { useContext } from "react";
import styled from "styled-components";
// import AppContext from "context";

const StyledTitle = styled.h2`
  margin: 0;
  color: #1e58ff;
  font-weight: 700;
  font-size: 20px;
`;

const Title = ({ children }) => {
  // const context = useContext(AppContext);
  return (
    <StyledTitle>
      {children}
      {/* {context.userToken} */}
    </StyledTitle>
  );
};

export default Title;
