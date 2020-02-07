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
  grid-template-columns: 5% 15% 10% 15% 11% 15% 15% auto;
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
              <Title>{props.wsp_nazwa}</Title>
            </ListItemCol>
            <ListItemCol>{props.kategoria.name}</ListItemCol>
            <ListItemCol>{props.user ? props.user.username : null}</ListItemCol>
            <ListItemCol>{date.toLocaleDateString()}</ListItemCol>
            <ListItemCol>
              {props.wsp_status_grafika === "nie_wycenione"
                ? "Nie wycenione"
                : null}
              {props.wsp_status_grafika === "zwrot_do_handlowca" ? "Zwrot" : null}
              {props.wsp_status_grafika === "wycenione" ? "Wycenione" : null}
            </ListItemCol>
            <ListItemCol>
              {props.wsp_status_kodera === "nie_wycenione" ? "Nie wycenione" : null}
              {props.wsp_status_kodera === "zwrot_do_handlowca" ? "Zwrot" : null}
              {props.wsp_status_kodera === "wycenione" ? "Wycenione" : null}
            </ListItemCol>
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
