import React from "react";
import AppContext from "../../context";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  text-align: center;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  padding: 40px 30px;
`;

class Login extends React.Component {
  state = {
    login: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  redirectBriefs = e => {
    this.props.history.push("/");
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <Form
              autoComplete="off"
              onSubmit={e => context.login(e, this.state)}>
              <Input
                onChange={this.handleInputChange}
                name="login"
                placeholder="login/e-mail"
                value={this.state.login}
                marginBottom="15px"
              />
              <Input
                onChange={this.handleInputChange}
                name="password"
                placeholder="hasło"
                value={this.state.password}
                type="password"
                marginBottom="15px"
              />
              <Button marginBottom="5px">
                <FontAwesomeIcon icon={faSignInAlt} size="1x" />
                Zaloguj się
              </Button>
              {context.installButton === true ? (
                <Button onClick={e => context.installApp(e)} marginBottom="5px">
                  <FontAwesomeIcon icon={faPlusCircle} size="1x" />
                  Zainstaluj aplikację PWA
                </Button>
              ) : null}
            </Form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(Login);
