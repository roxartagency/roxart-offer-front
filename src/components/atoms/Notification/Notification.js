import React from "react";
import styled from "styled-components";

const StyledNotification = styled.div`
  position: fixed;
  bottom: 64px;
  right: 64px;
  max-width: 300px;
  border-radius: 15px;
  background: ${props => `${props.theme.colors.greyBg}`};
  color: ${props => `${props.theme.colors.white}`};
  padding: 25px 50px;
  text-align: center;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  z-index: ${props => (props.active ? 20 : -1)};
  display: block;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 0.2s ease-out all;
  transform: ${props =>
    props.active ? "translateX(0px)" : "translateX(50px)"};
  @media (max-width: 1400px) {
    bottom: 32px;
    right: 32px;
  }
`;

const P = styled.p`
  font-size: 13px;
  margin: 0;
  svg {
    margin-right: 5px;
  }
`;

const Notification = ({ isActive, children }) => (
  <StyledNotification active={isActive === true ? true : false}>
    <P>{children}</P>
  </StyledNotification>
);

export default Notification;
