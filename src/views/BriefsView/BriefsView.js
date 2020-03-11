import React from "react";
import AppContext from "../../context";
import List from "../../components/organisms/List/List";
import Filter from "../../components/organisms/Filter/Filter";
import NoItems from "../../components/atoms/NoItems/NoItems";
import TabNavigation from "../../components/molecules/TabNavigation/TabNavigation";

class BriefsView extends React.Component {
  static contextType = AppContext;

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
