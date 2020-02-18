import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";
import Login from "../../components/Login/Login";
import styled from "styled-components";

const Filters = styled.div`
  display: block;
  background-color: ${props => `${props.theme.colors.orange}`};
  margin-bottom: 20px;
`;

const SingleFilter = styled.div`
  padding: 20px;
  color: #fff;
  input {
    margin-left: 10px;
  }
`;

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class PricedBriefsView extends React.Component {
  static contextType = AppContext;

  state = {};

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.user.username ? (
              <>
                <Filters>
                  <SingleFilter>
                    <label htmlFor="wsp_nazwa">Filtruj po kliencie:</label>
                    <input
                      type="text"
                      id=""
                      placeholder="Szukaj"
                      name="wsp_nazwa"
                      onChange={e => context.filterList(e)}
                    />
                  </SingleFilter>
                </Filters>
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
                <Login />
              </>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

PricedBriefsView.contextType = AppContext;

export default PricedBriefsView;
