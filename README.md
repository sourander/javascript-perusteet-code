# JavaScript perusteet

Tämä kurssi on koodattu Node.js v18:lla. Dokumentaatio löytyy [täältä](https://nodejs.org/docs/latest-v18.x/api/synopsis.html).

## How to

1. Install Docker
2. `docker image build -t kamk/tietolo-js .`
3. Run REPL: `docker container run -it --rm kamk/tietolo-js`
4. Run Bash: `docker container run -it --rm kamk/tietolo-js bash`
5. Using npm, install Jest `npm install --save-dev jest`

Kokeiltavaa:
```sh
# Build image
docker compose up --build -d

# Nosta compose stack ylös
docker compose exec tester bash
```

### Matki Python -i

Tämä toimii Bashissä ja Windowsissa Git Bashissä.
```sh
node -i -e "$(< yourScript.js)"
```

## Ohjeita

* Välttele näitä nimiä JS-entiteettiesi nimissä: [JavaScript Reserved Words](https://www.w3schools.com/Js/js_reserved.asp)

# Koodin ajaminen eri packagesta

Tämä on lähinnä opettajalle hyödyllinen MEMO. Koodin voi kirjoittaa `src/vastaukset/` moduuliin ja raportin voi luoda `sandbox/fake-report.html` tiedostoon seuraavilla komennoilla. Kummatkin näistä ovat ``.gitignore`:ssa.

```sh
# Command Prompt
set REPORT_PATH=./results/fake-report.html
set PACKAGE_NAME=vastaukset
```