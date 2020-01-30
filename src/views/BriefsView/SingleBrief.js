import React from "react";
import AppContext from "../../context";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styled from "styled-components";

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
  grid-template-columns: 50% auto;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

const Label = styled.span`
  display: block;
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

const Select = styled.select`
  color: #000;
  font-size: 15px;
  padding: 5px 15px;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  line-height: 22px;
  width: 100%;
  background: #fff;
  transition: 0.2s ease-out all;
  margin-bottom: 10px;
  &:focus {
    border-color: ${props => `${props.theme.colors.mainBlue}`};
    outline: none;
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
  background: none;
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
`;

class SingleBriefView extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {match} = this.props;
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
                          {item.user ? (
                            <Row>
                              <Label>Dodane przez:</Label>
                              <Content>{item.user.email}</Content>
                            </Row>
                          ) : null}

                          <Row>
                            <Label>Nazwa firmy:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="title"
                                  defaultValue={item.title}
                                />
                              ) : (
                                item.title
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="description"
                                  tag="textarea"
                                  defaultValue={item.description}
                                />
                              ) : (
                                item.description
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres e-mail osoby kontaktowej:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="email"
                                  defaultValue={item.email}
                                />
                              ) : (
                                item.email
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Utworzono:</Label>
                            <Content>{item.created_at}</Content>
                          </Row>
                          <Row>
                            <Label>Status:</Label>
                            <Content>{item.status}</Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest adres (URL) Twojej strony internetowej?
                              (obecny lub planowany):
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="adres_url"
                                  tag="textarea"
                                  defaultValue={item.adres_url}
                                />
                              ) : (
                                item.adres_url
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Czym zajmuje się Twoja firma?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="czym_zajmuje"
                                  tag="textarea"
                                  defaultValue={item.czym_zajmuje}
                                />
                              ) : (
                                item.czym_zajmuje
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>W jakiej branży działa Twoja firma?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="branza"
                                  tag="textarea"
                                  defaultValue={item.branza}
                                />
                              ) : (
                                item.branza
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Ile lat Państwa firma jest na rynku i ilu
                              zatrudnia pracowników?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="ile_lat"
                                  tag="textarea"
                                  defaultValue={item.ile_lat}
                                />
                              ) : (
                                item.ile_lat
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie produkty/usługi oferuje Twoja firma swoim
                              klientom?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="jakie_produkty"
                                  tag="textarea"
                                  defaultValue={item.jakie_produkty}
                                />
                              ) : (
                                item.jakie_produkty
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są Twoi klienci (dotychczasowi lub
                              potencjalni) oraz jaka jest grupa docelowa?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="kim_sa_klienci"
                                  tag="textarea"
                                  defaultValue={item.kim_sa_klienci}
                                />
                              ) : (
                                item.kim_sa_klienci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są główni konkurenci (lokalnie i globalnie)?
                              (można podać adresy internetowe)
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="konkurenci"
                                  tag="textarea"
                                  defaultValue={item.konkurenci}
                                />
                              ) : (
                                item.konkurenci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony budżet na realizację projektu
                              netto?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="budzet"
                                  tag="textarea"
                                  defaultValue={item.budzet}
                                />
                              ) : (
                                item.budzet
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony czas zakończenia realizacji
                              projektu?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="czas_realizacji"
                                  tag="textarea"
                                  defaultValue={item.czas_realizacji}
                                />
                              ) : (
                                item.czas_realizacji
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy firma posiada logo? Jeśli tak, czy firma
                              posiada logo w formie pliku wektorowego oraz
                              księgę znaku?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="logo"
                                  tag="textarea"
                                  defaultValue={item.logo}
                                />
                              ) : (
                                item.logo
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie są założenia i podstawowy cel nowej strony
                              internetowej?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="zalozenia"
                                  tag="textarea"
                                  defaultValue={item.zalozenia}
                                />
                              ) : (
                                item.zalozenia
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki ma być charakter strony internetowej
                              (sprzedażowa, wizerunkowa, informacyjna itp.)?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="charakter"
                                  tag="textarea"
                                  defaultValue={item.charakter}
                                />
                              ) : (
                                item.charakter
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy strona ma mieć możliwość samodzielnej edycji
                              treści strony lub jej elementów (system CMS)?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="czy_cms"
                                  tag="textarea"
                                  defaultValue={item.czy_cms}
                                />
                              ) : (
                                item.czy_cms
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Jaki ma być podstawowy język strony?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="jezyk_podstawowy"
                                  tag="textarea"
                                  defaultValue={item.jezyk_podstawowy}
                                />
                              ) : (
                                item.jezyk_podstawowy
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy strona posiadać dodatkowe języki? Jeśli tak,
                              to jakie?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="jezyki_dodatkowe"
                                  tag="textarea"
                                  defaultValue={item.jezyki_dodatkowe}
                                />
                              ) : (
                                item.jezyki_dodatkowe
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie mają być główne podstrony menu/zakładki w
                              nawigacji górnej?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="podstrony_menu"
                                  tag="textarea"
                                  defaultValue={item.podstrony_menu}
                                />
                              ) : (
                                item.podstrony_menu
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaka jest orientacyjna liczba wszystkich podstron
                              (mapa strony)?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="liczba_podstron"
                                  tag="textarea"
                                  defaultValue={item.liczba_podstron}
                                />
                              ) : (
                                item.liczba_podstron
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie są Twoje oczekiwania co do kolorystyki
                              strony?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="kolorystyka"
                                  tag="textarea"
                                  defaultValue={item.kolorystyka}
                                />
                              ) : (
                                item.kolorystyka
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Przykłady istniejących stron internetowych, które
                              podobają się Tobie. Podaj minimum trzy przykłady.
                              (nie muszą być związane z branżą)
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="przyklady_stron"
                                  tag="textarea"
                                  defaultValue={item.przyklady_stron}
                                />
                              ) : (
                                item.przyklady_stron
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Elementy na istniejących stronach internetowych,
                              które podobają się Tobie.
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="elementy"
                                  tag="textarea"
                                  defaultValue={item.elementy}
                                />
                              ) : (
                                item.elementy
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Czy otrzymamy zdjęcia do strony?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="zdjecia"
                                  tag="textarea"
                                  defaultValue={item.zdjecia}
                                />
                              ) : (
                                item.zdjecia
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Czy otrzymamy teksty do strony?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="teksty"
                                  tag="textarea"
                                  defaultValue={item.teksty}
                                />
                              ) : (
                                item.teksty
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Elementy zewnętrzne do umieszczenia na stronie?
                              (np. link do fanpage Facebook'a, link Youtube,
                              itp.)
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="elementy_zewnetrzne"
                                  tag="textarea"
                                  defaultValue={item.elementy_zewnetrzne}
                                />
                              ) : (
                                item.elementy_zewnetrzne
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy strona ma mieć dodatkową zaawansowaną
                              funkcjonalność? Jeśli tak to jaką?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="zaawansowana_funkcjonalnosc"
                                  tag="textarea"
                                  defaultValue={
                                    item.zaawansowana_funkcjonalnosc
                                  }
                                />
                              ) : (
                                item.zaawansowana_funkcjonalnosc
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy firma posiada wykupioną domenę (adres
                              internetowy URL)?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="czy_domena"
                                  tag="textarea"
                                  defaultValue={item.czy_domena}
                                />
                              ) : (
                                item.czy_domena
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Czy firma posiada wykupiony hosting/serwer
                              (miejsce w którym znajdują się pliki strony)?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="czy_hosting"
                                  tag="textarea"
                                  defaultValue={item.czy_hosting}
                                />
                              ) : (
                                item.czy_hosting
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Inne ważne uwagi:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="uwagi"
                                  tag="textarea"
                                  defaultValue={item.uwagi}
                                />
                              ) : (
                                item.uwagi
                              )}
                            </Content>
                          </Row>
                        </form>

                        <Row>
                          <Label>Status wyceny grafika:</Label>
                          <Content>{item.status_grafika}</Content>
                        </Row>

                        <Row>
                          <Label>Wycena grafika:</Label>
                          <Content>{item.wycena_grafika}</Content>
                        </Row>

                        {context.user.role.name === "Grafik" ? (
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
                                    item.title,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wycena_grafika"
                                  tag="textarea"
                                  defaultValue={item.wycena_grafika}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="status_grafika"
                                  value={this.state.status_grafika}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenGrafik">
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        <Row>
                          <Label>Status wyceny kodera:</Label>
                          <Content>{item.status_kodera}</Content>
                        </Row>

                        <Row>
                          <Label>Wycena kodera:</Label>
                          <Content>{item.wycena_kodera}</Content>
                        </Row>

                        {context.user.role.name === "Koder" ? (
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
                                    item.title,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wycena_kodera"
                                  tag="textarea"
                                  defaultValue={item.wycena_kodera}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="status_kodera"
                                  value={this.state.status_kodera}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenKoder">
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        <Row>
                          <Label>Działania</Label>
                          <Content>
                            {context.user.role.name === "Administrator" ||
                            context.user.role.name === "Handlowiec" ? (
                              <>
                                {/* <Button
                                      onClick={e =>
                                        context.removeItem(
                                          e,
                                          match.params.id,
                                          item.title
                                        )
                                      }>
                                      Usuń brief
                                    </Button> */}
                                <Button form="editBrief">Zapisz zmiany</Button>
                              </>
                            ) : null}

                            <StyledLink to={"/"} secondary>
                              powrót
                            </StyledLink>
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
