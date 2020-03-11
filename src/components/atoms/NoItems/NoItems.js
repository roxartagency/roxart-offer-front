import React from "react";
import styled from "styled-components";

const StyledNoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

const NoItems = ({ ...props }) => <StyledNoItems>{props.children}</StyledNoItems>;

export default NoItems;