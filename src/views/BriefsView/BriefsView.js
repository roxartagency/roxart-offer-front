import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";
import styles from "./BriefsView.module.scss";

class BriefsView extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.brief.length ? (
              <>
                <div className={styles.filters}>
                  <div className={styles.singleFilter}>
                    <label htmlFor="title">Filtruj po nazwie firmy:</label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Szukaj"
                      name="title"
                      onChange={e => context.filterList(e)}
                    />
                  </div>
                </div>
                <List
                  items={
                    context.filterActive === true
                      ? context.filteredBrief
                      : context.brief
                  }
                />
              </>
            ) : (
              <h1 className={styles.noItems}>
                Zaloguj się aby uzyskać dostęp do briefów.
              </h1>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

BriefsView.contextType = AppContext;

export default BriefsView;
