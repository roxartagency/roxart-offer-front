import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  padding: 14px 50px;
  line-height: 1.1;
  font-weight: 400;
  background: ${props => `${props.theme.colors.orange}`};
  border-radius: 15px;
  border: ${props => `1px solid ${props.theme.colors.orange}`};
  color: ${props => `${props.theme.colors.white}`};
  cursor: pointer;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  &:hover {
    background: ${props => `${props.theme.colors.white}`};
    color: ${props => `${props.theme.colors.orange}`};
  }
  svg {
    margin-right: 5px;
  }

  ${({ refresh }) =>
    refresh &&
    css`
      background: transparent !important;
      padding: 0;
      color: ${props => `${props.theme.colors.black}`};
      font-size: 20px;
      border: 0;
      margin-right: 24px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0;
      }
    `}

  ${({ second }) =>
    second &&
    css`
      background: #fff;
      color: ${props => `${props.theme.colors.black}`};
      border-color: ${props => `${props.theme.colors.grey}`};
      &:hover {
        background: ${props => `${props.theme.colors.orange}`};
        color: ${props => `${props.theme.colors.white}`};
        border-color: ${props => `${props.theme.colors.orange}`};
      }
    `}
`;

const StyledAnchor = styled(StyledButton)``;

// const SecondaryButton = styled(StyledButton)`
//   width: auto;
//   background-color: ${props => `${props.theme.colors.mainBlue}`};
//   color: white;
//   font-weight: 400;
//   font-size: 0.8em;
//   box-shadow: ${props => `${props.theme.boxShadow}`};
//   &:hover {
//     background-color: #fff;
//     color: ${props => `${props.theme.colors.mainBlue}`};
//   }
// `;
const Button = ({ children, href, secondary, ...props }) => {
  return (
    <>
      {href ? (
        <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </StyledAnchor>
      ) : (
        <StyledButton {...props}>{children}</StyledButton>
      )}
    </>
  );
};

export default Button;
