import React from "react";
import AppContext from "../../context";
import styled from "styled-components";
import Button from "../../components/atoms/Button/Button";
import { Link } from "react-router-dom";
import Input from "../../components/atoms/Input/Input";
import logoImage from "../../assets/images/roxart_agency.svg";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Form = styled.form`
  max-width: 530px;
  text-align: center;
`;

const Left = styled.div`
  position: fixed;
  left: 0;
  width: 50vw;
  top: -30vh;
  bottom: -30vh;
  z-index: 11;
  background: ${props => `${props.theme.colors.lightGrey}`};
  border-radius: 0 60% 60% 0;
  img {
    position: absolute;
    right: 200px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const Right = styled.div`
  position: fixed;
  top: 0;
  left: 50vw;
  height: 100vh;
  padding-left: 3vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

const LoginText = styled.p`
  font-size: 3em;
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-weight: 700;
  span {
    display: block;
    font-size: 24px;
    font-weight: 500;
    color: ${props => `${props.theme.colors.darkGrey}`};
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  padding: 25px 50px;
`;

const Else = styled.p`
  color: ${props => `${props.theme.colors.grey}`};
  position: relative;
  margin: 30px 0;
  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 40%;
    left: 0;
    top: 40%;
    background: ${props => `${props.theme.colors.grey}`};
  }
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 40%;
    right: 0;
    top: 40%;
    background: ${props => `${props.theme.colors.grey}`};
  }
`;

const PwaButton = styled(Button)`
  width: 100%;
  padding: 25px 50px;
  background: transparent !important;
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 700;
  letter-spacing: -0.36px;
  border: 0;
  padding-top: 0;
`;

class LoginView extends React.Component {
  state = {
    login: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  redirectBriefs = e => {
    this.props.history.push("/");
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <Left>
              <img src={logoImage} alt="Roxart Agency" />
            </Left>
            <Right>
              <LoginText>
                Zaloguj się, <span>aby uzyskać dostęp do briefów.</span>
              </LoginText>
              <Form
                autoComplete="off"
                // onSubmit={e => context.login(e, this.state)}
              >
                <Input
                  onChange={this.handleInputChange}
                  name="login"
                  placeholder="login/e-mail"
                  value={this.state.login}
                  marginBottom="12px"
                />
                <Input
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="hasło"
                  value={this.state.password}
                  type="password"
                  marginBottom="24px"
                />
                <Link onClick={e => context.login(e, this.state)} to="/briefs">
                  <LoginButton marginBottom="5px">Zaloguj się</LoginButton>
                </Link>
                {context.installButton === true ? (
                  <>
                    <Else>lub</Else>
                    <PwaButton onClick={e => context.installApp(e)}>
                      Zainstaluj aplikację PWA
                    </PwaButton>
                  </>
                ) : null}
              </Form>
            </Right>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(LoginView);
