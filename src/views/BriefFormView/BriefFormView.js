import React from "react";
import AppContext from "../../context";
import Form from "../../components/organisms/Form/Form";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import Button from "../../components/atoms/Button/Button";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class BriefFormView extends React.Component {
  static contextType = AppContext;

  state = {
    kategoria: `1`,
    czy_pilne: `0`,
    wsp_wlasne_pole: [
      // {
      //   field_label: "Testowe pierwsze Pytanie",
      //   field_text: "Testowa pierwsza odpowiedź"
      // }
    ]
  };

  handleInputChange = e => {
    console.log(this.state);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleInputChangeTwo = e => {
    console.log(this.state);

    this.setState(prevState => ({
      wsp_wlasne_pole: [
        ...prevState.wsp_wlasne_pole,
        {
          [e.target.name]: e.target.value
        }
      ]
    }));
  };

  addField = e => {
    // this.setState({
    //   wsp_wlasne_pole: [
    //     ...this,
    //     {
    //       field_label: "Tu wpisz pytanie",
    //       field_text: "Tu wpisz odpowiedź"
    //     }
    //   ]
    // });

    e.preventDefault();

    this.setState(prevState => ({
      wsp_wlasne_pole: [
        ...prevState.wsp_wlasne_pole,
        {
          field_label: "Tu wpisz pytanie",
          field_text: "Tu wpisz odpowiedź"
        }
      ]
    }));
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <PageTitle>Wypełnij nowy Brief</PageTitle>
            <Form onSubmit={e => context.addBrief(e, this.state)}>
              <Select
                name="kategoria"
                value={this.state.kategoria}
                onChange={this.handleInputChange}
                label="Kategoria briefa"
                marginbottom="30px">
                <option value="1">Strona internetowa</option>
                <option value="2">Katalog</option>
                <option value="3">Logo</option>
                <option value="4">Sklep</option>
                <option value="5">Wideo</option>
                <option value="6">Animacja</option>
                {/* <option value="7">Niestandardowy brief</option> */}
              </Select>

              <Input
                onChange={this.handleInputChange}
                name="wsp_nazwa"
                value={this.state.wsp_nazwa}
                label="Nazwa firmy"
                marginbottom="30px"
                required
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_adres"
                value={this.state.wsp_adres}
                label="Adres firmy"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_nip"
                value={this.state.wsp_nip}
                label="NIP firmy"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_osoba"
                value={this.state.wsp_osoba}
                label="Imię i nazwisko osoby kontaktowej"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_telefon"
                value={this.state.wsp_telefon}
                label="Numer telefonu osoby kontaktowej"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                name="wsp_email"
                value={this.state.wsp_email}
                label="E-mail osoby kontaktowej"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_adres_url"
                value={this.state.wsp_adres_url}
                label="Jaki jest adres (URL) Twojej strony internetowej? (obecny lub planowany)"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_czym_zajmuje"
                value={this.state.wsp_czym_zajmuje}
                label="Czym zajmuje się Twoja firma?"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_branza"
                value={this.state.wsp_branza}
                label="W jakiej branży działa Twoja firma?"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_ile_lat"
                value={this.state.wsp_ile_lat}
                label="Ile lat Państwa firma jest na rynku i ilu zatrudnia pracowników?"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_jakie_produkty"
                value={this.state.wsp_jakie_produkty}
                marginbottom="30px"
                label="Jakie produkty/usługi oferuje Twoja firma swoim klientom?"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_kim_sa_klienci"
                value={this.state.wsp_kim_sa_klienci}
                label="Kim są Twoi klienci (dotychczasowi lub potencjalni) oraz jaka jest grupa docelowa?"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_konkurenci"
                value={this.state.wsp_konkurenci}
                label="Kim są główni konkurenci (lokalnie i globalnie)? (można podać adresy internetowe)"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_budzet"
                value={this.state.wsp_budzet}
                label="Jaki jest określony budżet na realizację projektu netto?"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_czas_realizacji"
                value={this.state.wsp_czas_realizacji}
                label="Jaki jest określony czas zakończenia realizacji projektu?"
                marginbottom="30px"
              />

              {this.state.kategoria === "1" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_logo"
                    value={this.state.str_logo}
                    label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zalozenia"
                    value={this.state.str_zalozenia}
                    label="Jakie są założenia i podstawowy cel nowej strony internetowej?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_charakter"
                    value={this.state.str_charakter}
                    label="Jaki ma być charakter strony internetowej (sprzedażowa, wizerunkowa, informacyjna itp.)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_cms"
                    value={this.state.str_czy_cms}
                    label="Czy strona ma mieć możliwość samodzielnej edycji treści strony lub jej elementów (system CMS)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_jezyk_podstawowy"
                    value={this.state.str_jezyk_podstawowy}
                    label="Jaki ma być podstawowy język strony?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_jezyki_dodatkowe"
                    value={this.state.str_jezyki_dodatkowe}
                    label="Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_podstrony_menu"
                    value={this.state.str_podstrony_menu}
                    label="Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_liczba_podstron"
                    value={this.state.str_liczba_podstron}
                    label="Jaka jest orientacyjna liczba wszystkich podstron (mapa strony)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_kolorystyka"
                    value={this.state.str_kolorystyka}
                    label="Jakie są Twoje oczekiwania co do kolorystyki strony?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_przyklady_stron"
                    value={this.state.str_przyklady_stron}
                    label="Przykłady istniejących stron internetowych, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_elementy"
                    value={this.state.str_elementy}
                    label="Elementy na istniejących stronach internetowych, które podobają się Tobie."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zdjecia"
                    value={this.state.str_zdjecia}
                    label="Czy otrzymamy zdjęcia do strony?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_teksty"
                    value={this.state.str_teksty}
                    label="Czy otrzymamy teksty do strony?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_elementy_zewnetrzne"
                    value={this.state.str_elementy_zewnetrzne}
                    label="Elementy zewnętrzne do umieszczenia na stronie? (np. link do fanpage Facebook'a, link Youtube, itp.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_zaawansowana_funkcjonalnosc"
                    value={this.state.str_zaawansowana_funkcjonalnosc}
                    label="Czy strona ma mieć dodatkową zaawansowaną funkcjonalność? Jeśli tak to jaką?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_domena"
                    value={this.state.str_czy_domena}
                    label="Czy firma posiada wykupioną domenę (adres internetowy URL)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="str_czy_hosting"
                    value={this.state.str_czy_hosting}
                    label="Czy firma posiada wykupiony hosting/serwer (miejsce w którym znajdują się pliki strony)?"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "2" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_logo"
                    value={this.state.kat_czy_logo}
                    label="Czy firma posiada logo? (Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz czy macie do logo wykonaną księgę znaku?)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_katalog"
                    value={this.state.kat_czy_katalog}
                    label="Czy firma obecnie posiada katalog?
                  Jeśli tak, prosimy o link do wersji online lub o przesłanie pliku w załączniku."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_do_druku"
                    value={this.state.kat_czy_do_druku}
                    label="Czy katalog ma być przygotowany do druku? lub
                    Czy katalog ma być przygotowany  tylko na potrzeby internetu? 
                    Posiadamy w standardzie przygotowanie wersji do druku oraz internetu, gdy podstawowe przygotowanie jest do druku."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_drukarnia_naklad"
                    value={this.state.kat_drukarnia_naklad}
                    label="Czy wybrali już Państwo drukarnię do wydruku katalogów? 
                    Jaki nakład katalogów jest przewidywany? 
                    Prosimy o podanie ilość sztuk. 
                    Jeśli będzie to np. tylko 10 sztuk to katalog może być inaczej przygotowany do druku. Jeśli wydruk ma być niestandardowy, będziemy potrzebować wytycznych od drukarni tuż przed rozpoczęciem projektowania."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_format"
                    value={this.state.kat_format}
                    label="*Jaki format powinien mieć katalog? 
                    Standardowe formaty: A4, A5, A6, kwadrat.
                    Jeśli inny, prosimy podać dokładne wymiary.
                    (Miej na uwadze: Jeśli format będzie inny niż standardowy to koszy wydruku mogą wzrosnąć nawet 100%)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_orientacja"
                    value={this.state.kat_orientacja}
                    label="Jaka będzie orientacja katalogu?
                    (pionowa, pozioma, kwadrat, inna?)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_uszlachetnienie"
                    value={this.state.kat_uszlachetnienie}
                    label="*Czy przewidują Państwo  uszlachetnienie lakierem wybiórczym np. na okładce lub  innych stronach?
                    (Jeśli tak, opracujemy dla drukarni makietę z wybranymi elementami, które mają być lakierowane)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_ile_stron"
                    value={this.state.kat_ile_stron}
                    label="*Ile stron powinien zawierać katalog? 
                    Aby katalog został wydrukowany i złożony, ilość stron musi być podzielna przez 4. Przykład: 8 stron czyli 4 strony okładki + 4 strony środka. 
                    (Przykłady standardowych rozmiarów stron: 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52 … 88, 92,96, 100)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_cel"
                    value={this.state.kat_cel}
                    label="*Jaki jest cel nowego katalogu? 
                    Prosimy opisać jakie mają Państwo oczekiwania co do katalogu, co będzie zawierał, jakie ma spełnić zadania i do czego będzie służył. ( Przykład: katalog będzie służ przedstawicielom na spotkaniach z klientem oraz na targach. będzie zawierał informacje o firmie jej historia i strukturę. Przedstawimy koło 20 najlepszych produktów z dokładnym podziałem na 3 kategorie. Każdy produkt będzie zawierał dokładny opis zdjęcie warianty i cennik. Chcemy zamieścić referencje i loga partnerów, mapkę dojazdu galerię zdjęć.)."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_nawiazanie"
                    value={this.state.kat_nawiazanie}
                    label="Czy katalog ma nawiązywać do strony internetowej lub sklepu internetowego? 
                    Jeśli tak, prosimy opisać pod jakim względem."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_jezyk_podstawowy"
                    value={this.state.kat_jezyk_podstawowy}
                    label="*W jakim języku będą treści do katalogu?
                    Lub 
                    Czy katalog będzie zawierał kilka języków w jednym katalogu?Jeśli tak prosimy podać w jakich."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_jezyki_obce"
                    value={this.state.kat_jezyki_obce}
                    label="*Czy katalog również ma być projektowany w innych językach niż standardowy? 
                    Jeśli tak to w jakim jeszcze."
                    marginbottom="30px"
                  />

                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_czy_tabele"
                    value={this.state.kat_czy_tabele}
                    label="*Czy katalog będzie zawierał tabele/cenniki/itp.? 
                    (Jeśli tak prosimy opisać i podać orientacyjną ilość tabel, orientacyjną ilość wierszy i kolumn w każdej z nich)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_przyklady"
                    value={this.state.kat_przyklady}
                    label="*Przykłady istniejących katalogów, które się Państwu podobają. Podaj minimum trzy przykłady. (Nie muszą być związane z branżą. Prosimy podać adres url lub nazwę katalogu oraz wysłać go do nas mailem)
                    Chcemy poznać Państwa gust."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_elementy"
                    value={this.state.kat_elementy}
                    label="Elementy na istniejących katalogach, które się Państwu podobają.
                    Prosimy o wskazanie co się Państwu w nich podoba."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_etap"
                    value={this.state.kat_etap}
                    label="Na jakim etapie gromadzenia materiałów do katalogu są Państwo?
                    (Przykład: jesteśmy w połowie pisania treści resztę mamy przygotowane / wszystko mamy gotowe, tylko projektować)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_zdjecia"
                    value={this.state.kat_zdjecia}
                    label="*Czy otrzymamy zdjęcia do katalogu przed realizacją? 
                    Koniecznie w dobrej jakości, nadającej się pod wydruk."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_teksty"
                    value={this.state.kat_teksty}
                    label="*Czy otrzymamy teksty do katalogu przed projektowaniem w docelowej wersji? 
                    (Jeśli nie to w jakiej jakości i proszę opisać)
                    Jeśli treści będą dostarczone później, proces projektowania może się wydłużyć dwukrotnie. 
                    * Po otrzymaniu docelowych treści nie ma możliwości całkowitej zmiany tekstu na etapie projektowania. Istnieje możliwość korekty przesłanych treści (literówki, przecinki, stylistyka)."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_materialy"
                    value={this.state.kat_materialy}
                    label="*Jakie dodatkowe materiały do projektowania dostaniemy? 
                    Np. loga firm, hasła reklamowe, itp. które są niezbędne do zrealizowania projektu."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_pliki"
                    value={this.state.kat_pliki}
                    label="Czy potrzebują Państwo pliki edytowalne (źródłowe)?
                    (Jeśli tak, prosimy określić w jakim programie mamy przygotować katalog: InDesign, CorelDraw, Illustrator. Jeśli katalog będzie miał powyżej 20 stron: InDesign, CorelDraw. Jeśli zależy Państwu na programie CorelDraw, prosimy określić wersję (np. wersja 15, 16, 17).)
                    W standardzie przygotowujemy projekty wyłącznie do druku i internetu."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="kat_dodatkowe"
                    value={this.state.kat_dodatkowe}
                    label="Prosimy podać inne dodatkowe informacje, które mogą okazać się przydatne na etapie wyceny
                    (Czy mamy wykonać rysunki konturowe zamiast zdjęć? Rysunki techniczne, obrys produktu, itp.)"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "3" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_projekt"
                    value={this.state.logo_projekt}
                    label="Czego ma dotyczyć projekt: Zaprojektowanie nowego logo / Delikatne odświeżenie znaku / Zupełne przeprojektowanie logo"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_nazwa"
                    value={this.state.logo_nazwa}
                    label="Jaka dokładna nazwa ma się znajdować w logo?
                    np. ROXART"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_podpis"
                    value={this.state.logo_podpis}
                    label="Czy ma być dodatkowy podpis do głównej nazwy?
                    np. Agencja Reklamowa"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_propozycje"
                    value={this.state.logo_propozycje}
                    label="Ile propozycji logotypów mamy przygotować?
                    1, 3, 6, więcej?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_ksiega"
                    value={this.state.logo_ksiega}
                    label="Czy mamy przygotować księgę znaku? opis budowy logo i przykłady jak należy stosować znak dla prawidłowego używania"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_typlogo"
                    value={this.state.logo_typlogo}
                    label="1. Typografia
                    2. Inicjały
                    3. Symbol lub Ikona
                    4. Kombinacja znak + ikona
                    5. Emblemat
                    6. Inne. Podaj przykład innego.
                    Wybieram typ logo numer:"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_preferencje"
                    value={this.state.logo_preferencje}
                    label="Jakie są Państwa preferencje kolorystyczne, które chcielibyście użyć w logo?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_gdzie"
                    value={this.state.logo_gdzie}
                    label="Gdzie Państwa logo będzie używane? (druk, serwis www, inne)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_nosnik"
                    value={this.state.logo_nosnik}
                    label="Jaki jest najważniejszy nośnik, na którym Państwa logo będzie prezentowane?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_przyklady"
                    value={this.state.logo_przyklady}
                    label="Przykłady istniejących logo, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="logo_dodatkowe"
                    value={this.state.logo_dodatkowe}
                    label="Proszę podać inne dodatkowe informacje, które mogą okazać się przydatne w projektowaniu"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "4" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_logo"
                    value={this.state.skl_logo}
                    label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_zalozenia"
                    value={this.state.skl_zalozenia}
                    label="Jakie są założenia i podstawowy cel sklepu internetowego?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_jezyk_podstawowy"
                    value={this.state.skl_jezyk_podstawowy}
                    label="Jaki ma być podstawowy język sklepu?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_jezyki_dodatkowe"
                    value={this.state.skl_jezyki_dodatkowe}
                    label="Czy sklep ma posiadać dodatkowe języki? Jeśli tak, to jakie?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_strona_glowna"
                    value={this.state.skl_strona_glowna}
                    label="Jakie elementy, funkcjonalności 
                    powinny pojawić się na stronie głównej sklepu?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_podstrony_menu"
                    value={this.state.skl_podstrony_menu}
                    label="Jakie mają być główne podstrony menu/zakładki w nawigacji górnej?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_liczba_kategorii"
                    value={this.state.skl_liczba_kategorii}
                    label="Jaka jest orientacyjna liczba wszystkich kategorii oraz podkategorii? (mapa sklepu)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_liczba_produktow"
                    value={this.state.skl_liczba_produktow}
                    label="Jaka jest orientacyjna liczba wszystkich produktów w sklepie podczas jego funkcjonowania?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_produkty_do_dodania"
                    value={this.state.skl_produkty_do_dodania}
                    label="Jaka jest liczba produktów, które my mamy dodać? (w cenie możemy dodać kilka/kilkanaście)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_cos_wiecej"
                    value={this.state.skl_cos_wiecej}
                    label="Czy w podstronie produktu ma być coś więcej niż:
                    - nazwa produktu,
                    - opis produktu,
                    - zdjęcie główne i dodatkowe,
                    - cena,
                    - wybór ilości,
                    - przycisk dodaj do koszyka?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_kolorystyka"
                    value={this.state.skl_kolorystyka}
                    label="Jakie są Twoje oczekiwania co do kolorystyki sklepu?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_przyklady_sklepow"
                    value={this.state.skl_przyklady_sklepow}
                    label="Przykłady istniejących sklepów internetowych, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_elementy"
                    value={this.state.skl_elementy}
                    label="Elementy w istniejących sklepach internetowych, które podobają się Tobie."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_zdjecia"
                    value={this.state.skl_zdjecia}
                    label="Czy otrzymamy zdjęcia do wykorzystania w sklepie internetowym? (np. zdjęcia do baneru promującego sklep, do boksów reklamowych, itp.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_teksty"
                    value={this.state.skl_teksty}
                    label="Czy otrzymamy teksty / hasła reklamowe do sklepu internetowego?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_elementy_zewnetrzne"
                    value={this.state.skl_elementy_zewnetrzne}
                    label="Elementy zewnętrzne do umieszczenia w sklepie? (np. link do fanpage Facebook'a, link Youtube, itp.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_platnosci"
                    value={this.state.skl_platnosci}
                    label="Czy jest już ustalony system płatności? (np. DotPay, PayU, Przelew standardowy, itp.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_zaawansowana_funkcjonalnosc"
                    value={this.state.skl_zaawansowana_funkcjonalnosc}
                    label="Czy sklep ma mieć dodatkową zaawansowaną funkcjonalność? (Jeśli tak to jaką?)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_czy_domena"
                    value={this.state.skl_czy_domena}
                    label="Czy firma posiada wykupioną domenę (adres internetowy URL)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="skl_czy_hosting"
                    value={this.state.skl_czy_hosting}
                    label="Czy firma posiada wykupiony hosting/serwer (miejsce w którym znajdują się pliki sklepu)?"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "5" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_logo"
                    value={this.state.vid_logo}
                    label="Czy firma posiada logo? 
                    (Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_intro"
                    value={this.state.vid_intro}
                    label="Czy firma posiada już intro? (animowana prezentacja logo dodawana zazwyczaj na początku filmów)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_czy_filmy"
                    value={this.state.vid_czy_filmy}
                    label="Czy firma posiada już jakieś filmy promocyjne? 
                    (Jeśli tak, to prosimy o podanie linku do filmu i odpowiedź czy mamy utrzymywać ten sam styl)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_zalozenia"
                    value={this.state.vid_zalozenia}
                    label="Jakie są założenia i podstawowy cel filmu? 
                    (sprzedażowa – jaki produkt będzie sprzedawany, wizerunkowa – jaki efekt ma być uzyskany, (solidna, luksusowa)
                    informacyjna – jakie informacje ma zawierać / pokazać cechy, funkcjonalność produktu)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_wizja"
                    value={this.state.vid_wizja}
                    label="Czy mają Państwo ogólną
                    wizje/ szkielet filmu? 
                    (Jakie ujęcia, kolejność itd.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_charakter"
                    value={this.state.vid_charakter}
                    label="Jaki ma być charakter filmu (wesoły, humorystyczny, poważny itp.)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_dlugosc"
                    value={this.state.vid_dlugosc}
                    label="Jaka ma być przybliżona długość filmu?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_konkurencja"
                    value={this.state.vid_konkurencja}
                    label="Kim jest główna konkurencja i czy posiadają takie filmy?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_materialy"
                    value={this.state.vid_materialy}
                    label="Czy posiadają Państwo materiały z których mamy korzystać czy my mamy nagrywać?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_my_nagrywamy"
                    value={this.state.vid_my_nagrywamy}
                    label="Jeżeli to my mamy nagrywać to jaka jest lokalizacja i kiedy możemy to zrealizować?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_przyklady"
                    value={this.state.vid_przyklady}
                    label="Przykłady istniejących filmów, które mogą posłużyć za wzór. (nie muszą być związane z branżą)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_elementy"
                    value={this.state.vid_elementy}
                    label="Elementy na istniejących filmach, które podobają się Państwu."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_napisy"
                    value={this.state.vid_napisy}
                    label="Czy film ma zawierać napisy?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_scenariusz"
                    value={this.state.vid_scenariusz}
                    label="Jeżeli ma zawierać napisy to czy otrzymamy teksty do filmu, czy my mamy wymyślić scenariusz?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_aktor"
                    value={this.state.vid_aktor}
                    label="Czy do kwestii mówionych firma zapewnia aktora (kogoś kto będzie mówił do kamery)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_dron"
                    value={this.state.vid_dron}
                    label="Czy firma chce ujęć z drona?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_jezyk_napisow"
                    value={this.state.vid_jezyk_napisow}
                    label="Jeżeli film ma zawierać napisy to w jakim mają być języku?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_elementy_dodatkowe"
                    value={this.state.vid_elementy_dodatkowe}
                    label="Elementy dodatkowe do umieszczenia na filmie (zdjęcia, loga sponsorów, elementy graficzne itd.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_gdzie"
                    value={this.state.vid_gdzie}
                    label="Gdzie będzie wyświetlany film? (social media, urządzenia mobilne, bannery itd.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="vid_rozdzielczosc"
                    value={this.state.vid_rozdzielczosc}
                    label="W jakiej rozdzielczości mamy wykonać film?
                    (HD, full HD, 4K)"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "6" ? (
                <>
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_logo"
                    value={this.state.anim_logo}
                    label="Czy firma posiada logo? Jeśli tak, czy firma posiada logo w formie pliku wektorowego oraz księgę znaku?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_zalozenia"
                    value={this.state.anim_zalozenia}
                    label="Jakie są założenia i podstawowy cel animacji?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_gdzie"
                    value={this.state.anim_gdzie}
                    label="Gdzie będzie publikowana animacja? (YouTube, Facebook, Instagram, TV itp.)?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_lektor"
                    value={this.state.anim_lektor}
                    label="Czy animacja wymaga lektora? Jeśli tak, czy zapewnią Państwo lektora?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_muzyka"
                    value={this.state.anim_muzyka}
                    label="Czy animacja ma posiadać muzykę w tle?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_dlugosc"
                    value={this.state.anim_dlugosc}
                    label="Jaki ma być czas trwania i ilość animacji?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_format"
                    value={this.state.anim_format}
                    label="Jaki ma być format animacji? (mp4, avi, gif?)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_styl"
                    value={this.state.anim_styl}
                    label="Jakie są Twoje oczekiwania co do tonu i stylu animacji? (nowoczesna, rysunkowa, poważna itd.)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_przyklady"
                    value={this.state.anim_przyklady}
                    label="Przykłady istniejących animacji, które podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą być związane z branżą)"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_elementy"
                    value={this.state.anim_elementy}
                    label="Elementy na istniejących animacjach, które podobają się Tobie."
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_materialy"
                    value={this.state.anim_materialy}
                    label="Jakie materiały zostaną nam przekazane?"
                    marginbottom="30px"
                  />
                  <Input
                    onChange={this.handleInputChange}
                    tag="textarea"
                    name="anim_scenariusz"
                    value={this.state.anim_scenariusz}
                    label="Czy otrzymamy scenariusz / tekst dla lektora (jeżeli wymagane)?"
                    marginbottom="30px"
                  />
                </>
              ) : null}

              {this.state.kategoria === "7" ? (
                <>
                  <Button onClick={e => this.addField(e)}>Dodaj pole</Button>
                  {this.state.wsp_wlasne_pole.map(field => (
                    // <div key={field.field_label}>
                    <>
                      <Input
                        onChange={this.handleInputChangeTwo}
                        tag="textarea"
                        name="field_label"
                        value={field.field_label}
                        label="Pytanie"
                        marginbottom="30px"
                      />
                      <Input
                        onChange={this.handleInputChangeTwo}
                        tag="textarea"
                        name="field_text"
                        value={field.field_text}
                        label="Odpowiedź"
                        marginbottom="30px"
                      />
                    </>
                    // </div>
                  ))}
                </>
              ) : null}

              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_uwagi"
                value={this.state.wsp_uwagi}
                label="Inne ważne uwagi:"
                marginbottom="30px"
              />
              <Input
                onChange={this.handleInputChange}
                tag="textarea"
                name="wsp_zalacznik"
                value={this.state.wsp_zalacznik}
                label="Link do załączników w sieci / na dysku"
                marginbottom="30px"
              />
              <Select
                name="czy_pilne"
                value={this.state.czy_pilne}
                onChange={this.handleInputChange}
                label="Czy wycena jest pilna?"
                marginbottom="30px">
                <option value="0">Nie</option>
                <option value="1">Tak</option>
              </Select>
              {this.state.czy_pilne === `1` ? (
                <Input
                  onChange={this.handleInputChange}
                  name="wsp_pilne_opis"
                  tag="textarea"
                  value={this.state.wsp_pilne_opis}
                  label="Dlaczego wycena jest pilna?"
                  marginbottom="30px"
                  required
                />
              ) : null}
              <Button>
                <FontAwesomeIcon icon={faPlusCircle} size="1x" />
                Dodaj brief
              </Button>
            </Form>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

BriefFormView.contextType = AppContext;

export default BriefFormView;
