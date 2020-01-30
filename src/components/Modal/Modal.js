import React from "react";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import styled from "styled-components";

const StyledModal = styled.div`
  padding: 100px 40px 50px;
  top: 50%;
  transform: ${props => (props.active ? 'translateY(-50%)' : 'translateY(-45%)')};
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: auto;
  width: auto;
  height: 90vh;
  max-width: 700px;
  background-color: white;
  box-shadow: ${props => `${props.theme.boxShadow}`};
  position: fixed;
  transition: 0.2s ease-out all;
  z-index: ${props => (props.active ? 11 : -1)};
  opacity: ${props => (props.active ? 1 : 0)};
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  width: 27px;
  height: 27px;
  background: ${props => `${props.theme.colors.mainBlue}`};
  border: none;
  position: relative;
  cursor: pointer;


  &::after {
    content: "";
    width: 16px;
    height: 2px;
    position: absolute;
    background: white;
    display: block;
    top: 50%;
    transform: translateY(-50%)  rotate(45deg);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }

  &::before {
    content: "";
    width: 16px;
    height: 2px;
    position: absolute;
    background: white;
    display: block;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }
`;

const Modal = ({isActive, closeModalFn}) => (
  <StyledModal active={isActive === true ? true : false}>
    <Header>
      <Title>Wypełnij nowy brief</Title>
      <CloseButton onClick={closeModalFn} />
    </Header>
    <Form />
  </StyledModal>
);

export default Modal;
