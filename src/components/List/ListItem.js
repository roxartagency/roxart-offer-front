import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faGlobe, faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {handleStatus} from "../../utils/Utils";

const ListItemCol = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  font-size: 14px;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 5% 15% 13% 10% 11% 15% 15% auto;
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
  svg {
    margin-right: 5px;
  }
`;

class ListItem extends React.Component {
  render() {
    const {...props} = this.props;

    const date = new Date(props.created_at);

    return (
      <StyledListItem>
        <ListItemCol>{props.id}</ListItemCol>
        <ListItemCol>
          <Title>{props.wsp_nazwa}</Title>
        </ListItemCol>
        <ListItemCol>
          {props.kategoria.name === "Strona internetowa" ? (
            <FontAwesomeIcon icon={faGlobe} size="1x" />
          ) : null}
          {props.kategoria.name === "Katalog" ? (
            <FontAwesomeIcon icon={faBookOpen} size="1x" />
          ) : null}
          {props.kategoria.name}
        </ListItemCol>
        <ListItemCol>{props.user ? props.user.username : null}</ListItemCol>
        <ListItemCol>{date.toLocaleDateString()}</ListItemCol>
        <ListItemCol>{handleStatus(props.wsp_status_grafika)}</ListItemCol>
        <ListItemCol>{handleStatus(props.wsp_status_kodera)}</ListItemCol>
        <ListItemCol>
          <Link to={`/brief/${props.id}`}>
            <Button>
              <FontAwesomeIcon icon={faEye} size="1x" />
              Zobacz
            </Button>
          </Link>
        </ListItemCol>
      </StyledListItem>
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
