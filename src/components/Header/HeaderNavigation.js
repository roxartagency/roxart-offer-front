import React from "react";
import AppContext from "../../context";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.ul`
  margin-left: 80px;
  padding: 0;
  @media (max-width: 991px) {
    margin-left: 25px;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 50px;
  list-style: none;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`;

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: #818181;
  font-size: 0.8em;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  transition: 0.2s ease-out all;
  &.${activeClassName} {
    font-weight: 700;
  }
  &:hover {
    color: ${props => `${props.theme.colors.mainBlue}`};
  }
`;

const HeaderNavigation = () => (
  <AppContext.Consumer>
    {context => (
      <nav>
        <MenuWrapper>
          <NavItem>
            <StyledLink to="/">briefy</StyledLink>
          </NavItem>

          {context.user.username ? (
            <>
              <NavItem>
                <StyledLink to="/priced">wycenione</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/files">pliki</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink onClick={e => context.logout(e)} to="/">
                  Wyloguj: {context.user.username}
                </StyledLink>
              </NavItem>
            </>
          ) : null}
        </MenuWrapper>
      </nav>
    )}
  </AppContext.Consumer>
);

export default HeaderNavigation;
