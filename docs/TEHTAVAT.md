# Tehtävänannot

Tehtävät on jaettu aihealuettain otsikoiden alle. Tehtävät on pyritty järjestämään vaikeusjärjestykseen, joten voit tehdä ne järjestyksessä alusta loppuun. Mikäli tehtävä pyytää sinua luomaan moduuliin esimerkiksi funktion, niin oleta että sinun halutaan myös exporttaavan sen. Esimerkki exportista löytyy ensimmäisestä esitehtävästä.

# Osio 0: Esitehtävä

## Tehtävä 0.1: Hello World

Ensimmäinen tehtävä ei varsinaisesti ole tehtävä laisinkaan. Tehtävä on tehty sinun puolesta, kehitysympäristösi toimivuuden, kuten `README.md`-tiedostossa neuvottiin. Tehtävästä voi kuitenkin ottaa mallia seuraaviin tehtäviin. Kuvitteellinen tehtävänanto olisi:

> Luo moduuli `./src/harjoitukset/helloworld`. Kirjoita moduuliin funktio `getHelloWorld` joka palauttaa merkkijonon `"Hello World!"`. Isoilla ja pienillä kirjaimilla, kuten myös välilyönneillä sekä huutomerkillä, on merkitystä.

Vastaus on tehty jo valmiiksi, joten älä muokkaa sitä. Moduuli on tiedostossa `src/tasks/helloworld.py`. Tiedoston sisältö on:

```js
function getHelloWorld() {
  return "Hello World!";
}

export {getHelloWorld}
```

# Osio 1: Ensimmäiset askeleet

Tämä osio pakottaa käyttämään muuttujia ja kontrollirakenteita.

## Tehtävä 1.1: Muuttujat

Luo moduuli `.src/tasks/variables` (eli tiedosto `src/tasks/variables.js`). Aseta tiedoston sisällä seuraaville muuttujille arvot, jotka edustavat muuttajan nimessä olevaa muuttujatyyppiä. Älä käytä tyhjää merkkijonoa, listaa tai nollaa arvona: anna muuttujalle jokin merkittävämpi arvo. Muistathan exportata kaikki muuttujat:

* my_number
* my_string
* my_bool
* my_array
* my_object
* my_symbol

# Osio 2: Sanat ja lauseet

Tämän osion funktioita yhdistää se, että ne kaikki vaativat argumentteina vain ja ainoastaan merkkijonoja. Palautuvan arvon tyyppi riippuu tehtävästä.


## Tehtävä 2.1: Generoi zipin nimi

Luo moduuli `tasks.strings`. Tee moduulin sisälle funktio `generate_zip_name`, joka ottaa sisään neljä parametriä: applikaation nimen, version, prosessoriarkkitehtuurin sekä tiedostopäätteen. Jos kutsu on `generate_zip_name("myApp", "1.0", "x86_64", "zip")` niin takaisin tulee palautua merkkijono `"myApp-1.0-x86_64.zip"`

## Tehtävä 2.2: Sisältääkö B A:n

Luo aiemman tehtävän kanssa samaan funktion nimi on `isAInB` ja sen parametrit ovat kaksi merkkijonoa. Funktio palauttaa Boolen muuttujan (True tai False), joka indikoi, löytyykö merkkijono a merkkijonon b sisältä. Funktion tulee käsitellä pieniä ja suuria kirjaimia keskenään samoina. Esimerkiksi kutsu `isAInB("kissa", "Lemmikkini nimi on Kissa.")` palauttaa True. Myös `isAInB("from taulu", "SELECT * FROM TAULU")` palauttaa True.