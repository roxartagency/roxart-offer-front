import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotating = keyframes`    
from {
  -ms-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
to {
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}`;

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1em;
  text-decoration: none;
  padding: 15px 50px 12px 50px;
  line-height: 1.1;
  font-weight: 400;
  transition: 0.2s ease-out all;
  background: ${props => `${props.theme.colors.orange}`};
  border-radius: 15px;
  border: ${props => `1px solid ${props.theme.colors.orange}`};
  color: ${props => `${props.theme.colors.white}`};
  cursor: pointer;

  margin-bottom: ${props => props.marginbottom || "unset"};
  &:hover {
    background: ${props => `${props.theme.colors.white}`};
    color: ${props => `${props.theme.colors.orange}`};
  }
  svg {
    margin-right: 5px;
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
    padding: 12px 20px 9px 20px;
  }

  ${({ refresh }) =>
    refresh &&
    css`
      background: transparent !important;
      padding: 0 !important;
      color: ${props => `${props.theme.colors.black}`};
      font-size: 20px;
      border: 0;
      margin-right: 24px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0;
      }
      @media (max-width: 1400px) {
        margin-right: 12px;
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


  ${({ small }) =>
    small &&
    css`
      min-width: 100px;
      border-radius: 6px;
      font-size: 12px;
      padding: 6px 14px 4px 14px;
    `}

  ${({ loading }) =>
    loading &&
    css`
      -webkit-animation: ${rotating} 2s linear infinite;
      -moz-animation: ${rotating} 2s linear infinite;
      -ms-animation: ${rotating} 2s linear infinite;
      -o-animation: ${rotating} 2s linear infinite;
      animation: ${rotating} 2s linear infinite;
    `}
`;

const StyledAnchor = styled(StyledButton)``;

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
