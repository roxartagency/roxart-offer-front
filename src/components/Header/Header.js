import React from "react";
import Button from "../../components/Button/Button";
import HeaderNavigation from "../../components/Header/HeaderNavigation";
import AppContext from "../../context";
import styled from "styled-components";
import logoImage from "../../assets/images/logo.svg";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 40px;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 10px 20px;
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const Buttons = styled.div`
  margin-left: auto;
  @media (max-width: 767px) {
    margin-left: unset;
  }
`;

const Header = ({openModalFn}) => (
  <AppContext.Consumer>
    {context => (
      <StyledHeader>
        <Logo src={logoImage} alt="Roxart logo" />
        <HeaderNavigation />
        <Buttons>
          {context.user.username ? (
            <>
              <Button
                onClick={e => {
                  context.fetchBriefs(e);
                  context.showNotification("Odświeżono briefy");
                }}
                secondary>
                Odśwież briefy
              </Button>
              {context.user.role.name === "Administrator" ||
              context.user.role.name === "Handlowiec" ? (
                <>
                  <Button onClick={openModalFn} secondary>
                    Dodaj nowy brief
                  </Button>
                </>
              ) : null}
            </>
          ) : null}
        </Buttons>
      </StyledHeader>
    )}
  </AppContext.Consumer>
);

export default Header;
