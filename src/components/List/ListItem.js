import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Title from "../../components/Title/Title";
import Status from "../../components/Status/Status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import {
  handleMainStatus,
  handleStatus,
  checkStatus,
  checkValidDate
} from "../../utils/Utils";
import importantIcon from "../../assets/images/important.svg";

const ListItemCol = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => `${props.theme.colors.black}`};
`;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 5% 27% 12% 9% 9% 9% 9% 9% 9%;
  grid-auto-flow: row;
  width: 100%;
  align-items: center;
  border-top: 1px solid ${props => `${props.theme.colors.grey}`};
  background-color: ${props => `${props.theme.colors.white}`};
  > ${ListItemCol} {
    padding: 0 10px;
  }
  svg {
    margin-right: 5px;
  }
`;

const StyledDate = styled.p`
  color: ${props => `${props.theme.colors.darkGrey}`};
  font-size: 0.8em;
  line-height: 1;
  margin: 3px 0 0 0;
`;

class ListItem extends React.Component {
  render() {
    const { ...props } = this.props;

    const date = new Date(props.wsp_przekazane_do_wyceny);

    const twoDays =
      new Date(props.wsp_przekazane_do_wyceny).getTime() +
      2 * 24 * 60 * 60 * 1000;

    return checkStatus(props.wsp_statuss) === true ? null : (
      <StyledLink to={`/briefs/brief/${props.id}`}>
        <StyledListItem {...props}>
          <ListItemCol>
            {props.id}

            {props.wsp_pilne ? <img src={importantIcon} alt="" /> : null}
          </ListItemCol>
          <ListItemCol>
            <Title>{props.wsp_nazwa}</Title>
            <StyledDate>
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
            </StyledDate>
          </ListItemCol>
          <ListItemCol>{props.kategoria.name}</ListItemCol>
          <ListItemCol>{props.user ? props.user.username : null}</ListItemCol>
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
        </StyledListItem>
      </StyledLink>
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
