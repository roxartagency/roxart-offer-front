import React from "react";
import styled from "styled-components";

const handleColorType = color => {
  switch (color) {
    case "green":
      return "color: #168202; background: #E1FFD5;";
    case "red":
      return "color: #980000; background: #FFE2E2;";
    case "blue":
      return "color: #113097; background: #CBDBFF;";
    case "grey":
      return "color: #7A7A7A; background: #F5F5F5;";
    default:
      return "color: #7A7A7A";
  }
};

const StyledStatus = styled.span`
  border-radius: 6px;
  font-size: 12px;
  padding: 6px 14px 3px 14px;
  min-width: 100px;
  display: inline-block;
  text-align: center;
  @media (max-width: 1400px) {
    min-width: unset;
    padding-left: 5px;
    padding-right: 5px;
  }
  ${({ color }) => handleColorType(color)};
`;

const Status = ({ children, ...props }) => {
  return <StyledStatus color={props.color}>{children}</StyledStatus>;
};

export default Status;
