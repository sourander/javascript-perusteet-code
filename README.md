# JavaScript perusteet

Tämä kurssi on koodattu Node.js v18:lla. Noden dokumentaatio löytyy [täältä](https://nodejs.org/docs/latest-v18.x/api/synopsis.html).

* Tehtävät tehdään seuraamalla [tehtävänantoja](docs/TEHTAVAT.md).'
  * Kaikki tehtävät toteutetaan `src/tasks/`-hakemistoon.
* Tehtävät testataan ajamalla testit. Lue ohje alta.

## Kuinka ajaa testit

1. Asenna Docker
2. (Käynnistä Docker daemon, esim. Docker Desktop Windowsissa)
3. Aja komento `docker compose up`
4. Lue tulokset joko terminaalista tai tiedostosta `results/test-report.html`

Mitä komento tekee? Se luo (eng. build) `kamk/tietolo-js`-nimisen imagen ja ajaa komennon `npm test` kyseisen kontin sisällä.

## Kuinka ajaa koodia kontissa

Jos et halua ajaa testipakettia vaan haluat pääsyn interaktiiviseen Node.js:n REPL:iin tai kyseisen kontin shelliin, niin seuraa alla olevia ohjeita:

1. (Asenna Docker, jos et jo asentanut)
2. (Käynnistä Docker daemon, esim. Docker Desktop Windowsissa)
3. Käännä image, jos et ole ajanut docker composea yllä: `docker image build -t kamk/tietolo-js .`

Tämän jälkeen seuraavat komennot toimivat:
* Aja REPL: 
    * `docker container run -it --rm kamk/tietolo-js`
* Aja Bash
    * `docker container run -it --rm kamk/tietolo-js bash`


### Aja moduulien koodia REPL:ssä

Mikäli haluat kokeilla eri funktioita REPL:ssä, voit importata ne ES2020:n mukana tulleella dynaamisella importilla:

```sh
> let mypackage = await import("./src/tasks/helloworld.js");
> mypackage.getHelloWorld()
'Hello World!'
```

REPL:stä pääset ulos komennolla `.exit`.

## Ohjeita

* Välttele näitä nimiä JS-entiteettiesi nimissä: [JavaScript Reserved Words](https://www.w3schools.com/Js/js_reserved.asp)

# Koodin ajaminen eri packagesta

Tämä on lähinnä opettajalle hyödyllinen MEMO. Koodin voi kirjoittaa `src/vastaukset/` moduuliin ja raportin voi luoda `sandbox/fake-report.html` tiedostoon seuraavilla komennoilla. Kummatkin näistä ovat ``.gitignore`:ssa.

```sh
# Command Prompt
set REPORT_PATH=./results/fake-report.html
set PACKAGE_NAME=vastaukset
```