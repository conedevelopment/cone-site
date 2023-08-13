---
title: "CSS attr() függvény használata"
date: "2020-01-06"
tags: ["css"]
thumbnail: "/img/blog/css-attr-fuggveny-hasznalata.png"
thumbnailAlt: ""
---

**Az** attr() **függvény használatával HTML elem attribútumok értékét kérhetjük le és jeleníthetjük meg CSS-ből a** `::before`, `::after` **pseudo-elemek segítségével.**

A függvény használatakor mindig az éppen kijelölt elem tulajdonságaihoz férünk hozzá. A lekért érték lehet hagyományos tulajdonság, mint a href, vagy egy egyedi `data-*` attribútum is.

Jelenleg csak arra használható, hogy pseudo-elemekben jelenítsük meg az adatokat. Két darab hétköznapi használati eset van, amit érdemes megemlíteni.

## URL megjelenítése nyomtatási nézetben

Ha valamit nyomtatni akarsz egy weboldalról a hivatkozások problémát okozhatnak. Alapvetően papíron maximum csak egy aláhúzást fogjunk látni, ahol a link van. Hogy mi az értéke az jó kérdés lesz, pedig hasznos lehet.

```css
@media print {
    a[href]::after {
        content: " (" attr(href) ")";
    }
}
```

Ezt a problémát az `attr()` függvénnyel egyszerűen orvosolhatjuk. Hogy használhatóbb legyen a nyomtatási nézet, annyit kell tennünk csupán, hogy az `<a>` tagek href értékét kiiratjuk a `::after` elemre.

## Egyszerű tooltip megoldás

Ha egy nagyon egyszerű tooltip megoldást szeretnénk, csak CSS segítségével, akkor az `attr()` függvény megint csak a segítségedre lehet. A használatával könnyedén jeleníthetünk meg hover állapotra plusz információt szintén a pseudo-elemekben.

<p class="codepen" style="height: 349px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-height="349" data-theme-id="28007" data-default-tab="result" data-user="adamlaki" data-slug-hash="aboLXZQ" data-preview="true" data-pen-title="Pure CSS Tooltip">See the Pen <a href="https://codepen.io/adamlaki/pen/aboLXZQ/">Pure CSS Tooltip</a> by Adam Laki (<a href="https://codepen.io/adamlaki">@adamlaki</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Értelemszerűen ez egy nagyon egyszerű megoldás, sokat ne várjunk tőle, bizonyos szituációkban hasznos lehet.

## Az attr() függvény jövője

Az új CSS specifikáció szerint az `attr()` már többet tud, azonban ennek a támogatása nem túl nagy, mivel még nem ajánlás.

```css
attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )
```

Az első paraméter a név, a második az egység, ami azt jelenti, hogy különböző értékeket kaphatunk vissza, mint a szín, hosszúság, számok. Ez azzal együtt lesz hasznos, hogy minden CSS tulajdonságon használhatjuk majd (tehát egy szöveg szín értéket lekérhetünk HTML-ből) nem csak a `::before` és `::after` elemen.

[További információért az attr() függvényről](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#Syntax) kérlek keresd fel az MDN oldalát!
