import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AppContext from "../../context";
import styles from "./ListItem.module.scss";
import Title from "../Title/Title";

class ListItem extends React.Component {
  render() {
    const {...props} = this.props;

    const date = new Date(props.created_at);

    return (
      <AppContext.Consumer>
        {context => (
          <li className={styles.wrapper}>
            <p>{props.id}</p>
            {/* <img
              src={
                props.image
                  ? "http://localhost:1337" + props.image.url
                  : "https://unsplash.it/200/200/"
              }
              className={styles.image}
              alt={props.title}
            /> */}
            <Title>{props.title}</Title>
            <p className={styles.description}>{props.description}</p>
            <p>{date.toLocaleDateString()}</p>
            <p>{props.status_grafika}</p>
            <p>{props.status_kodera}</p>
            <p>
              <Link className={styles.button} to={`briefs/${props.id}`}>
                Zobacz
              </Link>
            </p>
          </li>
        )}
      </AppContext.Consumer>
    );
  }
}

ListItem.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string
};

ListItem.defaultProps = {
  imageUrl: "https://via.placeholder.com/150",
  email: "test@deafult.pl"
};

export default ListItem;
