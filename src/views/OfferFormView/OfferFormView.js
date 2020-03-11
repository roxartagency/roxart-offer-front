import React from "react";
import AppContext from "../../context";
import Form from "../../components/organisms/Form/Form";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import Button from "../../components/atoms/Button/Button";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class OfferFormView extends React.Component {
  static contextType = AppContext;

  state = {
    kategoria: `1`
  };

  handleInputChange = e => {
    console.log(this.state);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <PageTitle>Dodaj nową ofertę</PageTitle>
            <Form onSubmit={e => context.addOffer(e, this.state)}>
              <Select
                name="kategoria"
                value={this.state.kategoria}
                onChange={this.handleInputChange}
                label="Kategoria oferty"
                marginbottom="30px">
                <option value="1">Social Media</option>
                <option value="2">SEO</option>
              </Select>
              <Input
                onChange={this.handleInputChange}
                name="ofe_nazwa"
                value={this.state.ofe_nazwa}
                label="Nazwa firmy"
                marginbottom="30px"
                required
              />
              <Input
                onChange={this.handleInputChange}
                name="ofe_adres"
                value={this.state.ofe_adres}
                label="Adres firmy"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="ofe_nip"
                value={this.state.ofe_nip}
                label="NIP firmy"
                marginbottom="30px"
              />
              <Input
                type="date"
                onChange={this.handleInputChange}
                name="ofe_wazna"
                value={this.state.ofe_wazna}
                label="Oferta ważna do:"
                marginbottom="30px"
              />
              <Button>
                <FontAwesomeIcon icon={faPlusCircle} size="1x" />
                Dodaj ofertę
              </Button>
            </Form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}
OfferFormView.contextType = AppContext;

export default OfferFormView;
