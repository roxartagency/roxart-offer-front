import React from "react";
import AppContext from "../../../context";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import searchIcon from "../../../assets/images/search.svg";

const Filters = styled.div`
  display: block;
  max-width: 50%;
  margin-bottom: 40px;
  position: relative;
  label {
    display: none;
  }
  img {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  }
`;

const FilterInput = styled(Input)`
padding: 13px 46px 12px 46px;
`;

class Filter extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <Filters>
            <img src={searchIcon} alt="Search Icon" />
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
