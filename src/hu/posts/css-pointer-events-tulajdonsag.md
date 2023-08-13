---
title: "CSS pointer-events tulajdonság"
date: "2014-08-19"
tags: ["css"]
thumbnail: "/img/blog/css-pointer-events.png"
thumbnailAlt: ""
---

**A pointer-events tulajdonság segítségével meghatározhatjuk, hogy hogyan viselkedjenek az egyes elemek egér vagy érintés (touch) műveletek alatt .**

Pontosabban, meghatározhatjuk, hogy hogyan viselkedjen a kiválasztott elemen bármilyen egér, vagy érintés műveletnél, mint az aktív/hover állapot, a kattintás/érintés esemény. A tulajdonság használatával kizárhatjuk az egyes elemeket az egérrel/érintéssel történő interakció alól. A gyakorlatban erre akkor lehet szükségünk, ha egy a z-index mentén elhelyezett elemen szeretnénk keresztül kattintani úgy, hogy elérjük a mögötte lévő elemet. Ebben az esetben annyit kell tennünk, hogy a kiválasztott elemre beállítjuk a `pointer-events: none;` értéket!

A tulajdonság [11 értéket vehet fel](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events), azonban ebből 8 csak SVG-re érvényes. **A következő három értéket használhatjuk az általános elemeknél:** 

- **none** - megszünteti az összes kattintás állapotot és kurzor beállítást
- **auto** \- visszaállítja az alap értéket, hasznos amennyiben egy leszármazotton szeretnénk beállítani az alap értéket
- **inherit** - örökli a szülő elemnek beállított értéket

```css
a.no-ponter-events {
    pointer-events: none;
}
```

Nézzünk egy alap példát! A következőkben egy a teljes elemet elfoglaló hivatkozás található a szöveg felett, ebben az esetben a szöveget nem tudnánk kijelölni, hiszen van egy elem felette a z tengely mentén. Ahhoz, hogy kitudjuk jelölni a szöveget, nincs más teendőnk, mint az elemet kitakaró elemhez rendelni a `pointer-events: none;` tulajdonság/érték párt!

<p class="codepen" style="height: 374px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-height="374" data-theme-id="2175" data-default-tab="css,result" data-user="adamlaki" data-slug-hash="19f4a0a1d17031c3fb6d9d7a3c0a05bd" data-pen-title="Pointer Evets Demo 01">See the Pen <a href="https://codepen.io/adamlaki/pen/19f4a0a1d17031c3fb6d9d7a3c0a05bd">Pointer Evets Demo 01</a> by Adam Laki (<a href="https://codepen.io/adamlaki">@adamlaki</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Kapcsolódó hivatkozások

- [MDN: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [CSS-Tricks: pointer-events](http://css-tricks.com/almanac/properties/p/pointer-events/)
