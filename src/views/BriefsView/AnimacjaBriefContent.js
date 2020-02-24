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

class AnimacjaBriefContent extends React.Component {
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
          <Label>Jakie są założenia i podstawowy cel animacji?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Gdzie będzie publikowana animacja? (YouTube, Facebook, Instagram, TV
            itp.)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy animacja wymaga lektora? Jeśli tak, czy zapewnią Państwo
            lektora?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Czy animacja ma posiadać muzykę w tle?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jaki ma być czas trwania i ilość animacji?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jaki ma być format animacji? (mp4, avi, gif?)</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Jakie są Twoje oczekiwania co do tonu i stylu animacji? (nowoczesna,
            rysunkowa, poważna itd.)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Przykłady istniejących animacji, które podobają się Tobie. Podaj
            minimum trzy przykłady. (nie muszą być związane z branżą)
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Elementy na istniejących animacjach, które podobają się Tobie.
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
          <Label>Jakie materiały zostaną nam przekazane?</Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
            Czy otrzymamy scenariusz / tekst dla lektora (jeżeli wymagane)?
          </Label>
          <Content>
            {context.allowEdit(item.wsp_statuss, item.user.email) === true ? (
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
    );
  }
}

export default AnimacjaBriefContent;
