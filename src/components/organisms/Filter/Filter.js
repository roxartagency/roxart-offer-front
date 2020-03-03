import React from "react";
import AppContext from "../../../context";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";

const Filters = styled.div`
  display: block;
  max-width: 50vw;
  margin-bottom: 40px;
  label {
    display: none;
  }
`;

const FilterInput = styled(Input)`
  padding: 15px 46px;
`;

class Filter extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <Filters>
            <FilterInput
              type="text"
              id=""
              placeholder="filtruj po kliencie..."
              name="wsp_nazwa"
              onChange={e => context.filterList(e)}
            />
          </Filters>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Filter;
