import React from "react";
import AppContext from "../../../context";
import Button from "../../atoms/Button/Button";
import styled from "styled-components";
import refresh from "../../../assets/images/refresh.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StyledTopBar = styled.div`
  position: absolute;
  width: auto;
  padding: 0;
  top: 64px;
  right: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    margin-left: unset;
  }
`;

const TopBar = () => (
  <AppContext.Consumer>
    {context => (
      <StyledTopBar>
        {context.user.username ? (
          <>
            <Button
              onClick={e => {
                context.fetchBriefs(e);
                context.showNotification("Odświeżono briefy");
              }}
              refresh>
              <img src={refresh} alt="Refresh" />
            </Button>
            {context.user.role.name === "Administrator" ||
            context.user.role.name === "Handlowiec" ? (
              <>
                <Link to="/form">
                  <Button>
                    <FontAwesomeIcon icon={faPlusCircle} size="sm" />
                    Dodaj nowy brief
                  </Button>
                </Link>
              </>
            ) : null}
          </>
        ) : null}
      </StyledTopBar>
    )}
  </AppContext.Consumer>
);

export default TopBar;
