import React from "react";
import styled from "styled-components";

const Label = styled.label`
  color: #7d7d7d;
  transition: 0.2s ease-out all;
  font-size: 13px;
  display: block;
  padding: 0 15px 5px 15px;
`;

const StyledSelect = styled.select`
  color: #000;
  font-size: 15px;
  padding: 5px 15px;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  line-height: 22px;
  width: 100%;
  background: #fff;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "10px"};
  &:focus {
    border-color: ${props => `${props.theme.colors.mainBlue}`};
    outline: none;
  }
`;

const Select = ({children, ...props}) => (
  <>
    <Label>{props.label}</Label>
    <StyledSelect
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      {...props}>
      {children}
    </StyledSelect>
  </>
);

export default Select;
