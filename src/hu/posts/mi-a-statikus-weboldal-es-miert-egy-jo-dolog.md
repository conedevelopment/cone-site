---
title: "Mi a statikus weboldal és miért egy jó dolog?"
date: "2021-09-28"
categories: 
  - "weboldal-fejlesztes"
---

**A statikus weboldalak reneszánszukat élik és okkal. Igaz, hogy ezek már nem a régi idők oldalai, hanem modernebb technológiával készülnek, de az alapelv maradt.**

## Statikus vs dinamikus weblap

A statikus weboldal úgy kerül megjelenítésre a felhasználó eszközén, ahogyan azt a szerveren tároljuk. Fixen, előre elkészített HTML oldalakat szolgálunk ki a webszerverről. A HTML oldalakat vagy mi hozzuk létre manuálisan, külön-külön, vagy valamilyen generátort használunk, mint az [11ty](https://www.11ty.dev/), [Gatsby](https://www.gatsbyjs.org/).

\[caption id="attachment\_1718" align="alignnone" width="1200"\]![](images/statikus-oldal-vs-dinamikus-oldal.png) A különbség a statikus és dinamikus oldal között a felhasznált technológiákban rejlik.\[/caption\]

Ellenben a dinamikus oldal mögött ott egy adatbázis, valamint egy háttérrendszer (WordPress), nyelv (PHP) ami ír, olvas ebből az adathalmazból. Mindezt kiszolgáláskor teszi (többé kevésbé, cache valamilyen formája általában elérhető), ami annyit tesz, hogy PHP kódból, lekérés után generál HTML kódot, amit aztán meg tud jeleníteni a böngésző.

## Történetük

A kezdetek kezdetén a web nem volt túl dinamikus, többnyire statikus oldalakból állt, egészen korlátolt volt. Majd megjelentek a dinamikus nyelvek, amikkel már hagyományos értelemben is programozhattunk. Dinamikus nyelv nélkül nem igazán volt fejlődés.

Ma már jó pár esetben - a technológiai változásoknak köszönhetően - a dinamikus működés egy részét újra kezdi kiszorítani a statikus szemlélet, köszönhetően a [Jamstack](https://jamstack.org/)\-nek.

## Miért jó a statikus weboldal?

De, ha a dinamikus oldal tud többet, miért létezik még statikus? A kérdés jogos. A válasz azért egészen összetett:

- a mai statikus oldalak már nem a klasszikus kézzel írott HTML oldalak. Nagyon komoly és okos eszközöket használhatunk a generáláshoz. Ez annyit jelent, hogy egy modern környezetben fejleszthetünk és hasonló funkciókat használhatunk (include, változók), mint mondjuk PHP esetében. Általában ezek a generátorok valamilyen hanyományos nyelvre (a [Hugo](https://gohugo.io/) esetében GO nyelvre), vagy framework-re épülnek (Gatsby esetében React-ra).
- Egy dinamikus oldal sokszor túlzás. Miért tartanánk fenn egy bonyolult szervert, ha nincs szükségünk rá. Ma már nem muszáj WordPress-t használnunk, kiválthatjuk egy statikus generátorral.
- A JS már nem a régi JavaScript. Front-end oldalra ma már nagyon sok mindent át lehet tenni, nem véletlen az SPA-k (Single Page Application) népszerűsége.
- Egy statikus oldal generátorral, oldallal teljesítmény területén nehéz birokra kelni. Ha a kiszolgálásból kiiktatjuk a dinamikus back-endet (PHP) és csak HTML adunk vissza, az nagyon gyors lesz. Természetesen a teljesítmény nem csak ezen áll, vagy bukik, de sokat jelent.
- Olyan szolgáltatásokkal, mint a [Netlify](https://www.netlify.com/), vagy [Vercel](https://vercel.com/) nagyon jó áron lehet tömegeket kiszolgálni úgy, hogy a szerverünk egy nagyobb terhelés esetén sem esik össze.
- A headless CMS-eknek köszönhetően hanyományos tartalmkezelő rendszereket is használhatunk, amiknek a tartalmát aztán használhatjuk generálásnál. Tehát, dinamikus adatokkal generálunk statikus oldalakat.
- A kapcsolati űrlap jó példa egy olyan egyszerű funkcióra, ami a legtöbb oldalon szükséges. A [serverless](https://www.gatsbyjs.com/products/cloud/functions/) szolgáltatásoknak köszönhetően könnyen készíthetünk e-mail küldés funkciót szerver beállítás nélkül.

## Statikus oldalak hátrányai

Értelemszerűen a Jamstack csak egy újabb módszer fejlesztésre. Mint mindennek, úgy ennek is megvannak a maga hátrányai.

Az oldalakat előre generáljuk, ami időbe telik. Minél több oldal, annál több idő. Minél több idő, annál több pénz (az említett hoszting szolgáltatók a build időt is figyelik a csomagoknál). Ha nincs incremental build, akkor nagyon hosszú lehet egy-egy új élesítés (mivel ilyenkor az egész website-ot újra generálja a rendszer). A funkcionalitás alapvetően limitált lehet. Természetesen ez jó részt függ a fejlesztők tudásától is.

## Mikor melyiket válasszuk?

Nos, erre csak a fejlesztőd tud választ adni. Egy kicsit más gondolkodás szükséges a statikus fejlesztéshez. Hogy melyik a jó választás az mindig függ az adott projekttől és a fejlesztőtől. Nem mindegy, hogy az adott személy, vagy csapat milyen rendszerben mozog biztosabban, ahogy az sem, hogy milyen alkalmazásról, oldalról van szó.

Egy céges portfólió oldal esetén, ahol nincsenek nagy elvárások a tartalomszerkesztést illetően biztosan jó választás kevés kockázattal a statikus oldal. Az extra, amit egy WordPress-hez képest tud nyújtani (teljesítmény) segíthet a konkurencia elé kerülni.
