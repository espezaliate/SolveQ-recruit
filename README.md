Zaprojektuj w oparciu o React komponent, który wyświetla ile sekund / minut minęło
od danego czasu.

Wymagania:

- komponent przyjmuje jeden prop, który jest typu number i przedstawia czas z
  przeszłości w formacie unix timestamp (zwany dalej lastSeen)
- jeżeli różnica pomiędzy lastSeen a teraźniejszością wynosi poniżej 1 minuty to
  komponent wyświetla text od ‘0 ... 60 seconds ago’, w przeciwnym wypadku ‘1 .. n’
  minutes ago.
- tekst aktualizuje się ‘na żywo’
- WAŻNE! refresh interval musi dynamiczny tzn jeśli różnica pomiędzy lastSeen a
  teraźniejszością wynosi 30 sekund to komponent powinien się przez pierwsze 30
  sekund renderować co 1 sekundę, a potem co jedną minutę.
  Przedstaw wynik pracy w jako fiddle w  https://codesandbox.io/ lub na publicznym
  repozytorum git.
