import React from "react";
import AppContext from "../../context";
import Login from "../../components/Login/Login";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class FilesView extends React.Component {
  state = {};

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <a
                  href="https://roxart-offer.roxapps.usermd.net/uploads/ddc69d2ebc304d14b190c35d427e6f2d.odt"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Title>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                    Brief na stronę
                  </Title>
                </a>
                <a
                  href="https://roxart-offer.roxapps.usermd.net/uploads/5baf365d811e4a0181c9a38fd1d9d067.odt"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Title>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                    Brief na katalog
                  </Title>
                </a>
              </>
            ) : (
              <>
                <NoItems>Zaloguj się aby uzyskać dostęp do plików.</NoItems>
                <Login />
              </>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default FilesView;
