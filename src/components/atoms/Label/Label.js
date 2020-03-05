import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${props => `${props.theme.colors.black}`};
  transition: 0.2s ease-out all;
  font-size: 1em;
  letter-spacing: -0.32px;
  margin-bottom: 10px;
  line-height: 1.2;
  display: block;
  font-weight: 700;
  padding: 0 15px;
`;

const Label = ({ ...props }) => <StyledLabel>{props.children}</StyledLabel>;

export default Label;
