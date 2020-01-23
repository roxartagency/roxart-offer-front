import React from "react";
import AppContext from "../../context";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./SingleBriefContent.module.scss";

class SingleBriefContent extends React.Component {
  state = {
    // wycena_kodera: ""
  };

  // componentDidMount() {
  //   this.setState({
  //     state: this.context.items
  //   });
  //   console.log(this.state);
  // }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { items, ...props } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {items.map(item => (
              <>
                {context.isUserLogged ? (
                  <>
                    {item.id == props.id ? (
                      <div key={item.id} className={styles.wrapper}>
                        <form
                          id="editBrief"
                          autoComplete="off"
                          className=""
                          onSubmit={e =>
                            context.editItem(e, props.id, this.state)
                          }>
                          <div className={styles.row}>
                            <span className={styles.label}>Id:</span>
                            <span className={styles.content}>{props.id}</span>
                          </div>
                          {item.user ? (<div className={styles.row}>
                            <span className={styles.label}>Dodane przez:</span>
                            <span className={styles.content}>{item.user.email}</span>
                          </div>) : null}

                          <div className={styles.row}>
                            <span className={styles.label}>Nazwa firmy:</span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="title"
                                    defaultValue={item.title}
                                  />
                                ) : (
                                  item.title
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>Adres:</span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="description"
                                    tag="textarea"
                                    defaultValue={item.description}
                                  />
                                ) : (
                                  item.description
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Adres e-mail osoby kontaktowej:
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="email"
                                    defaultValue={item.email}
                                  />
                                ) : (
                                  item.email
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>Utworzono:</span>
                            <span className={styles.content}>
                              {item.created_at}
                            </span>
                          </div>
                          <div className={styles.row}>
                            <span className={styles.label}>Status:</span>
                            <span className={styles.content}>
                              {item.status}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaki jest adres (URL) Twojej strony internetowej?
                              (obecny lub planowany):
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="adres_url"
                                    tag="textarea"
                                    defaultValue={item.adres_url}
                                  />
                                ) : (
                                  item.adres_url
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czym zajmuje się Twoja firma?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="czym_zajmuje"
                                    tag="textarea"
                                    defaultValue={item.czym_zajmuje}
                                  />
                                ) : (
                                  item.czym_zajmuje
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              W jakiej branży działa Twoja firma?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="branza"
                                    tag="textarea"
                                    defaultValue={item.branza}
                                  />
                                ) : (
                                  item.branza
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Ile lat Państwa firma jest na rynku i ilu
                              zatrudnia pracowników?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="ile_lat"
                                    tag="textarea"
                                    defaultValue={item.ile_lat}
                                  />
                                ) : (
                                  item.ile_lat
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jakie produkty/usługi oferuje Twoja firma swoim
                              klientom?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="jakie_produkty"
                                    tag="textarea"
                                    defaultValue={item.jakie_produkty}
                                  />
                                ) : (
                                  item.jakie_produkty
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Kim są Twoi klienci (dotychczasowi lub
                              potencjalni) oraz jaka jest grupa docelowa?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="kim_sa_klienci"
                                    tag="textarea"
                                    defaultValue={item.kim_sa_klienci}
                                  />
                                ) : (
                                  item.kim_sa_klienci
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Kim są główni konkurenci (lokalnie i globalnie)?
                              (można podać adresy internetowe)
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="konkurenci"
                                    tag="textarea"
                                    defaultValue={item.konkurenci}
                                  />
                                ) : (
                                  item.konkurenci
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaki jest określony budżet na realizację projektu
                              netto?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="budzet"
                                    tag="textarea"
                                    defaultValue={item.budzet}
                                  />
                                ) : (
                                  item.budzet
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaki jest określony czas zakończenia realizacji
                              projektu?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="czas_realizacji"
                                    tag="textarea"
                                    defaultValue={item.czas_realizacji}
                                  />
                                ) : (
                                  item.czas_realizacji
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy firma posiada logo? Jeśli tak, czy firma
                              posiada logo w formie pliku wektorowego oraz
                              księgę znaku?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="logo"
                                    tag="textarea"
                                    defaultValue={item.logo}
                                  />
                                ) : (
                                  item.logo
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jakie są założenia i podstawowy cel nowej strony
                              internetowej?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="zalozenia"
                                    tag="textarea"
                                    defaultValue={item.zalozenia}
                                  />
                                ) : (
                                  item.zalozenia
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaki ma być charakter strony internetowej
                              (sprzedażowa, wizerunkowa, informacyjna itp.)?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="charakter"
                                    tag="textarea"
                                    defaultValue={item.charakter}
                                  />
                                ) : (
                                  item.charakter
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy strona ma mieć możliwość samodzielnej edycji
                              treści strony lub jej elementów (system CMS)?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="czy_cms"
                                    tag="textarea"
                                    defaultValue={item.czy_cms}
                                  />
                                ) : (
                                  item.czy_cms
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaki ma być podstawowy język strony?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="jezyk_podstawowy"
                                    tag="textarea"
                                    defaultValue={item.jezyk_podstawowy}
                                  />
                                ) : (
                                  item.jezyk_podstawowy
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy strona posiadać dodatkowe języki? Jeśli tak,
                              to jakie?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="jezyki_dodatkowe"
                                    tag="textarea"
                                    defaultValue={item.jezyki_dodatkowe}
                                  />
                                ) : (
                                  item.jezyki_dodatkowe
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jakie mają być główne podstrony menu/zakładki w
                              nawigacji górnej?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="podstrony_menu"
                                    tag="textarea"
                                    defaultValue={item.podstrony_menu}
                                  />
                                ) : (
                                  item.podstrony_menu
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jaka jest orientacyjna liczba wszystkich podstron
                              (mapa strony)?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="liczba_podstron"
                                    tag="textarea"
                                    defaultValue={item.liczba_podstron}
                                  />
                                ) : (
                                  item.liczba_podstron
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Jakie są Twoje oczekiwania co do kolorystyki
                              strony?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="kolorystyka"
                                    tag="textarea"
                                    defaultValue={item.kolorystyka}
                                  />
                                ) : (
                                  item.kolorystyka
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Przykłady istniejących stron internetowych, które
                              podobają się Tobie. Podaj minimum trzy przykłady.
                              (nie muszą być związane z branżą)
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="przyklady_stron"
                                    tag="textarea"
                                    defaultValue={item.przyklady_stron}
                                  />
                                ) : (
                                  item.przyklady_stron
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Elementy na istniejących stronach internetowych,
                              które podobają się Tobie.
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="elementy"
                                    tag="textarea"
                                    defaultValue={item.elementy}
                                  />
                                ) : (
                                  item.elementy
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy otrzymamy zdjęcia do strony?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="zdjecia"
                                    tag="textarea"
                                    defaultValue={item.zdjecia}
                                  />
                                ) : (
                                  item.zdjecia
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy otrzymamy teksty do strony?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="teksty"
                                    tag="textarea"
                                    defaultValue={item.teksty}
                                  />
                                ) : (
                                  item.teksty
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Elementy zewnętrzne do umieszczenia na stronie?
                              (np. link do fanpage Facebook'a, link Youtube,
                              itp.)
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="elementy_zewnetrzne"
                                    tag="textarea"
                                    defaultValue={item.elementy_zewnetrzne}
                                  />
                                ) : (
                                  item.elementy_zewnetrzne
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy strona ma mieć dodatkową zaawansowaną
                              funkcjonalność? Jeśli tak to jaką?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="zaawansowana_funkcjonalnosc"
                                    tag="textarea"
                                    defaultValue={
                                      item.zaawansowana_funkcjonalnosc
                                    }
                                  />
                                ) : (
                                  item.zaawansowana_funkcjonalnosc
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy firma posiada wykupioną domenę (adres
                              internetowy URL)?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="czy_domena"
                                    tag="textarea"
                                    defaultValue={item.czy_domena}
                                  />
                                ) : (
                                  item.czy_domena
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Czy firma posiada wykupiony hosting/serwer
                              (miejsce w którym znajdują się pliki strony)?
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="czy_hosting"
                                    tag="textarea"
                                    defaultValue={item.czy_hosting}
                                  />
                                ) : (
                                  item.czy_hosting
                                )}
                            </span>
                          </div>

                          <div className={styles.row}>
                            <span className={styles.label}>
                              Inne ważne uwagi:
                            </span>
                            <span className={styles.content}>
                              {context.user.role.name === "Administrator" ||
                                context.user.role.name === "Handlowiec" ? (
                                  <Input
                                    onChange={this.handleInputChange}
                                    name="uwagi"
                                    tag="textarea"
                                    defaultValue={item.uwagi}
                                  />
                                ) : (
                                  item.uwagi
                                )}
                            </span>
                          </div>
                        </form>

                        <div className={styles.row}>
                          <span className={styles.label}>
                            Status wyceny grafika:
                          </span>
                          <span className={styles.content}>
                            {item.status_grafika}
                          </span>
                        </div>

                        <div className={styles.row}>
                          <span className={styles.label}>Wycena grafika:</span>
                          <span className={styles.content}>
                            {item.wycena_grafika}
                          </span>
                        </div>

                        {context.user.role.name === "Grafik" ? (
                          <div className={styles.row}>
                            <span className={styles.label}>
                              Nowa wycena grafika:
                            </span>
                            <span className={styles.content}>
                              <form
                                autoComplete="off"
                                className=""
                                onSubmit={e =>
                                  context.wycenGrafik(e, props.id, item.title, item.user, this.state)
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wycena_grafika"
                                  tag="textarea"
                                  defaultValue={item.wycena_grafika}
                                />
                                <select
                                  name="status_grafika"
                                  value={this.state.status_grafika}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </select>
                                <Button type="submit">Wyceń</Button>
                              </form>
                            </span>
                          </div>
                        ) : null}

                        <div className={styles.row}>
                          <span className={styles.label}>
                            Status wyceny kodera:
                          </span>
                          <span className={styles.content}>
                            {item.status_kodera}
                          </span>
                        </div>

                        <div className={styles.row}>
                          <span className={styles.label}>Wycena kodera:</span>
                          <span className={styles.content}>
                            {item.wycena_kodera}
                          </span>
                        </div>

                        {context.user.role.name === "Koder" ? (
                          <div className={styles.row}>
                            <span className={styles.label}>
                              Nowa wycena kodera:
                            </span>
                            <span className={styles.content}>
                              <form
                                autoComplete="off"
                                className=""
                                onSubmit={e =>
                                  context.wycenKoder(e, props.id, item.title, item.user, this.state)
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wycena_kodera"
                                  tag="textarea"
                                  defaultValue={item.wycena_kodera}
                                />
                                <select
                                  name="status_kodera"
                                  value={this.state.status_kodera}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </select>
                                <Button type="submit">Wyceń</Button>
                              </form>
                            </span>
                          </div>
                        ) : null}

                        <div className={styles.row}>
                          <span className={styles.label}>Działania</span>
                          <span className={styles.content}>
                            {item.email && (
                              <Button href={"mailto:" + item.email}>
                                wyślij maila do klienta
                              </Button>
                            )}

                            {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <>
                                  {/* <Button
                                      onClick={e =>
                                        context.removeItem(
                                          e,
                                          props.id,
                                          item.title
                                        )
                                      }>
                                      Usuń brief
                                    </Button> */}
                                  <Button form="editBrief">Zapisz zmiany</Button>
                                </>
                              ) : null}

                            <Link className={styles.button} to={"/briefs"}>
                              powrót
                            </Link>
                          </span>
                        </div>
                      </div>
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

SingleBriefContent.contextType = AppContext;

export default SingleBriefContent;
