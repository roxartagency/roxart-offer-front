import React from "react";
import styles from "./Notification.module.scss";

const Notification = props => (
  <div className={props.active ? styles.wrapper : styles.wrapperHide}>
    <p>{props.children}</p>
  </div>
);

export default Notification;
