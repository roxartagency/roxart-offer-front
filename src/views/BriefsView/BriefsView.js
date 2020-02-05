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

class BriefsView extends React.Component {
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
                    <label htmlFor="title">Filtruj po kliencie:</label>
                    <input
                      type="text"
                      id=""
                      placeholder="Szukaj"
                      name="title"
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

BriefsView.contextType = AppContext;

export default BriefsView;
