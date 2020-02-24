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

class SklepBriefContent extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { context, item } = this.props;
    return (
      <>
        <Row>
          <Label>
            Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie
            pliku wektorowego oraz księgę znaku?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie są założenia i podstawowy cel sklepu internetowego?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jaki ma być podstawowy język sklepu?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy sklep ma posiadać dodatkowe języki? Jeśli tak, to jakie?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie elementy, funkcjonalności powinny pojawić się na stronie
            głównej sklepu?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jaka jest orientacyjna liczba wszystkich kategorii oraz
            podkategorii? (mapa sklepu)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jaka jest orientacyjna liczba wszystkich produktów w sklepie podczas
            jego funkcjonowania?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jaka jest liczba produktów, które my mamy dodać? (w cenie możemy
            dodać kilka/kilkanaście)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="skl_produkty_do_dodania"
                tag="textarea"
                defaultValue={item.skl_produkty_do_dodania}
              />
            ) : (
              item.skl_produkty_do_dodania
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy w podstronie produktu ma być coś więcej niż: - nazwa produktu, -
            opis produktu, - zdjęcie główne i dodatkowe, - cena, - wybór ilości,
            - przycisk dodaj do koszyka?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jakie są Twoje oczekiwania co do kolorystyki sklepu?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Przykłady istniejących sklepów internetowych, które podobają się
            Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z
            branżą)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Elementy w istniejących sklepach internetowych, które podobają się
            Tobie.
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy otrzymamy zdjęcia do wykorzystania w sklepie internetowym? (np.
            zdjęcia do baneru promującego sklep, do boksów reklamowych, itp.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy otrzymamy teksty / hasła reklamowe do sklepu internetowego?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Elementy zewnętrzne do umieszczenia w sklepie? (np. link do fanpage
            Facebook'a, link Youtube, itp.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="skl_elementy_zewnetrzne"
                tag="textarea"
                defaultValue={item.skl_elementy_zewnetrzne}
              />
            ) : (
              item.skl_elementy_zewnetrzne
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy jest już ustalony system płatności? (np. DotPay, PayU, Przelew
            standardowy, itp.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy sklep ma mieć dodatkową zaawansowaną funkcjonalność? (Jeśli tak
            to jaką?)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="skl_zaawansowana_funkcjonalnosc"
                tag="textarea"
                defaultValue={item.skl_zaawansowana_funkcjonalnosc}
              />
            ) : (
              item.skl_zaawansowana_funkcjonalnosc
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy firma posiada wykupioną domenę (adres internetowy URL)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy firma posiada wykupiony hosting/serwer (miejsce w którym
            znajdują się pliki sklepu)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
    );
  }
}

export default SklepBriefContent;
