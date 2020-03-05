import React from "react";
import styled from "styled-components";
import Label from "../Label/Label";

const StyledSelect = styled.select`
  color: ${props => `${props.theme.colors.black}`};
  position: relative;
  font-size: 1em;
  padding: 22px 72px 19px 32px;
  border: 1px solid ${props => `${props.theme.colors.lightGrey}`};
  border-radius: 15px;
  line-height: 1.2;
  width: 100%;
  background: transparent;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginbottom || "10px"};
  -moz-appearance: none;
  -webkit-appearance: none;
  &:focus {
    border-color: ${props => `${props.theme.colors.orange}`};
    outline: none;
  }
  &::before {
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.span`
  position: absolute;
  content: "+";
  right: 32px;
  top: 32px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-top: 6px solid ${props => `${props.theme.colors.darkGrey}`};
  z-index: -1;
`;

const Select = ({ children, ...props }) => (
  <>
    <Label>{props.label}</Label>
    <SelectWrapper>
      <StyledSelect
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        {...props}>
        {children}
      </StyledSelect>
      <Arrow />
    </SelectWrapper>
  </>
);

export default Select;
