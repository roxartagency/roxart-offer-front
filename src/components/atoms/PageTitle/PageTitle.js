import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h2`
  font-size: 3em;
  line-height: 1;
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-top: 0;
  svg {
    margin-right: 7px;
  }
`;

const PageTitle = ({ children }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
