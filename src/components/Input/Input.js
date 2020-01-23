import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({tag: Tag, name, label, maxLength, ...props}) => (
  <div className={styles.formItem}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <Tag
      className={Tag === "textarea" ? styles.textarea : styles.input}
      type="text"
      name={name}
      id={name}
      maxLength={maxLength}
      placeholder=" "
      {...props}
    />

    {/* <div className={styles.formItemBar} /> */}
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  maxLength: PropTypes.number
};

Input.defaultProps = {
  tag: "input",
  maxLength: 200
};

export default Input;
