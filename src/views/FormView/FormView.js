import React from "react";
import Form from "../../components/organisms/Form/Form";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";

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
