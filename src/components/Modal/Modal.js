import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import Title from "../Title/Title";

const Modal = ({closeModalFn}) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <Title>Wypełnij nowy brief</Title>
      <button className={styles.closeButton} onClick={closeModalFn} />
    </div>
    <Form />
  </div>
);

export default Modal;
