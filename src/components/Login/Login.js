import React from "react";
import AppContext from "../../context";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { withRouter } from "react-router-dom";

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
            <form
              autoComplete="off"
              className={styles.wrapper}
              onSubmit={e => context.login(e, this.state)}
            >
              <Input
                onChange={this.handleInputChange}
                name="login"
                value={this.state.login}
                label="Login"
              />
              <Input
                onChange={this.handleInputChange}
                name="password"
                value={this.state.password}
                label="Hasło"
                type="password"
              />
              <Button>Zaloguj się</Button>
              {context.installButton === true ? (
                <Button onClick={e => context.installApp(e)}>
                  Zainstaluj aplikację PWA
                </Button>
              ) : null}
            </form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(Login);
