import React from "react";
import styled from "styled-components";
import AppContext from "../../../context";

const StyledForm = styled.form`
  width: 100%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

class Form extends React.Component {
  render() {
    const { ...props } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <StyledForm autoComplete="off" onSubmit={props.onSubmit}>
            {props.children}
          </StyledForm>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
