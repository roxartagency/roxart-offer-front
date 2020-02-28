import React from "react";
import AppContext from "../../context";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../components/PageTitle/PageTitle";

const NoItems = styled.h2`
  font-size: 1.2em;
  color: darkgrey;
  display: block;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 25px;
  text-align: center;
`;

class FormView extends React.Component {
  state = {};

  render() {
    return (
      <>
        <PageTitle>Wypełnij nowy Brief</PageTitle>
        <Form />
      </>
    );
  }
}

export default FormView;
