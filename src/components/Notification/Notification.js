import React from "react";
import styled from "styled-components";

const StyledNotification = styled.div`
  position: fixed;
  top: 90px;
  right: 20px;
  max-width: 300px;
  background: #fff;
  padding: 25px 50px;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  z-index: ${props => (props.active ? 20 : -1)};
  display: block;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 0.2s ease-out all;
`;

const P = styled.p`
font-size: 13px;
  margin: 0;
  text-transform: uppercase;
`;

const Notification = ({ isActive, children }) => (
  <StyledNotification active={isActive === true ? true : false}>
    <P>{children}</P>
  </StyledNotification>
);

export default Notification;
