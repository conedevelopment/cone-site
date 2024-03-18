---
title: "CSS initial kulcsszó használata"
date: "2018-01-10"
tags: ["css"]
thumbnail: "/img/blog/css-initial-kulcsszo-hasznalata.png"
thumbnailAlt: ""
---

**Az initial CSS kulcsszó elsőre sok fejlesztőnek rejtély, pedig nem tesz mást, mint reseteli a tulajdonságainkat.**

Én vagyok az a fajta fejlesztő, aki ha alapértelmezett értékre van szüksége, akkor megkeresi a tényleges értéket, ami a tulajdonsághoz tartozik - _ez többnyire auto, 0, normal, vagy valami hasonló_. Nem tudom miért, de nekem ez a kulcsszó fehér folt volt, nem igazán használtam. Éppen ezért kutattam kicsit és utána jártam, hogy mi is ez a zavarba ejtően ésszerű funkció.

## Szóval mit jelent az initial kulcsszó?

Az `initial` kulcsszó használatával minden létező CSS tulajdonságot visszaállíthatsz a CSS specifikációban meghatározott initial értékre, vagy ha nincs akkor a böngésző alapértelmezett értékére. Itt kell megjegyezni, hogy a böngésző alapértelmezései eltérőek lehetnek a különböző vendorokban. Kódban ez ilyen egyszerűen néz ki:

```css
.element {
    color: initial;
}
```

**Ebben az esetben az element osztállyal rendelkező elem színe fekete lesz a legtöbb böngészőben (Chrome-ban biztosan).**

```css
.element {
    width: initial;
    padding: initial;
}
```

**Ezzel a sorral beállítottuk az .element alapértelmezett width (ami auto) és padding (ami nulla) értékét.**

Az alap értékekkel kapcsolatban meg kell jegyezni, hogy nem számít milyen HTML elemet használsz. Ha van egy div elemed, akkor az alapból `display: block;` módon jelenik meg (ez a böngésző alapértelmezése), ha pedig reseteled, akkor `display: inline;` értéket kap, mert az inline az alapértelmezett érték a CSS specifikáció szerint.

Ahogy a bevezetőben is olvashattad semmi hátrány nem ér akkor, ha nem használod az initial-t, mivel máshogy is meglehet oldani, ahogy a CSS-ben mindent.

Elég meglepő volt, hogy sokan az `initial-t` keverik az `inherit-el`. Ez érthető is, meg nem is. A kettő funkciója hasonló, mind a kettővel értéket állíthatunk be lényegében félautomatán. Míg az `initial` az alapértelmezett értéket kap (vagy a specifikációból, vagy a böngészőtől), addig az inherit esetében a szülő elemtől jön ugyan az.

## Mik a felhasználási esetek?

Ez trükkös, mivel nincs semmi konkrét eset. Ha épp erre van szükséged tudni fogod. Nekem általában akkor kell, amikor valamit felül kell írni (jó tervezés, ha felül kell írni valamit?).

> Ha régebbi böngészőket is szeretnél támogatni - IE és Opera Mini (ez nem feltétlenül régi, csak speciális) - akkor elvileg fallback kellene, ami kicsit túlzás lenne így érdemes simán a tulajdonság tényleges alap értékét használni, mint a 0, none, normal, auto.

## Összegzés

Ez a funkció olyan semmiség, hogy már haladónak számít. Hogy tényleg megértsd a CSS-t tudnod kell ezekről az apró, lényegében jelentéktelen funkciókról is.
