import React from "react";
import Button from "components/Button/Button";
import HeaderNavigation from "components/Header/HeaderNavigation";
import AppContext from "context";
import styles from "./Header.module.scss";
import logoImage from "assets/images/logo.svg";

const Header = ({openModalFn}) => (
  <AppContext.Consumer>
    {context => (
      <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt="Roxart logo" />
        <HeaderNavigation />
        <div className={styles.buttons}>
          {context.user.username ? (
            <>
              <Button onClick={e => context.fetchBriefs(e)} secondary>
                Odśwież briefy
              </Button>
              {context.user.role.name === "Administrator" ||
              context.user.role.name === "Handlowiec" ? (
                <>
                  <Button onClick={openModalFn} secondary>
                    Dodaj nowy brief
                  </Button>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </header>
    )}
  </AppContext.Consumer>
);

export default Header;
