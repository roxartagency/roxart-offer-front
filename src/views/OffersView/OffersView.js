import React from "react";
import AppContext from "../../context";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import NoItems from "../../components/atoms/NoItems/NoItems";
import OffersList from "../../components/organisms/OffersList/OffersList";

class PacketsView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    this.context.fetchOffers();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <PageTitle>Oferty</PageTitle>
                <OffersList items={context.oferta} />
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
