import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const BriefsView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <List items={context.brief} />
      </>
    )}
  </AppContext.Consumer>
);

export default BriefsView;
