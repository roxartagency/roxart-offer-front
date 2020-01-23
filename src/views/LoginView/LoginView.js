import React from "react";
import AppContext from "../../context";
import styles from "./LoginView.module.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {withRouter} from "react-router-dom";

class LoginView extends React.Component {
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
    this.props.history.push("/briefs");
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <form
              autoComplete="off"
              className={styles.wrapper}
              onSubmit={e => context.login(e, this.state)}>
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
              {/* <Button onClick={this.redirectBriefs}>Zobacz briefy</Button> */}
            </form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(LoginView);
