Places where you need to change app URL:

package.json - "homepage"
public/manifest.json - "start_url"
src/utils/Utils - "appLink"
src/api.js - "API_URL"

CHANGELOG:

1.0.2 - 17.03.2020 r.
- dodano możliwość generowania PDF z briefów w dowolnym momencie, służą do tego przyciski "Pobierz brief dla klienta" oraz "Pobierz brief wewnętrzny" - różnią się ilością informacji

1.0.1 - 11.03.2020 r.
- Filtrowanie w "wycenione" według daty zmiany statusu przez administrację
- Ukrycie niektórych danych dla wyceniających (kreatywnych)
- Obrys pól wpisywania jest troszkę zbyt jasny i ledwo widoczny - zrobione
- Zmniejsz fonty pytań przy podglądzie briefu - zrobione