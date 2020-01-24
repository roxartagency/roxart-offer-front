import React from "react";
import "./index.css";
import styles from "./Root.module.scss";
import AppContext from "../../context";
import axios from "axios";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import BriefsView from "../BriefsView/BriefsView";
import LoginView from "../LoginView/LoginView";
import SingleBriefView from "../BriefsView/SingleBrief";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

class Root extends React.Component {
  state = {
    brief: [],
    user: [],
    userToken: "",
    isUserLogged: false,
    isModalOpen: false
  };

  installPrompt = null;
  componentDidMount() {
    console.log("Listening for Install prompt");
    window.addEventListener("beforeinstallprompt", e => {
      // For older browsers
      e.preventDefault();
      console.log("Install Prompt fired");
      this.installPrompt = e;
      // See if the app is already installed, in that case, do nothing
      if (
        (window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      ) {
        return false;
      }
      // Set the state variable to make button visible
      this.setState({
        installButton: true
      });
    });
  }

  installApp = async () => {
    if (!this.installPrompt) return false;
    this.installPrompt.prompt();
    let outcome = await this.installPrompt.userChoice;
    if (outcome.outcome == "accepted") {
      console.log("App Installed");
    } else {
      console.log("App not installed");
    }
    // Remove the event reference
    this.installPrompt = null;
    // Hide the button
    this.setState({
      installButton: false
    });
  };

  addItem = (e, user, newItem) => {
    e.preventDefault();

    console.log(user);

    // this.setState(prevState => ({
    //   brief: [...prevState.brief, newItem]
    // }));

    axios
      .post(`http://localhost:1337/briefs`, newItem, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(this.fetchBriefs())
      .then(
        this.sendMail(
          e,
          "dominik.s@roxart.pl",
          "Dodano nowego briefa: " + newItem.title,
          "Zaloguj się do aplikacji i wyceń go!"
        )
      );

    alert("Dodano nowy brief: " + newItem.title);

    this.closeModal();
  };

  removeItem = (e, id) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:1337/briefs/${id}`, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(this.fetchBriefs());
  };

  wycenKoder = (e, id, title, user, wycena) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:1337/briefs/${id}`,
        {
          wycena_kodera: wycena.wycena_kodera,
          status_kodera: wycena.status_kodera
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(
        setTimeout(() => {
          this.fetchBriefs();
        }, 500)
      );

    if (wycena.status_kodera === "zwrot_do_handlowca") {
      this.sendMail(
        e,
        user.email,
        "Koder zwrócił wycenę do poprawy: " + title,
        "Zaloguj się do aplikacji i popraw briefa!"
      );
    } else if (wycena.status_kodera === "wycenione") {
      this.sendMail(
        e,
        "dominik.s@roxart.pl",
        "Koder dodał nową wycenę: " + title,
        "Zaloguj się do aplikacji i sprawdź czy oferta jest gotowa."
      );
    }
  };

  wycenGrafik = (e, id, title, user, wycena) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:1337/briefs/${id}`,
        {
          wycena_grafika: wycena.wycena_grafika,
          status_grafika: wycena.status_grafika
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(
        setTimeout(() => {
          this.fetchBriefs();
        }, 500)
      );

    if (wycena.status_grafika === "zwrot_do_handlowca") {
      this.sendMail(
        e,
        user.email,
        "Grafik zwrócił wycenę do poprawy: " + title,
        "Zaloguj się do aplikacji i popraw briefa!"
      );
    } else if (wycena.status_grafika === "wycenione") {
      this.sendMail(
        e,
        "dominik.s@roxart.pl",
        "Grafik dodał nową wycenę: " + title,
        "Zaloguj się do aplikacji i wyceń godziny kodera!"
      );
    }
  };

  editItem = (e, id, editItem) => {
    e.preventDefault();

    axios
      .put(`http://localhost:1337/briefs/${id}`, editItem, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Zapisano poprawnie zmiany w: " + res.data.title);
      })
      .then(
        setTimeout(() => {
          this.fetchBriefs();
        }, 500)
      )
      .catch(error => {
        alert("Wystąpił błąd zapisywania: " + error);
      });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  fetchBriefs = () => {
    console.log("Fetch briefs");
    console.log(this.state.userToken);

    axios
      .get("http://localhost:1337/briefs?_sort=created_at:DESC", {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(response => {
        // Handle success.
        console.log("Data: ", response.data);
        const brief = response.data;
        this.setState({brief});
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  login = (e, userData) => {
    e.preventDefault();

    axios
      .post("http://localhost:1337/auth/local", {
        identifier: userData.login,
        password: userData.password
      })
      .then(response => {
        this.setState(prevState => ({
          userToken: response.data.jwt,
          user: response.data.user,
          isUserLogged: true
        }));
        console.log("Set userToken");
        console.log(this.state.user);
        console.log("Zalogowano jako: " + this.state.user.username);
      })
      .then(() => {
        this.fetchBriefs();
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
        alert("Błędne dane logowania.");
      });
  };

  sendMail = (e, to, subject, text) => {
    e.preventDefault();

    axios
      .post("http://localhost:1337/email", {
        // headers: {
        //   Authorization: `Bearer ${this.state.userToken}`
        // },
        to: to,
        subject: subject,
        text: text
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  render() {
    const {isModalOpen} = this.state;
    const contextElements = {
      ...this.state,
      fetchBriefs: this.fetchBriefs,
      addItem: this.addItem,
      removeItem: this.removeItem,
      editItem: this.editItem,
      login: this.login,
      sendMail: this.sendMail,
      wycenKoder: this.wycenKoder,
      wycenGrafik: this.wycenGrafik
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />

          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/" component={LoginView} />
              <Route exact path="/briefs" component={BriefsView} />
              <Route path="/briefs/:id" component={SingleBriefView} />
              <Route path="/briefs/:id/edit" component={LoginView} />
              <Redirect to="/" />
            </Switch>
            {this.state.installButton === "true" ? (
              <Button
                condition={this.state.installButton}
                onClick={this.installApp}>
                Install As Application test
              </Button>
            ) : null}
          </div>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
