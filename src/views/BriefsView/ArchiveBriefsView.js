import React from "react";
import AppContext from "../../context";
import List from "../../components/organisms/List/List";
import Filter from "../../components/organisms/Filter/Filter";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
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

class ArchiveBriefsView extends React.Component {
  static contextType = AppContext;

  state = {};

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <Filter />
                <PageTitle>Wycenione</PageTitle>
                <List
                  items={
                    context.filterActive === true
                      ? context.filteredBrief
                      : context.brief
                  }
                  priced="true"
                />
              </>
            ) : (
              <>
                <NoItems>Zaloguj się aby uzyskać dostęp do briefów.</NoItems>
              </>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

ArchiveBriefsView.contextType = AppContext;

export default ArchiveBriefsView;
