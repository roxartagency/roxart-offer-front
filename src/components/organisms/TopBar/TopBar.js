import React from "react";
import AppContext from "../../../context";
import Button from "../../atoms/Button/Button";
import styled from "styled-components";
import refresh from "../../../assets/images/refresh.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { appLink } from "../../../utils/Utils";

const StyledTopBar = styled.div`
  position: absolute;
  width: auto;
  padding: 0;
  top: 64px;
  right: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1400px) {
    top: 32px;
    right: 32px;
  }
  @media (max-width: 767px) {
    margin-left: unset;
  }
`;

const TopBarButton = styled(Button)`
  margin-left: 5px;
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
                context.fetchPricedBriefs(e);
                context.fetchFiles(e);
                context.fetchOffers(e);
              }}
              refresh
              loading={context.isFetching}>
              <img src={refresh} alt="Refresh" />
            </Button>
            {context.user.role.name === "Administrator" ||
            context.user.role.name === "Handlowiec" ? (
              <>
                <Link to={appLink + `/new-brief`}>
                  <TopBarButton>
                    <FontAwesomeIcon icon={faPlusCircle} size="sm" />
                    Dodaj nowy brief
                  </TopBarButton>
                </Link>
                {/* <Link to={appLink + `/new-offer`}>
                  <TopBarButton>
                    <FontAwesomeIcon icon={faPlusCircle} size="sm" />
                    Dodaj nową ofertę
                  </TopBarButton>
                </Link> */}
              </>
            ) : null}
          </>
        ) : null}
      </StyledTopBar>
    )}
  </AppContext.Consumer>
);

export default TopBar;
