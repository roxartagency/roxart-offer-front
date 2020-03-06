import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Title from "../../atoms/Title/Title";
import Status from "../../atoms/Status/Status";
import {
  handleMainStatus,
  handleStatus,
  checkStatus,
  checkValidDate,
  showDate
} from "../../../utils/Utils";
import importantIcon from "../../../assets/images/important.gif";

const ListItemCol = styled.div`
  padding: 13px 15px 9px 15px;
  margin: 0;
  font-size: 0.8em;
  letter-spacing: -0.28px;
  color: ${props => `${props.theme.colors.darkGrey}`};
  position: relative;
  &:hover p {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => `${props.theme.colors.black}`};
`;

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 5% 24% 10% 11% 10% 10% 10% 10% 10%;
  grid-auto-flow: row;
  width: 100%;
  align-items: center;
  border-top: 1px solid ${props => `${props.theme.colors.grey}`};
  background-color: ${props => `${props.theme.colors.white}`};
  position: relative;
  transition: 0.2s ease-out all;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: ${props => `${props.theme.colors.lightGrey}`};
  }
  ${({ wsp_pilne }) =>
    wsp_pilne &&
    css`
      &::after {
        position: absolute;
        content: "";
        left: -14px;
        top: -2px;
        right: -14px;
        bottom: -1px;
        border: 2px solid #ff5c01;
        border-radius: 15px;
        z-index: 1;
        transition: 0.2s ease-out all;
      }
      &::before {
        position: absolute;
        content: "";
        left: -14px;
        top: -2px;
        right: -14px;
        bottom: -1px;
        border-radius: 15px;
        z-index: -1;
        transition: 0.2s ease-out all;
      }
      &:hover::before {
        background-color: ${props => `${props.theme.colors.lightGrey}`};
      }
    `}
`;

const StyledDate = styled.p`
  color: ${props => `${props.theme.colors.darkGrey}`};
  font-size: 0.9em;
  line-height: 1;
  margin: 3px 0 0 0;
`;

const ImportantIcon = styled.p`
  position: absolute;
  left: -35px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
`;

const BlackText = styled.span`
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 500;
`;

const DateTooltip = styled.p`
  position: absolute;
  opacity: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: ${props => `${props.theme.colors.black}`};
  padding: 5px 5px 2px 5px;
  background: ${props => `${props.theme.colors.lightGrey}`};
  font-size: 10px;
  border-radius: 5px;
  z-index: 1;
`;

class ListItem extends React.Component {
  render() {
    const { ...props } = this.props;

    const twoDays =
      new Date(props.wsp_przekazane_do_wyceny).getTime() +
      2 * 24 * 60 * 60 * 1000;

    return checkStatus(props.wsp_statuss) === true ? null : (
      <StyledLink to={`/briefs/briefs/brief/${props.id}`}>
        <StyledListItem {...props}>
          {props.wsp_pilne ? (
            <ImportantIcon>
              <img src={importantIcon} alt="" />
            </ImportantIcon>
          ) : null}
          <ListItemCol>
            <BlackText>{props.id}</BlackText>
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
                  Dodano: {showDate(props.wsp_przekazane_do_wyceny)}
                </Status>
              ) : (
                <>
                  <Status>
                    Dodano: {showDate(props.wsp_przekazane_do_wyceny)}
                  </Status>
                </>
              )}
            </StyledDate>
          </ListItemCol>
          <ListItemCol>
            <BlackText>{props.kategoria.name}</BlackText>
          </ListItemCol>
          <ListItemCol>{props.user ? props.user.username : null}</ListItemCol>
          <ListItemCol>{handleMainStatus(props.wsp_statuss)}</ListItemCol>
          <ListItemCol>
            {props.kategoria.name === "Wideo" ||
            props.kategoria.name === "Animacja" ? (
              <Status>nie dotyczy</Status>
            ) : (
              <>
                {handleStatus(props.wsp_status_grafika)}
                {/* <DateTooltip>
                  {showDate(props.wsp_status_grafika_date)}
                </DateTooltip> */}
              </>
            )}
          </ListItemCol>
          <ListItemCol>
            {props.kategoria.name === "Strona internetowa" ||
            props.kategoria.name === "Sklep" ? (
              handleStatus(props.wsp_status_kodera)
            ) : (
              <Status>nie dotyczy</Status>
            )}
          </ListItemCol>
          <ListItemCol>
            {props.kategoria.name === "Wideo" ? (
              handleStatus(props.wsp_status_operatora)
            ) : (
              <Status>nie dotyczy</Status>
            )}
          </ListItemCol>
          <ListItemCol>
            {props.kategoria.name === "Animacja" ? (
              handleStatus(props.wsp_status_animatora)
            ) : (
              <Status>nie dotyczy</Status>
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
