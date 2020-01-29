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
            <NavLink
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/">
              briefy
            </NavLink>
          </li>

          {context.user.username ? (
            <>
              <li className={styles.navItem + " " + styles.navItem_logged}>
                <p onClick={e => context.logout(e)}>
                  Wyloguj: {context.user.username}
                </p>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    )}
  </AppContext.Consumer>
);

export default HeaderNavigation;
