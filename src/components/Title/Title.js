import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: 0;
  color: ${props => `${props.theme.colors.mainBlue}`};
  font-weight: 700;
  font-size: 20px;
`;

const Title = ({children}) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
