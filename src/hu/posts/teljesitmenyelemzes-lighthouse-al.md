---
title: "Teljesítményelemzés Lighthouse-al"
date: "2022-04-13"
tags: ["weboldal-fejlesztés", "alkalmazás-fejlesztés"]
thumbnail: "/img/blog/teljesitmenyelemzes-lighthouse-al.png"
thumbnailAlt: ""
---

**Egy webes projekt teljesítménye mindig egy sarkalatos kérdés mivel a kiszolgálás interneten keresztül történik végtelen kombinációjú eszközökre.**

A teljesítmény általánosságban fontos tényezője a UX-nek (User Experience), de ma már SEO szempontjából is szükséges, mivel rangsorolási tényező. A teljesítmény mérése sokszor nem feltétlenül objektív, mivel sok tényező projekt függő, sok elemző pedig nagyobb cégek terméke. Ettől függetlenül szinte minden nagyobb szereplő mérését célszerű figyelembe vennünk.

Ebben az írásban mi most a [Lighthouse-al](https://developers.google.com/web/tools/lighthouse) foglalkozunk, ami egy open-source Google termék. A Google elemzőkben általában ez az eszköz fut (vagy valamilyen egyszerűsített verziója). Ezt az elemzőt használhatjuk közvetlenül Google Chrome-ból, vagy a [web.dev](https://web.dev/measure/) oldalról.

## Miért kell mérnünk a teljesítményt?

A válasz egyszerű, a gyors oldal a jobb oldal. Ezen nehéz hibát találni. Természetesen önmagában egy csak gyors oldal nem lesz jobb bármelyik másiknál, mert ez egy soktényezős játék. Azonban a betöltési idő, a gyorsaság egy nagyon komoly döntő tényező. Ami lassabb az valószínűleg nagyobb, ami nagyobb az drágább (mobil adatról betöltve például), veszteséget termel ([eladástól esünk el](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales)).

A teljesítmény a legegyszerűbb módja, hogy össze mérjük magunkat a konkurenciánkkal. Valaki elé akarsz kerülni a keresőben? Ez egy olyan faktor ahol kézzelfogható mérést és eredményt érhetsz el. Aztán persze a Google-ön múlik hogy mit kezd mindezzel, tényleges garancia nincs.

## Hogyan elemezzünk?

Egy elemzőt laikusként is tudunk futtatni, azonban ez sok esetben inkább a fejlesztőknek szól. A technikai háttér, tervezési döntések limitálhatják a mért eredményt, ami nem feltétlenül probléma.

**Amit felhasználóként, ügyfélként tehetünk az az, hogy felkeressük a [web.dev „Measure”](https://web.dev/measure/) aloldalát és ellenőrizzük az oldalunkat.**

Ellenőrzés után négy darab szám értéket kapunk, ajánlásokkal. Az biztos, hogy ezeknek nem kell mind 100-nak lenniük, de az is kétségtelen, hogy 80-nál kisebb - _a tapasztalataink szerint_ - nem nagyon lehet.

![A conedevelopment.com oldal Lighhouse pontszámai. Teljesítmény: 98, akadálymentesség: 97, jó gyakorlatok: 92, SEO: 97.](/img/blog/conedevelopment-lighthouse.png) *A conedevelopment.com oldal Lighhouse pontszámai.*

Ezeknek a számoknak a mérése - _főleg a teljesítményé_ - folyamatosan változik, így idővel lejjebb megy majd a kapott érték, ami után újra optimalizálnunk kell.

80-as érték alatt már kellene reklamálnunk a fejlesztőnknél, szerintünk mind a négy érték alapján. Kiegészítés, hogy az akadálymentesség idehaza nem olyan alapvető sajnos, így ez egy kicsit kakukktojás lehet.

**Legörgetve a teljesítmény kiemelt száma alá a következőket találjuk:**

- **Metrics (mérések):** fontosabb mérési indexek összegzése. Az átment az auditok összeredménye.
- **Diagnostics (diagnosztika):** pontok, ahol még lehet, vagy célszerű javítani az oldalon.
- **Passed audits (átment auditok):** azok a pontok, ahol az oldalunk megfelelően teljesített.

## Mennyire vegyük komolyan?

Az értékekről mindenképpen a fejlesztőnkkel kell konzultálni, önállóan nincs értelme bármit is levonni. Természetesen egy nagyon rossz érték mindenképp riasztó, de ezekre a számokra igaz, hogy minél rosszabb a helyzet, annál könnyebb javítani egy vállalható értékre. Mindig az utolsó pár értéket nehéz elérni (kiakasztani 100-ra például).

**Ha új fejelsztést veszünk át, mi mindenképpen javasoljuk, hogy előtte futtassunk egy ilyen ellenőrzést. Azonban tartsuk észbe, hogy a tervezésnél a kicsinek tűnő megrendelői döntések is lényegesen befolyásolhatják ezeket az értékeket.**
