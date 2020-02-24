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

class WideoBriefContent extends React.Component {
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
            Czy firma posiada logo? (Jeśli tak, czy firma posiada logo w formie
            pliku wektorowego oraz księgę znaku?)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy firma posiada już intro? (animowana prezentacja logo dodawana
            zazwyczaj na początku filmów)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy firma posiada już jakieś filmy promocyjne? (Jeśli tak, to
            prosimy o podanie linku do filmu i odpowiedź czy mamy utrzymywać ten
            sam styl)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie są założenia i podstawowy cel filmu? (sprzedażowa – jaki
            produkt będzie sprzedawany, wizerunkowa – jaki efekt ma być
            uzyskany, (solidna, luksusowa) informacyjna – jakie informacje ma
            zawierać / pokazać cechy, funkcjonalność produktu)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy mają Państwo ogólną wizje/ szkielet filmu? (Jakie ujęcia,
            kolejność itd.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jaki ma być charakter filmu (wesoły, humorystyczny, poważny itp.)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jaka ma być przybliżona długość filmu?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Kim jest główna konkurencja i czy posiadają takie filmy?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy posiadają Państwo materiały z których mamy korzystać czy my mamy
            nagrywać?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jeżeli to my mamy nagrywać to jaka jest lokalizacja i kiedy możemy
            to zrealizować?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Przykłady istniejących filmów, które mogą posłużyć za wzór. (nie
            muszą być związane z branżą)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Elementy na istniejących filmach, które podobają się Państwu.
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jeżeli ma zawierać napisy to czy otrzymamy teksty do filmu, czy my
            mamy wymyślić scenariusz?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy do kwestii mówionych firma zapewnia aktora (kogoś kto będzie
            mówił do kamery)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jeżeli film ma zawierać napisy to w jakim mają być języku?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Elementy dodatkowe do umieszczenia na filmie (zdjęcia, loga
            sponsorów, elementy graficzne itd.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Gdzie będzie wyświetlany film? (social media, urządzenia mobilne,
            bannery itd.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            W jakiej rozdzielczości mamy wykonać film? (HD, full HD, 4K)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
    );
  }
}

export default WideoBriefContent;
