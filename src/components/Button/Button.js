import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  max-width: 200px;
  text-align: center;
  font-size: 10px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 500;
  background: none;
  border: ${props => `2px solid ${props.theme.colors.mainBlue}`};
  color: ${props => `${props.theme.colors.mainBlue}`};
  cursor: pointer;
  margin-right: 5px;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  &:hover {
    background: ${props => `${props.theme.colors.mainBlue}`};
    color: #fff;
  }
`;

const StyledAnchor = styled(StyledButton)``;

const SecondaryButton = styled(StyledButton)`
  width: auto;
  background-color: ${props => `${props.theme.colors.mainBlue}`};
  color: white;
  font-weight: 700;
  font-size: 0.8em;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  &:hover {
    background-color: transparent;
    color: ${props => `${props.theme.colors.mainBlue}`};
  }
`;
const Button = ({children, href, secondary, ...props}) => {
  return (
    <>
      {href ? (
        <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </StyledAnchor>
      ) : (
        [
          secondary ? (
            <SecondaryButton {...props}>{children}</SecondaryButton>
          ) : (
            <StyledButton {...props}>{children}</StyledButton>
          )
        ]
      )}
    </>
  );
};

export default Button;
