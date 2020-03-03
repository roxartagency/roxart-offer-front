import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const StyledNotification = styled.div`
  position: fixed;
  top: 90px;
  right: 20px;
  max-width: 300px;
  background: #fff;
  padding: 25px 50px;
  text-align: center;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  z-index: ${props => (props.active ? 20 : -1)};
  display: block;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 0.2s ease-out all;
  transform: ${props =>
    props.active ? "translateX(0px)" : "translateX(50px)"};
`;

const P = styled.p`
  font-size: 13px;
  margin: 0;
  text-transform: uppercase;
  svg {
    margin-right: 5px;
  }
`;

const Notification = ({isActive, children}) => (
  <StyledNotification active={isActive === true ? true : false}>
    <P>
      <FontAwesomeIcon icon={faExclamationCircle} size="1x" />
      {children}
    </P>
  </StyledNotification>
);

export default Notification;
