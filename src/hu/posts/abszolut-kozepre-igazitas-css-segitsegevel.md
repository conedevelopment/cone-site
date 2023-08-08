---
title: "Abszolút középre igazítás CSS segítségével"
date: "2016-02-26"
tags: ['css']
thumbnail: ""
thumbnailAlt: ""
---

**Ha horizontálisan szeretnénk középre igazítani CSS-ben, akkor könnyű dolgunk van, csak használjuk a a text-align: center; (inline elem esetén), valamint a margin: auto; (blokk elem esetén) deklarációt. Mi a helyzet akkor, ha vertikálisan is szeretnénk igazítani az elemeinket?**

Habár a feladat egyszerűen hangzik, sajnos CSS-ben a vertikális igazítás nem olyan egyszerű, mint a horizontális. Az évek során számos jobb és kevésbé jobb megoldás született az abszolút középre igazítás problémájának megoldására, azonban a [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) megjelenéséig nem kaptunk olyan szabványos megoldást, ami kifejezetten a problémát akarta megoldani!

A lent taglalt megoldásokon kívül létezik még két szokatlanabb módszer is, név szerint a **táblázatos** és az **inline-block** megoldás, ezekről részletes információt [itt](https://css-tricks.com/centering-in-the-unknown/) találsz!

## Abszolút pozicionálás megoldás

Az egyik legkorábbi abszolút igazítási megoldás. Az igazítandó elem position értékét absolute-ra állítjuk, majd eltoljuk 50-50%-al fentről és balról, ekkor az elemünk bal felső sarka pont középre kerül. Ezután az elemünket vissza kell húznunk a szélesség és magasság felével. Ha nem fix méretekkel dolgozunk akkor a transform tulajdonság translate értékét használhatjuk (fix szélesség és magasság esetén negatív margót is használhatunk).

A megoldás nagy előnye, hogy használhatjuk fix szélesség és magasság nélkül is, mivel a transform tulajdonság translate értékének százalékos paraméterei magára az elemre vonatkoznak, így a böngésző tudni fogja, hogy az igazított elemnek a felével kell visszahúzni az elemet mind két irányban.

<p class="codepen" data-height="363" data-theme-id="2175" data-slug-hash="f0a20f8b25d6965d03363b3d77ebc1a9" data-default-tab="result" data-user="adamlaki" data-embed-version="2">See the Pen <a href="http://codepen.io/adamlaki/pen/f0a20f8b25d6965d03363b3d77ebc1a9/">Abszolút középre igazítás 1</a> by Adam Laki (<a href="http://codepen.io/adamlaki">@adamlaki</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Hátrányok

- Problémás igazítani a túllógó elemet. Tehát, ha az igazított elem nagyobb, mint a befoglaló elem körülményes megfelelően igazítani.
- Néhány böngészőben (Chrome-ban futottam bele) a subpixel renderelés miatt az elemünk elmosódhat. Ilyenkor az egyik megoldás, ha az elemre alkalmazzuk a trasform-style: preserve-3d; deklarációt!

## Relatív pozicionálás a viewport mértékegységekkel

Az position: absolute; értékadást megkerülve, használhatjuk a relatív vh mértékegységet magin-top esetén, amit aztán az előbbi módszerhez hasonlóan visszahúzunk 50%-al a translateY érték segítségével. Horizontális igazítás esetén a margin-nak az **auto** értéket adjuk.

A relatív **viewport** mértékegységekről [itt](http://adamlaki.com/relativ-viewport-mertekegysegek/) olvashatsz részletesebben!

<p class="codepen" data-height="379" data-theme-id="2175" data-slug-hash="f202a50bea941353edbcfcff500c7b05" data-default-tab="result" data-user="adamlaki" data-embed-version="2">See the Pen <a href="http://codepen.io/adamlaki/pen/f202a50bea941353edbcfcff500c7b05/">Abszolút középre igazítás 2</a> by Adam Laki (<a href="http://codepen.io/adamlaki">@adamlaki</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Hátrányok

- A módszer legfőbb hátránya, hogy csak a **viewport-hoz** viszonyítva tudunk pozicionálni a vh mértékegységgel, így nagyon sok esetben használhatatlan a megoldás!

## Flexbox megoldás

A legjobb megoldás egyértelműen Flexbox segítségével érhető el. A többi megoldás csupán azért van még használatban mert a Flexbox-ból időközben két verzió is készült, valamint a böngésző támogatottsága nem tökéletes (lényegében régebbi IE verziókkal van problémánk). A módszer használata során figyelnünk kell, hogy megfelelően prefixeljünk, hogy a lehető legtöbb böngészőben működjön!

Az igazításhoz csupán annyit kell tennünk, hogy a befoglaló elemnek a display tulajdonságát flex-re, valamint a justify-content (horizontális igazítás) és align-items (vertikális igazítás) tulajdonságait pedig center-re állítjuk!

> _**Kiegészítés:** a justify-content és az align-items értékét kiválthatjuk az igazítandó elem margin értékének auto-ra állításával. Ebben az esetben ugyanezt az eredményt kapjuk._

<p class="codepen" data-height="379" data-theme-id="2175" data-slug-hash="f868bd21261fbf1d14f20c918d2fa51b" data-default-tab="result" data-user="adamlaki" data-embed-version="2">See the Pen <a href="http://codepen.io/adamlaki/pen/f868bd21261fbf1d14f20c918d2fa51b/">Abszolút középre igazítás 3</a> by Adam Laki (<a href="http://codepen.io/adamlaki">@adamlaki</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Hátrányok

- Figyelnünk kell a prefixekre és a böngésző támogatásra!

## További információk

Ha szeretnél többet megtudni a vertikális középre igazításról, vagy általánosságban a CSS nyelvben szeretnél feljebb lépni, akkor ajánlom [Lea Verou - CSS Secrets](http://adamlaki.com/konyvajanlo-css-secrets/) című könyvét!
