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

class KatalogBriefContent extends React.Component {
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
            Czy firma posiada logo? (Jeśli tak, czy firma posiada logo w formie
            pliku wektorowego oraz czy macie do logo wykonaną księgę znaku?)
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
            Czy firma obecnie posiada katalog? Jeśli tak, prosimy o link do
            wersji online lub o przesłanie pliku w załączniku.
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
            Czy katalog ma być przygotowany do druku? lub Czy katalog ma być
            przygotowany tylko na potrzeby internetu? Posiadamy w standardzie
            przygotowanie wersji do druku oraz internetu, gdy podstawowe
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
                defaultValue={item.kat_czy_do_druku}
              />
            ) : (
              item.kat_czy_do_druku
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy wybrali już Państwo drukarnię do wydruku katalogów? Jaki nakład
            katalogów jest przewidywany? Prosimy o podanie ilość sztuk. Jeśli
            będzie to np. tylko 10 sztuk to katalog może być inaczej
            przygotowany do druku. Jeśli wydruk ma być niestandardowy, będziemy
            potrzebować wytycznych od drukarni tuż przed rozpoczęciem
            projektowania.
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
            *Jaki format powinien mieć katalog? Standardowe formaty: A4, A5, A6,
            kwadrat. Jeśli inny, prosimy podać dokładne wymiary. (Miej na
            uwadze: Jeśli format będzie inny niż standardowy to koszy wydruku
            mogą wzrosnąć nawet 100%)
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
            Jaka będzie orientacja katalogu? (pionowa, pozioma, kwadrat, inna?)
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
            *Czy przewidują Państwo uszlachetnienie lakierem wybiórczym np. na
            okładce lub innych stronach? (Jeśli tak, opracujemy dla drukarni
            makietę z wybranymi elementami, które mają być lakierowane)
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
            *Ile stron powinien zawierać katalog? Aby katalog został wydrukowany
            i złożony, ilość stron musi być podzielna przez 4. Przykład: 8 stron
            czyli 4 strony okładki + 4 strony środka. (Przykłady standardowych
            rozmiarów stron: 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52 … 88,
            92,96, 100)
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
            *Jaki jest cel nowego katalogu? Prosimy opisać jakie mają Państwo
            oczekiwania co do katalogu, co będzie zawierał, jakie ma spełnić
            zadania i do czego będzie służył. ( Przykład: katalog będzie służ
            przedstawicielom na spotkaniach z klientem oraz na targach. będzie
            zawierał informacje o firmie jej historia i strukturę. Przedstawimy
            koło 20 najlepszych produktów z dokładnym podziałem na 3 kategorie.
            Każdy produkt będzie zawierał dokładny opis zdjęcie warianty i
            cennik. Chcemy zamieścić referencje i loga partnerów, mapkę dojazdu
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
                defaultValue={item.kat_cel}
              />
            ) : (
              item.kat_cel
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Czy katalog ma nawiązywać do strony internetowej lub sklepu
            internetowego? Jeśli tak, prosimy opisać pod jakim względem.
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
            *W jakim języku będą treści do katalogu? Lub Czy katalog będzie
            zawierał kilka języków w jednym katalogu?Jeśli tak prosimy podać w
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
            *Czy katalog również ma być projektowany w innych językach niż
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
                defaultValue={item.kat_jezyki_obce}
              />
            ) : (
              item.kat_jezyki_obce
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            *Czy katalog będzie zawierał tabele/cenniki/itp.? (Jeśli tak prosimy
            opisać i podać orientacyjną ilość tabel, orientacyjną ilość wierszy
            i kolumn w każdej z nich)
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
            *Przykłady istniejących katalogów, które się Państwu podobają. Podaj
            minimum trzy przykłady. (Nie muszą być związane z branżą. Prosimy
            podać adres url lub nazwę katalogu oraz wysłać go do nas mailem)
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
                defaultValue={item.kat_przyklady}
              />
            ) : (
              item.kat_przyklady
            )}
          </Content>
        </Row>
        <Row>
          <Label>
            Elementy na istniejących katalogach, które się Państwu podobają.
            Prosimy o wskazanie co się Państwu w nich podoba.
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
            Na jakim etapie gromadzenia materiałów do katalogu są Państwo?
            (Przykład: jesteśmy w połowie pisania treści resztę mamy
            przygotowane / wszystko mamy gotowe, tylko projektować)
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
            *Czy otrzymamy zdjęcia do katalogu przed realizacją? Koniecznie w
            dobrej jakości, nadającej się pod wydruk.
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
            *Czy otrzymamy teksty do katalogu przed projektowaniem w docelowej
            wersji? (Jeśli nie to w jakiej jakości i proszę opisać) Jeśli treści
            będą dostarczone później, proces projektowania może się wydłużyć
            dwukrotnie. * Po otrzymaniu docelowych treści nie ma możliwości
            całkowitej zmiany tekstu na etapie projektowania. Istnieje możliwość
            korekty przesłanych treści (literówki, przecinki, stylistyka).
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
            *Jakie dodatkowe materiały do projektowania dostaniemy? Np. loga
            firm, hasła reklamowe, itp. które są niezbędne do zrealizowania
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
            Czy potrzebują Państwo pliki edytowalne (źródłowe)? (Jeśli tak,
            prosimy określić w jakim programie mamy przygotować katalog:
            InDesign, CorelDraw, Illustrator. Jeśli katalog będzie miał powyżej
            20 stron: InDesign, CorelDraw. Jeśli zależy Państwu na programie
            CorelDraw, prosimy określić wersję (np. wersja 15, 16, 17).) W
            standardzie przygotowujemy projekty wyłącznie do druku i internetu.
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
            Prosimy podać inne dodatkowe informacje, które mogą okazać się
            przydatne na etapie wyceny (Czy mamy wykonać rysunki konturowe
            zamiast zdjęć? Rysunki techniczne, obrys produktu, itp.)
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
    );
  }
}

export default KatalogBriefContent;
