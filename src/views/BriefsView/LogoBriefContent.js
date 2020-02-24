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

class LogoBriefContent extends React.Component {
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
            Czego ma dotyczyć projekt: Zaprojektowanie nowego logo / Delikatne
            odświeżenie znaku / Zupełne przeprojektowanie logo
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jaka dokładna nazwa ma się znajdować w logo? np. ROXART</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy ma być dodatkowy podpis do głównej nazwy? np. Agencja Reklamowa
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Ile propozycji logotypów mamy przygotować? 1, 3, 6, więcej?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy mamy przygotować księgę znaku? opis budowy logo i przykłady jak
            należy stosować znak dla prawidłowego używania
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
              <Input
                onChange={this.handleInputChange}
                name="logo_ksiegalogo_typlogo"
                tag="textarea"
                defaultValue={item.logo_ksiegalogo_typlogo}
              />
            ) : (
              item.logo_ksiegalogo_typlogo
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            1. Typografia 2. Inicjały 3. Symbol lub Ikona 4. Kombinacja znak +
            ikona 5. Emblemat 6. Inne. Podaj przykład innego. Wybieram typ logo
            numer:
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie są Państwa preferencje kolorystyczne, które chcielibyście użyć
            w logo?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Gdzie Państwa logo będzie używane? (druk, serwis www, inne)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jaki jest najważniejszy nośnik, na którym Państwa logo będzie
            prezentowane?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Przykłady istniejących logo, które podobają się Tobie. Podaj minimum
            trzy przykłady. (nie muszą być związane z branżą)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Proszę podać inne dodatkowe informacje, które mogą okazać się
            przydatne w projektowaniu
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
    );
  }
}

export default LogoBriefContent;
