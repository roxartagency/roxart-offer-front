import React from "react";
import AppContext from "../../context";
import styled from "styled-components";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class PacketsView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    this.context.fetchFiles();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <PageTitle>Pakiety</PageTitle>
              </>
            ) : (
              <>
                <NoItems>Zaloguj się aby uzyskać dostęp do pakietów.</NoItems>
              </>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default PacketsView;
