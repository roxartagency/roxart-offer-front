import React from "react";
import AppContext from "../../context";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import { handleMainStatus, handleStatus, showDate } from "../../utils/Utils";
import styled from "styled-components";
// import StronaBriefContent from "./StronaBriefContent";
// import KatalogBriefContent from "./KatalogBriefContent";
// import LogoBriefContent from "./LogoBriefContent";
// import WideoBriefContent from "./WideoBriefContent";
// import SklepBriefContent from "./SklepBriefContent";
// import AnimacjaBriefContent from "./AnimacjaBriefContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSave
} from "@fortawesome/free-solid-svg-icons";

const BriefWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  max-width: 990px;
  margin: auto;
  box-shadow: ${props => `${props.theme.boxShadow}`};
`;

const Row = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 100%;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: 700;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const Content = styled.span`
  padding: 0 20px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  max-width: 200px;
  text-align: center;
  font-size: 10px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 500;
  background: #fff;
  border: ${props => `2px solid ${props.theme.colors.mainBlue}`};
  color: ${props => `${props.theme.colors.mainBlue}`};
  cursor: pointer;
  margin-right: 5px;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  &:hover {
    background: ${props => `${props.theme.colors.mainBlue}`};
    color: #fff;
  }
  svg {
    margin-right: 5px;
  }
`;

class SingleBriefView extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    const { match } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.brief.map(item => (
              <>
                {context.user.username ? (
                  <>
                    {item.id == match.params.id ? (
                      <BriefWrapper key={item.id}>
                        <form
                          id="editBrief"
                          autoComplete="off"
                          className=""
                          onSubmit={e =>
                            context.editItem(e, match.params.id, this.state)
                          }>
                          <Row>
                            <Label>Id:</Label>
                            <Content>{match.params.id}</Content>
                          </Row>
                          <Row>
                            <Label>Kategoria:</Label>
                            <Content>{item.kategoria.name}</Content>
                          </Row>
                          <Row>
                            <Label>Utworzono:</Label>
                            <Content>{showDate(item.created_at)}</Content>
                          </Row>
                          <Row>
                            <Label>Przekazano do wyceny:</Label>
                            <Content>
                              {showDate(item.wsp_przekazane_do_wyceny)}
                            </Content>
                          </Row>
                          {item.user ? (
                            <Row>
                              <Label>Dodane przez:</Label>
                              <Content>{item.user.email}</Content>
                            </Row>
                          ) : null}

                          <Row>
                            <Label>Nazwa firmy:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_nazwa"
                                  defaultValue={item.wsp_nazwa}
                                />
                              ) : (
                                item.wsp_nazwa
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres firmy:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_adres"
                                  defaultValue={item.wsp_adres}
                                />
                              ) : (
                                item.wsp_adres
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>NIP firmy:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_nip"
                                  defaultValue={item.wsp_nip}
                                />
                              ) : (
                                item.wsp_nip
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Imię i nazwisko osoby kontaktowej:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_osoba"
                                  defaultValue={item.wsp_osoba}
                                />
                              ) : (
                                item.wsp_osoba
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Numer telefonu osoby kontaktowej:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_telefon"
                                  defaultValue={item.wsp_telefon}
                                />
                              ) : (
                                item.wsp_telefon
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres e-mail osoby kontaktowej:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_email"
                                  defaultValue={item.wsp_email}
                                />
                              ) : (
                                item.wsp_email
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest adres (URL) Twojej strony internetowej?
                              (obecny lub planowany):
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_adres_url"
                                  tag="textarea"
                                  defaultValue={item.wsp_adres_url}
                                />
                              ) : (
                                item.wsp_adres_url
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Czym zajmuje się Twoja firma?</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_czym_zajmuje"
                                  tag="textarea"
                                  defaultValue={item.wsp_czym_zajmuje}
                                />
                              ) : (
                                item.wsp_czym_zajmuje
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>W jakiej branży działa Twoja firma?</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_branza"
                                  tag="textarea"
                                  defaultValue={item.wsp_branza}
                                />
                              ) : (
                                item.wsp_branza
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Ile lat Państwa firma jest na rynku i ilu
                              zatrudnia pracowników?
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_ile_lat"
                                  tag="textarea"
                                  defaultValue={item.wsp_ile_lat}
                                />
                              ) : (
                                item.wsp_ile_lat
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie produkty/usługi oferuje Twoja firma swoim
                              klientom?
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_jakie_produkty"
                                  tag="textarea"
                                  defaultValue={item.wsp_jakie_produkty}
                                />
                              ) : (
                                item.wsp_jakie_produkty
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są Twoi klienci (dotychczasowi lub
                              potencjalni) oraz jaka jest grupa docelowa?
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_kim_sa_klienci"
                                  tag="textarea"
                                  defaultValue={item.wsp_kim_sa_klienci}
                                />
                              ) : (
                                item.wsp_kim_sa_klienci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są główni konkurenci (lokalnie i globalnie)?
                              (można podać adresy internetowe)
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_konkurenci"
                                  tag="textarea"
                                  defaultValue={item.wsp_konkurenci}
                                />
                              ) : (
                                item.wsp_konkurenci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony budżet na realizację projektu
                              netto?
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_budzet"
                                  tag="textarea"
                                  defaultValue={item.wsp_budzet}
                                />
                              ) : (
                                item.wsp_budzet
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony czas zakończenia realizacji
                              projektu?
                            </Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_czas_realizacji"
                                  tag="textarea"
                                  defaultValue={item.wsp_czas_realizacji}
                                />
                              ) : (
                                item.wsp_czas_realizacji
                              )}
                            </Content>
                          </Row>

                          {item.kategoria.id === 1 ? (
                            <>
                              <Row>
                                <Label>
                                  Czy firma posiada logo? Jeśli tak, czy firma
                                  posiada logo w formie pliku wektorowego oraz
                                  księgę znaku?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_logo"
                                      tag="textarea"
                                      defaultValue={item.str_logo}
                                    />
                                  ) : (
                                    item.str_logo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są założenia i podstawowy cel nowej
                                  strony internetowej?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_zalozenia"
                                      tag="textarea"
                                      defaultValue={item.str_zalozenia}
                                    />
                                  ) : (
                                    item.str_zalozenia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być charakter strony internetowej
                                  (sprzedażowa, wizerunkowa, informacyjna itp.)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_charakter"
                                      tag="textarea"
                                      defaultValue={item.str_charakter}
                                    />
                                  ) : (
                                    item.str_charakter
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy strona ma mieć możliwość samodzielnej
                                  edycji treści strony lub jej elementów (system
                                  CMS)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_czy_cms"
                                      tag="textarea"
                                      defaultValue={item.str_czy_cms}
                                    />
                                  ) : (
                                    item.str_czy_cms
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być podstawowy język strony?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_jezyk_podstawowy"
                                      tag="textarea"
                                      defaultValue={item.str_jezyk_podstawowy}
                                    />
                                  ) : (
                                    item.str_jezyk_podstawowy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy strona posiadać dodatkowe języki? Jeśli
                                  tak, to jakie?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_jezyki_dodatkowe"
                                      tag="textarea"
                                      defaultValue={item.str_jezyki_dodatkowe}
                                    />
                                  ) : (
                                    item.str_jezyki_dodatkowe
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie mają być główne podstrony menu/zakładki
                                  w nawigacji górnej?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_podstrony_menu"
                                      tag="textarea"
                                      defaultValue={item.str_podstrony_menu}
                                    />
                                  ) : (
                                    item.str_podstrony_menu
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka jest orientacyjna liczba wszystkich
                                  podstron (mapa strony)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_liczba_podstron"
                                      tag="textarea"
                                      defaultValue={item.str_liczba_podstron}
                                    />
                                  ) : (
                                    item.str_liczba_podstron
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są Twoje oczekiwania co do kolorystyki
                                  strony?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_kolorystyka"
                                      tag="textarea"
                                      defaultValue={item.str_kolorystyka}
                                    />
                                  ) : (
                                    item.str_kolorystyka
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Przykłady istniejących stron internetowych,
                                  które podobają się Tobie. Podaj minimum trzy
                                  przykłady. (nie muszą być związane z branżą)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_przyklady_stron"
                                      tag="textarea"
                                      defaultValue={item.str_przyklady_stron}
                                    />
                                  ) : (
                                    item.str_przyklady_stron
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy na istniejących stronach
                                  internetowych, które podobają się Tobie.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_elementy"
                                      tag="textarea"
                                      defaultValue={item.str_elementy}
                                    />
                                  ) : (
                                    item.str_elementy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>Czy otrzymamy zdjęcia do strony?</Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_zdjecia"
                                      tag="textarea"
                                      defaultValue={item.str_zdjecia}
                                    />
                                  ) : (
                                    item.str_zdjecia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>Czy otrzymamy teksty do strony?</Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_teksty"
                                      tag="textarea"
                                      defaultValue={item.str_teksty}
                                    />
                                  ) : (
                                    item.str_teksty
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy zewnętrzne do umieszczenia na
                                  stronie? (np. link do fanpage Facebook'a, link
                                  Youtube, itp.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_elementy_zewnetrzne"
                                      tag="textarea"
                                      defaultValue={
                                        item.str_elementy_zewnetrzne
                                      }
                                    />
                                  ) : (
                                    item.str_elementy_zewnetrzne
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy strona ma mieć dodatkową zaawansowaną
                                  funkcjonalność? Jeśli tak to jaką?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_zaawansowana_funkcjonalnosc"
                                      tag="textarea"
                                      defaultValue={
                                        item.str_zaawansowana_funkcjonalnosc
                                      }
                                    />
                                  ) : (
                                    item.str_zaawansowana_funkcjonalnosc
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada wykupioną domenę (adres
                                  internetowy URL)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_czy_domena"
                                      tag="textarea"
                                      defaultValue={item.str_czy_domena}
                                    />
                                  ) : (
                                    item.str_czy_domena
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada wykupiony hosting/serwer
                                  (miejsce w którym znajdują się pliki strony)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="str_czy_hosting"
                                      tag="textarea"
                                      defaultValue={item.str_czy_hosting}
                                    />
                                  ) : (
                                    item.str_czy_hosting
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          {item.kategoria.id === 2 ? (
                            <>
                              <Row>
                                <Label>
                                  Czy firma posiada logo? (Jeśli tak, czy firma
                                  posiada logo w formie pliku wektorowego oraz
                                  czy macie do logo wykonaną księgę znaku?)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_czy_logo"
                                      tag="textarea"
                                      defaultValue={item.kat_czy_logo}
                                    />
                                  ) : (
                                    item.kat_czy_logo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma obecnie posiada katalog? Jeśli tak,
                                  prosimy o link do wersji online lub o
                                  przesłanie pliku w załączniku.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_czy_katalog"
                                      tag="textarea"
                                      defaultValue={item.kat_czy_katalog}
                                    />
                                  ) : (
                                    item.kat_czy_katalog
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy katalog ma być przygotowany do druku? lub
                                  Czy katalog ma być przygotowany tylko na
                                  potrzeby internetu? Posiadamy w standardzie
                                  przygotowanie wersji do druku oraz internetu,
                                  gdy podstawowe przygotowanie jest do druku.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_czy_do_druku"
                                      tag="textarea"
                                      defaultValue={item.kat_czy_do_druku}
                                    />
                                  ) : (
                                    item.kat_czy_do_druku
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy wybrali już Państwo drukarnię do wydruku
                                  katalogów? Jaki nakład katalogów jest
                                  przewidywany? Prosimy o podanie ilość sztuk.
                                  Jeśli będzie to np. tylko 10 sztuk to katalog
                                  może być inaczej przygotowany do druku. Jeśli
                                  wydruk ma być niestandardowy, będziemy
                                  potrzebować wytycznych od drukarni tuż przed
                                  rozpoczęciem projektowania.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_drukarnia_naklad"
                                      tag="textarea"
                                      defaultValue={item.kat_drukarnia_naklad}
                                    />
                                  ) : (
                                    item.kat_drukarnia_naklad
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Jaki format powinien mieć katalog?
                                  Standardowe formaty: A4, A5, A6, kwadrat.
                                  Jeśli inny, prosimy podać dokładne wymiary.
                                  (Miej na uwadze: Jeśli format będzie inny niż
                                  standardowy to koszy wydruku mogą wzrosnąć
                                  nawet 100%)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_format"
                                      tag="textarea"
                                      defaultValue={item.kat_format}
                                    />
                                  ) : (
                                    item.kat_format
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka będzie orientacja katalogu? (pionowa,
                                  pozioma, kwadrat, inna?)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_orientacja"
                                      tag="textarea"
                                      defaultValue={item.kat_orientacja}
                                    />
                                  ) : (
                                    item.kat_orientacja
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Czy przewidują Państwo uszlachetnienie
                                  lakierem wybiórczym np. na okładce lub innych
                                  stronach? (Jeśli tak, opracujemy dla drukarni
                                  makietę z wybranymi elementami, które mają być
                                  lakierowane)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_uszlachetnienie"
                                      tag="textarea"
                                      defaultValue={item.kat_uszlachetnienie}
                                    />
                                  ) : (
                                    item.kat_uszlachetnienie
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Ile stron powinien zawierać katalog? Aby
                                  katalog został wydrukowany i złożony, ilość
                                  stron musi być podzielna przez 4. Przykład: 8
                                  stron czyli 4 strony okładki + 4 strony
                                  środka. (Przykłady standardowych rozmiarów
                                  stron: 8, 12, 16, 20, 24, 28, 32, 36, 40, 44,
                                  48, 52 … 88, 92,96, 100)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_ile_stron"
                                      tag="textarea"
                                      defaultValue={item.kat_ile_stron}
                                    />
                                  ) : (
                                    item.kat_ile_stron
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Jaki jest cel nowego katalogu? Prosimy opisać
                                  jakie mają Państwo oczekiwania co do katalogu,
                                  co będzie zawierał, jakie ma spełnić zadania i
                                  do czego będzie służył. ( Przykład: katalog
                                  będzie służ przedstawicielom na spotkaniach z
                                  klientem oraz na targach. będzie zawierał
                                  informacje o firmie jej historia i strukturę.
                                  Przedstawimy koło 20 najlepszych produktów z
                                  dokładnym podziałem na 3 kategorie. Każdy
                                  produkt będzie zawierał dokładny opis zdjęcie
                                  warianty i cennik. Chcemy zamieścić referencje
                                  i loga partnerów, mapkę dojazdu galerię
                                  zdjęć.).
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_cel"
                                      tag="textarea"
                                      defaultValue={item.kat_cel}
                                    />
                                  ) : (
                                    item.kat_cel
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy katalog ma nawiązywać do strony
                                  internetowej lub sklepu internetowego? Jeśli
                                  tak, prosimy opisać pod jakim względem.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_nawiazanie"
                                      tag="textarea"
                                      defaultValue={item.kat_nawiazanie}
                                    />
                                  ) : (
                                    item.kat_nawiazanie
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *W jakim języku będą treści do katalogu? Lub
                                  Czy katalog będzie zawierał kilka języków w
                                  jednym katalogu?Jeśli tak prosimy podać w
                                  jakich.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_jezyk_podstawowy"
                                      tag="textarea"
                                      defaultValue={item.kat_jezyk_podstawowy}
                                    />
                                  ) : (
                                    item.kat_jezyk_podstawowy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Czy katalog również ma być projektowany w
                                  innych językach niż standardowy? Jeśli tak to
                                  w jakim jeszcze.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_jezyki_obce"
                                      tag="textarea"
                                      defaultValue={item.kat_jezyki_obce}
                                    />
                                  ) : (
                                    item.kat_jezyki_obce
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Czy katalog będzie zawierał
                                  tabele/cenniki/itp.? (Jeśli tak prosimy opisać
                                  i podać orientacyjną ilość tabel, orientacyjną
                                  ilość wierszy i kolumn w każdej z nich)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_czy_tabele"
                                      tag="textarea"
                                      defaultValue={item.kat_czy_tabele}
                                    />
                                  ) : (
                                    item.kat_czy_tabele
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Przykłady istniejących katalogów, które się
                                  Państwu podobają. Podaj minimum trzy
                                  przykłady. (Nie muszą być związane z branżą.
                                  Prosimy podać adres url lub nazwę katalogu
                                  oraz wysłać go do nas mailem) Chcemy poznać
                                  Państwa gust.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_przyklady"
                                      tag="textarea"
                                      defaultValue={item.kat_przyklady}
                                    />
                                  ) : (
                                    item.kat_przyklady
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy na istniejących katalogach, które się
                                  Państwu podobają. Prosimy o wskazanie co się
                                  Państwu w nich podoba.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_elementy"
                                      tag="textarea"
                                      defaultValue={item.kat_elementy}
                                    />
                                  ) : (
                                    item.kat_elementy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Na jakim etapie gromadzenia materiałów do
                                  katalogu są Państwo? (Przykład: jesteśmy w
                                  połowie pisania treści resztę mamy
                                  przygotowane / wszystko mamy gotowe, tylko
                                  projektować)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_etap"
                                      tag="textarea"
                                      defaultValue={item.kat_etap}
                                    />
                                  ) : (
                                    item.kat_etap
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Czy otrzymamy zdjęcia do katalogu przed
                                  realizacją? Koniecznie w dobrej jakości,
                                  nadającej się pod wydruk.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_zdjecia"
                                      tag="textarea"
                                      defaultValue={item.kat_zdjecia}
                                    />
                                  ) : (
                                    item.kat_zdjecia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Czy otrzymamy teksty do katalogu przed
                                  projektowaniem w docelowej wersji? (Jeśli nie
                                  to w jakiej jakości i proszę opisać) Jeśli
                                  treści będą dostarczone później, proces
                                  projektowania może się wydłużyć dwukrotnie. *
                                  Po otrzymaniu docelowych treści nie ma
                                  możliwości całkowitej zmiany tekstu na etapie
                                  projektowania. Istnieje możliwość korekty
                                  przesłanych treści (literówki, przecinki,
                                  stylistyka).
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_teksty"
                                      tag="textarea"
                                      defaultValue={item.kat_teksty}
                                    />
                                  ) : (
                                    item.kat_teksty
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  *Jakie dodatkowe materiały do projektowania
                                  dostaniemy? Np. loga firm, hasła reklamowe,
                                  itp. które są niezbędne do zrealizowania
                                  projektu.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_materialy"
                                      tag="textarea"
                                      defaultValue={item.kat_materialy}
                                    />
                                  ) : (
                                    item.kat_materialy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy potrzebują Państwo pliki edytowalne
                                  (źródłowe)? (Jeśli tak, prosimy określić w
                                  jakim programie mamy przygotować katalog:
                                  InDesign, CorelDraw, Illustrator. Jeśli
                                  katalog będzie miał powyżej 20 stron:
                                  InDesign, CorelDraw. Jeśli zależy Państwu na
                                  programie CorelDraw, prosimy określić wersję
                                  (np. wersja 15, 16, 17).) W standardzie
                                  przygotowujemy projekty wyłącznie do druku i
                                  internetu.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_pliki"
                                      tag="textarea"
                                      defaultValue={item.kat_pliki}
                                    />
                                  ) : (
                                    item.kat_pliki
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Prosimy podać inne dodatkowe informacje, które
                                  mogą okazać się przydatne na etapie wyceny
                                  (Czy mamy wykonać rysunki konturowe zamiast
                                  zdjęć? Rysunki techniczne, obrys produktu,
                                  itp.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="kat_dodatkowe"
                                      tag="textarea"
                                      defaultValue={item.kat_dodatkowe}
                                    />
                                  ) : (
                                    item.kat_dodatkowe
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          {item.kategoria.id === 3 ? (
                            <>
                              <Row>
                                <Label>
                                  Czego ma dotyczyć projekt: Zaprojektowanie
                                  nowego logo / Delikatne odświeżenie znaku /
                                  Zupełne przeprojektowanie logo
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_projekt"
                                      tag="textarea"
                                      defaultValue={item.logo_projekt}
                                    />
                                  ) : (
                                    item.logo_projekt
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka dokładna nazwa ma się znajdować w logo?
                                  np. ROXART
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_nazwa"
                                      tag="textarea"
                                      defaultValue={item.logo_nazwa}
                                    />
                                  ) : (
                                    item.logo_nazwa
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy ma być dodatkowy podpis do głównej nazwy?
                                  np. Agencja Reklamowa
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_podpis"
                                      tag="textarea"
                                      defaultValue={item.logo_podpis}
                                    />
                                  ) : (
                                    item.logo_podpis
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Ile propozycji logotypów mamy przygotować? 1,
                                  3, 6, więcej?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_propozycje"
                                      tag="textarea"
                                      defaultValue={item.logo_propozycje}
                                    />
                                  ) : (
                                    item.logo_propozycje
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy mamy przygotować księgę znaku? opis budowy
                                  logo i przykłady jak należy stosować znak dla
                                  prawidłowego używania
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_ksiegalogo_typlogo"
                                      tag="textarea"
                                      defaultValue={
                                        item.logo_ksiegalogo_typlogo
                                      }
                                    />
                                  ) : (
                                    item.logo_ksiegalogo_typlogo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  1. Typografia 2. Inicjały 3. Symbol lub Ikona
                                  4. Kombinacja znak + ikona 5. Emblemat 6.
                                  Inne. Podaj przykład innego. Wybieram typ logo
                                  numer:
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_typlogo"
                                      tag="textarea"
                                      defaultValue={item.logo_typlogo}
                                    />
                                  ) : (
                                    item.logo_typlogo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są Państwa preferencje kolorystyczne,
                                  które chcielibyście użyć w logo?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_preferencje"
                                      tag="textarea"
                                      defaultValue={item.logo_preferencje}
                                    />
                                  ) : (
                                    item.logo_preferencje
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Gdzie Państwa logo będzie używane? (druk,
                                  serwis www, inne)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_gdzie"
                                      tag="textarea"
                                      defaultValue={item.logo_gdzie}
                                    />
                                  ) : (
                                    item.logo_gdzie
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki jest najważniejszy nośnik, na którym
                                  Państwa logo będzie prezentowane?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_nosnik"
                                      tag="textarea"
                                      defaultValue={item.logo_nosnik}
                                    />
                                  ) : (
                                    item.logo_nosnik
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Przykłady istniejących logo, które podobają
                                  się Tobie. Podaj minimum trzy przykłady. (nie
                                  muszą być związane z branżą)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_przyklady"
                                      tag="textarea"
                                      defaultValue={item.logo_przyklady}
                                    />
                                  ) : (
                                    item.logo_przyklady
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Proszę podać inne dodatkowe informacje, które
                                  mogą okazać się przydatne w projektowaniu
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="logo_dodatkowe"
                                      tag="textarea"
                                      defaultValue={item.logo_dodatkowe}
                                    />
                                  ) : (
                                    item.logo_dodatkowe
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          {item.kategoria.id === 4 ? (
                            <>
                              <Row>
                                <Label>
                                  Czy firma posiada logo? Jeśli tak, czy firma
                                  posiada logo w formie pliku wektorowego oraz
                                  księgę znaku?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_logo"
                                      tag="textarea"
                                      defaultValue={item.skl_logo}
                                    />
                                  ) : (
                                    item.skl_logo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są założenia i podstawowy cel sklepu
                                  internetowego?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_zalozenia"
                                      tag="textarea"
                                      defaultValue={item.skl_zalozenia}
                                    />
                                  ) : (
                                    item.skl_zalozenia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być podstawowy język sklepu?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_jezyk_podstawowy"
                                      tag="textarea"
                                      defaultValue={item.skl_jezyk_podstawowy}
                                    />
                                  ) : (
                                    item.skl_jezyk_podstawowy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy sklep ma posiadać dodatkowe języki? Jeśli
                                  tak, to jakie?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_jezyki_dodatkowe"
                                      tag="textarea"
                                      defaultValue={item.skl_jezyki_dodatkowe}
                                    />
                                  ) : (
                                    item.skl_jezyki_dodatkowe
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie elementy, funkcjonalności powinny
                                  pojawić się na stronie głównej sklepu?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_strona_glowna"
                                      tag="textarea"
                                      defaultValue={item.skl_strona_glowna}
                                    />
                                  ) : (
                                    item.skl_strona_glowna
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie mają być główne podstrony menu/zakładki
                                  w nawigacji górnej?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_podstrony_menu"
                                      tag="textarea"
                                      defaultValue={item.skl_podstrony_menu}
                                    />
                                  ) : (
                                    item.skl_podstrony_menu
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka jest orientacyjna liczba wszystkich
                                  kategorii oraz podkategorii? (mapa sklepu)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_liczba_kategorii"
                                      tag="textarea"
                                      defaultValue={item.skl_liczba_kategorii}
                                    />
                                  ) : (
                                    item.skl_liczba_kategorii
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka jest orientacyjna liczba wszystkich
                                  produktów w sklepie podczas jego
                                  funkcjonowania?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_liczba_produktow"
                                      tag="textarea"
                                      defaultValue={item.skl_liczba_produktow}
                                    />
                                  ) : (
                                    item.skl_liczba_produktow
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka jest liczba produktów, które my mamy
                                  dodać? (w cenie możemy dodać
                                  kilka/kilkanaście)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_produkty_do_dodania"
                                      tag="textarea"
                                      defaultValue={
                                        item.skl_produkty_do_dodania
                                      }
                                    />
                                  ) : (
                                    item.skl_produkty_do_dodania
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy w podstronie produktu ma być coś więcej
                                  niż: - nazwa produktu, - opis produktu, -
                                  zdjęcie główne i dodatkowe, - cena, - wybór
                                  ilości, - przycisk dodaj do koszyka?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_cos_wiecej"
                                      tag="textarea"
                                      defaultValue={item.skl_cos_wiecej}
                                    />
                                  ) : (
                                    item.skl_cos_wiecej
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są Twoje oczekiwania co do kolorystyki
                                  sklepu?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_kolorystyka"
                                      tag="textarea"
                                      defaultValue={item.skl_kolorystyka}
                                    />
                                  ) : (
                                    item.skl_kolorystyka
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Przykłady istniejących sklepów internetowych,
                                  które podobają się Tobie. Podaj minimum trzy
                                  przykłady. (nie muszą być związane z branżą)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_przyklady_sklepow"
                                      tag="textarea"
                                      defaultValue={item.skl_przyklady_sklepow}
                                    />
                                  ) : (
                                    item.skl_przyklady_sklepow
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy w istniejących sklepach
                                  internetowych, które podobają się Tobie.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_elementy"
                                      tag="textarea"
                                      defaultValue={item.skl_elementy}
                                    />
                                  ) : (
                                    item.skl_elementy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy otrzymamy zdjęcia do wykorzystania w
                                  sklepie internetowym? (np. zdjęcia do baneru
                                  promującego sklep, do boksów reklamowych,
                                  itp.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_zdjecia"
                                      tag="textarea"
                                      defaultValue={item.skl_zdjecia}
                                    />
                                  ) : (
                                    item.skl_zdjecia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy otrzymamy teksty / hasła reklamowe do
                                  sklepu internetowego?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_teksty"
                                      tag="textarea"
                                      defaultValue={item.skl_teksty}
                                    />
                                  ) : (
                                    item.skl_teksty
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy zewnętrzne do umieszczenia w sklepie?
                                  (np. link do fanpage Facebook'a, link Youtube,
                                  itp.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_elementy_zewnetrzne"
                                      tag="textarea"
                                      defaultValue={
                                        item.skl_elementy_zewnetrzne
                                      }
                                    />
                                  ) : (
                                    item.skl_elementy_zewnetrzne
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy jest już ustalony system płatności? (np.
                                  DotPay, PayU, Przelew standardowy, itp.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_platnosci"
                                      tag="textarea"
                                      defaultValue={item.skl_platnosci}
                                    />
                                  ) : (
                                    item.skl_platnosci
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy sklep ma mieć dodatkową zaawansowaną
                                  funkcjonalność? (Jeśli tak to jaką?)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_zaawansowana_funkcjonalnosc"
                                      tag="textarea"
                                      defaultValue={
                                        item.skl_zaawansowana_funkcjonalnosc
                                      }
                                    />
                                  ) : (
                                    item.skl_zaawansowana_funkcjonalnosc
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada wykupioną domenę (adres
                                  internetowy URL)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_czy_domena"
                                      tag="textarea"
                                      defaultValue={item.skl_czy_domena}
                                    />
                                  ) : (
                                    item.skl_czy_domena
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada wykupiony hosting/serwer
                                  (miejsce w którym znajdują się pliki sklepu)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="skl_czy_hosting"
                                      tag="textarea"
                                      defaultValue={item.skl_czy_hosting}
                                    />
                                  ) : (
                                    item.skl_czy_hosting
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          {item.kategoria.id === 5 ? (
                            <>
                              <Row>
                                <Label>
                                  Czy firma posiada logo? (Jeśli tak, czy firma
                                  posiada logo w formie pliku wektorowego oraz
                                  księgę znaku?)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_logo"
                                      tag="textarea"
                                      defaultValue={item.vid_logo}
                                    />
                                  ) : (
                                    item.vid_logo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada już intro? (animowana
                                  prezentacja logo dodawana zazwyczaj na
                                  początku filmów)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_intro"
                                      tag="textarea"
                                      defaultValue={item.vid_intro}
                                    />
                                  ) : (
                                    item.vid_intro
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy firma posiada już jakieś filmy promocyjne?
                                  (Jeśli tak, to prosimy o podanie linku do
                                  filmu i odpowiedź czy mamy utrzymywać ten sam
                                  styl)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_czy_filmy"
                                      tag="textarea"
                                      defaultValue={item.vid_czy_filmy}
                                    />
                                  ) : (
                                    item.vid_czy_filmy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są założenia i podstawowy cel filmu?
                                  (sprzedażowa – jaki produkt będzie
                                  sprzedawany, wizerunkowa – jaki efekt ma być
                                  uzyskany, (solidna, luksusowa) informacyjna –
                                  jakie informacje ma zawierać / pokazać cechy,
                                  funkcjonalność produktu)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_zalozenia"
                                      tag="textarea"
                                      defaultValue={item.vid_zalozenia}
                                    />
                                  ) : (
                                    item.vid_zalozenia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy mają Państwo ogólną wizje/ szkielet filmu?
                                  (Jakie ujęcia, kolejność itd.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_wizja"
                                      tag="textarea"
                                      defaultValue={item.vid_wizja}
                                    />
                                  ) : (
                                    item.vid_wizja
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być charakter filmu (wesoły,
                                  humorystyczny, poważny itp.)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_charakter"
                                      tag="textarea"
                                      defaultValue={item.vid_charakter}
                                    />
                                  ) : (
                                    item.vid_charakter
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaka ma być przybliżona długość filmu?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_dlugosc"
                                      tag="textarea"
                                      defaultValue={item.vid_dlugosc}
                                    />
                                  ) : (
                                    item.vid_dlugosc
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Kim jest główna konkurencja i czy posiadają
                                  takie filmy?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_konkurencja"
                                      tag="textarea"
                                      defaultValue={item.vid_konkurencja}
                                    />
                                  ) : (
                                    item.vid_konkurencja
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy posiadają Państwo materiały z których mamy
                                  korzystać czy my mamy nagrywać?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_materialy"
                                      tag="textarea"
                                      defaultValue={item.vid_materialy}
                                    />
                                  ) : (
                                    item.vid_materialy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jeżeli to my mamy nagrywać to jaka jest
                                  lokalizacja i kiedy możemy to zrealizować?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_my_nagrywamy"
                                      tag="textarea"
                                      defaultValue={item.vid_my_nagrywamy}
                                    />
                                  ) : (
                                    item.vid_my_nagrywamy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Przykłady istniejących filmów, które mogą
                                  posłużyć za wzór. (nie muszą być związane z
                                  branżą)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_przyklady"
                                      tag="textarea"
                                      defaultValue={item.vid_przyklady}
                                    />
                                  ) : (
                                    item.vid_przyklady
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy na istniejących filmach, które
                                  podobają się Państwu.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_elementy"
                                      tag="textarea"
                                      defaultValue={item.vid_elementy}
                                    />
                                  ) : (
                                    item.vid_elementy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>Czy film ma zawierać napisy?</Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_napisy"
                                      tag="textarea"
                                      defaultValue={item.vid_napisy}
                                    />
                                  ) : (
                                    item.vid_napisy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jeżeli ma zawierać napisy to czy otrzymamy
                                  teksty do filmu, czy my mamy wymyślić
                                  scenariusz?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_scenariusz"
                                      tag="textarea"
                                      defaultValue={item.vid_scenariusz}
                                    />
                                  ) : (
                                    item.vid_scenariusz
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy do kwestii mówionych firma zapewnia aktora
                                  (kogoś kto będzie mówił do kamery)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_aktor"
                                      tag="textarea"
                                      defaultValue={item.vid_aktor}
                                    />
                                  ) : (
                                    item.vid_aktor
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>Czy firma chce ujęć z drona?</Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_dron"
                                      tag="textarea"
                                      defaultValue={item.vid_dron}
                                    />
                                  ) : (
                                    item.vid_dron
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jeżeli film ma zawierać napisy to w jakim mają
                                  być języku?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_jezyk_napisow"
                                      tag="textarea"
                                      defaultValue={item.vid_jezyk_napisow}
                                    />
                                  ) : (
                                    item.vid_jezyk_napisow
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy dodatkowe do umieszczenia na filmie
                                  (zdjęcia, loga sponsorów, elementy graficzne
                                  itd.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_elementy_dodatkowe"
                                      tag="textarea"
                                      defaultValue={item.vid_elementy_dodatkowe}
                                    />
                                  ) : (
                                    item.vid_elementy_dodatkowe
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Gdzie będzie wyświetlany film? (social media,
                                  urządzenia mobilne, bannery itd.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_gdzie"
                                      tag="textarea"
                                      defaultValue={item.vid_gdzie}
                                    />
                                  ) : (
                                    item.vid_gdzie
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  W jakiej rozdzielczości mamy wykonać film?
                                  (HD, full HD, 4K)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="vid_rozdzielczosc"
                                      tag="textarea"
                                      defaultValue={item.vid_rozdzielczosc}
                                    />
                                  ) : (
                                    item.vid_rozdzielczosc
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          {item.kategoria.id === 6 ? (
                            <>
                              <Row>
                                <Label>
                                  Czy firma posiada logo? Jeśli tak, czy firma
                                  posiada logo w formie pliku wektorowego oraz
                                  księgę znaku?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_logo"
                                      tag="textarea"
                                      defaultValue={item.anim_logo}
                                    />
                                  ) : (
                                    item.anim_logo
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są założenia i podstawowy cel animacji?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_zalozenia"
                                      tag="textarea"
                                      defaultValue={item.anim_zalozenia}
                                    />
                                  ) : (
                                    item.anim_zalozenia
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Gdzie będzie publikowana animacja? (YouTube,
                                  Facebook, Instagram, TV itp.)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_gdzie"
                                      tag="textarea"
                                      defaultValue={item.anim_gdzie}
                                    />
                                  ) : (
                                    item.anim_gdzie
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy animacja wymaga lektora? Jeśli tak, czy
                                  zapewnią Państwo lektora?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_lektor"
                                      tag="textarea"
                                      defaultValue={item.anim_lektor}
                                    />
                                  ) : (
                                    item.anim_lektor
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy animacja ma posiadać muzykę w tle?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_muzyka"
                                      tag="textarea"
                                      defaultValue={item.anim_muzyka}
                                    />
                                  ) : (
                                    item.anim_muzyka
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być czas trwania i ilość animacji?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_dlugosc"
                                      tag="textarea"
                                      defaultValue={item.anim_dlugosc}
                                    />
                                  ) : (
                                    item.anim_dlugosc
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jaki ma być format animacji? (mp4, avi, gif?)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_format"
                                      tag="textarea"
                                      defaultValue={item.anim_format}
                                    />
                                  ) : (
                                    item.anim_format
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie są Twoje oczekiwania co do tonu i stylu
                                  animacji? (nowoczesna, rysunkowa, poważna
                                  itd.)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_styl"
                                      tag="textarea"
                                      defaultValue={item.anim_styl}
                                    />
                                  ) : (
                                    item.anim_styl
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Przykłady istniejących animacji, które
                                  podobają się Tobie. Podaj minimum trzy
                                  przykłady. (nie muszą być związane z branżą)
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_przyklady"
                                      tag="textarea"
                                      defaultValue={item.anim_przyklady}
                                    />
                                  ) : (
                                    item.anim_przyklady
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Elementy na istniejących animacjach, które
                                  podobają się Tobie.
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_elementy"
                                      tag="textarea"
                                      defaultValue={item.anim_elementy}
                                    />
                                  ) : (
                                    item.anim_elementy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Jakie materiały zostaną nam przekazane?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_materialy"
                                      tag="textarea"
                                      defaultValue={item.anim_materialy}
                                    />
                                  ) : (
                                    item.anim_materialy
                                  )}
                                </Content>
                              </Row>
                              <Row>
                                <Label>
                                  Czy otrzymamy scenariusz / tekst dla lektora
                                  (jeżeli wymagane)?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="anim_scenariusz"
                                      tag="textarea"
                                      defaultValue={item.anim_scenariusz}
                                    />
                                  ) : (
                                    item.anim_scenariusz
                                  )}
                                </Content>
                              </Row>
                            </>
                          ) : null}

                          <Row>
                            <Label>Inne ważne uwagi:</Label>
                            <Content>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_uwagi"
                                  tag="textarea"
                                  defaultValue={item.wsp_uwagi}
                                />
                              ) : (
                                item.wsp_uwagi
                              )}
                            </Content>
                          </Row>
                        </form>

                        <Row>
                          <Label>Załączniki:</Label>
                          <Content>
                            {item.wsp_zalacznik ? (
                              <a
                                href={
                                  "https://roxart-offer-dev.roxapps.usermd.net" +
                                  item.wsp_zalacznik
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                download>
                                Pobierz załącznik
                              </a>
                            ) : (
                              "Brak"
                            )}
                          </Content>
                        </Row>

                        {item.kategoria.name === "Wideo" ? (
                          <>
                            <Row>
                              <Label>Status wyceny operatora:</Label>
                              <Content>
                                {handleStatus(item.wsp_status_operatora)}
                              </Content>
                            </Row>

                            <Row>
                              <Label>Wycena operatora</Label>
                              <Content>{item.wsp_wycena_operatora}</Content>
                            </Row>
                          </>
                        ) : null}

                        {context.allowEditWycena(
                          item.wsp_status_operatora,
                          "Operator"
                        ) === true && item.kategoria.name === "Wideo" ? (
                          <Row>
                            <Label>Nowa wycena operatora:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                className=""
                                id="wycenOperator"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.wsp_nazwa,
                                    item.kategoria.name,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_operatora"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_operatora}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_operatora"
                                  value={this.state.wsp_status_operatora}
                                  onChange={this.handleInputChange}>
                                  <option value="wybierz" disabled selected>
                                    Wybierz opcję
                                  </option>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenOperator">
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        {item.kategoria.name === "Animacja" ? (
                          <>
                            <Row>
                              <Label>Status wyceny animatora:</Label>
                              <Content>
                                {handleStatus(item.wsp_status_animatora)}
                              </Content>
                            </Row>

                            <Row>
                              <Label>Wycena animatora:</Label>
                              <Content>{item.wsp_wycena_animatora}</Content>
                            </Row>
                          </>
                        ) : null}

                        {context.allowEditWycena(
                          item.wsp_status_animatora,
                          "Animator"
                        ) === true && item.kategoria.name === "Animacja" ? (
                          <Row>
                            <Label>Nowa wycena animatora:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                className=""
                                id="wycenAnimator"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.wsp_nazwa,
                                    item.kategoria.name,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_animatora"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_animatora}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_animatora"
                                  value={this.state.wsp_status_animatora}
                                  onChange={this.handleInputChange}>
                                  <option value="wybierz" disabled selected>
                                    Wybierz opcję
                                  </option>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenAnimator">
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        {item.kategoria.name === "Wideo" ||
                        item.kategoria.name === "Animacja" ? null : (
                          <>
                            <Row>
                              <Label>Status wyceny grafika:</Label>
                              <Content>
                                {handleStatus(item.wsp_status_grafika)}
                              </Content>
                            </Row>

                            <Row>
                              <Label>Wycena grafika:</Label>
                              <Content>{item.wsp_wycena_grafika}</Content>
                            </Row>
                          </>
                        )}

                        {context.allowEditWycena(
                          item.wsp_status_grafika,
                          "Grafik"
                        ) === true &&
                        (item.kategoria.name === "Strona internetowa" ||
                          item.kategoria.name === "Sklep" ||
                          item.kategoria.name === "Logo" ||
                          item.kategoria.name === "Katalog") ? (
                          <Row>
                            <Label>Nowa wycena grafika:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                className=""
                                id="wycenGrafik"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.wsp_nazwa,
                                    item.kategoria.name,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_grafika"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_grafika}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_grafika"
                                  value={this.state.wsp_status_grafika}
                                  onChange={this.handleInputChange}>
                                  <option value="wybierz" disabled selected>
                                    Wybierz opcję
                                  </option>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenGrafik">
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        {item.kategoria.name === "Strona internetowa" ||
                        item.kategoria.name === "Sklep" ? (
                          <>
                            <Row>
                              <Label>Status wyceny kodera:</Label>
                              <Content>
                                {handleStatus(item.wsp_status_kodera)}
                              </Content>
                            </Row>

                            <Row>
                              <Label>Wycena kodera:</Label>
                              <Content>{item.wsp_wycena_kodera}</Content>
                            </Row>
                          </>
                        ) : null}

                        {context.allowEditWycena(
                          item.wsp_status_kodera,
                          "Koder"
                        ) === true &&
                        (item.kategoria.name === "Strona internetowa" ||
                          item.kategoria.name === "Sklep") ? (
                          <Row>
                            <Label>Nowa wycena kodera:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                id="wycenKoder"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.wsp_nazwa,
                                    item.kategoria.name,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_kodera"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_kodera}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_kodera"
                                  value={this.state.wsp_status_kodera}
                                  onChange={this.handleInputChange}
                                  required>
                                  <option value="wybierz" disabled selected>
                                    Wybierz opcję
                                  </option>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenKoder">
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        <Row>
                          <Label>Administracja:</Label>
                          <Content>
                            {handleMainStatus(item.wsp_statuss)}
                          </Content>
                        </Row>

                        <Row>
                          <Label>Czy pilne:</Label>
                          <Content>
                            {item.wsp_pilne === true ? "TAK" : "NIE"}
                          </Content>
                        </Row>

                        {context.user.role.name === "Administrator" ? (
                          <>
                            <Row>
                              <Label>Zmiana statusu administracji:</Label>
                              <Content>
                                <form
                                  autoComplete="off"
                                  id="changeStatus"
                                  onSubmit={e =>
                                    context.changeStatus(
                                      e,
                                      match.params.id,
                                      this.state
                                    )
                                  }>
                                  <Select
                                    name="wsp_statuss"
                                    value={this.state.wsp_statuss}
                                    onChange={this.handleInputChange}
                                    required>
                                    <option value="wybierz" disabled selected>
                                      Wybierz opcję
                                    </option>
                                    <option value="wersja_robocza">
                                      Wersja robocza
                                    </option>
                                    <option value="do_wyceny">Do wyceny</option>
                                    <option value="wycenione">Wycenione</option>
                                    
                                  </Select>
                                  <Button type="submit" form="changeStatus">
                                    <FontAwesomeIcon icon={faSave} size="1x" />
                                    Zapisz status
                                  </Button>
                                </form>
                              </Content>
                            </Row>
                          </>
                        ) : null}

                        <Row>
                          <Label>Działania</Label>

                          <Content>
                            <StyledLink to={"/briefs/"}>
                              <FontAwesomeIcon
                                icon={faArrowAltCircleLeft}
                                size="1x"
                              />
                              powrót
                            </StyledLink>
                            {context.allowEdit(
                              item.wsp_statuss,
                              item.user.email
                            ) === true ? (
                              <>
                                <Button form="editBrief">
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Zapisz zmiany
                                </Button>
                                <Button
                                  onClick={e =>
                                    context.przekazDoWyceny(
                                      e,
                                      match.params.id,
                                      item.wsp_nazwa,
                                      item.kategoria.name
                                    )
                                  }>
                                  <FontAwesomeIcon icon={faSave} size="1x" />
                                  Przekaż do wyceny
                                </Button>
                              </>
                            ) : null}
                          </Content>
                        </Row>
                      </BriefWrapper>
                    ) : null}
                  </>
                ) : null}
              </>
            ))}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SingleBriefView;
