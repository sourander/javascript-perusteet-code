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

# Osio 2: Sanat ja lauseet

Tämän osion funktioita yhdistää se, että ne kaikki vaativat argumentteina vain ja ainoastaan merkkijonoja. Palautuvan arvon tyyppi riippuu tehtävästä.


## Tehtävä 2.1: Generoi zipin nimi

Luo moduuli `tasks.strings`. Tee moduulin sisälle funktio `generate_zip_name`, joka ottaa sisään neljä parametriä: applikaation nimen, version, prosessoriarkkitehtuurin sekä tiedostopäätteen. Jos kutsu on `generate_zip_name("myApp", "1.0", "x86_64", "zip")` niin takaisin tulee palautua merkkijono `"myApp-1.0-x86_64.zip"`

## Tehtävä 2.2: Sisältääkö B A:n

Luo aiemman tehtävän kanssa samaan moduuliin (`strings.js`) funktio nimeltään `isAInB`. Funktion parametrit ovat kaksi merkkijonoa. Funktio palauttaa Boolen muuttujan (true tai false), joka indikoi, löytyykö merkkijono a merkkijonon b sisältä. Funktion tulee käsitellä pieniä ja suuria kirjaimia keskenään samoina. Esimerkiksi kutsu `isAInB("kissa", "Lemmikkini nimi on Kissa.")` palauttaa True. Myös `isAInB("from taulu", "SELECT * FROM TAULU")` palauttaa True.

## Tehtävä 2.3: Laske vokaalit

Käytä yhä samaa moduulia `strings.js`. Luo funktio `count_vowels`, joka laskee kaikki **suomen kielen vokaalit** merkkijonosta, joka syötetään funktioon parametrina. Funktion tulee palauttaa kokonaisluku.

## Tehtävä 2.4: Palindromitunnistin

Käytä yhä samaa moduulia `strings.js`. Luo funktio `isPalindrome`. Funktio palauttaa Boolen muuttujan (true | false), joka indikoi, onko sille syötetty parametri suomen kielessä palindromi vai ei. Joitakin sääntöjä:

1. Isot ja pienet kirjaimet tulee nähdä keskenään samoina.
2. Erikoismerkkejä (ei-aakkosia) ei tule ottaa huomioon.
3. Merkkijonossa pitää olla 2 tai enemmän kirjainta.
4. Funktion ei tarvitse ottaa kantaa siihen, ovatko sanat oikeita sanoja.


# Osio 3: Numerot

## Tehtävä 3.1: Celsius Fahrenheitiksi

Luo moduuli `tasks/numbers.js`. Tee moduulin sisälle funktio `celsiusToFahrenheit`, joka ottaa sisään yhden parametrin. Funktio palauttaa luvun, joka on syötteen luku käännettynä Celsiuksesta Fahrenheitiksi.

## Tehtävä 3.2: Jaollinen numeroilla

Käytä samaa moduulia `tasks/numbers.js`. Tee moduulin sisälle funktio `divisibleWithAll`, joka ottaa sisään 2 tai useamman parametrin. Funktio palauttaa Boolen muuttujan (true | false) sen perusteella, onko ensimmäinen annettu luku jaollinen kaikilla muilla luvuilla. Kaikkien parametrien tulee olla konaislukuja; muutoin funktion tulee nostaa virheilmoitus.

Esimerkkejä:
divisibleWithAll(10, 1, 2, 5) => palauttaa true, koska 10 on jaollinen 1:llä, 2:lla ja 5:llä.
divisibleWithAll(10, 6) => palauttaa false, koska 10 ei ole jaollinen 6:lla.
divisibleWithAll(10, 1.3) => nostaa virheilmoituksen