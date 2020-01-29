import React from "react";
import "./index.css";
import styles from "./Root.module.scss";
import AppContext from "../../context";
import axios from "axios";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import BriefsView from "../../views/BriefsView/BriefsView";
import SingleBriefView from "../../views/BriefsView/SingleBrief";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/Notification";
import PWAPrompt from "react-ios-pwa-prompt";
import Cookies from "js-cookie";
import {API_URL} from "../../api";

class Root extends React.Component {
  state = {
    brief: [],
    filteredBrief: [],
    user: [],
    userToken: "",
    isUserLogged: false,
    isModalOpen: false,
    installButton: false,
    filterActive: false,
    notificationActive: false,
    notificationContent: "testowy tekst"
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
        console.log(window.matchMedia);
        return false;
      }
      // Set the state variable to make button visible
      this.setState({
        installButton: true
      });
    });

    const userName = Cookies.get("userName");
    const userEmail = Cookies.get("userEmail");
    const userRole = Cookies.get("userRole");
    if (userName) {
      const userRoleJSON = JSON.parse(userRole);
      this.setState({
        user: {username: userName, email: userEmail, role: userRoleJSON}
      });
    }
    const userToken = Cookies.get("userToken");
    if (userToken) {
      this.setState({
        userToken: userToken
      });
      setTimeout(() => {
        this.fetchBriefs();
      });
    }
  }

  installApp = async e => {
    e.preventDefault();
    if (!this.installPrompt) return false;
    this.installPrompt.prompt();
    let outcome = await this.installPrompt.userChoice;
    if (outcome.outcome === "accepted") {
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

  filterList = e => {
    var updatedList = this.state.brief;
    updatedList = updatedList.filter(function(item) {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    if (e.target.value.length) {
      this.setState({filterActive: true});
    } else {
      this.setState({filterActive: false});
    }
    this.setState({filteredBrief: updatedList});
  };

  addItem = (e, user, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      brief: [...prevState.brief, newItem]
    }));

    axios
      .post(`${API_URL}/briefs`, newItem, {
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

    this.showNotification("Dodano nowy brief: " + newItem.title);

    this.closeModal();
  };

  removeItem = (e, id) => {
    e.preventDefault();

    axios
      .delete(`${API_URL}/briefs/${id}`, {
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

  wycen = (e, id, title, user, wycena) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/briefs/${id}`, wycena, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(
        setTimeout(() => {
          this.fetchBriefs();
        }, 300)
      );

    if (wycena.status_grafika === "zwrot_do_handlowca") {
      this.sendMail(
        e,
        "dominik.s@roxart.pl",
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
    } else if (wycena.status_kodera === "zwrot_do_handlowca") {
      this.sendMail(
        e,
        "dominik.s@roxart.pl",
        "Koder zwrócił wycenę do poprawy: " + title,
        "Zaloguj się do aplikacji i popraw briefa!"
      );
    } else if (wycena.status_kodera === "wycenione") {
      this.sendMail(
        e,
        "dominik.s@roxart.pl",
        "Koder dodał nową wycenę: " + title,
        "Zaloguj się do aplikacji i przygotuj ofertę."
      );
    }
  };

  editItem = (e, id, editItem) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/briefs/${id}`, editItem, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.showNotification("Zapisano poprawnie zmiany w: " + res.data.title);
      })
      .then(
        setTimeout(() => {
          this.fetchBriefs();
        }, 300)
      )
      .catch(error => {
        this.showNotification("Wystąpił błąd zapisywania zmian w: " + error);
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
      .get(`${API_URL}/briefs?_sort=created_at:DESC`, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(response => {
        console.log("Data: ", response.data);
        const brief = response.data;
        this.setState({brief});
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };

  login = (e, userData) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/local`, {
        identifier: userData.login,
        password: userData.password
      })
      .then(response => {
        this.setState(prevState => ({
          userToken: response.data.jwt,
          user: response.data.user,
          isUserLogged: true
        }));
        Cookies.set("userToken", response.data.jwt);
        Cookies.set("userName", response.data.user.username);
        Cookies.set("userEmail", response.data.user.email);
        Cookies.set("userRole", response.data.user.role);

        console.log("Set userToken");
        console.log(this.state.user);
        this.showNotification("Zalogowano jako: " + this.state.user.username);
      })
      .then(() => {
        this.fetchBriefs();
      })
      .catch(error => {
        console.log("An error occurred:", error);
        this.showNotification("Błędne dane logowania!");
      });
  };

  logout = e => {
    e.preventDefault();
    this.setState({
      userToken: "",
      user: "",
      isUserLogged: false
    });
    Cookies.remove("userToken");
    Cookies.remove("userName");
    Cookies.remove("userEmail");
    Cookies.remove("userRole");
    this.showNotification("Wylogowano.");
  };

  sendMail = (e, to, subject, text) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/email`, {
        to: to,
        subject: subject,
        text: text
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };

  showNotification = content => {
    this.setState({
      notificationActive: true,
      notificationContent: content
    });
    setTimeout(() => {
      this.setState({notificationActive: false});
    }, 2500);
  };

  render() {
    const {isModalOpen} = this.state;
    const contextElements = {
      ...this.state,
      showNotification: this.showNotification,
      filterList: this.filterList,
      fetchBriefs: this.fetchBriefs,
      installApp: this.installApp,
      addItem: this.addItem,
      removeItem: this.removeItem,
      editItem: this.editItem,
      login: this.login,
      logout: this.logout,
      sendMail: this.sendMail,
      wycen: this.wycen
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <div className={styles.wrapper}>
            <PWAPrompt />
            <Notification active={this.state.notificationActive}>
              {this.state.notificationContent}
            </Notification>
            <Switch>
              <Route exact path="/" component={BriefsView} />
              <Route path="/:id" component={SingleBriefView} />
              <Redirect to="/" />
            </Switch>
          </div>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
