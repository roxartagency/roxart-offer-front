import React, {useContext} from "react";
import AppContext from "context";
import styles from "./Title.module.scss";

const Title = ({children}) => {
  const context = useContext(AppContext);
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
