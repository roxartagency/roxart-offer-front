import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../context";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const ListItemCol = styled.div`
  padding: 0 10px;
  margin: 10px 0;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 8% 20% 15% 11% 15% 15% auto;
  grid-auto-flow: row;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid gray;
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  > ${ListItemCol} {
    padding: 0 10px;
  }
`;

class ListItem extends React.Component {
  render() {
    const {...props} = this.props;

    const date = new Date(props.created_at);

    return (
      <AppContext.Consumer>
        {context => (
          <StyledListItem>
            <ListItemCol>{props.id}</ListItemCol>
            <ListItemCol>
              <Title>{props.title}</Title>
            </ListItemCol>
            <ListItemCol>{props.user.username}</ListItemCol>
            <ListItemCol>{date.toLocaleDateString()}</ListItemCol>
            <ListItemCol>{props.status_grafika}</ListItemCol>
            <ListItemCol>{props.status_kodera}</ListItemCol>
            <ListItemCol>
              <Link to={`/${props.id}`}>
                <Button>Zobacz</Button>
              </Link>
            </ListItemCol>
          </StyledListItem>
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
