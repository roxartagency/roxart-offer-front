import React from "react";
import AppContext from "../../context";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

class Form extends React.Component {
  static contextType = AppContext;

  state = {};

  componentDidMount() {}

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <FormWrapper>
            <StyledForm
              autoComplete="off"
              onSubmit={e => context.addItem(e, this.state)}>
              <Input
                onChange={this.handleInputChange}
                name="title"
                required
                value={this.state.title}
                label="Nazwa firmy"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="description"
                value={this.state.description}
                label="Adres"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="email"
                value={this.state.email}
                label="E-mail osoby kontaktowej"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="adres_url"
                value={this.state.adres_url}
                label="Jaki jest adres (URL) Twojej strony internetowej? (obecny lub planowany)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czym_zajmuje"
                value={this.state.czym_zajmuje}
                label="Czym zajmuje się Twoja firma?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="branza"
                value={this.state.branza}
                label="W jakiej branży działa Twoja firma?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="ile_lat"
                value={this.state.ile_lat}
                label="Ile lat Państwa firma jest na rynku i ilu zatrudnia pracowników?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jakie_produkty"
                value={this.state.jakie_produkty}
                marginBottom="30px"
                label="Jakie produkty/usługi oferuje Twoja firma swoim klientom?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="kim_sa_klienci"
                value={this.state.kim_sa_klienci}
                label="Kim są Twoi klienci (dotychczasowi lub potencjalni) oraz jaka jest grupa docelowa?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="konkurenci"
                value={this.state.konkurenci}
                label="Kim są główni konkurenci (lokalnie i globalnie)? (można podać adresy internetowe)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="budzet"
                value={this.state.budzet}
                label="Jaki jest określony budżet na realizację projektu netto?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czas_realizacji"
                value={this.state.czas_realizacji}
                label="Jaki jest określony czas zakończenia realizacji projektu?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="logo"
                value={this.state.logo}
                label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zalozenia"
                value={this.state.zalozenia}
                label="Jakie są założenia i podstawowy cel nowej strony internetowej?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="charakter"
                value={this.state.charakter}
                label="Jaki ma być charakter strony internetowej (sprzedażowa, wizerunkowa, informacyjna itp.)?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_cms"
                value={this.state.czy_cms}
                label="Czy strona ma mieć możliwość samodzielnej edycji treści strony lub jej elementów (system CMS)?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jezyk_podstawowy"
                value={this.state.jezyk_podstawowy}
                label="Jaki ma być podstawowy język strony?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jezyki_dodatkowe"
                value={this.state.jezyki_dodatkowe}
                label="Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="podstrony_menu"
                value={this.state.podstrony_menu}
                label="Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="liczba_podstron"
                value={this.state.liczba_podstron}
                label="Jaka jest orientacyjna liczba wszystkich podstron (mapa strony)?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="kolorystyka"
                value={this.state.kolorystyka}
                label="Jakie są Twoje oczekiwania co do kolorystyki strony?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="przyklady_stron"
                value={this.state.przyklady_stron}
                label="Przykłady istniejących stron internetowych, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="elementy"
                value={this.state.elementy}
                label="Elementy na istniejących stronach internetowych, które podobają się Tobie."
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zdjecia"
                value={this.state.zdjecia}
                label="Czy otrzymamy zdjęcia do strony?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="teksty"
                value={this.state.teksty}
                label="Czy otrzymamy teksty do strony?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="elementy_zewnetrzne"
                value={this.state.elementy_zewnetrzne}
                label="Elementy zewnętrzne do umieszczenia na stronie? (np. link do fanpage Facebook'a, link Youtube, itp.)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zaawansowana_funkcjonalnosc"
                value={this.state.zaawansowana_funkcjonalnosc}
                label="Czy strona ma mieć dodatkową zaawansowaną funkcjonalność? Jeśli tak to jaką?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_domena"
                value={this.state.czy_domena}
                label="Czy firma posiada wykupioną domenę (adres internetowy URL)?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_hosting"
                value={this.state.czy_hosting}
                label="Czy firma posiada wykupiony hosting/serwer (miejsce w którym znajdują się pliki strony)?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="uwagi"
                value={this.state.uwagi}
                label="Inne ważne uwagi:"
                marginBottom="30px"
              />
              <Button>Dodaj brief</Button>
            </StyledForm>
          </FormWrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

Form.contextType = AppContext;

export default Form;
