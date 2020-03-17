import React from "react";
import styled from "styled-components";

const StyledVersion = styled.a`
  margin: 0;
  color: ${props => `${props.theme.colors.darkGrey}`};
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.32px;
  text-align: center;
  text-decoration: none;
`;

const Version = ({ children, ...props }) => {
  return <StyledVersion {...props}>{children}</StyledVersion>;
};

export default Version;
