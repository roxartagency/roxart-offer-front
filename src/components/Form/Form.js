import React from "react";
import AppContext from "../../context";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

class Form extends React.Component {
  static contextType = AppContext;

  state = {
    kategoria: "1"
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <FormWrapper>
            <StyledForm
              autoComplete="off"
              onSubmit={e => context.addItem(e, this.state)}>
              <Select
                name="kategoria"
                value={this.state.kategoria}
                onChange={this.handleInputChange}
                label="Kategoria briefa"
                marginBottom="30px">
                <option value="1">Strona internetowa</option>
                <option value="2">Katalog</option>
              </Select>
              <Input
                onChange={this.handleInputChange}
                name="wsp_nazwa"
                required
                value={this.state.wsp_nazwa}
                label="Nazwa firmy"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_adres"
                required
                value={this.state.wsp_adres}
                label="Adres"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_email"
                required
                value={this.state.wsp_email}
                label="E-mail osoby kontaktowej"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_adres_url"
                required
                value={this.state.wsp_adres_url}
                label="Jaki jest adres (URL) Twojej strony internetowej? (obecny lub planowany)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_czym_zajmuje"
                required
                value={this.state.wsp_czym_zajmuje}
                label="Czym zajmuje się Twoja firma?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_branza"
                required
                value={this.state.wsp_branza}
                label="W jakiej branży działa Twoja firma?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_ile_lat"
                required
                value={this.state.wsp_ile_lat}
                label="Ile lat Państwa firma jest na rynku i ilu zatrudnia pracowników?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_jakie_produkty"
                required
                value={this.state.wsp_jakie_produkty}
                marginBottom="30px"
                label="Jakie produkty/usługi oferuje Twoja firma swoim klientom?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_kim_sa_klienci"
                required
                value={this.state.wsp_kim_sa_klienci}
                label="Kim są Twoi klienci (dotychczasowi lub potencjalni) oraz jaka jest grupa docelowa?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_konkurenci"
                required
                value={this.state.wsp_konkurenci}
                label="Kim są główni konkurenci (lokalnie i globalnie)? (można podać adresy internetowe)"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_budzet"
                required
                value={this.state.wsp_budzet}
                label="Jaki jest określony budżet na realizację projektu netto?"
                marginBottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_czas_realizacji"
                required
                value={this.state.wsp_czas_realizacji}
                label="Jaki jest określony czas zakończenia realizacji projektu?"
                marginBottom="30px"
              />

              {this.state.kategoria === "1" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_logo"
                    required
                    value={this.state.str_logo}
                    label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zalozenia"
                    required
                    value={this.state.str_zalozenia}
                    label="Jakie są założenia i podstawowy cel nowej strony internetowej?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_charakter"
                    required
                    value={this.state.str_charakter}
                    label="Jaki ma być charakter strony internetowej (sprzedażowa, wizerunkowa, informacyjna itp.)?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_cms"
                    required
                    value={this.state.str_czy_cms}
                    label="Czy strona ma mieć możliwość samodzielnej edycji treści strony lub jej elementów (system CMS)?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_jezyk_podstawowy"
                    required
                    value={this.state.str_jezyk_podstawowy}
                    label="Jaki ma być podstawowy język strony?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_jezyki_dodatkowe"
                    required
                    value={this.state.str_jezyki_dodatkowe}
                    label="Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_podstrony_menu"
                    required
                    value={this.state.str_podstrony_menu}
                    label="Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_liczba_podstron"
                    required
                    value={this.state.str_liczba_podstron}
                    label="Jaka jest orientacyjna liczba wszystkich podstron (mapa strony)?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_kolorystyka"
                    required
                    value={this.state.str_kolorystyka}
                    label="Jakie są Twoje oczekiwania co do kolorystyki strony?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_przyklady_stron"
                    required
                    value={this.state.str_przyklady_stron}
                    label="Przykłady istniejących stron internetowych, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    required
                    name="str_elementy"
                    value={this.state.str_elementy}
                    label="Elementy na istniejących stronach internetowych, które podobają się Tobie."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zdjecia"
                    required
                    value={this.state.str_zdjecia}
                    label="Czy otrzymamy zdjęcia do strony?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_teksty"
                    required
                    value={this.state.str_teksty}
                    label="Czy otrzymamy teksty do strony?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_elementy_zewnetrzne"
                    required
                    value={this.state.str_elementy_zewnetrzne}
                    label="Elementy zewnętrzne do umieszczenia na stronie? (np. link do fanpage Facebook'a, link Youtube, itp.)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zaawansowana_funkcjonalnosc"
                    required
                    value={this.state.str_zaawansowana_funkcjonalnosc}
                    label="Czy strona ma mieć dodatkową zaawansowaną funkcjonalność? Jeśli tak to jaką?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_domena"
                    required
                    value={this.state.str_czy_domena}
                    label="Czy firma posiada wykupioną domenę (adres internetowy URL)?"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_hosting"
                    required
                    value={this.state.str_czy_hosting}
                    label="Czy firma posiada wykupiony hosting/serwer (miejsce w którym znajdują się pliki strony)?"
                    marginBottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "2" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_logo"
                    required
                    value={this.state.kat_czy_logo}
                    label="Czy firma posiada logo? (Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz czy macie do logo wykonaną księgę znaku?)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_katalog"
                    required
                    value={this.state.kat_czy_katalog}
                    label="Czy firma obecnie posiada katalog?
                  Jeśli tak, prosimy o link do wersji online lub o przesłanie pliku w załączniku."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_do_druku"
                    required
                    value={this.state.kat_czy_do_druku}
                    label="Czy katalog ma być przygotowany do druku? lub
                    Czy katalog ma być przygotowany  tylko na potrzeby internetu? 
                    Posiadamy w standardzie przygotowanie wersji do druku oraz internetu, gdy podstawowe przygotowanie jest do druku."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_drukarnia_naklad"
                    required
                    value={this.state.kat_drukarnia_naklad}
                    label="Czy wybrali już Państwo drukarnię do wydruku katalogów? 
                    Jaki nakład katalogów jest przewidywany? 
                    Prosimy o podanie ilość sztuk. 
                    Jeśli będzie to np. tylko 10 sztuk to katalog może być inaczej przygotowany do druku. Jeśli wydruk ma być niestandardowy, będziemy potrzebować wytycznych od drukarni tuż przed rozpoczęciem projektowania."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_format"
                    required
                    value={this.state.kat_format}
                    label="*Jaki format powinien mieć katalog? 
                    Standardowe formaty: A4, A5, A6, kwadrat.
                    Jeśli inny, prosimy podać dokładne wymiary.
                    (Miej na uwadze: Jeśli format będzie inny niż standardowy to koszy wydruku mogą wzrosnąć nawet 100%)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_orientacja"
                    required
                    value={this.state.kat_orientacja}
                    label="Jaka będzie orientacja katalogu?
                    (pionowa, pozioma, kwadrat, inna?)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_uszlachetnienie"
                    required
                    value={this.state.kat_uszlachetnienie}
                    label="*Czy przewidują Państwo  uszlachetnienie lakierem wybiórczym np. na okładce lub  innych stronach?
                    (Jeśli tak, opracujemy dla drukarni makietę z wybranymi elementami, które mają być lakierowane)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_ile_stron"
                    required
                    value={this.state.kat_ile_stron}
                    label="*Ile stron powinien zawierać katalog? 
                    Aby katalog został wydrukowany i złożony, ilość stron musi być podzielna przez 4. Przykład: 8 stron czyli 4 strony okładki + 4 strony środka. 
                    (Przykłady standardowych rozmiarów stron: 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52 … 88, 92,96, 100)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_cel"
                    required
                    value={this.state.kat_cel}
                    label="*Jaki jest cel nowego katalogu? 
                    Prosimy opisać jakie mają Państwo oczekiwania co do katalogu, co będzie zawierał, jakie ma spełnić zadania i do czego będzie służył. ( Przykład: katalog będzie służ przedstawicielom na spotkaniach z klientem oraz na targach. będzie zawierał informacje o firmie jej historia i strukturę. Przedstawimy koło 20 najlepszych produktów z dokładnym podziałem na 3 kategorie. Każdy produkt będzie zawierał dokładny opis zdjęcie warianty i cennik. Chcemy zamieścić referencje i loga partnerów, mapkę dojazdu galerię zdjęć.)."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_nawiazanie"
                    required
                    value={this.state.kat_nawiazanie}
                    label="Czy katalog ma nawiązywać do strony internetowej lub sklepu internetowego? 
                    Jeśli tak, prosimy opisać pod jakim względem."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_jezyk_podstawowy"
                    required
                    value={this.state.kat_jezyk_podstawowy}
                    label="*W jakim języku będą treści do katalogu?
                    Lub 
                    Czy katalog będzie zawierał kilka języków w jednym katalogu?Jeśli tak prosimy podać w jakich."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_jezyki_obce"
                    required
                    value={this.state.kat_jezyki_obce}
                    label="*Czy katalog również ma być projektowany w innych językach niż standardowy? 
                    Jeśli tak to w jakim jeszcze."
                    marginBottom="30px"
                  />

                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_tabele"
                    required
                    value={this.state.kat_czy_tabele}
                    label="*Czy katalog będzie zawierał tabele/cenniki/itp.? 
                    (Jeśli tak prosimy opisać i podać orientacyjną ilość tabel, orientacyjną ilość wierszy i kolumn w każdej z nich)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_przyklady"
                    required
                    value={this.state.kat_przyklady}
                    label="*Przykłady istniejących katalogów, które się Państwu podobają. Podaj minimum trzy przykłady. (Nie muszą być związane z branżą. Prosimy podać adres url lub nazwę katalogu oraz wysłać go do nas mailem)
                    Chcemy poznać Państwa gust."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_elementy"
                    required
                    value={this.state.kat_elementy}
                    label="Elementy na istniejących katalogach, które się Państwu podobają.
                    Prosimy o wskazanie co się Państwu w nich podoba."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_etap"
                    required
                    value={this.state.kat_etap}
                    label="Na jakim etapie gromadzenia materiałów do katalogu są Państwo?
                    (Przykład: jesteśmy w połowie pisania treści resztę mamy przygotowane / wszystko mamy gotowe, tylko projektować)"
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_zdjecia"
                    required
                    value={this.state.kat_zdjecia}
                    label="*Czy otrzymamy zdjęcia do katalogu przed realizacją? 
                    Koniecznie w dobrej jakości, nadającej się pod wydruk."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_teksty"
                    required
                    value={this.state.kat_teksty}
                    label="*Czy otrzymamy teksty do katalogu przed projektowaniem w docelowej wersji? 
                    (Jeśli nie to w jakiej jakości i proszę opisać)
                    Jeśli treści będą dostarczone później, proces projektowania może się wydłużyć dwukrotnie. 
                    * Po otrzymaniu docelowych treści nie ma możliwości całkowitej zmiany tekstu na etapie projektowania. Istnieje możliwość korekty przesłanych treści (literówki, przecinki, stylistyka)."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_materialy"
                    required
                    value={this.state.kat_materialy}
                    label="*Jakie dodatkowe materiały do projektowania dostaniemy? 
                    Np. loga firm, hasła reklamowe, itp. które są niezbędne do zrealizowania projektu."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_pliki"
                    required
                    value={this.state.kat_pliki}
                    label="Czy potrzebują Państwo pliki edytowalne (źródłowe)?
                    (Jeśli tak, prosimy określić w jakim programie mamy przygotować katalog: InDesign, CorelDraw, Illustrator. Jeśli katalog będzie miał powyżej 20 stron: InDesign, CorelDraw. Jeśli zależy Państwu na programie CorelDraw, prosimy określić wersję (np. wersja 15, 16, 17).)
                    W standardzie przygotowujemy projekty wyłącznie do druku i internetu."
                    marginBottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_dodatkowe"
                    required
                    value={this.state.kat_dodatkowe}
                    label="Prosimy podać inne dodatkowe informacje, które mogą okazać się przydatne na etapie wyceny
                    (Czy mamy wykonać rysunki konturowe zamiast zdjęć? Rysunki techniczne, obrys produktu, itp.)"
                    marginBottom="30px"
                  />
                </>
              ) : null}

              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_uwagi"
                value={this.state.wsp_uwagi}
                label="Inne ważne uwagi:"
                marginBottom="30px"
              />
              <Button>
                <FontAwesomeIcon icon={faPlusCircle} size="1x" />
                Dodaj brief
              </Button>
            </StyledForm>
          </FormWrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

Form.contextType = AppContext;

export default Form;
