import React from "react";
import AppContext from "../../context";
import List from "../../components/organisms/List/List";
import Filter from "../../components/organisms/Filter/Filter";
import styled from "styled-components";
import TabNavigation from "../../components/molecules/TabNavigation/TabNavigation";

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class BriefsView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    this.context.fetchBriefs();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <Filter />
                <TabNavigation />
                <List
                  items={
                    context.filterActive === true
                      ? context.filteredBrief
                      : context.brief
                  }
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

BriefsView.contextType = AppContext;

export default BriefsView;
