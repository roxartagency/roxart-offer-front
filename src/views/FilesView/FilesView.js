import React from "react";
import AppContext from "../../context";
import Login from "../../components/Login/Login";
import styled from "styled-components";

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
                <h3>
                  <a
                    href="https://roxart-offer.roxapps.usermd.net/uploads/b04d2261fe4648bb8c26bf7fdc52b8fe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oferta
                  </a>
                </h3>
                <h3>
                  <a
                    href="https://roxart-offer.roxapps.usermd.net/uploads/b04d2261fe4648bb8c26bf7fdc52b8fe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brief na stronę
                  </a>
                </h3>
                <h3>
                  <a
                    href="https://roxart-offer.roxapps.usermd.net/uploads/b04d2261fe4648bb8c26bf7fdc52b8fe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brief na katalog
                  </a>
                </h3>
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
