import React from "react";
import AppContext from "../../../context";
import StyledLink from "../../atoms/StyledLink/StyledLink";
import styled from "styled-components";

const MenuWrapper = styled.ul`
  padding: 0;
  display: block;
  width: 100%;
  @media (max-width: 991px) {
  }
`;

const NavItem = styled.li`
  display: block;
  list-style: none;
  @media (max-width: 991px) {
  }
`;

const HeaderNavigation = () => (
  <AppContext.Consumer>
    {context => (
      <MenuWrapper>
        <NavItem>
          <StyledLink to="/briefs">Briefy</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/archive">Wycenione</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/files">Pliki</StyledLink>
        </NavItem>
      </MenuWrapper>
    )}
  </AppContext.Consumer>
);

export default HeaderNavigation;
