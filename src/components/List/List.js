import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

class List extends React.Component {
  render() {
    const {items} = this.props;

    return (
      <>
        {items.length ? (
          <ul className={styles.wrapper}>
            <li className={styles.listHead}>
              <p className={styles.id}>Numer ID</p>
              <p className={styles.title}>Nazwa firmy</p>
              <p className={styles.adres}>Adres firmy</p>
              <p className={styles.utworzono}>Data dodania</p>
              <p className={styles.status_grafika}>Status grafika</p>
              <p className={styles.status_kodera}>Status kodera</p>
              <p className={styles.link}>Działania</p>
            </li>
            {items.map(item => (
              <ListItem key={item.id} {...item} />
            ))}
          </ul>
        ) : (
          <h1 className={styles.noItems}>
            Brak wyników spełniających podane wymagania.
          </h1>
        )}
      </>
    );
  }
}

export default List;
