---
title: "A különbség <div> és <section> elem között"
date: "2020-05-19"
tags: ["akadálymentesség", "html"]
thumbnail: "/img/blog/a-kulonbseg-div-es-section-elem-kozott.png"
thumbnailAlt: ""
permalink: "/hu/a-kulonbseg-div-es-section-elem-kozott/index.html"
---

**A `<div>` az egyik legáltalánosabb elem a HTML-ben. Jó ha mindig ezt használjuk? Ez mindig az aktuális igényektől függ, de az biztos, hogy ma már több opciónk is lehet.**

## A `<section>` elemről

A `<section>` elem a HTML5 szabvánnyal került bevezetésre. Szemantikus jelentése van, tehát a képernyőfelolvasók és a keresők is tudják értelmezni. Egy összefüggő egységet jelent. Általában társul hozzá egy címsor `<h1>`-`<h6>` elem, ami azonosítja a szekciót.

```html
<section>
    <h2>Similar Posts</h2>
    <article></article>
    ...
</section>
```

További információt a [hivatalos dokumentációs](https://www.w3.org/TR/html52/sections.html#the-section-element) oldalon találsz.

## A `<div>` elemről

Ellentétben a `<section>` elemmel a `<div>` elemnek nincsen jelentése önmagában. Adhatunk neki osztályt, ID-t (hogy érthetőbb legyen a fejlesztőknek), de szemantikailag nem tehetünk többet.

Gyakori használi megoldás a szerkezetek kialakítása:

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-8"></div>
        <div class="col-12 col-lg-4"></div>
    </div>
</div>
```

Az új HTML5 elemek megjelenésével az általános elemek - mint amilyen a `<div>` is - csak az utolsó lehetőségek lehetnek. Elsődlegesen mindig az éppen odaillőt (környezetbe) kell használnunk - _mint a_ `<main>`, `<aside>` és így tovább - és csak azután használni a `<div>`-et, ha már nincs más.

## A különbség a két elem között

Az alapvető különbséget a szemantika jelenti. Ha van egy részünk, aminek van valamilyen funkciója - _mint a hasonló bejegyzés ajánló a blog bejegyzések végén_ - akkor használhatjuk a `<section>` elemet ennek deklarálására. Ha valami csak szigorúan a szerkezet miatt kell, vagy vizuálisan, akkor használjuk a `<div>`-et.

## Melyiket használjuk mikor?

Ahogy korábban is írtam, a `<section>` elemmel logikai egységet jelezhetünk, így az értelmezhető lesz a kisegítő eszközök számára is (képernyőfelolvasó). Mindig jó megközelítés, ha ezt tartjuk szemelőtt.

Gondolkozz el azon, hogy mi az amit egy oldalon, alkalmazáson logikailag össze lehet vonni. Ha például van egy oldalsáv (`<aside>`), azon belül widget-ek, akkor ezeknek a `<section>` elem egy jó választás lehet. Figyeljünk arra, hogy kell egy címsor, hogy megfelelően navigálható legyen minden eszközön.

```html
<aside>
    <section class="widget">
        <h2 class="widget__title">Our Title</h2>
        ...
    </section>
</aside>
```

## Használjuk a landmark (határkő) elmeket

Ez a bejegyzés egy egyszerű összehasonlítás a `<div>` és `<section>` elemek között. Ha inkluzívabb HTML oldalakat akarsz készíteni, akkor használd az összes HTML landmark elemet!
