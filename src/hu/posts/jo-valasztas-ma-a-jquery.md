---
title: "Jó választás ma a jQuery?"
date: "2021-09-04"
tags: ["javascript", "weboldal-fejlesztés"]
thumbnail: "/img/blog/jo-valasztas-ma-a-jquery.png"
thumbnailAlt: ""
---

**Manapság (de lehet, hogy már korábban is az volt) egészen divatos belerúgni a jQuery-be, ahol lehet. Az, hogy ezt megtesszük alapvetően nem is probléma, de ettől függetlenül szerintem érdemes egy kört értekezni róla.**

## Mindig előjön, hogy kell-e még használnunk

Az év első felében készült el a [Fehér Ház új oldala](https://www.whitehouse.gov/), ami általában WordPress-re épül. Ma már a WP-n kevesen akadnak fenn, de az, hogy [jQuery](https://jquery.com/) is fut rajta sokakat zavart.

Miért kéne egy oldalnak 2021-ben jQuery-t használni? Ez egy jó kérdés. Ahonnan mi nézzük nem láthatjuk a fejlesztői döntéseket, de valószínűleg a WordPress ökoszisztémához van köze, mivel ezek a bővítmények sok esetben támaszkodnak erre a könyvtárra.

## Mikor használjunk jQuery-t?

Sokat dolgozunk WordPress-el. Egy monolit. Néha kedveljük, néha nem. Ettől függetlenül úgy gondoljuk, hogy tartalomkezelésre (CMS) egy jó választás lehet.

Sajnos, sok WordPress bővítmény jQuery-re támaszkodik és úgy fest ez még így is marad egy darabig. Többnyire igaz, hogy WP esetében a változás mindig inkább lassan történik meg. Az világos, hogy nagyon sok fejlesztő dobni akarja a jQuery támogatást (ahogy a Contact Form 7 meg is tette), de ez sokszor nem olyan könnyű.

Másik jó példa a felugró ablak kezelés. A [Fancybox](https://fancyapps.com/fancybox/), ami egy népszerű JavaScript bővítmény, jQuery-re épít. Ilyen funkció - a galériákhoz, képek oldalon belüli nagyításához - többnyire minden weboldalhoz szükséges.

## Szükséges használnunk ma?

A fentiekből nem nehéz kitalálni, hogy mit gondolok. Ha elkerülhetetlen függőség, akkor igen, szükséges és lehet. Ha jelen van már valamilyen okból, akkor meg miért ne (habár sima JS kódot írni mindig jó ötlet)?

Még ma is sok hasznos API-t kínál. Egy régi ismerős, ami nem okoz csalódást (többnyire csak a méretével).

Ha használjuk figyeljünk rá, hogy a legújabb verziókat használjuk. [Ha tehetjük, válasszuk a „slim” változatot](https://stackoverflow.com/questions/35424053/what-are-the-differences-between-normal-and-slim-package-of-jquery).

## Igen, vannak ma már jobb eszközök

Ma már számos modernebb JS keretrendszer közül választhatunk, mint a Vue, React, Angular, vagy Svelte. Ezek merőben eltérnek már a jQuery koncepciójától, de összességében ezek is ugyanúgy keretrendszerek.

A jQuery a fénykorában egy komoly eszköz volt. A mai JavaScript API-k jó része is (classList, querySelector) ennek a mintáit követi, vagy viszi tovább.

Ha már szóba kerültek a JS keretrendszerek: ne mixeljük őket. Egy darab is nagy függőség, ne rakjunk be kettőt ugyanabba a projektbe, csak azért mert nem találunk egy megfelelő kiegészítőt.

## Nem tudunk túl sokat

Szeretjük azt hinni magunkról, hogy pengék vagyunk abban amit csinálunk, közben meg a legtöbb fejlesztő nem tudja, hogy pontosan mit is jelent a „this” kulcsszó JS-ben. Egyszerű kritizálni valamit, de zavarbaejtő, ha akkor tesszük, amikor nem értjük teljesen.

Mindennek megvannak a buktatói és minden lehet elavult, de ettől még kezelhetjük a helyén. Minden eszköznek megvan a maga helye. Például végtelen számú CSS rács rendszert használunk (valamilyen keretrendszerben, mint a Bootstrap), de mégis miért? Ma már van Flexbox és Grid natívan CSS-ben, amik segítségével egyszerűbben írhatunk jobb layoutot. Mindez egy döntés, amit meghoztunk egy kontextusban.

## Összegzés

**Úgy gondolom, ha teheted kerüld a jQuery használatát új projekt esetén mindenképp. Ha régebbi projektben ragadtál be, akkor próbáld meg frissíteni. Ha dolgozol vele ne legyél zavarba, felesleges.**
