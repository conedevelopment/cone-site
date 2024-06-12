---
title: "Minőségellenőrzés a webfejlesztésben"
date: "2024-06-08"
tags: ["weboldal-fejlesztés"]
thumbnail: "/img/blog/minosegellenorzes-a-webfejlesztesben.png"
thumbnailAlt: ""
---

<p class="lead">A minőségbiztosítás elengedhetetlen minden termék, vagy folyamat esetén. Mégis miért van az, hogy ez az alapvetés webfejlesztésnél sokszor kevésbé érvényesül?</p>

## Mit értünk minőségbiztosítás alatt?

Almafx Minőségbiztosítás alatt értjük, amikor meggyőződünk arról, hogy valami (termék, szolgáltatás vagy bármi más) objektív feltételeknek megfelelően nevezhető jónak.

Körtefx Egyszerű példa lehet bármi, amit gyártunk, mint az élelmiszer, elektronika, autó. Ahhoz hogy tudjuk, egy autóban megfelelően működik egy váltó, ahhoz az egység egészét és külön az alkatrészeket is tesztelni kell megfelelő minőségi elvárások mentén.

És hogy ki határozza meg, hogy mi a minőségi elvárás? A gyártó, vagy/és a megrendelő. Például úgy, hogy alkalmaz ez gyártási szabványt, mint az [ISO 9000-es](https://www.iso.org/standards/popular/iso-9000-family) család. Azt, hogy ezt betartjuk egy külső auditor hitelesíti. Értelemszerűen magunkat auditálni nem nehéz szubjektív feltételek mentén, így nem is igazán ér sokat.

## Nem mindegy, hogy egy portfólió oldalról, webshopról, vagy alkalmazásról van szó

Természetesen nem mindegy, hogy mekkora kódbázist akarunk ellenőrizni. Egy portfólió oldalon nem igazán lesz olyan kritikus funkció, ami úgy igazán elromolhat.

Egy webáruház, vagy alkalmazás esetén már teljesen más a helyzet. Például honnan tudod, hogy az e-mailjeid megérkeznek, nem kerülnek a spam mappába? Nem szembesülhetsz csak akkor egy hibával, ha valaki már személyesen jelenti neked.

## Miért veszik el a minőségellenőrzés a webfejlesztésben?

Ez egy jó kérdés és sajnos csak sejtéseink vannak. Azt látjuk, hogy megrendelői oldalról sokszor nincsenek szigorú elvárások. Ami érthető, hiszen azért keresünk szakembert, hogy megoldjon egy specifikus problémát, te nem látod a kódot.

Fejlesztői részről azt látjuk, hogy a fejlődés nehezen megy. Minőségellenőrzést integrálni nagyobb munka az elején, ami aztán sokat hoz a végén. Valahogy ezt megugrani, felismerni a jelentőségét kevésbé megy.

És itt nem arra gondolunk, hogy egy ISO szabványt kell követni, de alapvető elvárásnak kell lennie a minőségnek és a fenntarthatóságnak.

A minőség többnyire a kontrollról, ellenőrzésről szól. Ha nincs aki, vagy ami ellenőrizzen (lehetőleg objektíven, valamilyen szabvány mentén), akkor nincs minek megfelelnünk.

Kód írásánál ennek elmaradása azért is probléma mert azt ellenőrizhetjük számos objektív elv mentén, automatán. Egy style guide és megfelelő lint bevezetésével minden commit-unkat ellenőrizhetjük, hogy megfeleljen a projekthez létrehozott elvárásoknak.

Ugyanígy, minden frissítésnél (új telepítésnél) ellenőrizhetjük (külső eszközt integrálva), oldalunk teljesítményét is.

## Hogyan ellenőrizhetjük és kényszeríthetjük ki a minőséget a weben

Ideálisan az lenne a legjobb, ha ezért nem kellene sokat tennünk. Keressünk megbízható fejlesztőket, akik követik az adott, kapcsolódó szabványokat.

Egyszerű példa: ha [Laravel kód készül](/hu/szolgaltatasaink/alkalmazas-fejlesztes/), akkor legalább a PSR-2 és PSR-4 szabvány követése és ennek ellenőrzése (automatán) az alap. Ezt az elvárást a Laravel keretrendszer támasztja, amit kiegészíthetünk egyéb automata extrákkal, mint a statikus analízis.

Ugyanez a felállás szinte bármilyen keretrendszerre igaz lesz. Ha például WordPress fejlesztés készül, akkor megint csak érdemes alkalmazkodunk annak elvárásaihoz, vagy követnünk valamilyen általános PHP sztenderdet.

A kódunk lint-elése segíthet, hogy egy előre definiált stílusban, következetesen írjuk azt. Egyszerű elvárás, ami nagyban segít abban, hogy hosszú távon is átlátható és kezelhető kód készüljön.

Mert a végső és elsődleges célunk a minőségellenőrzéssel, hogy a kódunk megfelelően fenntartható és továbbfejleszthető legyen. A hanyagságnak itt ára van, [minden rossz döntést megfizetünk valahogy](https://conedevelopment.com/hu/jarulekos-karok-a-webfejlesztesben/), még ha most most nem is látjuk.

Ha nem akarsz, vagy szeretnél megbízni a fejlesztődben a legjobb, ha behozol egy személyt auditra. Értelemszerűen ezt előre kell/illik kommunikálnod és már korán meg kell fogalmaznod a minőségi elvárásaidat, hogy tudjanak is alkalmazkodni.

[Mi projekt átvétel előtt mindig készítünk egy auditot](https://conedevelopment.com/hu/szolgaltatasaink/alkalmazas-es-weboldal-audit-allapotfelmeres/), mert addig nem sokat tudunk kezdeni egy nagy kódbázissal (amit nem mi írtunk), amíg át nem látjuk. Ennek alapvető része egy részletes audit, amiből már megtudhatod, hogy milyen állapotban van a projekt és hogy merre érdemes elindulni vele.

## Az elhanyagolt minőség ára

És hogy hol árt neked a minőség, minőségellenőrzés elhanyagolása? Nem feltétlenül egy olyan dolog lesz, amit le tudsz fordítani majd forintra, de látható lesz.

Ha kódolásnál nincsenek követendő szabványok, szabályok, tesztek, akkor a kód bővítésre egyszerűen több időbe telik, ami nagyobb költséget generál munkaidőben.
Ha a projekt szabványok és style-guide-ok mentén készült és neked valamilyen okból fejlesztőt kell váltanod egyszerűbb dolgod lesz, mert egy hozzáértő fejlesztőnek könnyebb lesz átlátnia és tovább fejlesztenie.

Ha nincsenek szabványok és valaki átveszi a projektet, akkor jön egy nagy adag refaktorálás, hogy egyáltalán lehessen bővíteni a kódot.

[A kevésbé jó kód lassabb lesz](https://www.browserstack.com/guide/how-fast-should-a-website-load). A teljesítmény nem két bites, összetett jelenség. Egy lassabb weboldal, alkalmazás anyagi kárt fog okozni, mert értékesítéstől esel el miatta.
