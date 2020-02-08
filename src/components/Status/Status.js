import React from "react";
import styled from "styled-components";

const handleColorType = color => {
  switch (color) {
    case "green":
      return "color: #008744;";
    case "red":
      return "color: #d62d20;";
    case "yellow":
      return "color: #ffa700;";
    default:
      return "color: #000;";
  }
};

const StyledStatus = styled.span`
  ${({ color }) => handleColorType(color)};
`;

const Status = ({ children, ...props }) => {
  return <StyledStatus color={props.color}>{children}</StyledStatus>;
};

export default Status;
