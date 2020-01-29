import React from "react";
import styles from "./Modal.module.scss";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";

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
