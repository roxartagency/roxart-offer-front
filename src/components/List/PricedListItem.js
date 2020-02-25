import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import Status from "../../components/Status/Status";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import {
  handleMainStatus,
  handleStatus,
  checkStatus,
  checkValidDate
} from "../../utils/Utils";

const ListItemCol = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  font-size: 14px;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 5% 14% 12% 9% 10% 8% 8% 8% 8% 8% auto;
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

class PricedListItem extends React.Component {
  render() {
    const { ...props } = this.props;

    const date = new Date(props.wsp_przekazane_do_wyceny);

    const twoDays =
      new Date(props.wsp_przekazane_do_wyceny).getTime() +
      2 * 24 * 60 * 60 * 1000;

    return checkStatus(props.wsp_statuss) === true ? (
      <StyledListItem>
        <ListItemCol>{props.id}</ListItemCol>
        <ListItemCol>
          <Title>{props.wsp_nazwa}</Title>
        </ListItemCol>
        <ListItemCol>{props.kategoria.name}</ListItemCol>
        <ListItemCol>{props.user ? props.user.username : null}</ListItemCol>
        <ListItemCol>
          {checkValidDate(
            twoDays,
            props.kategoria.name,
            props.wsp_status_grafika,
            props.wsp_status_kodera,
            props.wsp_status_operatora,
            props.wsp_status_animatora
          ) === true ? (
            <Status color="red">
              <FontAwesomeIcon icon={faExclamationCircle} size="1x" />
              {date.toLocaleString()}
            </Status>
          ) : (
            <Status>{date.toLocaleString()}</Status>
          )}
        </ListItemCol>
        <ListItemCol>{handleMainStatus(props.wsp_statuss)}</ListItemCol>
        <ListItemCol>
          {props.kategoria.name === "Wideo" ||
          props.kategoria.name === "Animacja" ? (
            <Status color="green">---</Status>
          ) : (
            handleStatus(props.wsp_status_grafika)
          )}
        </ListItemCol>
        <ListItemCol>
          {props.kategoria.name === "Strona internetowa" ||
          props.kategoria.name === "Sklep" ? (
            handleStatus(props.wsp_status_kodera)
          ) : (
            <Status color="green">---</Status>
          )}
        </ListItemCol>
        <ListItemCol>
          {props.kategoria.name === "Wideo" ? (
            handleStatus(props.wsp_status_operatora)
          ) : (
            <Status color="green">---</Status>
          )}
        </ListItemCol>
        <ListItemCol>
          {props.kategoria.name === "Animacja" ? (
            handleStatus(props.wsp_status_animatora)
          ) : (
            <Status color="green">---</Status>
          )}
        </ListItemCol>
        <ListItemCol>
          <Link to={`/briefs/brief/${props.id}`}>
            <Button>
              <FontAwesomeIcon icon={faEye} size="1x" />
              Zobacz
            </Button>
          </Link>
        </ListItemCol>
      </StyledListItem>
    ) : null;
  }
}

PricedListItem.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string
};

PricedListItem.defaultProps = {
  imageUrl: "https://via.placeholder.com/150",
  email: "test@deafult.pl"
};

export default PricedListItem;
