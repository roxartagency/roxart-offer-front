import React from "react";
import Input from "../../components/Input/Input";
import styled from "styled-components";

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

class StronaBriefContent extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {context, item} = this.props;
    return (
      <>
        <Row>
          <Label>
            Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie
            pliku wektorowego oraz księgę znaku?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Jakie są założenia i podstawowy cel nowej strony internetowej?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Jaki ma być charakter strony internetowej (sprzedażowa, wizerunkowa,
            informacyjna itp.)?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Czy strona ma mieć możliwość samodzielnej edycji treści strony lub
            jej elementów (system CMS)?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
          <Label>Jaki ma być podstawowy język strony?</Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Jaka jest orientacyjna liczba wszystkich podstron (mapa strony)?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
          <Label>Jakie są Twoje oczekiwania co do kolorystyki strony?</Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Przykłady istniejących stron internetowych, które podobają się
            Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z
            branżą)
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Elementy na istniejących stronach internetowych, które podobają się
            Tobie.
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Elementy zewnętrzne do umieszczenia na stronie? (np. link do fanpage
            Facebook'a, link Youtube, itp.)
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
              item.user.email
            ) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="str_elementy_zewnetrzne"
                tag="textarea"
                defaultValue={item.str_elementy_zewnetrzne}
              />
            ) : (
              item.str_elementy_zewnetrzne
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy strona ma mieć dodatkową zaawansowaną funkcjonalność? Jeśli tak
            to jaką?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
              item.user.email
            ) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="str_zaawansowana_funkcjonalnosc"
                tag="textarea"
                defaultValue={item.str_zaawansowana_funkcjonalnosc}
              />
            ) : (
              item.str_zaawansowana_funkcjonalnosc
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy firma posiada wykupioną domenę (adres internetowy URL)?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
            Czy firma posiada wykupiony hosting/serwer (miejsce w którym
            znajdują się pliki strony)?
          </Label>
          <Content>
            {context.allowEdit(
              item.wsp_status_grafika,
              item.wsp_status_kodera,
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
    );
  }
}

export default StronaBriefContent;
