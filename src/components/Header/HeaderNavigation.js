import React from "react";
import AppContext from "../../context";
import {NavLink} from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <AppContext.Consumer>
    {context => (
      <nav>
        <ul className={styles.wrapper}>
          <li className={styles.navItem}>
            {context.user.username ? (
              <NavLink
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink}
                to="/">
                Zalogowany jako: {context.user.username}
              </NavLink>
            ) : (
              <NavLink
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink}
                to="/">
                login
              </NavLink>
            )}
          </li>
          <li className={styles.navItem}>
            <NavLink
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/briefs">
              briefy
            </NavLink>
          </li>
        </ul>
      </nav>
    )}
  </AppContext.Consumer>
);

export default HeaderNavigation;
