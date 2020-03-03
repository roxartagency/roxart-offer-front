import React from "react";
import SidebarNavigation from "../../molecules/SidebarNavigation/SidebarNavigation";
import StyledLink from "../../atoms/StyledLink/StyledLink";
import AppContext from "../../../context";
import styled from "styled-components";

import logoImage from "../../../assets/images/roxart_agency.svg";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 32px;
  position: fixed;
  top: 0;
  width: 15vw;
  height: 100vh;
  background: ${props => `${props.theme.colors.lightGrey}`};
  z-index: 10;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 10px 20px;
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${props => `${props.theme.colors.grey}`};
`;

const LogoutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  margin-top: auto;
  border-top: 1px solid ${props => `${props.theme.colors.grey}`};
`;

const Logo = styled.img`
  width: 170px;
`;

const Sidebar = () => (
  <AppContext.Consumer>
    {context => (
      <StyledSidebar>
        <LogoWrapper>
          <Logo src={logoImage} alt="Roxart logo" />
        </LogoWrapper>
        <SidebarNavigation />
        {context.user.username ? (
          <LogoutWrapper>
            <StyledLink onClick={e => context.logout(e)} to="/">
              Wyloguj: {context.user.username}
            </StyledLink>
          </LogoutWrapper>
        ) : null}
      </StyledSidebar>
    )}
  </AppContext.Consumer>
);

export default Sidebar;
