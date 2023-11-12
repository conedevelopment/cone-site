---
title: "WordPress lassúlás. Miért lassú az oldalam?"
date: "2019-03-03"
tags: ["wordpress"]
thumbnail: "/img/blog/wordpress-lassulas-miert-lassu-az-oldalam.jpg"
thumbnailAlt: ""
---

**Egy lassú WordPress weboldal nem olyan ritka jelenség, mint amilyennek lennie kellene. Alapvetően egy oldal komplex rendszer, amit egészen egyszerű elrontani valamilyen szinten, azonban ezek nem minden esetben okoznak lassulást.**

WP esetében nincsen általános megoldás a teljesítmény hibák javítására, ami érthető a CMS komplex összetétele miatt. Számos bővítmény, számos téma érhető el, amikkel mind egy kicsit hozzáadunk az erőforrásokhoz, ami a végén majd megbosszulja magát. Ettől függetlenül van pár „népszerűbb” hiba, amit lehet javítani.

Alapvetően igaz, hogy egy gyors oldalhoz előzetes tervezés kell és a lehető legkevesebb függőség használata. Persze mindez relatív és projekt függő.

## Hogyan néz ki egy gyors WordPress oldal elemzése?

Ha szeretnéd tesztelni az oldalad, akkor a legjobb megoldás a [webpagetest.org](https://www.webpagetest.org/). Ez az elemző részletesebb, mint a Google PageSpeed, a Pingdom, vagy az YSlow.

![](/img/blog/webpagetest-cone-results.png)

Ezen az elemzésen a Cone oldalát látod. Felül látod a rövid értékelést, az öt darab A-val (a legjobb osztályzat az amerikai rendszer szerint) a zöld négyzetekben. Ez azt jelenti, hogy az oldal jól teljesít a fő metrikákban.

Ami ennél is lényegesebb az az, hogy az oldal csupán 569 KB és 21 HTTP lekérés szükséges ahhoz, hogy teljesen betöltsön. Minél kisebb az oldalad és minél kevesebb a lekérés, annál gyorsabb lesz.

Bármelyik online elemző ezeket fogja megnézni.

## Mindenképpen kell egy bővítmény, ami segít optimalizálni

A WordPress egyik legnagyobb előnye a hatalmas ökoszisztéma. Minden problémánkra találunk megoldást, ez nincs máshogy a teljesítményt illetően sem.

Ki kell emelni, hogy egy bővítmény nem biztos, hogy jól fog működni az oldaladdal és a szervereddel. Túl sok dolog van, ami félre mehet. Ezek a bővítmények elsődlegesen az olyan rendszerekhez készülnek, amik alapból is jól működnek.

Ha teljesítmény gondod van, akkor keress egy bővítményt és próbáld megoldani vele. Attól függően, hogy mit választasz számos opciót állíthatsz be, mint a statikus fájlok egyesítése, képek, fájlok tömörítése, oldalak cachelése.

Mi minden általunk készített weboldalhoz állítunk be teljesítmény optimalizáló bővítményt, ami a [WP Rocket](https://wp-rocket.me/). Ez a kiegészítő elég fejlett és egyszerű megoldás. Laikusként is nagyon gyorsan be tudjuk kapcsolni a szükséges opciókat. Egy jól megírt témával és háttér rendszerrel párosítva megadja azt a pluszt, ami az oldalunk sikeréhez kellhet.

## Csökkentsd a funkciókat, bővítményeket

Az hogy minden problémára találunk bővítményt nem biztos, hogy a legjobb megoldás. Minden kiegészítő plusz erőforrásokat, adatbázis lekéréseket adhat hozzá a rendszerünkhöz. Egy jól megírt kód és egy megfelelően cachelt oldal esetében ez általában nem probléma, ha nem hatalmas terhelésről van szó.

Még így is igaz, hogy ha valamit meg tudunk kerülni, azt tegyük meg. A több bővítmény nagyobb komplexitás, amit a végén semmilyen teljesítmény bővítmény nem tud feloldani.

## Nézz rá a szerverre

Egy jó szerver nélkülözhetetlen minden jól funkcionáló oldalhoz. Ezeket az igényeket általában egyszerű alábecsülni. A WordPress nagyon sok szerver erőforrást fogyaszt. Sok memória kell és egy erős processzor. Általában akkor nem járunk jól, ha a legolcsóbb hosztingot választjuk. A [Health Check & Troubleshooting](https://hu.wordpress.org/plugins/health-check/) bővítménnyel ezeket a paramétereket te is tudod ellenőrizni. (https://hu.wordpress.org/plugins/health-check/)

## Összegzés: WordPress és a teljesítmény

A gyors WordPress oldal nem lehetetlen, azonban ehhez valószínűleg kerülnöd kell a „több célú” sablonokat, vagy/és erőteljesen optimalizálnod kell őket. A legjobb megoldás, mint mindig az, ha már a tervezés korai szakaszától előtérbe helyezed az oldal gyorsaságát.
