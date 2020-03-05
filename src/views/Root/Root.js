import React from "react";
import AppContext from "../../context";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BriefsView from "../../views/BriefsView/BriefsView";
import ArchiveBriefsView from "../../views/BriefsView/ArchiveBriefsView";
import SingleBriefView from "../../views/BriefsView/SingleBrief";
import FilesView from "../../views/FilesView/FilesView";
import FormView from "../../views/FormView/FormView";
import LoginView from "../../views/LoginView/LoginView";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import TopBar from "../../components/organisms/TopBar/TopBar";
import PageWrapper from "../../templates/PageWrapper/PageWrapper";
import Notification from "../../components/atoms/Notification/Notification";
import PWAPrompt from "react-ios-pwa-prompt";
import Cookies from "js-cookie";
import { API_URL } from "../../api";
import GlobalStyle from "../../styles/GlobalStyle";
import Theme from "../../styles/Theme";
import routes from "../../routes";
import utils from "../../utils/Utils";

class Root extends React.Component {
  state = {
    brief: [],
    plik: [],
    filteredBrief: [],
    user: [],
    userToken: "",
    isUserLogged: false,
    installButton: false,
    filterActive: false,
    notificationActive: false,
    notificationContent: "testowy tekst",
    isFetching: false
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
    const userID = Cookies.get("userID");
    if (userName) {
      const userRoleJSON = JSON.parse(userRole);
      this.setState({
        user: {
          id: userID,
          username: userName,
          email: userEmail,
          role: userRoleJSON
        }
      });
    }
    const userToken = Cookies.get("userToken");
    if (userToken) {
      this.setState({
        userToken: userToken
      });
      this.fetchBriefs();
    }

    this.fetchFiles();

    utils.check();
    utils.requestNotificationPermission();
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
      console.log(item);

      return (
        item.wsp_nazwa.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    if (e.target.value.length) {
      this.setState({ filterActive: true });
    } else {
      this.setState({ filterActive: false });
    }
    this.setState({ filteredBrief: updatedList });
  };

  // sendFile = file => {
  //   const formData = new FormData();

  //   Array.from(file).forEach(image => {
  //     formData.append("files", image);
  //   });

  //   let returnValue = "";

  //   axios
  //     .post(`${API_URL}/upload`, formData, {
  //       headers: { "Content-Type": "multipart/form-data" }
  //     })
  //     .then(res => {
  //       // console.log(res.data[0].url);
  //       returnValue = res.data[0].url;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   return returnValue;
  // };

  addItem = (e, newItem) => {
    e.preventDefault();

    axios
      .post(
        `${API_URL}/briefs`,
        {
          kategoria: {
            id: newItem.kategoria
          },
          wsp_pilne: newItem.czy_pilne,
          user: this.state.user,
          wsp_statuss: "wersja_robocza",
          ...newItem
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
        this.showNotification("Dodano nowy brief: " + newItem.wsp_nazwa);
        this.fetchBriefs();
      })
      .catch(error => {
        this.showNotification("Wystąpił błąd zapisywania zmian w: " + error);
        console.log(error);
      });
  };

  wycen = (e, id, title, kategoria, user, wycena) => {
    e.preventDefault();
    const currentDate = new Date();
    if (wycena.wsp_status_grafika === "wycenione") {
      axios
        .put(
          `${API_URL}/briefs/${id}`,
          { wsp_status_grafika_date: currentDate, ...wycena },
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          if (kategoria === "Katalog" || kategoria === "Logo") {
            console.log("Mail do admina!");
            utils.sendMail(
              e,
              "wyceny@roxart.pl",
              "Grafik dodał nową wycenę: " + title,
              "Zaloguj się do aplikacji i przygotuj ofertę!"
            );
          } else {
            console.log("Mail do kodera!");
            utils.sendMail(
              e,
              "lukasz.c@roxart.pl",
              "Grafik dodał nową wycenę: " + title,
              "Zaloguj się do aplikacji i wyceń godziny kodera!"
            );
          }
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_grafika === "zwrot_do_handlowca") {
      axios
        .put(
          `${API_URL}/briefs/${id}`,
          {
            wsp_statuss: "wersja_robocza",
            ...wycena
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do handlowca!");
          utils.sendMail(
            e,
            user.email,
            "Grafik zwrócił briefa: " + title,
            "Zaloguj się do aplikacji i popraw go!"
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_kodera === "wycenione") {
      axios
        .put(`${API_URL}/briefs/${id}`, wycena, {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        })
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do admina!");
          utils.sendMail(
            e,
            "wyceny@roxart.pl",
            "Koder dodał nową wycenę: " + title,
            "Zaloguj się do aplikacji i przygotuj ofertę."
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_kodera === "zwrot_do_handlowca") {
      axios
        .put(
          `${API_URL}/briefs/${id}`,
          {
            wsp_statuss: "wersja_robocza",
            ...wycena
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do handlowca!");
          utils.sendMail(
            e,
            user.email,
            "Koder zwrócił briefa: " + title,
            "Zaloguj się do aplikacji i popraw go!"
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_operatora === "wycenione") {
      axios
        .put(`${API_URL}/briefs/${id}`, wycena, {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        })
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do admina!");
          utils.sendMail(
            e,
            "wyceny@roxart.pl",
            "Operator dodał nową wycenę: " + title,
            "Zaloguj się do aplikacji i przygotuj ofertę."
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_operatora === "zwrot_do_handlowca") {
      axios
        .put(
          `${API_URL}/briefs/${id}`,
          {
            wsp_statuss: "wersja_robocza",
            ...wycena
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do handlowca!");
          utils.sendMail(
            e,
            user.email,
            "Operator zwrócił briefa: " + title,
            "Zaloguj się do aplikacji i popraw go!"
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_animatora === "wycenione") {
      axios
        .put(`${API_URL}/briefs/${id}`, wycena, {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        })
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do admina!");
          utils.sendMail(
            e,
            "wyceny@roxart.pl",
            "Animator dodał nową wycenę: " + title,
            "Zaloguj się do aplikacji i przygotuj ofertę."
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else if (wycena.wsp_status_animatora === "zwrot_do_handlowca") {
      axios
        .put(
          `${API_URL}/briefs/${id}`,
          {
            wsp_statuss: "wersja_robocza",
            ...wycena
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(res => {
          this.showNotification("Wycena zapisana");
          this.fetchBriefs();
          console.log(res);
          console.log("Mail do handlowca!");
          utils.sendMail(
            e,
            user.email,
            "Animator zwrócił briefa: " + title,
            "Zaloguj się do aplikacji i popraw go!"
          );
        })
        .catch(error => {
          this.showNotification("Wystąpił błąd podczas wyceny: " + error);
          console.log(error);
        });
    } else {
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
        this.fetchBriefs();
        this.showNotification(
          "Zapisano poprawnie zmiany w: " + res.data.wsp_nazwa
        );
      })
      .catch(error => {
        this.showNotification("Wystąpił błąd zapisywania zmian w: " + error);
      });
  };

  allowEdit = (status, user) => {
    if (this.state.user.role.name === "Administrator") {
      return true;
    } else if (this.state.user.role.name === "Handlowiec") {
      if (this.state.user.email === user && status === "wersja_robocza") {
        return true;
      }
      return false;
    } else {
      return false;
    }
  };

  przekazDoWyceny = (e, id, title, kategoria) => {
    e.preventDefault();

    const currentDate = new Date();

    axios
      .put(
        `${API_URL}/briefs/${id}`,
        {
          wsp_statuss: "do_wyceny",
          wsp_status_grafika: "nie_wycenione",
          wsp_status_kodera: "nie_wycenione",
          wsp_status_operatora: "nie_wycenione",
          wsp_status_animatora: "nie_wycenione",
          wsp_status_grafika_date: currentDate,
          wsp_status_kodera_date: currentDate,
          wsp_status_operatora_date: currentDate,
          wsp_status_animatora_date: currentDate,
          wsp_przekazane_do_wyceny: currentDate
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        }
      )
      .then(res => {
        this.fetchBriefs();
        console.log(currentDate);
        this.showNotification("Przekazano do wyceny: " + res.data.wsp_nazwa);
        // if (kategoria === "Wideo") {
        //   console.log("Mail do operatora!");
        //   utils.sendMail(
        //     e,
        //     "maciej.o@roxart.pl",
        //     "Handlowiec przekazał briefa do wyceny: " + title,
        //     "Zaloguj się do aplikacji i wyceń!"
        //   );
        // } else if (kategoria === "Animacja") {
        //   console.log("Mail do animatora!");
        //   utils.sendMail(
        //     e,
        //     "szymon.a@roxart.pl",
        //     "Handlowiec przekazał briefa do wyceny: " + title,
        //     "Zaloguj się do aplikacji i wyceń!"
        //   );
        // } else {
        //   console.log("Mail do grafika!");
        //   utils.sendMail(
        //     e,
        //     "bartek.w@roxart.pl",
        //     "Handlowiec przekazał briefa do wyceny: " + title,
        //     "Zaloguj się do aplikacji i wyceń!"
        //   );
        // }
      })
      .catch(error => {
        this.showNotification("Błąd w zapisywaniu: " + error);
      });
  };

  allowEditWycena = (status, stanowisko) => {
    if (this.state.user.role.name === "Administrator") {
      return true;
    } else if (
      this.state.user.role.name === stanowisko &&
      status === "nie_wycenione"
    ) {
      return true;
    } else {
      return false;
    }
  };

  changeStatus = (e, id, status) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/briefs/${id}`, status, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(res => {
        this.fetchBriefs();
        this.showNotification("Status zmieniony na: " + status.wsp_statuss);
      })
      .catch(error => {
        this.showNotification("Wystąpił błąd zapisywania zmian w: " + error);
      });
  };

  fetchBriefs = () => {
    console.log("Fetch briefs");

    this.setState({ isFetching: true });

    setTimeout(() => {
      axios
        .get(
          `${API_URL}/briefs?_sort=wsp_pilne:DESC,wsp_przekazane_do_wyceny:ASC`,
          {
            headers: {
              Authorization: `Bearer ${this.state.userToken}`
            }
          }
        )
        .then(response => {
          const brief = response.data;
          this.setState({ brief, isFetching: false });
          console.log(response.data);
        })
        .catch(error => {
          console.log("An error occurred:", error);
          this.setState({ isFetching: false });
        });
    }, 300);

    // utils.displayNotification("Odświeżono briefy", {
    //   icon: "/roxart192.png"
    // });
  };

  fetchFiles = () => {
    console.log("Fetch files");

    setTimeout(() => {
      axios
        .get(`${API_URL}/pliks`, {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        })
        .then(response => {
          const plik = response.data;
          this.setState({ plik });
          console.log(response.data);
        })
        .catch(error => {
          console.log("An error occurred:", error);
        });
    }, 300);

    // utils.displayNotification("Odświeżono briefy", {
    //   icon: "/roxart192.png"
    // });
  };

  login = (e, userData) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/local`, {
        identifier: userData.login,
        password: userData.password
      })
      .then(response => {
        this.setState(() => ({
          userToken: response.data.jwt,
          user: response.data.user,
          isUserLogged: true
        }));
        Cookies.set("userToken", response.data.jwt);
        Cookies.set("userName", response.data.user.username);
        Cookies.set("userEmail", response.data.user.email);
        Cookies.set("userRole", response.data.user.role);
        Cookies.set("userID", response.data.user.id);

        // console.log("Set User:");
        // console.log(this.state.user);
        this.showNotification("Zalogowano jako: " + this.state.user.username);

        this.fetchBriefs();

        utils.displayNotification(
          "Zalogowano jako: " + this.state.user.username,
          {
            icon: "/roxart192.png"
          }
        );
      })
      .catch(error => {
        console.log("An error occurred:", error);
        this.showNotification("Błędne dane logowania!");
      });
  };

  logout = e => {
    this.setState({
      userToken: "",
      user: "",
      isUserLogged: false
    });
    Cookies.remove("userToken");
    Cookies.remove("userName");
    Cookies.remove("userEmail");
    Cookies.remove("userRole");
    Cookies.remove("userID");
    this.showNotification("Wylogowano");
    utils.displayNotification("Wylogowałeś się", {
      icon: "/roxart192.png"
    });
  };

  showNotification = content => {
    this.setState({
      notificationActive: true,
      notificationContent: content
    });
    setTimeout(() => {
      this.setState({ notificationActive: false });
    }, 2500);
  };

  render() {
    const contextElements = {
      ...this.state,
      showNotification: this.showNotification,
      filterList: this.filterList,
      fetchBriefs: this.fetchBriefs,
      fetchFiles: this.fetchFiles,
      installApp: this.installApp,
      addItem: this.addItem,
      removeItem: this.removeItem,
      editItem: this.editItem,
      login: this.login,
      logout: this.logout,
      wycen: this.wycen,
      przekazDoWyceny: this.przekazDoWyceny,
      changeStatus: this.changeStatus,
      allowEdit: this.allowEdit,
      allowEditWycena: this.allowEditWycena
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Theme>
            <GlobalStyle />
            <Sidebar />
            <PageWrapper>
              <TopBar />
              <PWAPrompt />
              <Notification isActive={this.state.notificationActive}>
                {this.state.notificationContent}
              </Notification>
              <Switch>
                <Route exact path={routes.briefs} component={BriefsView} />
                <Route
                  exact
                  path={routes.archive}
                  component={ArchiveBriefsView}
                />
                <Route exact path={routes.brief} component={SingleBriefView} />
                <Route exact path={routes.files} component={FilesView} />
                <Route exact path={routes.login} component={LoginView} />
                <Route exact path={routes.form} component={FormView} />
                <Redirect to={routes.login} />
              </Switch>
            </PageWrapper>
          </Theme>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
