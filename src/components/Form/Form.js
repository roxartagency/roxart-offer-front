import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";


class Form extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
  
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => context.addItem(e, this.state)}>
              <Input
                onChange={this.handleInputChange}
                name="title"
                required
                value={this.state.title}
                label="Nazwa firmy"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="description"
                value={this.state.description}
                label="Adres"
              />
              <Input
                onChange={this.handleInputChange}
                name="email"
                value={this.state.email}
                label="E-mail osoby kontaktowej"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="adres_url"
                value={this.state.adres_url}
                label="Jaki jest adres (URL) Twojej strony internetowej? (obecny lub planowany)"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czym_zajmuje"
                value={this.state.czym_zajmuje}
                label="Czym zajmuje się Twoja firma?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="branza"
                value={this.state.branza}
                label="W jakiej branży działa Twoja firma?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="ile_lat"
                value={this.state.ile_lat}
                label="Ile lat Państwa firma jest na rynku i ilu zatrudnia pracowników?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jakie_produkty"
                value={this.state.jakie_produkty}
                label="Jakie produkty/usługi oferuje Twoja firma swoim klientom?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="kim_sa_klienci"
                value={this.state.kim_sa_klienci}
                label="Kim są Twoi klienci (dotychczasowi lub potencjalni) oraz jaka jest grupa docelowa?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="konkurenci"
                value={this.state.konkurenci}
                label="Kim są główni konkurenci (lokalnie i globalnie)? (można podać adresy internetowe)"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="budzet"
                value={this.state.budzet}
                label="Jaki jest określony budżet na realizację projektu netto?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czas_realizacji"
                value={this.state.czas_realizacji}
                label="Jaki jest określony czas zakończenia realizacji projektu?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="logo"
                value={this.state.logo}
                label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zalozenia"
                value={this.state.zalozenia}
                label="Jakie są założenia i podstawowy cel nowej strony internetowej?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="charakter"
                value={this.state.charakter}
                label="Jaki ma być charakter strony internetowej (sprzedażowa, wizerunkowa, informacyjna itp.)?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_cms"
                value={this.state.czy_cms}
                label="Czy strona ma mieć możliwość samodzielnej edycji treści strony lub jej elementów (system CMS)?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jezyk_podstawowy"
                value={this.state.jezyk_podstawowy}
                label="Jaki ma być podstawowy język strony?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="jezyki_dodatkowe"
                value={this.state.jezyki_dodatkowe}
                label="Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="podstrony_menu"
                value={this.state.podstrony_menu}
                label="Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="liczba_podstron"
                value={this.state.liczba_podstron}
                label="Jaka jest orientacyjna liczba wszystkich podstron (mapa strony)?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="kolorystyka"
                value={this.state.kolorystyka}
                label="Jakie są Twoje oczekiwania co do kolorystyki strony?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="przyklady_stron"
                value={this.state.przyklady_stron}
                label="Przykłady istniejących stron internetowych, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="elementy"
                value={this.state.elementy}
                label="Elementy na istniejących stronach internetowych, które podobają się Tobie."
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zdjecia"
                value={this.state.zdjecia}
                label="Czy otrzymamy zdjęcia do strony?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="teksty"
                value={this.state.teksty}
                label="Czy otrzymamy teksty do strony?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="elementy_zewnetrzne"
                value={this.state.elementy_zewnetrzne}
                label="Elementy zewnętrzne do umieszczenia na stronie? (np. link do fanpage Facebook'a, link Youtube, itp.)"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="zaawansowana_funkcjonalnosc"
                value={this.state.zaawansowana_funkcjonalnosc}
                label="Czy strona ma mieć dodatkową zaawansowaną funkcjonalność? Jeśli tak to jaką?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_domena"
                value={this.state.czy_domena}
                label="Czy firma posiada wykupioną domenę (adres internetowy URL)?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="czy_hosting"
                value={this.state.czy_hosting}
                label="Czy firma posiada wykupiony hosting/serwer (miejsce w którym znajdują się pliki strony)?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="uwagi"
                value={this.state.uwagi}
                label="Inne ważne uwagi:"
              />

              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
