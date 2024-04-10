---
title: "DOM elemek kijelölése JavaScript-ben a querySelector és querySelectorAll segítségével"
date: "2019-05-10"
tags: ["javascript"]
thumbnail: "/img/blog/dom-elemek-kijelolese-javascript-ben-a-queryselector-es-queryselectorall-segitsegevel.jpg"
thumbnailAlt: ""
---

**A querySelector eljárás segítségével úgy jelölhetünk ki elemeket, ahogyan azt CSS-ben megszoktuk. Ez a funkció elengedhetetlen, amikor HTML dokumentumokkal dolgozunk.**

Az egyik legjobb funkció jQuery-ben az, hogy egyszerűen férünk hozzá a DOM-hoz. Bármit - _és többet_ - kijelölhetünk, ugyanazzal a logikával, amivel a CSS-ben tennénk. Ez a megoldás egy hatalmas fejlődés volt a korábbi, ID és osztályalapú JS megoldásokhoz képest.

A Selectors API megjelenésével - _akárcsak a [classList API](https://conedevelopment.com/hu/html-osztalyok-kezelese-classlist-tel-javascript-ben/) az osztályok esetén_ - ma már sokkal könnyebb dolgunk van, amikor elem manipulálásról van szó.

## A Selectors API és az új eljárások

A `querySelector` és a `querySelectorAll` a [Selectors API](https://www.w3.org/TR/selectors-api/)\-ban került bemutatásra még 2013-ban.

Mind a kettő működik az document és a element objektumon is. Kiválaszthatunk egy elemet egy korábbi NodeList-en is, úgy ahogyan a jQuery `find()` eljárásával csináljuk.

A böngésző támogatottsága nagyon jó, [majdnem 100% a Can I Use szerint](https://caniuse.com/#search=querySelector).

```js
// querySelector() példák
const content = document.querySelector('.entry-content');
document.querySelector('a.is-highlighted:not([target="_blank"])');

// querySelectorAll() példák
document.querySelectorAll('button[type="submit"]');
content.querySelectorAll('p');
```

**Amikor a querySelector(All) eljárásokat használod, akkor figyelj a következőkre:**

- Ha nincs eredmény, akkor null (querySelector), vagy üres NodeList-et(querySelectorAll) értéket kapsz vissza.
- A szelektornak érvényes CSS kijelölésnek kell lennie.
- Nem jelölhetsz ki pseudo-elemet, mint a `::before` és az `::after`.
- Szükséged lesz egy iterációs technikára, ha a `querySelectorAll()-t` használod. Több módszer is van JavaScript-ben a NodeList-tek bejárására, a cikk végén találsz ilyet.

## Az első elem kijelölése a querySelector() eljárással

Ez az eljárás a kijelölés első elemét adja vissza. Egy paramétert fogad, ami a szelektor. A modern CSS kijelölőknek hála szinte bármit kijelölhetünk a pseudo-class segítségével, mint a `:not()`, vagy a `:nth-child()`.

A visszatérési érték egy Node List egy elemmel, ha létezik. Több kijelölőt is megadhatunk egyszerre, vesszővel elválasztva, de ez főként a `querySelectorAll()` esetében lesz hasznos.

```js
document.querySelector('a:not(.nav)');
document.body.querySelector('style[type='text/css'], style:not([type])');
```

## Elemek kijelölése a querySelectorAll() eljárással

A `querySelectorAll()` teljesen megegyezik a querySelector eljárással annyi különbséggel, hogy ez az összes talált eredményt visszaadja. A visszatérési érték egy non-live NodeList.

```js
const warnings = document.querySelectorAll('.alert.is-warning, .alert.is-error');

warnings.forEach((el) => {
    el.style.display = 'none';
});
```

## NodeList bejárása JavaScript-tel

Míg az egyszerű verzióval csak egy elemet kapunk vissza, addig az összes eljárással már egy objektum listát. Éppen ezért fontos, hogy tudjuk hogyan tudunk bejárni egy NodeList-et JS segítségével.

A NodeList egy objektum típus ami node-ok gyűjteményét tartalmazza. Ez az objektum típus tömb szerű, amit a `forEach()-el` bejárhatunk.

### Iterálás a forEach eljárással

Lényegében a `forEach()` eljárás a tökéletes megoldás a bejárásra. Annyi a probléma, hogy ez a megoldás később támogatta a NodeList-tet, mint a sima tömböt. Ebből adódóan a nem is olyan régi böngészőkben okozhat gondot.

```js
document.querySelector('.slide').forEach((el) => {
    el.style.display = 'none';
});
```

Ha a régebbi böngészőket is szeretnéd támogatni, akkor a call eljárás segítségével megtudod tenni. Ez egy érdekes technika és nem biztos hogy a legjobb, de működőképes.

```js
const divs = document.querySelectorAll('div');

[].forEach.call(divs, (div) => {
    div.style.color = 'blue';
});
```

### Bejárás for ciklussal

Ez a legegyszerűbb megoldás. Fejlesztői szempontból nem túl kezes és elegáns, de teszi a dolgát.

```js
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; ++i) {
    divs[i].style.color = 'blue';
}
```
