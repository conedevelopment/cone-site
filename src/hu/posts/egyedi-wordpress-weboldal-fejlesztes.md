---
title: "Egyedi WordPress weboldal fejlesztés"
date: "2021-07-19"
tags: ["wordpress"]
thumbnail: "/img/blog/egyedi-wordpress-weboldal-fejlesztes.png"
thumbnailAlt: ""
---

**Mit takar a WordPress egyedi fejlesztés kifejezés és egyáltalán miért egy létező fogalom? Nem minden fejlesztés egyedi? A válasz röviden: WP-hez vásárolhatunk előre, egy konkrét feladatra készült sablont, témát (egészen olcsón), amit aztán beállíthatunk a saját WordPress oldalunkon.**

A vásárolt sablonokkal aztán természetesen más oldalakon is találkozhatunk (vagyis az oldalunk nem lesz egyedi). Rengeteg előre elkészített sablont találhatunk például a [ThemeForest](https://themeforest.net/)\-en már $40-50-tól. Ezek a témák nem neked, hanem egy meghatározott célra (vagy többre) készülnek. Már kevés szakértelemmel is beállíthatjuk őket, mára egy [külön iparág épült ezek továbbértékesítésére](https://conedevelopment.com/hu/wordpress-vs-wordpress/).

> **A többcélú, vagy multi-purpose téma:** egy olyan WordPress téma, aminek a célja, hogy sok igényt oldjon meg egyszerre. Úgy vannak felépítve, hogy stílusra, megjelenésre többféle végeredményt is egyszerűen érhetünk el velük (oldal egy fogorvosnak, vagy egy használt autó kereskedőnek). A legnagyobb hátrányuk tulajdonképpen a többcélúságból ered, sok lesz a felesleg (CSS stílus, kód formájában).

## Ezzel szemben a WordPress egyedi fejlesztés

Az egyedi fejlesztés lényege, hogy egy olyan WP oldal, téma készül, ami a pontosan meghatározott igényeket elégíti ki. Nincs benne sok felesleges kód, optimalizált, támogatható és továbbfejleszthető hosszú távon is. Egy WordPress oldal tervezése ugyanolyan, mint [bármilyen weboldal tervezése](https://conedevelopment.com/hu/a-weboldal-tervezes-lepesei/), de persze figyelembe kell vennünk annak sajátosságait.

**A WordPress egy háttérrendszert jelent, egy CMS-t, amibe belépve tudjuk kezelni a tartalmainkat.** Bővíthetősége két részre osztható: **bővítményekkel tudjuk növelni a funkcionalitását** (például e-mailt küldeni), egyedi **témával pedig tetszőleges megjelenést** tudunk biztosítani az oldalnak.

### Optimális kód

Csak a szükséges bővítményeket használja, amit lehet azt saját kóddal oldunk meg. Jó példa még a CSS kód, ami a megjelenítésért felel. Egy általános portfólió oldalhoz ~2000 sor CSS kell maximum (nem összesen, hanem egy-egy adott oldalhoz), ez egy vett témában +15 000 sort jelent többnyire, teljesen könnyedén. Ez azt jelenti, hogy az oldal a lehetséges stílusoknak a 6-7 szeresét tölti be. Sok esetben itt technikai értelemben véve nem beszélünk nagy méretekről (magyar internettel biztosan nem), de arányaiban nézve ez hatalmas pazarlás.

A CSS-en kívül számos más terület van, ahol számít, hogy milyen kódot írunk. A WP PHP alapú, a kód nagy részét téma és bővítmény esetében ezen a nyelven írjuk. Nem mindegy, hogy hogyan néz ki a sablon kódja, mivel hosszútávon támogatva rengeteget fogunk itt dolgozni.

### Teljesítmény

Ha az elejétől mi készítjük a kódot, akkor a legtöbb esetben egész vállalható eredményt kapunk teljesítményt és fenntarthatóságot illetően. A teljesítmény mérése sokszor nem feltétlenül egzakt (jó pár esetben a számok nem feltétlenül olyan fontosak), de a Google elemzőivel ([Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=hu), [web.dev](https://web.dev/measure/)), valamint a [WebPageTest](https://www.webpagetest.org/)\-el egész körültekintően mérhetünk. Természetesen az eredmények megfelelő kiértékelése is szükséges, mivel minden projekt más és más, amit figyelembe kell vennünk.

Amikor [egyedi WordPress oldalt fejlesztünk](https://conedevelopment.com/hu/szolgaltatasaink/weboldal-fejlesztes/), akkor mindig arra törekszünk, hogy az fizikailag is kisebb legyen, valamint a végén mindig alkalmazunk egy extra [optimalizációs lépést WP Rocket formájában](https://conedevelopment.com/hu/wordpress-teljesitmeny-optimalizalas-wp-rocket-segitsegevel/).

A Google esetében bizony a teljesítmény, és a [Web Vitals](https://web.dev/vitals/) mutatók ma már rangsorolási tényezők. De ha eltekintünk a SEO értékétől a teljesítménynek, akkor is ott van a fontosabb szereplő, a végfelhasználó. Aki bizony kritikus, olyan oldalt akar böngészni, ami nem csak megbízhatóságot sugall (jól néz ki külsőre), hanem gyors is.

### Támogatás, hibák javítása

Egy webes projekt ritkán ér véget az átadásnál. Még egy statikus weboldal esetében is számos karbantartási, javítási teendő akadhat, amit nem csak észre kell venni, hanem el is kell végezni. Ha készítünk egy oldalt, annak vállaljuk (óradíj alapon) a karbantartását, frissítését (az oldal átadása utáni 2 hónapban a hibák díjmentesen javítjuk).

Ez evidensnek tűnik, azonban úgy látjuk, hogy nem feltétlenül az. Sok megrendelő nem gondol a karbantartásra, sok fejlesztőt pedig nem érdekel, mert a nagy pénz nem ebben van.
