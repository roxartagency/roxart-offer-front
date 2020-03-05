import React from "react";
import AppContext from "../../context";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import Select from "../../components/atoms/Select/Select";
import Input from "../../components/atoms/Input/Input";
import { handleMainStatus, handleStatus, showDate } from "../../utils/Utils";
import styled, { css } from "styled-components";

const BriefWrapper = styled.div``;

const Label = styled.span`
  display: block;
  margin-bottom: 12px;
  padding: 0 32px;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: -0.32px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const Content = styled.span`
  form {
    display: flex;
    flex-direction: column;
  }
  ${({ buttons }) =>
    buttons &&
    css`
      button {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    `}
  ${({ buttonRight }) =>
    buttonRight &&
    css`
      > button {
        float: right;
      }
    `}
`;

const InfoWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 30px;
  border-bottom: 1px solid ${props => `${props.theme.colors.grey}`};
  margin-bottom: 30px;
`;

const InfoContent = styled.div`
  width: calc(50% - 32px);
  padding-right: 32px;
  margin: 0 0 7px;
`;

const InfoContentLabel = styled.span`
  color: ${props => `${props.theme.colors.darkGrey}`};
  font-size: 12px;
  line-height: 1.1;
  letter-spacing: -0.12px;
  width: 30%;
  display: inline-block;
`;

const InfoContentContent = styled.span`
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: -0.28px;
  display: inline-block;
  > div {
    display: inline-block;
    label {
      display: none;
    }
    input {
      padding: 5px 10px 3px 10px;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 50%;
  padding-right: 64px;
`;

const Row = styled.div`
  padding: 0;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 100%;

  ${({ status }) =>
    status &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
        margin-bottom: 0;
      }
    `}

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

const StaticInfo = styled.p`
  padding: 24px 32px 22px 32px;
  font-size: 1em;
  line-height: 1.5;
  margin: 0;
  color: ${props => `${props.theme.colors.darkGrey}`};
  border: 1px solid ${props => `${props.theme.colors.grey}`};
  border-radius: 15px;
  background-color: ${props => `${props.theme.colors.lightGrey}`};
`;

const RightWrapper = styled.div`
  /* width: 38vw;
  max-height: 63vh;
  overflow: auto;
  position: fixed;
  right: 64px;
  bottom: 64px; */

  width: 50%;
  max-height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  overflow: auto;
  padding-right: 0;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

`;

class SingleBriefView extends React.Component {
  state = {};

  componentDidMount() {
    console.log("test");
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleScroll = e => {};

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
                          }></form>
                        <InfoWrapper>
                          <InfoContent>
                            <InfoContentLabel>Klient:</InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_nazwa"
                                  form="editBrief"
                                  defaultValue={item.wsp_nazwa}
                                />
                              ) : (
                                <b>{item.wsp_nazwa}</b>
                              )}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>
                              Imię i nazwisko:
                            </InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_osoba"
                                  form="editBrief"
                                  defaultValue={item.wsp_osoba}
                                />
                              ) : (
                                item.wsp_osoba
                              )}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Id:</InfoContentLabel>
                            <InfoContentContent>
                              {match.params.id}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Adres:</InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_adres"
                                  form="editBrief"
                                  defaultValue={item.wsp_adres}
                                />
                              ) : (
                                item.wsp_adres
                              )}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Kategoria:</InfoContentLabel>
                            <InfoContentContent>
                              {item.kategoria.name}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Telefon:</InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_telefon"
                                  form="editBrief"
                                  defaultValue={item.wsp_telefon}
                                />
                              ) : (
                                item.wsp_telefon
                              )}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Przekazano:</InfoContentLabel>
                            <InfoContentContent>
                              {showDate(item.wsp_przekazane_do_wyceny)}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Adres e-mail:</InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_email"
                                  form="editBrief"
                                  defaultValue={item.wsp_email}
                                />
                              ) : (
                                item.wsp_email
                              )}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>Dodane przez:</InfoContentLabel>
                            <InfoContentContent>
                              {item.user ? item.user.email : null}
                            </InfoContentContent>
                          </InfoContent>
                          <InfoContent>
                            <InfoContentLabel>NIP:</InfoContentLabel>
                            <InfoContentContent>
                              {context.allowEdit(
                                item.wsp_statuss,
                                item.user.email
                              ) === true ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_nip"
                                  form="editBrief"
                                  defaultValue={item.wsp_nip}
                                />
                              ) : (
                                item.wsp_nip
                              )}
                            </InfoContentContent>
                          </InfoContent>

                          <InfoContent>
                            <InfoContentLabel>Czy pilne:</InfoContentLabel>
                            <InfoContentContent>
                              {item.wsp_pilne === true ? "TAK" : "NIE"}
                            </InfoContentContent>
                          </InfoContent>
                        </InfoWrapper>

                        <MainWrapper>
                          <LeftWrapper>
                            <>
                              <Row>
                                <Label>
                                  1. Jaki jest adres (URL) Twojej strony
                                  internetowej? (obecny lub planowany):
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
                                      form="editBrief"
                                      defaultValue={item.wsp_adres_url}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_adres_url}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>2. Czym zajmuje się Twoja firma?</Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="wsp_czym_zajmuje"
                                      tag="textarea"
                                      form="editBrief"
                                      defaultValue={item.wsp_czym_zajmuje}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_czym_zajmuje}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  3. W jakiej branży działa Twoja firma?
                                </Label>
                                <Content>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <Input
                                      onChange={this.handleInputChange}
                                      name="wsp_branza"
                                      tag="textarea"
                                      form="editBrief"
                                      defaultValue={item.wsp_branza}
                                    />
                                  ) : (
                                    <StaticInfo>{item.wsp_branza}</StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  4. Ile lat Państwa firma jest na rynku i ilu
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
                                      form="editBrief"
                                      defaultValue={item.wsp_ile_lat}
                                    />
                                  ) : (
                                    <StaticInfo>{item.wsp_ile_lat}</StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  5. Jakie produkty/usługi oferuje Twoja firma
                                  swoim klientom?
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
                                      form="editBrief"
                                      defaultValue={item.wsp_jakie_produkty}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_jakie_produkty}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  6. Kim są Twoi klienci (dotychczasowi lub
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
                                      form="editBrief"
                                      defaultValue={item.wsp_kim_sa_klienci}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_kim_sa_klienci}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  7. Kim są główni konkurenci (lokalnie i
                                  globalnie)? (można podać adresy internetowe)
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
                                      form="editBrief"
                                      defaultValue={item.wsp_konkurenci}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_konkurenci}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  8. Jaki jest określony budżet na realizację
                                  projektu netto?
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
                                      form="editBrief"
                                      defaultValue={item.wsp_budzet}
                                    />
                                  ) : (
                                    <StaticInfo>{item.wsp_budzet}</StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Label>
                                  9. Jaki jest określony czas zakończenia
                                  realizacji projektu?
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
                                      form="editBrief"
                                      defaultValue={item.wsp_czas_realizacji}
                                    />
                                  ) : (
                                    <StaticInfo>
                                      {item.wsp_czas_realizacji}
                                    </StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              {item.kategoria.id === 1 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czy firma posiada logo? Jeśli tak, czy
                                      firma posiada logo w formie pliku
                                      wektorowego oraz księgę znaku?
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
                                          form="editBrief"
                                          defaultValue={item.str_logo}
                                        />
                                      ) : (
                                        <StaticInfo>{item.str_logo}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Jakie są założenia i podstawowy cel
                                      nowej strony internetowej?
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
                                          form="editBrief"
                                          defaultValue={item.str_zalozenia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_zalozenia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Jaki ma być charakter strony
                                      internetowej (sprzedażowa, wizerunkowa,
                                      informacyjna itp.)?
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
                                          form="editBrief"
                                          defaultValue={item.str_charakter}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_charakter}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Czy strona ma mieć możliwość
                                      samodzielnej edycji treści strony lub jej
                                      elementów (system CMS)?
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
                                          form="editBrief"
                                          defaultValue={item.str_czy_cms}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_czy_cms}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. Jaki ma być podstawowy język strony?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_jezyk_podstawowy
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_jezyk_podstawowy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Czy strona posiadać dodatkowe języki?
                                      Jeśli tak, to jakie?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_jezyki_dodatkowe
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_jezyki_dodatkowe}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. Jakie mają być główne podstrony
                                      menu/zakładki w nawigacji górnej?
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
                                          form="editBrief"
                                          defaultValue={item.str_podstrony_menu}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_podstrony_menu}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. Jaka jest orientacyjna liczba
                                      wszystkich podstron (mapa strony)?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_liczba_podstron
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_liczba_podstron}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. Jakie są Twoje oczekiwania co do
                                      kolorystyki strony?
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
                                          form="editBrief"
                                          defaultValue={item.str_kolorystyka}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_kolorystyka}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Przykłady istniejących stron
                                      internetowych, które podobają się Tobie.
                                      Podaj minimum trzy przykłady. (nie muszą
                                      być związane z branżą)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_przyklady_stron
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_przyklady_stron}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. Elementy na istniejących stronach
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
                                          form="editBrief"
                                          defaultValue={item.str_elementy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_elementy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      21. Czy otrzymamy zdjęcia do strony?
                                    </Label>
                                    <Content>
                                      {context.allowEdit(
                                        item.wsp_statuss,
                                        item.user.email
                                      ) === true ? (
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="str_zdjecia"
                                          tag="textarea"
                                          form="editBrief"
                                          defaultValue={item.str_zdjecia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_zdjecia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      22. Czy otrzymamy teksty do strony?
                                    </Label>
                                    <Content>
                                      {context.allowEdit(
                                        item.wsp_statuss,
                                        item.user.email
                                      ) === true ? (
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="str_teksty"
                                          tag="textarea"
                                          form="editBrief"
                                          defaultValue={item.str_teksty}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_teksty}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      23. Elementy zewnętrzne do umieszczenia na
                                      stronie? (np. link do fanpage Facebook'a,
                                      link Youtube, itp.)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_elementy_zewnetrzne
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_elementy_zewnetrzne}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      24. Czy strona ma mieć dodatkową
                                      zaawansowaną funkcjonalność? Jeśli tak to
                                      jaką?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.str_zaawansowana_funkcjonalnosc
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_zaawansowana_funkcjonalnosc}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      25. Czy firma posiada wykupioną domenę
                                      (adres internetowy URL)?
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
                                          form="editBrief"
                                          defaultValue={item.str_czy_domena}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_czy_domena}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      26. Czy firma posiada wykupiony
                                      hosting/serwer (miejsce w którym znajdują
                                      się pliki strony)?
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
                                          form="editBrief"
                                          defaultValue={item.str_czy_hosting}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.str_czy_hosting}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                </>
                              ) : null}

                              {item.kategoria.id === 2 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czy firma posiada logo? (Jeśli tak,
                                      czy firma posiada logo w formie pliku
                                      wektorowego oraz czy macie do logo
                                      wykonaną księgę znaku?)
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
                                          form="editBrief"
                                          defaultValue={item.kat_czy_logo}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_czy_logo}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Czy firma obecnie posiada katalog?
                                      Jeśli tak, prosimy o link do wersji online
                                      lub o przesłanie pliku w załączniku.
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
                                          form="editBrief"
                                          defaultValue={item.kat_czy_katalog}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_czy_katalog}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Czy katalog ma być przygotowany do
                                      druku? lub Czy katalog ma być przygotowany
                                      tylko na potrzeby internetu? Posiadamy w
                                      standardzie przygotowanie wersji do druku
                                      oraz internetu, gdy podstawowe
                                      przygotowanie jest do druku.
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
                                          form="editBrief"
                                          defaultValue={item.kat_czy_do_druku}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_czy_do_druku}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Czy wybrali już Państwo drukarnię do
                                      wydruku katalogów? Jaki nakład katalogów
                                      jest przewidywany? Prosimy o podanie ilość
                                      sztuk. Jeśli będzie to np. tylko 10 sztuk
                                      to katalog może być inaczej przygotowany
                                      do druku. Jeśli wydruk ma być
                                      niestandardowy, będziemy potrzebować
                                      wytycznych od drukarni tuż przed
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
                                          form="editBrief"
                                          defaultValue={
                                            item.kat_drukarnia_naklad
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_drukarnia_naklad}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. *Jaki format powinien mieć katalog?
                                      Standardowe formaty: A4, A5, A6, kwadrat.
                                      Jeśli inny, prosimy podać dokładne
                                      wymiary. (Miej na uwadze: Jeśli format
                                      będzie inny niż standardowy to koszy
                                      wydruku mogą wzrosnąć nawet 100%)
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
                                          form="editBrief"
                                          defaultValue={item.kat_format}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_format}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Jaka będzie orientacja katalogu?
                                      (pionowa, pozioma, kwadrat, inna?)
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
                                          form="editBrief"
                                          defaultValue={item.kat_orientacja}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_orientacja}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. *Czy przewidują Państwo
                                      uszlachetnienie lakierem wybiórczym np. na
                                      okładce lub innych stronach? (Jeśli tak,
                                      opracujemy dla drukarni makietę z
                                      wybranymi elementami, które mają być
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
                                          form="editBrief"
                                          defaultValue={
                                            item.kat_uszlachetnienie
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_uszlachetnienie}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. *Ile stron powinien zawierać katalog?
                                      Aby katalog został wydrukowany i złożony,
                                      ilość stron musi być podzielna przez 4.
                                      Przykład: 8 stron czyli 4 strony okładki +
                                      4 strony środka. (Przykłady standardowych
                                      rozmiarów stron: 8, 12, 16, 20, 24, 28,
                                      32, 36, 40, 44, 48, 52 … 88, 92,96, 100)
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
                                          form="editBrief"
                                          defaultValue={item.kat_ile_stron}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_ile_stron}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. *Jaki jest cel nowego katalogu?
                                      Prosimy opisać jakie mają Państwo
                                      oczekiwania co do katalogu, co będzie
                                      zawierał, jakie ma spełnić zadania i do
                                      czego będzie służył. ( Przykład: katalog
                                      będzie służ przedstawicielom na
                                      spotkaniach z klientem oraz na targach.
                                      będzie zawierał informacje o firmie jej
                                      historia i strukturę. Przedstawimy koło 20
                                      najlepszych produktów z dokładnym
                                      podziałem na 3 kategorie. Każdy produkt
                                      będzie zawierał dokładny opis zdjęcie
                                      warianty i cennik. Chcemy zamieścić
                                      referencje i loga partnerów, mapkę dojazdu
                                      galerię zdjęć.).
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
                                          form="editBrief"
                                          defaultValue={item.kat_cel}
                                        />
                                      ) : (
                                        <StaticInfo>{item.kat_cel}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Czy katalog ma nawiązywać do strony
                                      internetowej lub sklepu internetowego?
                                      Jeśli tak, prosimy opisać pod jakim
                                      względem.
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
                                          form="editBrief"
                                          defaultValue={item.kat_nawiazanie}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_nawiazanie}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. *W jakim języku będą treści do
                                      katalogu? Lub Czy katalog będzie zawierał
                                      kilka języków w jednym katalogu?Jeśli tak
                                      prosimy podać w jakich.
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
                                          form="editBrief"
                                          defaultValue={
                                            item.kat_jezyk_podstawowy
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_jezyk_podstawowy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      21. *Czy katalog również ma być
                                      projektowany w innych językach niż
                                      standardowy? Jeśli tak to w jakim jeszcze.
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
                                          form="editBrief"
                                          defaultValue={item.kat_jezyki_obce}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_jezyki_obce}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      22. *Czy katalog będzie zawierał
                                      tabele/cenniki/itp.? (Jeśli tak prosimy
                                      opisać i podać orientacyjną ilość tabel,
                                      orientacyjną ilość wierszy i kolumn w
                                      każdej z nich)
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
                                          form="editBrief"
                                          defaultValue={item.kat_czy_tabele}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_czy_tabele}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      23. *Przykłady istniejących katalogów,
                                      które się Państwu podobają. Podaj minimum
                                      trzy przykłady. (Nie muszą być związane z
                                      branżą. Prosimy podać adres url lub nazwę
                                      katalogu oraz wysłać go do nas mailem)
                                      Chcemy poznać Państwa gust.
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
                                          form="editBrief"
                                          defaultValue={item.kat_przyklady}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_przyklady}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      24. Elementy na istniejących katalogach,
                                      które się Państwu podobają. Prosimy o
                                      wskazanie co się Państwu w nich podoba.
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
                                          form="editBrief"
                                          defaultValue={item.kat_elementy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_elementy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      25. Na jakim etapie gromadzenia materiałów
                                      do katalogu są Państwo? (Przykład:
                                      jesteśmy w połowie pisania treści resztę
                                      mamy przygotowane / wszystko mamy gotowe,
                                      tylko projektować)
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
                                          form="editBrief"
                                          defaultValue={item.kat_etap}
                                        />
                                      ) : (
                                        <StaticInfo>{item.kat_etap}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      26. *Czy otrzymamy zdjęcia do katalogu
                                      przed realizacją? Koniecznie w dobrej
                                      jakości, nadającej się pod wydruk.
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
                                          form="editBrief"
                                          defaultValue={item.kat_zdjecia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_zdjecia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      27. *Czy otrzymamy teksty do katalogu
                                      przed projektowaniem w docelowej wersji?
                                      (Jeśli nie to w jakiej jakości i proszę
                                      opisać) Jeśli treści będą dostarczone
                                      później, proces projektowania może się
                                      wydłużyć dwukrotnie. * Po otrzymaniu
                                      docelowych treści nie ma możliwości
                                      całkowitej zmiany tekstu na etapie
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
                                          form="editBrief"
                                          defaultValue={item.kat_teksty}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_teksty}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      28. *Jakie dodatkowe materiały do
                                      projektowania dostaniemy? Np. loga firm,
                                      hasła reklamowe, itp. które są niezbędne
                                      do zrealizowania projektu.
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
                                          form="editBrief"
                                          defaultValue={item.kat_materialy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_materialy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      29. Czy potrzebują Państwo pliki
                                      edytowalne (źródłowe)? (Jeśli tak, prosimy
                                      określić w jakim programie mamy
                                      przygotować katalog: InDesign, CorelDraw,
                                      Illustrator. Jeśli katalog będzie miał
                                      powyżej 20 stron: InDesign, CorelDraw.
                                      Jeśli zależy Państwu na programie
                                      CorelDraw, prosimy określić wersję (np.
                                      wersja 15, 16, 17).) W standardzie
                                      przygotowujemy projekty wyłącznie do druku
                                      i internetu.
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
                                          form="editBrief"
                                          defaultValue={item.kat_pliki}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_pliki}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      30. Prosimy podać inne dodatkowe
                                      informacje, które mogą okazać się
                                      przydatne na etapie wyceny (Czy mamy
                                      wykonać rysunki konturowe zamiast zdjęć?
                                      Rysunki techniczne, obrys produktu, itp.)
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
                                          form="editBrief"
                                          defaultValue={item.kat_dodatkowe}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.kat_dodatkowe}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                </>
                              ) : null}

                              {item.kategoria.id === 3 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czego ma dotyczyć projekt:
                                      Zaprojektowanie nowego logo / Delikatne
                                      odświeżenie znaku / Zupełne
                                      przeprojektowanie logo
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
                                          form="editBrief"
                                          defaultValue={item.logo_projekt}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_projekt}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Jaka dokładna nazwa ma się znajdować w
                                      logo? np. ROXART
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
                                          form="editBrief"
                                          defaultValue={item.logo_nazwa}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_nazwa}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Czy ma być dodatkowy podpis do głównej
                                      nazwy? np. Agencja Reklamowa
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
                                          form="editBrief"
                                          defaultValue={item.logo_podpis}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_podpis}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Ile propozycji logotypów mamy
                                      przygotować? 1, 3, 6, więcej?
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
                                          form="editBrief"
                                          defaultValue={item.logo_propozycje}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_propozycje}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. Czy mamy przygotować księgę znaku?
                                      opis budowy logo i przykłady jak należy
                                      stosować znak dla prawidłowego używania
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
                                          form="editBrief"
                                          defaultValue={
                                            item.logo_ksiegalogo_typlogo
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_ksiegalogo_typlogo}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Typografia 2. Inicjały 3. Symbol lub
                                      Ikona 4. Kombinacja znak + ikona 5.
                                      Emblemat 6. Inne. Podaj przykład innego.
                                      Wybieram typ logo numer:
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
                                          form="editBrief"
                                          defaultValue={item.logo_typlogo}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_typlogo}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. Jakie są Państwa preferencje
                                      kolorystyczne, które chcielibyście użyć w
                                      logo?
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
                                          form="editBrief"
                                          defaultValue={item.logo_preferencje}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_preferencje}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. Gdzie Państwa logo będzie używane?
                                      (druk, serwis www, inne)
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
                                          form="editBrief"
                                          defaultValue={item.logo_gdzie}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_gdzie}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. Jaki jest najważniejszy nośnik, na
                                      którym Państwa logo będzie prezentowane?
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
                                          form="editBrief"
                                          defaultValue={item.logo_nosnik}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_nosnik}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Przykłady istniejących logo, które
                                      podobają się Tobie. Podaj minimum trzy
                                      przykłady. (nie muszą być związane z
                                      branżą)
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
                                          form="editBrief"
                                          defaultValue={item.logo_przyklady}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_przyklady}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. Proszę podać inne dodatkowe
                                      informacje, które mogą okazać się
                                      przydatne w projektowaniu
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
                                          form="editBrief"
                                          defaultValue={item.logo_dodatkowe}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.logo_dodatkowe}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                </>
                              ) : null}

                              {item.kategoria.id === 4 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czy firma posiada logo? Jeśli tak, czy
                                      firma posiada logo w formie pliku
                                      wektorowego oraz księgę znaku?
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
                                          form="editBrief"
                                          defaultValue={item.skl_logo}
                                        />
                                      ) : (
                                        <StaticInfo>{item.skl_logo}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Jakie są założenia i podstawowy cel
                                      sklepu internetowego?
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
                                          form="editBrief"
                                          defaultValue={item.skl_zalozenia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_zalozenia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Jaki ma być podstawowy język sklepu?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_jezyk_podstawowy
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_jezyk_podstawowy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Czy sklep ma posiadać dodatkowe
                                      języki? Jeśli tak, to jakie?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_jezyki_dodatkowe
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_jezyki_dodatkowe}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. Jakie elementy, funkcjonalności
                                      powinny pojawić się na stronie głównej
                                      sklepu?
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
                                          form="editBrief"
                                          defaultValue={item.skl_strona_glowna}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_strona_glowna}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Jakie mają być główne podstrony
                                      menu/zakładki w nawigacji górnej?
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
                                          form="editBrief"
                                          defaultValue={item.skl_podstrony_menu}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_podstrony_menu}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. Jaka jest orientacyjna liczba
                                      wszystkich kategorii oraz podkategorii?
                                      (mapa sklepu)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_liczba_kategorii
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_liczba_kategorii}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. Jaka jest orientacyjna liczba
                                      wszystkich produktów w sklepie podczas
                                      jego funkcjonowania?
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_liczba_produktow
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_liczba_produktow}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. Jaka jest liczba produktów, które my
                                      mamy dodać? (w cenie możemy dodać
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_produkty_do_dodania
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_produkty_do_dodania}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Czy w podstronie produktu ma być coś
                                      więcej niż: - nazwa produktu, - opis
                                      produktu, - zdjęcie główne i dodatkowe, -
                                      cena, - wybór ilości, - przycisk dodaj do
                                      koszyka?
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
                                          form="editBrief"
                                          defaultValue={item.skl_cos_wiecej}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_cos_wiecej}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. Jakie są Twoje oczekiwania co do
                                      kolorystyki sklepu?
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
                                          form="editBrief"
                                          defaultValue={item.skl_kolorystyka}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_kolorystyka}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      21. Przykłady istniejących sklepów
                                      internetowych, które podobają się Tobie.
                                      Podaj minimum trzy przykłady. (nie muszą
                                      być związane z branżą)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_przyklady_sklepow
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_przyklady_sklepow}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      22. Elementy w istniejących sklepach
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
                                          form="editBrief"
                                          defaultValue={item.skl_elementy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_elementy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      23. Czy otrzymamy zdjęcia do wykorzystania
                                      w sklepie internetowym? (np. zdjęcia do
                                      baneru promującego sklep, do boksów
                                      reklamowych, itp.)
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
                                          form="editBrief"
                                          defaultValue={item.skl_zdjecia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_zdjecia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      24. Czy otrzymamy teksty / hasła reklamowe
                                      do sklepu internetowego?
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
                                          form="editBrief"
                                          defaultValue={item.skl_teksty}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_teksty}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      25. Elementy zewnętrzne do umieszczenia w
                                      sklepie? (np. link do fanpage Facebook'a,
                                      link Youtube, itp.)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_elementy_zewnetrzne
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_elementy_zewnetrzne}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      26. Czy jest już ustalony system
                                      płatności? (np. DotPay, PayU, Przelew
                                      standardowy, itp.)
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
                                          form="editBrief"
                                          defaultValue={item.skl_platnosci}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_platnosci}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      27. Czy sklep ma mieć dodatkową
                                      zaawansowaną funkcjonalność? (Jeśli tak to
                                      jaką?)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.skl_zaawansowana_funkcjonalnosc
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_zaawansowana_funkcjonalnosc}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      28. Czy firma posiada wykupioną domenę
                                      (adres internetowy URL)?
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
                                          form="editBrief"
                                          defaultValue={item.skl_czy_domena}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_czy_domena}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      29. Czy firma posiada wykupiony
                                      hosting/serwer (miejsce w którym znajdują
                                      się pliki sklepu)?
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
                                          form="editBrief"
                                          defaultValue={item.skl_czy_hosting}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.skl_czy_hosting}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                </>
                              ) : null}

                              {item.kategoria.id === 5 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czy firma posiada logo? (Jeśli tak,
                                      czy firma posiada logo w formie pliku
                                      wektorowego oraz księgę znaku?)
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
                                          form="editBrief"
                                          defaultValue={item.vid_logo}
                                        />
                                      ) : (
                                        <StaticInfo>{item.vid_logo}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Czy firma posiada już intro?
                                      (animowana prezentacja logo dodawana
                                      zazwyczaj na początku filmów)
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
                                          form="editBrief"
                                          defaultValue={item.vid_intro}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_intro}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Czy firma posiada już jakieś filmy
                                      promocyjne? (Jeśli tak, to prosimy o
                                      podanie linku do filmu i odpowiedź czy
                                      mamy utrzymywać ten sam styl)
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
                                          form="editBrief"
                                          defaultValue={item.vid_czy_filmy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_czy_filmy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Jakie są założenia i podstawowy cel
                                      filmu? (sprzedażowa – jaki produkt będzie
                                      sprzedawany, wizerunkowa – jaki efekt ma
                                      być uzyskany, (solidna, luksusowa)
                                      informacyjna – jakie informacje ma
                                      zawierać / pokazać cechy, funkcjonalność
                                      produktu)
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
                                          form="editBrief"
                                          defaultValue={item.vid_zalozenia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_zalozenia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. Czy mają Państwo ogólną wizje/
                                      szkielet filmu? (Jakie ujęcia, kolejność
                                      itd.)
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
                                          form="editBrief"
                                          defaultValue={item.vid_wizja}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_wizja}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Jaki ma być charakter filmu (wesoły,
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
                                          form="editBrief"
                                          defaultValue={item.vid_charakter}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_charakter}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. Jaka ma być przybliżona długość filmu?
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
                                          form="editBrief"
                                          defaultValue={item.vid_dlugosc}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_dlugosc}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. Kim jest główna konkurencja i czy
                                      posiadają takie filmy?
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
                                          form="editBrief"
                                          defaultValue={item.vid_konkurencja}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_konkurencja}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. Czy posiadają Państwo materiały z
                                      których mamy korzystać czy my mamy
                                      nagrywać?
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
                                          form="editBrief"
                                          defaultValue={item.vid_materialy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_materialy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Jeżeli to my mamy nagrywać to jaka
                                      jest lokalizacja i kiedy możemy to
                                      zrealizować?
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
                                          form="editBrief"
                                          defaultValue={item.vid_my_nagrywamy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_my_nagrywamy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. Przykłady istniejących filmów, które
                                      mogą posłużyć za wzór. (nie muszą być
                                      związane z branżą)
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
                                          form="editBrief"
                                          defaultValue={item.vid_przyklady}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_przyklady}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      21. Elementy na istniejących filmach,
                                      które podobają się Państwu.
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
                                          form="editBrief"
                                          defaultValue={item.vid_elementy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_elementy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      22. Czy film ma zawierać napisy?
                                    </Label>
                                    <Content>
                                      {context.allowEdit(
                                        item.wsp_statuss,
                                        item.user.email
                                      ) === true ? (
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="vid_napisy"
                                          tag="textarea"
                                          form="editBrief"
                                          defaultValue={item.vid_napisy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_napisy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      23. Jeżeli ma zawierać napisy to czy
                                      otrzymamy teksty do filmu, czy my mamy
                                      wymyślić scenariusz?
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
                                          form="editBrief"
                                          defaultValue={item.vid_scenariusz}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_scenariusz}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      24. Czy do kwestii mówionych firma
                                      zapewnia aktora (kogoś kto będzie mówił do
                                      kamery)?
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
                                          form="editBrief"
                                          defaultValue={item.vid_aktor}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_aktor}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      25. Czy firma chce ujęć z drona?
                                    </Label>
                                    <Content>
                                      {context.allowEdit(
                                        item.wsp_statuss,
                                        item.user.email
                                      ) === true ? (
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="vid_dron"
                                          tag="textarea"
                                          form="editBrief"
                                          defaultValue={item.vid_dron}
                                        />
                                      ) : (
                                        <StaticInfo>{item.vid_dron}</StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      26. Jeżeli film ma zawierać napisy to w
                                      jakim mają być języku?
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
                                          form="editBrief"
                                          defaultValue={item.vid_jezyk_napisow}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_jezyk_napisow}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      27. Elementy dodatkowe do umieszczenia na
                                      filmie (zdjęcia, loga sponsorów, elementy
                                      graficzne itd.)
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
                                          form="editBrief"
                                          defaultValue={
                                            item.vid_elementy_dodatkowe
                                          }
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_elementy_dodatkowe}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      28. Gdzie będzie wyświetlany film? (social
                                      media, urządzenia mobilne, bannery itd.)
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
                                          form="editBrief"
                                          defaultValue={item.vid_gdzie}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_gdzie}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      29. W jakiej rozdzielczości mamy wykonać
                                      film? (HD, full HD, 4K)
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
                                          form="editBrief"
                                          defaultValue={item.vid_rozdzielczosc}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.vid_rozdzielczosc}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                </>
                              ) : null}

                              {item.kategoria.id === 6 ? (
                                <>
                                  <Row>
                                    <Label>
                                      10. Czy firma posiada logo? Jeśli tak, czy
                                      firma posiada logo w formie pliku
                                      wektorowego oraz księgę znaku?
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
                                          form="editBrief"
                                          defaultValue={item.anim_logo}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_logo}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      11. Jakie są założenia i podstawowy cel
                                      animacji?
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
                                          form="editBrief"
                                          defaultValue={item.anim_zalozenia}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_zalozenia}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      12. Gdzie będzie publikowana animacja?
                                      (YouTube, Facebook, Instagram, TV itp.)?
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
                                          form="editBrief"
                                          defaultValue={item.anim_gdzie}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_gdzie}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      13. Czy animacja wymaga lektora? Jeśli
                                      tak, czy zapewnią Państwo lektora?
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
                                          form="editBrief"
                                          defaultValue={item.anim_lektor}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_lektor}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      14. Czy animacja ma posiadać muzykę w tle?
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
                                          form="editBrief"
                                          defaultValue={item.anim_muzyka}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_muzyka}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      15. Jaki ma być czas trwania i ilość
                                      animacji?
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
                                          form="editBrief"
                                          defaultValue={item.anim_dlugosc}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_dlugosc}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      16. Jaki ma być format animacji? (mp4,
                                      avi, gif?)
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
                                          form="editBrief"
                                          defaultValue={item.anim_format}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_format}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      17. Jakie są Twoje oczekiwania co do tonu
                                      i stylu animacji? (nowoczesna, rysunkowa,
                                      poważna itd.)
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
                                          form="editBrief"
                                          defaultValue={item.anim_styl}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_styl}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      18. Przykłady istniejących animacji, które
                                      podobają się Tobie. Podaj minimum trzy
                                      przykłady. (nie muszą być związane z
                                      branżą)
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
                                          form="editBrief"
                                          defaultValue={item.anim_przyklady}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_przyklady}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      19. Elementy na istniejących animacjach,
                                      które podobają się Tobie.
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
                                          form="editBrief"
                                          defaultValue={item.anim_elementy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_elementy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      20. Jakie materiały zostaną nam
                                      przekazane?
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
                                          form="editBrief"
                                          defaultValue={item.anim_materialy}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_materialy}
                                        </StaticInfo>
                                      )}
                                    </Content>
                                  </Row>
                                  <Row>
                                    <Label>
                                      21. Czy otrzymamy scenariusz / tekst dla
                                      lektora (jeżeli wymagane)?
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
                                          form="editBrief"
                                          defaultValue={item.anim_scenariusz}
                                        />
                                      ) : (
                                        <StaticInfo>
                                          {item.anim_scenariusz}
                                        </StaticInfo>
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
                                      form="editBrief"
                                      defaultValue={item.wsp_uwagi}
                                    />
                                  ) : (
                                    <StaticInfo>{item.wsp_uwagi}</StaticInfo>
                                  )}
                                </Content>
                              </Row>

                              <Row>
                                <Content buttons>
                                  <Link to={"/briefs/"}>
                                    <Button>Wróć do wszystkich briefów</Button>
                                  </Link>
                                  {context.allowEdit(
                                    item.wsp_statuss,
                                    item.user.email
                                  ) === true ? (
                                    <>
                                      <Button form="editBrief">
                                        Zapisz zmiany
                                      </Button>
                                      <Button
                                        onClick={e => {
                                          context.editItem(
                                            e,
                                            match.params.id,
                                            this.state
                                          );
                                          context.przekazDoWyceny(
                                            e,
                                            match.params.id,
                                            item.wsp_nazwa,
                                            item.kategoria.name
                                          );
                                        }}>
                                        Przekaż do wyceny
                                      </Button>
                                    </>
                                  ) : null}
                                </Content>
                              </Row>
                            </>
                          </LeftWrapper>

                          <RightWrapper>
                            {item.kategoria.name === "Wideo" ? (
                              <>
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
                                  }></form>
                                <Row status>
                                  <Label>Status wyceny operatora:</Label>
                                  <Content>
                                    {context.allowEditWycena(
                                      item.wsp_status_operatora,
                                      "Operator"
                                    ) === true &&
                                    item.kategoria.name === "Wideo" ? (
                                      <Select
                                        name="wsp_status_operatora"
                                        defaultValue={item.wsp_status_operatora}
                                        form="wycenOperator"
                                        onChange={this.handleInputChange}>
                                        <option value="nie_wycenione">
                                          Nie wycenione
                                        </option>
                                        <option value="wycenione">
                                          Wycenione
                                        </option>
                                        <option value="zwrot_do_handlowca">
                                          Zwrot do handlowca
                                        </option>
                                      </Select>
                                    ) : (
                                      handleStatus(item.wsp_status_operatora)
                                    )}
                                  </Content>
                                </Row>

                                <Row status>
                                  <Label>Data zmiany statusu:</Label>
                                  <Content>
                                    {showDate(item.wsp_status_operatora_date)}
                                  </Content>
                                </Row>

                                <Row>
                                  <Label>Wycena operatora</Label>
                                  <Content buttonRight>
                                    {context.allowEditWycena(
                                      item.wsp_status_operatora,
                                      "Operator"
                                    ) === true &&
                                    item.kategoria.name === "Wideo" ? (
                                      <>
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="wsp_wycena_operatora"
                                          tag="textarea"
                                          form="wycenOperator"
                                          defaultValue={
                                            item.wsp_wycena_operatora
                                          }
                                          marginbottom="10px"
                                        />
                                        <Button
                                          type="submit"
                                          form="wycenOperator">
                                          Zapisz zmiany
                                        </Button>
                                      </>
                                    ) : (
                                      <StaticInfo>
                                        {item.wsp_wycena_operatora}
                                      </StaticInfo>
                                    )}
                                  </Content>
                                </Row>
                              </>
                            ) : null}

                            {item.kategoria.name === "Animacja" ? (
                              <>
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
                                  }></form>
                                <Row status>
                                  <Label>Status wyceny animatora:</Label>
                                  <Content>
                                    {context.allowEditWycena(
                                      item.wsp_status_animatora,
                                      "Animator"
                                    ) === true &&
                                    item.kategoria.name === "Animacja" ? (
                                      <Select
                                        name="wsp_status_animatora"
                                        defaultValue={item.wsp_status_animatora}
                                        form="wycenAnimator"
                                        onChange={this.handleInputChange}>
                                        <option value="nie_wycenione">
                                          Nie wycenione
                                        </option>
                                        <option value="wycenione">
                                          Wycenione
                                        </option>
                                        <option value="zwrot_do_handlowca">
                                          Zwrot do handlowca
                                        </option>
                                      </Select>
                                    ) : (
                                      handleStatus(item.wsp_status_animatora)
                                    )}
                                  </Content>
                                </Row>

                                <Row status>
                                  <Label>Data zmiany statusu:</Label>
                                  <Content>
                                    {showDate(item.wsp_status_animatora_date)}
                                  </Content>
                                </Row>

                                <Row>
                                  <Label>Wycena animatora:</Label>
                                  <Content buttonRight>
                                    {context.allowEditWycena(
                                      item.wsp_status_animatora,
                                      "Animator"
                                    ) === true &&
                                    item.kategoria.name === "Animacja" ? (
                                      <>
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="wsp_wycena_animatora"
                                          tag="textarea"
                                          form="wycenAnimator"
                                          defaultValue={
                                            item.wsp_wycena_animatora
                                          }
                                          marginbottom="10px"
                                        />
                                        <Button
                                          type="submit"
                                          form="wycenAnimator">
                                          Zapisz zmiany
                                        </Button>
                                      </>
                                    ) : (
                                      <StaticInfo>
                                        {item.wsp_wycena_animatora}
                                      </StaticInfo>
                                    )}
                                  </Content>
                                </Row>
                              </>
                            ) : null}

                            {item.kategoria.name === "Wideo" ||
                            item.kategoria.name === "Animacja" ? null : (
                              <>
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
                                  }></form>
                                <Row status>
                                  <Label>Status wyceny grafika:</Label>
                                  <Content>
                                    {context.allowEditWycena(
                                      item.wsp_status_grafika,
                                      "Grafik"
                                    ) === true &&
                                    (item.kategoria.name ===
                                      "Strona internetowa" ||
                                      item.kategoria.name === "Sklep" ||
                                      item.kategoria.name === "Logo" ||
                                      item.kategoria.name === "Katalog") ? (
                                      <Select
                                        name="wsp_status_grafika"
                                        form="wycenGrafik"
                                        defaultValue={item.wsp_status_grafika}
                                        onChange={this.handleInputChange}>
                                        <option value="nie_wycenione">
                                          Nie wycenione
                                        </option>
                                        <option value="wycenione">
                                          Wycenione
                                        </option>
                                        <option value="zwrot_do_handlowca">
                                          Zwrot do handlowca
                                        </option>
                                      </Select>
                                    ) : (
                                      handleStatus(item.wsp_status_grafika)
                                    )}
                                  </Content>
                                </Row>

                                <Row status>
                                  <Label>Data zmiany statusu:</Label>
                                  <Content>
                                    {showDate(item.wsp_status_grafika_date)}
                                  </Content>
                                </Row>

                                <Row>
                                  <Label>Wycena grafika:</Label>
                                  <Content buttonRight>
                                    {context.allowEditWycena(
                                      item.wsp_status_grafika,
                                      "Grafik"
                                    ) === true &&
                                    (item.kategoria.name ===
                                      "Strona internetowa" ||
                                      item.kategoria.name === "Sklep" ||
                                      item.kategoria.name === "Logo" ||
                                      item.kategoria.name === "Katalog") ? (
                                      <>
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="wsp_wycena_grafika"
                                          tag="textarea"
                                          form="wycenGrafik"
                                          defaultValue={item.wsp_wycena_grafika}
                                          marginbottom="10px"
                                        />
                                        <Button
                                          type="submit"
                                          form="wycenGrafik">
                                          Zapisz zmiany
                                        </Button>
                                      </>
                                    ) : (
                                      <StaticInfo>
                                        {item.wsp_wycena_grafika}
                                      </StaticInfo>
                                    )}
                                  </Content>
                                </Row>
                              </>
                            )}

                            {item.kategoria.name === "Strona internetowa" ||
                            item.kategoria.name === "Sklep" ? (
                              <>
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
                                  }></form>
                                <Row status>
                                  <Label>Status wyceny kodera:</Label>
                                  <Content>
                                    {context.allowEditWycena(
                                      item.wsp_status_kodera,
                                      "Koder"
                                    ) === true &&
                                    (item.kategoria.name ===
                                      "Strona internetowa" ||
                                      item.kategoria.name === "Sklep") ? (
                                      <Select
                                        name="wsp_status_kodera"
                                        defaultValue={item.wsp_status_kodera}
                                        onChange={this.handleInputChange}
                                        form="wycenKoder"
                                        required>
                                        <option value="nie_wycenione">
                                          Nie wycenione
                                        </option>
                                        <option value="wycenione">
                                          Wycenione
                                        </option>
                                        <option value="zwrot_do_handlowca">
                                          Zwrot do handlowca
                                        </option>
                                      </Select>
                                    ) : (
                                      handleStatus(item.wsp_status_kodera)
                                    )}
                                  </Content>
                                </Row>

                                <Row status>
                                  <Label>Data zmiany statusu:</Label>
                                  <Content>
                                    {showDate(item.wsp_status_kodera_date)}
                                  </Content>
                                </Row>

                                <Row>
                                  <Label>Wycena kodera:</Label>
                                  <Content buttonRight>
                                    {context.allowEditWycena(
                                      item.wsp_status_kodera,
                                      "Koder"
                                    ) === true &&
                                    (item.kategoria.name ===
                                      "Strona internetowa" ||
                                      item.kategoria.name === "Sklep") ? (
                                      <>
                                        <Input
                                          onChange={this.handleInputChange}
                                          name="wsp_wycena_kodera"
                                          tag="textarea"
                                          form="wycenKoder"
                                          defaultValue={item.wsp_wycena_kodera}
                                          marginbottom="10px"
                                        />
                                        <Button type="submit" form="wycenKoder">
                                          Zapisz zmiany
                                        </Button>
                                      </>
                                    ) : (
                                      <StaticInfo>
                                        {item.wsp_wycena_kodera}
                                      </StaticInfo>
                                    )}
                                  </Content>
                                </Row>
                              </>
                            ) : null}

                            <Row status>
                              <Label>Status administracji:</Label>
                              <Content>
                                {context.user.role.name === "Administrator" ? (
                                  <>
                                    <form
                                      autoComplete="off"
                                      id="changeStatus"
                                      onSubmit={e =>
                                        context.changeStatus(
                                          e,
                                          match.params.id,
                                          this.state
                                        )
                                      }></form>
                                    <Select
                                      name="wsp_statuss"
                                      defaultValue={item.wsp_statuss}
                                      form="changeStatus"
                                      onChange={this.handleInputChange}
                                      required>
                                      <option value="wersja_robocza">
                                        Wersja robocza
                                      </option>
                                      <option value="do_wyceny">
                                        Do wyceny
                                      </option>
                                      <option value="wycenione">
                                        Wycenione
                                      </option>
                                    </Select>
                                  </>
                                ) : (
                                  handleMainStatus(item.wsp_statuss)
                                )}
                              </Content>
                            </Row>

                            {context.user.role.name === "Administrator" ? (
                              <Row>
                                <Content buttonRight>
                                  <Button type="submit" form="changeStatus">
                                    Zapisz zmiany
                                  </Button>
                                </Content>
                              </Row>
                            ) : null}
                          </RightWrapper>
                        </MainWrapper>
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
