import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AppContext from "context";
import styles from "./ListItem.module.scss";
import Title from "components/Title/Title";

class ListItem extends React.Component {
  render() {
    const {...props} = this.props;

    const date = new Date(props.created_at);

    return (
      <AppContext.Consumer>
        {context => (
          <li className={styles.wrapper}>
            <p>{props.id}</p>
            <Title>{props.title}</Title>
            <p>{props.user.username}</p>
            <p>{date.toLocaleDateString()}</p>
            <p>{props.status_grafika}</p>
            <p>{props.status_kodera}</p>
            <p>
              <Link className={styles.button} to={`/${props.id}`}>
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
