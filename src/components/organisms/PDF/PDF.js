import React from "react";
import {
  pdf,
  Page,
  Text,
  View,
  Image,
  Document,
  Font
} from "@react-pdf/renderer";
import { showDate } from "../../../utils/Utils";
import { saveAs } from "file-saver";
import styled from "@react-pdf/styled-components";
import spartanRegular from "../../../assets/fonts/Spartan-Regular.ttf";
import spartanBold from "../../../assets/fonts/Spartan-Bold.ttf";

Font.register({
  family: "SpartanRegular",
  src: spartanRegular
});
Font.register({
  family: "SpartanBold",
  src: spartanBold
});

const ZdjecieA4 = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Zdjecie = styled(Image)`
  width: 100px;
  height: 100px;
`;

const StyledPage = styled(Page)`
  position: relative;
  padding: 30px;
  font-family: "SpartanRegular";
`;

const Ramka = styled(View)`
  position: absolute;
  bottom: 93px;
  right: 93px;
`;

export const OfferPDF = ({ ...props }) => {
  return (
    <>
      <Document>
        {props.kategoria_ofert.name === "Social Media" ? (
          <StyledPage size="A4">
            <Text>Strona dla Social Media</Text>
          </StyledPage>
        ) : null}
        {props.kategoria_ofert.name === "SEO" ? (
          <StyledPage size="A4">
            <Text>Strona dla SEO</Text>
          </StyledPage>
        ) : null}
        <StyledPage size="A4">
          <Text>Oferta personalizowana dla: {props.ofe_nazwa}</Text>
          <Text>Oferta ważna do: {props.ofe_wazna}</Text>
          <Text>Kategoria: {props.kategoria_ofert.name}</Text>
        </StyledPage>
        <Page>
          <View>
            <ZdjecieA4
              src={
                "https://roxart-offer-dev.roxapps.usermd.net/uploads/bab66f10172a40899728236e6d6713b0.png"
              }
            />
          </View>
        </Page>
        <StyledPage>
          <ZdjecieA4
            src={
              "https://roxart-offer-dev.roxapps.usermd.net/uploads/e3a1a8e6b6784e10a1ae84058ebb63c8.png"
            }
          />
          <Ramka>
            <Zdjecie
              src={
                "https://roxart-offer-dev.roxapps.usermd.net" +
                props.user.image.url
              }
            />
            <Text>{props.user.username}</Text>
            <Text>{props.user.email}</Text>
            <Text>{props.user.phone}</Text>
          </Ramka>
        </StyledPage>
      </Document>
    </>
  );
};

const InfoWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const InfoWrapperLeft = styled(View)`
  width: calc(100% - 32px);
  padding-right: 32px;
`;

const InfoWrapperRight = styled(View)`
  width: calc(100% - 32px);
  padding-right: 32px;
`;

const InfoContent = styled(View)`
  margin: 0 0 7px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InfoContentLabel = styled(Text)`
  color: #000;
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: -0.12px;
  width: 30%;
  margin-bottom: 3px;
  display: inline-block;
`;

const InfoContentContent = styled(Text)`
  color: #000;
  font-weight: 700;
  font-family: "SpartanBold";
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: -0.28px;
  display: inline-block;
  width: 68%;
  > div {
    display: inline-block;
    label {
      display: none;
    }
    input {
      padding: 5px 10px 3px 10px;
      border-radius: 5px;
    }
  }
`;

const Label = styled(Text)`
  color: #000;
  font-size: 10px;
  line-height: 1.1;
  width: auto;
  display: block;
  margin-bottom: 6px;
  padding: 0px;
  font-weight: 700;
  letter-spacing: -0.32px;
`;

const Content = styled(View)`
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Row = styled(View)`
  padding: 0;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 100%;
`;

const StaticInfo = styled(Text)`
  padding: 0px 0px 10px 0px;
  font-size: 10px;
  font-weight: 700;
  font-family: "SpartanBold";
  line-height: 1.2;
  margin: 0;
  color: #000;
`;

export const BriefPDF = ({ type, ...props }) => {
  return (
    <>
      <Document>
        <StyledPage>
          <InfoWrapper>
            <InfoWrapperLeft>

              {type === "wewnetrzny" ? (
                <InfoContent>
                  <InfoContentLabel>Id:</InfoContentLabel>
                  <InfoContentContent>{props.id}</InfoContentContent>
                </InfoContent>
              ) : null}

              <InfoContent>
                <InfoContentLabel>Klient:</InfoContentLabel>
                <InfoContentContent>{props.wsp_nazwa}</InfoContentContent>
              </InfoContent>

              <InfoContent>
                <InfoContentLabel>Kategoria:</InfoContentLabel>
                <InfoContentContent>{props.kategoria.name}</InfoContentContent>
              </InfoContent>
              <InfoContent>
                <InfoContentLabel>Przekazano:</InfoContentLabel>
                <InfoContentContent>
                  {showDate(props.wsp_przekazane_do_wyceny)}
                </InfoContentContent>
              </InfoContent>
            </InfoWrapperLeft>

            {type === "wewnetrzny" ? (
              <InfoWrapperRight>
                <InfoContent>
                  <InfoContentLabel>Imię i nazwisko:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_osoba}</InfoContentContent>
                </InfoContent>
                <InfoContent>
                  <InfoContentLabel>Adres:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_adres}</InfoContentContent>
                </InfoContent>

                <InfoContent>
                  <InfoContentLabel>Telefon:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_telefon}</InfoContentContent>
                </InfoContent>

                <InfoContent>
                  <InfoContentLabel>Adres e-mail:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_email}</InfoContentContent>
                </InfoContent>
                <InfoContent>
                  <InfoContentLabel>NIP:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_nip}</InfoContentContent>
                </InfoContent>
                <InfoContent>
                  <InfoContentLabel>Budżet netto:</InfoContentLabel>
                  <InfoContentContent>{props.wsp_budzet}</InfoContentContent>
                </InfoContent>
              </InfoWrapperRight>
            ) : null}
          </InfoWrapper>

          <Row>
            <Label>
              1. Jaki jest adres (URL) Twojej strony internetowej? (obecny lub
              planowany):
            </Label>
            <Content>
              <StaticInfo>{props.wsp_adres_url}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>2. Czym zajmuje się Twoja firma?</Label>
            <Content>
              <StaticInfo>{props.wsp_czym_zajmuje}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>3. W jakiej branży działa Twoja firma?</Label>
            <Content>
              <StaticInfo>{props.wsp_branza}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>
              4. Ile lat Państwa firma jest na rynku i ilu zatrudnia
              pracowników?
            </Label>
            <Content>
              <StaticInfo>{props.wsp_ile_lat}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>
              5. Jakie produkty/usługi oferuje Twoja firma swoim klientom?
            </Label>
            <Content>
              <StaticInfo>{props.wsp_jakie_produkty}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>
              6. Kim są Twoi klienci (dotychczasowi lub potencjalni) oraz jaka
              jest grupa docelowa?
            </Label>
            <Content>
              <StaticInfo>{props.wsp_kim_sa_klienci}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>
              7. Kim są główni konkurenci (lokalnie i globalnie)? (można podać
              adresy internetowe)
            </Label>
            <Content>
              <StaticInfo>{props.wsp_konkurenci}</StaticInfo>
            </Content>
          </Row>

          <Row>
            <Label>
              8. Jaki jest określony czas zakończenia realizacji projektu?
            </Label>
            <Content>
              <StaticInfo>{props.wsp_czas_realizacji}</StaticInfo>
            </Content>
          </Row>

          {props.kategoria.id === 1 ? (
            <>
              <Row>
                <Label>
                  9. Czy firma posiada logo? Jeśli tak, czy firma posiada logo w
                  formie pliku wektorowego oraz księgę znaku?
                </Label>
                <StaticInfo>{props.str_logo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  10. Jakie są założenia i podstawowy cel nowej strony
                  internetowej?
                </Label>
                <StaticInfo>{props.str_zalozenia}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  11. Jaki ma być charakter strony internetowej (sprzedażowa,
                  wizerunkowa, informacyjna itp.)?
                </Label>
                <StaticInfo>{props.str_charakter}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Czy strona ma mieć możliwość samodzielnej edycji treści
                  strony lub jej elementów (system CMS)?
                </Label>
                <StaticInfo>{props.str_czy_cms}</StaticInfo>
              </Row>
              <Row>
                <Label>13. Jaki ma być podstawowy język strony?</Label>
                <StaticInfo>{props.str_jezyk_podstawowy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  14. Czy strona posiadać dodatkowe języki? Jeśli tak, to jakie?
                </Label>
                <StaticInfo>{props.str_jezyki_dodatkowe}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  15. Jakie mają być główne podstrony menu/zakładki w nawigacji
                  górnej?
                </Label>
                <StaticInfo>{props.str_podstrony_menu}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. Jaka jest orientacyjna liczba wszystkich podstron (mapa
                  strony)?
                </Label>
                <StaticInfo>{props.str_liczba_podstron}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Jakie są Twoje oczekiwania co do kolorystyki strony?
                </Label>
                <StaticInfo>{props.str_kolorystyka}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Przykłady istniejących stron internetowych, które podobają
                  się Tobie. Podaj minimum trzy przykłady. (nie muszą być
                  związane z branżą)
                </Label>
                <StaticInfo>{props.str_przyklady_stron}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  19. Elementy na istniejących stronach internetowych, które
                  podobają się Tobie.
                </Label>
                <StaticInfo>{props.str_elementy}</StaticInfo>
              </Row>
              <Row>
                <Label>20. Czy otrzymamy zdjęcia do strony?</Label>
                <StaticInfo>{props.str_zdjecia}</StaticInfo>
              </Row>
              <Row>
                <Label>21. Czy otrzymamy teksty do strony?</Label>
                <StaticInfo>{props.str_teksty}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  22. Elementy zewnętrzne do umieszczenia na stronie? (np. link
                  do fanpage Facebook'a, link Youtube, itp.)
                </Label>
                <StaticInfo>{props.str_elementy_zewnetrzne}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  23. Czy strona ma mieć dodatkową zaawansowaną funkcjonalność?
                  Jeśli tak to jaką?
                </Label>
                <StaticInfo>{props.str_zaawansowana_funkcjonalnosc}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  24. Czy firma posiada wykupioną domenę (adres internetowy
                  URL)?
                </Label>
                <StaticInfo>{props.str_czy_domena}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  25. Czy firma posiada wykupiony hosting/serwer (miejsce w
                  którym znajdują się pliki strony)?
                </Label>
                <StaticInfo>{props.str_czy_hosting}</StaticInfo>
              </Row>
            </>
          ) : null}

          {props.kategoria.id === 2 ? (
            <>
              <Row>
                <Label>
                  9. Czy firma posiada logo? (Jeśli tak, czy firma posiada logo
                  w formie pliku wektorowego oraz czy macie do logo wykonaną
                  księgę znaku?)
                </Label>
                <StaticInfo>{props.kat_czy_logo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  10. Czy firma obecnie posiada katalog? Jeśli tak, prosimy o
                  link do wersji online lub o przesłanie pliku w załączniku.
                </Label>
                <StaticInfo>{props.kat_czy_katalog}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  11. Czy katalog ma być przygotowany do druku? lub Czy katalog
                  ma być przygotowany tylko na potrzeby internetu? Posiadamy w
                  standardzie przygotowanie wersji do druku oraz internetu, gdy
                  podstawowe przygotowanie jest do druku.
                </Label>
                <StaticInfo>{props.kat_czy_do_druku}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Czy wybrali już Państwo drukarnię do wydruku katalogów?
                  Jaki nakład katalogów jest przewidywany? Prosimy o podanie
                  ilość sztuk. Jeśli będzie to np. tylko 10 sztuk to katalog
                  może być inaczej przygotowany do druku. Jeśli wydruk ma być
                  niestandardowy, będziemy potrzebować wytycznych od drukarni
                  tuż przed rozpoczęciem projektowania.
                </Label>
                <StaticInfo>{props.kat_drukarnia_naklad}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  13. *Jaki format powinien mieć katalog? Standardowe formaty:
                  A4, A5, A6, kwadrat. Jeśli inny, prosimy podać dokładne
                  wymiary. (Miej na uwadze: Jeśli format będzie inny niż
                  standardowy to koszy wydruku mogą wzrosnąć nawet 100%)
                </Label>
                <StaticInfo>{props.kat_format}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  14. Jaka będzie orientacja katalogu? (pionowa, pozioma,
                  kwadrat, inna?)
                </Label>
                <StaticInfo>{props.kat_orientacja}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  15. *Czy przewidują Państwo uszlachetnienie lakierem
                  wybiórczym np. na okładce lub innych stronach? (Jeśli tak,
                  opracujemy dla drukarni makietę z wybranymi elementami, które
                  mają być lakierowane)
                </Label>
                <StaticInfo>{props.kat_uszlachetnienie}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. *Ile stron powinien zawierać katalog? Aby katalog został
                  wydrukowany i złożony, ilość stron musi być podzielna przez 4.
                  Przykład: 8 stron czyli 4 strony okładki + 4 strony środka.
                  (Przykłady standardowych rozmiarów stron: 8, 12, 16, 20, 24,
                  28, 32, 36, 40, 44, 48, 52 … 88, 92,96, 100)
                </Label>
                <StaticInfo>{props.kat_ile_stron}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. *Jaki jest cel nowego katalogu? Prosimy opisać jakie mają
                  Państwo oczekiwania co do katalogu, co będzie zawierał, jakie
                  ma spełnić zadania i do czego będzie służył. ( Przykład:
                  katalog będzie służ przedstawicielom na spotkaniach z klientem
                  oraz na targach. będzie zawierał informacje o firmie jej
                  historia i strukturę. Przedstawimy koło 20 najlepszych
                  produktów z dokładnym podziałem na 3 kategorie. Każdy produkt
                  będzie zawierał dokładny opis zdjęcie warianty i cennik.
                  Chcemy zamieścić referencje i loga partnerów, mapkę dojazdu
                  galerię zdjęć.).
                </Label>
                <StaticInfo>{props.kat_cel}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Czy katalog ma nawiązywać do strony internetowej lub
                  sklepu internetowego? Jeśli tak, prosimy opisać pod jakim
                  względem.
                </Label>
                <StaticInfo>{props.kat_nawiazanie}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  19. *W jakim języku będą treści do katalogu? Lub Czy katalog
                  będzie zawierał kilka języków w jednym katalogu?Jeśli tak
                  prosimy podać w jakich.
                </Label>
                <StaticInfo>{props.kat_jezyk_podstawowy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  20. *Czy katalog również ma być projektowany w innych językach
                  niż standardowy? Jeśli tak to w jakim jeszcze.
                </Label>
                <StaticInfo>{props.kat_jezyki_obce}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  21. *Czy katalog będzie zawierał tabele/cenniki/itp.? (Jeśli
                  tak prosimy opisać i podać orientacyjną ilość tabel,
                  orientacyjną ilość wierszy i kolumn w każdej z nich)
                </Label>
                <StaticInfo>{props.kat_czy_tabele}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  22. *Przykłady istniejących katalogów, które się Państwu
                  podobają. Podaj minimum trzy przykłady. (Nie muszą być
                  związane z branżą. Prosimy podać adres url lub nazwę katalogu
                  oraz wysłać go do nas mailem) Chcemy poznać Państwa gust.
                </Label>
                <StaticInfo>{props.kat_przyklady}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  23. Elementy na istniejących katalogach, które się Państwu
                  podobają. Prosimy o wskazanie co się Państwu w nich podoba.
                </Label>
                <StaticInfo>{props.kat_elementy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  24. Na jakim etapie gromadzenia materiałów do katalogu są
                  Państwo? (Przykład: jesteśmy w połowie pisania treści resztę
                  mamy przygotowane / wszystko mamy gotowe, tylko projektować)
                </Label>
                <StaticInfo>{props.kat_etap}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  25. *Czy otrzymamy zdjęcia do katalogu przed realizacją?
                  Koniecznie w dobrej jakości, nadającej się pod wydruk.
                </Label>
                <StaticInfo>{props.kat_zdjecia}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  26. *Czy otrzymamy teksty do katalogu przed projektowaniem w
                  docelowej wersji? (Jeśli nie to w jakiej jakości i proszę
                  opisać) Jeśli treści będą dostarczone później, proces
                  projektowania może się wydłużyć dwukrotnie. * Po otrzymaniu
                  docelowych treści nie ma możliwości całkowitej zmiany tekstu
                  na etapie projektowania. Istnieje możliwość korekty
                  przesłanych treści (literówki, przecinki, stylistyka).
                </Label>
                <StaticInfo>{props.kat_teksty}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  27. *Jakie dodatkowe materiały do projektowania dostaniemy?
                  Np. loga firm, hasła reklamowe, itp. które są niezbędne do
                  zrealizowania projektu.
                </Label>
                <StaticInfo>{props.kat_materialy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  28. Czy potrzebują Państwo pliki edytowalne (źródłowe)? (Jeśli
                  tak, prosimy określić w jakim programie mamy przygotować
                  katalog: InDesign, CorelDraw, Illustrator. Jeśli katalog
                  będzie miał powyżej 20 stron: InDesign, CorelDraw. Jeśli
                  zależy Państwu na programie CorelDraw, prosimy określić wersję
                  (np. wersja 15, 16, 17).) W standardzie przygotowujemy
                  projekty wyłącznie do druku i internetu.
                </Label>
                <StaticInfo>{props.kat_pliki}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  29. Prosimy podać inne dodatkowe informacje, które mogą okazać
                  się przydatne na etapie wyceny (Czy mamy wykonać rysunki
                  konturowe zamiast zdjęć? Rysunki techniczne, obrys produktu,
                  itp.)
                </Label>
                <StaticInfo>{props.kat_dodatkowe}</StaticInfo>
              </Row>
            </>
          ) : null}

          {props.kategoria.id === 3 ? (
            <>
              <Row>
                <Label>
                  9. Czego ma dotyczyć projekt: Zaprojektowanie nowego logo /
                  Delikatne odświeżenie znaku / Zupełne przeprojektowanie logo
                </Label>
                <StaticInfo>{props.logo_projekt}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  10. Jaka dokładna nazwa ma się znajdować w logo? np. ROXART
                </Label>
                <StaticInfo>{props.logo_nazwa}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  11. Czy ma być dodatkowy podpis do głównej nazwy? np. Agencja
                  Reklamowa
                </Label>
                <StaticInfo>{props.logo_podpis}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Ile propozycji logotypów mamy przygotować? 1, 3, 6,
                  więcej?
                </Label>
                <StaticInfo>{props.logo_propozycje}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  13. Czy mamy przygotować księgę znaku? opis budowy logo i
                  przykłady jak należy stosować znak dla prawidłowego używania
                </Label>
                <StaticInfo>{props.logo_ksiegalogo_typlogo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  14. Typografia 2. Inicjały 3. Symbol lub Ikona 4. Kombinacja
                  znak + ikona 5. Emblemat 6. Inne. Podaj przykład innego.
                  Wybieram typ logo numer:
                </Label>
                <StaticInfo>{props.logo_typlogo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  15. Jakie są Państwa preferencje kolorystyczne, które
                  chcielibyście użyć w logo?
                </Label>
                <StaticInfo>{props.logo_preferencje}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. Gdzie Państwa logo będzie używane? (druk, serwis www,
                  inne)
                </Label>
                <StaticInfo>{props.logo_gdzie}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Jaki jest najważniejszy nośnik, na którym Państwa logo
                  będzie prezentowane?
                </Label>
                <StaticInfo>{props.logo_nosnik}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Przykłady istniejących logo, które podobają się Tobie.
                  Podaj minimum trzy przykłady. (nie muszą być związane z
                  branżą)
                </Label>
                <StaticInfo>{props.logo_przyklady}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  19. Proszę podać inne dodatkowe informacje, które mogą okazać
                  się przydatne w projektowaniu
                </Label>
                <StaticInfo>{props.logo_dodatkowe}</StaticInfo>
              </Row>
            </>
          ) : null}

          {props.kategoria.id === 4 ? (
            <>
              <Row>
                <Label>
                  9. Czy firma posiada logo? Jeśli tak, czy firma posiada logo w
                  formie pliku wektorowego oraz księgę znaku?
                </Label>
                <StaticInfo>{props.skl_logo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  10. Jakie są założenia i podstawowy cel sklepu internetowego?
                </Label>
                <StaticInfo>{props.skl_zalozenia}</StaticInfo>
              </Row>
              <Row>
                <Label>11. Jaki ma być podstawowy język sklepu?</Label>
                <StaticInfo>{props.skl_jezyk_podstawowy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Czy sklep ma posiadać dodatkowe języki? Jeśli tak, to
                  jakie?
                </Label>
                <StaticInfo>{props.skl_jezyki_dodatkowe}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  13. Jakie elementy, funkcjonalności powinny pojawić się na
                  stronie głównej sklepu?
                </Label>
                <StaticInfo>{props.skl_strona_glowna}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  14. Jakie mają być główne podstrony menu/zakładki w nawigacji
                  górnej?
                </Label>
                <StaticInfo>{props.skl_podstrony_menu}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  15. Jaka jest orientacyjna liczba wszystkich kategorii oraz
                  podkategorii? (mapa sklepu)
                </Label>
                <StaticInfo>{props.skl_liczba_kategorii}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. Jaka jest orientacyjna liczba wszystkich produktów w
                  sklepie podczas jego funkcjonowania?
                </Label>
                <StaticInfo>{props.skl_liczba_produktow}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Jaka jest liczba produktów, które my mamy dodać? (w cenie
                  możemy dodać kilka/kilkanaście)
                </Label>
                <StaticInfo>{props.skl_produkty_do_dodania}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Czy w podstronie produktu ma być coś więcej niż: - nazwa
                  produktu, - opis produktu, - zdjęcie główne i dodatkowe, -
                  cena, - wybór ilości, - przycisk dodaj do koszyka?
                </Label>
                <StaticInfo>{props.skl_cos_wiecej}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  19. Jakie są Twoje oczekiwania co do kolorystyki sklepu?
                </Label>
                <StaticInfo>{props.skl_kolorystyka}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  20. Przykłady istniejących sklepów internetowych, które
                  podobają się Tobie. Podaj minimum trzy przykłady. (nie muszą
                  być związane z branżą)
                </Label>
                <StaticInfo>{props.skl_przyklady_sklepow}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  21. Elementy w istniejących sklepach internetowych, które
                  podobają się Tobie.
                </Label>
                <StaticInfo>{props.skl_elementy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  22. Czy otrzymamy zdjęcia do wykorzystania w sklepie
                  internetowym? (np. zdjęcia do baneru promującego sklep, do
                  boksów reklamowych, itp.)
                </Label>
                <StaticInfo>{props.skl_zdjecia}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  23. Czy otrzymamy teksty / hasła reklamowe do sklepu
                  internetowego?
                </Label>
                <StaticInfo>{props.skl_teksty}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  24. Elementy zewnętrzne do umieszczenia w sklepie? (np. link
                  do fanpage Facebook'a, link Youtube, itp.)
                </Label>
                <StaticInfo>{props.skl_elementy_zewnetrzne}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  25. Czy jest już ustalony system płatności? (np. DotPay, PayU,
                  Przelew standardowy, itp.)
                </Label>
                <StaticInfo>{props.skl_platnosci}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  26. Czy sklep ma mieć dodatkową zaawansowaną funkcjonalność?
                  (Jeśli tak to jaką?)
                </Label>
                <StaticInfo>{props.skl_zaawansowana_funkcjonalnosc}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  27. Czy firma posiada wykupioną domenę (adres internetowy
                  URL)?
                </Label>
                <StaticInfo>{props.skl_czy_domena}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  28. Czy firma posiada wykupiony hosting/serwer (miejsce w
                  którym znajdują się pliki sklepu)?
                </Label>
                <StaticInfo>{props.skl_czy_hosting}</StaticInfo>
              </Row>
            </>
          ) : null}

          {props.kategoria.id === 5 ? (
            <>
              <Row>
                <Label>
                  9. Czy firma posiada logo? (Jeśli tak, czy firma posiada logo
                  w formie pliku wektorowego oraz księgę znaku?)
                </Label>
                <StaticInfo>{props.vid_logo}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  10. Czy firma posiada już intro? (animowana prezentacja logo
                  dodawana zazwyczaj na początku filmów)
                </Label>
                <StaticInfo>{props.vid_intro}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  11. Czy firma posiada już jakieś filmy promocyjne? (Jeśli tak,
                  to prosimy o podanie linku do filmu i odpowiedź czy mamy
                  utrzymywać ten sam styl)
                </Label>
                <StaticInfo>{props.vid_czy_filmy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Jakie są założenia i podstawowy cel filmu? (sprzedażowa –
                  jaki produkt będzie sprzedawany, wizerunkowa – jaki efekt ma
                  być uzyskany, (solidna, luksusowa) informacyjna – jakie
                  informacje ma zawierać / pokazać cechy, funkcjonalność
                  produktu)
                </Label>
                <StaticInfo>{props.vid_zalozenia}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  13. Czy mają Państwo ogólną wizje/ szkielet filmu? (Jakie
                  ujęcia, kolejność itd.)
                </Label>
                <StaticInfo>{props.vid_wizja}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  14. Jaki ma być charakter filmu (wesoły, humorystyczny,
                  poważny itp.)?
                </Label>
                <StaticInfo>{props.vid_charakter}</StaticInfo>
              </Row>
              <Row>
                <Label>15. Jaka ma być przybliżona długość filmu?</Label>

                <StaticInfo>{props.vid_dlugosc}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. Kim jest główna konkurencja i czy posiadają takie filmy?
                </Label>
                <StaticInfo>{props.vid_konkurencja}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Czy posiadają Państwo materiały z których mamy korzystać
                  czy my mamy nagrywać?
                </Label>
                <StaticInfo>{props.vid_materialy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Jeżeli to my mamy nagrywać to jaka jest lokalizacja i
                  kiedy możemy to zrealizować?
                </Label>
                <StaticInfo>{props.vid_my_nagrywamy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  19. Przykłady istniejących filmów, które mogą posłużyć za
                  wzór. (nie muszą być związane z branżą)
                </Label>
                <StaticInfo>{props.vid_przyklady}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  20. Elementy na istniejących filmach, które podobają się
                  Państwu.
                </Label>
                <StaticInfo>{props.vid_elementy}</StaticInfo>
              </Row>
              <Row>
                <Label>21. Czy film ma zawierać napisy?</Label>
                <StaticInfo>{props.vid_napisy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  22. Jeżeli ma zawierać napisy to czy otrzymamy teksty do
                  filmu, czy my mamy wymyślić scenariusz?
                </Label>
                <StaticInfo>{props.vid_scenariusz}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  23. Czy do kwestii mówionych firma zapewnia aktora (kogoś kto
                  będzie mówił do kamery)?
                </Label>
                <StaticInfo>{props.vid_aktor}</StaticInfo>
              </Row>
              <Row>
                <Label>24. Czy firma chce ujęć z drona?</Label>
                <StaticInfo>{props.vid_dron}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  25. Jeżeli film ma zawierać napisy to w jakim mają być języku?
                </Label>
                <StaticInfo>{props.vid_jezyk_napisow}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  26. Elementy dodatkowe do umieszczenia na filmie (zdjęcia,
                  loga sponsorów, elementy graficzne itd.)
                </Label>
                <StaticInfo>{props.vid_elementy_dodatkowe}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  27. Gdzie będzie wyświetlany film? (social media, urządzenia
                  mobilne, bannery itd.)
                </Label>
                <StaticInfo>{props.vid_gdzie}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  28. W jakiej rozdzielczości mamy wykonać film? (HD, full HD,
                  4K)
                </Label>
                <StaticInfo>{props.vid_rozdzielczosc}</StaticInfo>
              </Row>
            </>
          ) : null}

          {props.kategoria.id === 6 ? (
            <>
              <Row>
                <Label>
                  9. Czy firma posiada logo? Jeśli tak, czy firma posiada logo w
                  formie pliku wektorowego oraz księgę znaku?
                </Label>
                <StaticInfo>{props.anim_logo}</StaticInfo>
              </Row>
              <Row>
                <Label>10. Jakie są założenia i podstawowy cel animacji?</Label>
                <StaticInfo>{props.anim_zalozenia}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Gdzie będzie publikowana animacja? (YouTube, Facebook,
                  Instagram, TV itp.)?
                </Label>
                <StaticInfo>{props.anim_gdzie}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  12. Czy animacja wymaga lektora? Jeśli tak, czy zapewnią
                  Państwo lektora?
                </Label>
                <StaticInfo>{props.anim_lektor}</StaticInfo>
              </Row>
              <Row>
                <Label>13. Czy animacja ma posiadać muzykę w tle?</Label>
                <StaticInfo>{props.anim_muzyka}</StaticInfo>
              </Row>
              <Row>
                <Label>14. Jaki ma być czas trwania i ilość animacji?</Label>
                <StaticInfo>{props.anim_dlugosc}</StaticInfo>
              </Row>
              <Row>
                <Label>15. Jaki ma być format animacji? (mp4, avi, gif?)</Label>
                <StaticInfo>{props.anim_format}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  16. Jakie są Twoje oczekiwania co do tonu i stylu animacji?
                  (nowoczesna, rysunkowa, poważna itd.)
                </Label>
                <StaticInfo>{props.anim_styl}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  17. Przykłady istniejących animacji, które podobają się Tobie.
                  Podaj minimum trzy przykłady. (nie muszą być związane z
                  branżą)
                </Label>
                <StaticInfo>{props.anim_przyklady}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  18. Elementy na istniejących animacjach, które podobają się
                  Tobie.
                </Label>
                <StaticInfo>{props.anim_elementy}</StaticInfo>
              </Row>
              <Row>
                <Label>19. Jakie materiały zostaną nam przekazane?</Label>
                <StaticInfo>{props.anim_materialy}</StaticInfo>
              </Row>
              <Row>
                <Label>
                  20. Czy otrzymamy scenariusz / tekst dla lektora (jeżeli
                  wymagane)?
                </Label>
                <StaticInfo>{props.anim_scenariusz}</StaticInfo>
              </Row>
            </>
          ) : null}

          <Row>
            <Label>Inne ważne uwagi:</Label>
            <StaticInfo>{props.wsp_uwagi}</StaticInfo>
          </Row>

          <Row>
            <Label>Link do załączników w sieci / na dysku:</Label>
            <StaticInfo>{props.wsp_zalacznik}</StaticInfo>
          </Row>
        </StyledPage>
      </Document>
    </>
  );
};

// const DownloadPDF = ({ ...props }) => (
//   <PDFDownloadLink
//     document={<PDF {...props} />}
//     fileName={"oferta-" + props.ofe_nazwa + ".pdf"}>
//     <Button small>Pobierz ofertę: {props.ofe_nazwa}</Button>
//   </PDFDownloadLink>
// );

// const ViewPDF = ({ ...props }) => (
//   <PDFViewer>
//     <PDF {...props} />
//   </PDFViewer>
// );

export const generateOfferPDF = async documentData => {
  const blob = await pdf(<OfferPDF {...documentData} />).toBlob();
  console.log(blob);
  saveAs(blob, documentData.ofe_nazwa + "_oferta.pdf");
};

export const generateBriefPDF = async (documentData, type) => {
  const blob = await pdf(<BriefPDF type={type} {...documentData} />).toBlob();
  console.log(blob);
  saveAs(blob, documentData.wsp_nazwa + "_brief_" + type + ".pdf");
};

// export const PDFLink = memo(DownloadPDF, (prevProps, newProps) => {
//   //compare props and if no change, return true, else false
// });

// export const PDFView = memo(ViewPDF, (prevProps, newProps) => {
//   //compare props and if no change, return true, else false
// });
