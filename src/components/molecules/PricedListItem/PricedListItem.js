import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import Status from "../../atoms/Status/Status";
import {
  appLink,
  handleMainStatus,
  handleStatus,
  checkStatus,
  checkValidDate,
  showDate
} from "../../../utils/Utils";

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
`;

const StyledDate = styled.p`
  color: ${props => `${props.theme.colors.darkGrey}`};
  font-size: 0.9em;
  line-height: 1;
  margin: 3px 0 0 0;
`;

const BlackText = styled.span`
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 500;
`;

class PricedListItem extends React.Component {
  render() {
    const { ...props } = this.props;

    const twoDays =
      new Date(props.wsp_przekazane_do_wyceny).getTime() +
      2 * 24 * 60 * 60 * 1000;

    return checkStatus(props.wsp_statuss) === true ? (
      <StyledLink to={appLink + `/briefs/${props.id}`}>
        <StyledListItem {...props}>
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
