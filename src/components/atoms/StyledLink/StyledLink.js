import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${props => `${props.theme.colors.darkGrey}`};
  display: flex;
  align-items: center;
  font-size: 1em;
  padding: 16px 32px;
  margin-top: 0;
  margin-bottom: 24px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-out all;
  img {
    margin-right: 12px;
  }
  @media (max-width: 1400px) {
    font-size: 0.9em;
    padding: 16px 24px;
    margin-bottom: 0px;
  }
  &.${activeClassName} {
    font-weight: 700;
    color: ${props => `${props.theme.colors.black}`};
    &::before {
      position: absolute;
      content: "";
      width: 5px;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 0 5px 5px 0;
      background: ${props => `${props.theme.colors.orange}`};
    }
  }
  &:hover {
    color: ${props => `${props.theme.colors.orange}`};
  }

  ${({ logout }) =>
    logout &&
    css`
      font-weight: 400 !important;
      color: ${props => `${props.theme.colors.darkGrey}`} !important;
      &:hover {
        color: ${props => `${props.theme.colors.orange}`} !important;
      }
      &.${activeClassName} {
        &::before {
          display: none;
        }
      }
    `}
`;

export default StyledLink;
