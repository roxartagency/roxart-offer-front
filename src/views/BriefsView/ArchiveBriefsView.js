import React from "react";
import AppContext from "../../context";
import List from "../../components/organisms/List/List";
import Filter from "../../components/organisms/Filter/Filter";
import TabNavigation from "../../components/molecules/TabNavigation/TabNavigation";
import NoItems from "../../components/atoms/NoItems/NoItems";

class ArchiveBriefsView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    this.context.fetchPricedBriefs();
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
                      : context.pricedBrief
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

ArchiveBriefsView.contextType = AppContext;

export default ArchiveBriefsView;
