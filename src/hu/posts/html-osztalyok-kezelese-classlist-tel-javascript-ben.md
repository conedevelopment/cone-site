---
title: "HTML osztályok kezelése classList-tel JavaScript-ben"
date: "2019-07-10"
tags: ["javascript"]
thumbnail: "/img/blog/html-osztalyok-kezelese-classlist-tel-javascript-ben.jpg"
thumbnailAlt: ""
---

**Egy weboldal, vagy alkalmazás esetében igen gyakori, hogy HTML osztályokat kell hozzáadnunk, eltávolítanunk, billegtetnünk különböző elemek esetében. A classList objektum segítségével ezt könnyen megtehetjük csak JavaScript-tel.**

A DOM manipulálás nehézkes volt - [_akárcsak az elem kijelölés_](https://conedevelopment.com/hu/dom-elemek-kijelolese-javascript-ben-a-queryselector-es-queryselectorall-segitsegevel/) - csak JavaScript-tel. Mindez megváltozott a jQuery megjelenésével, a `classList` object nagyon hasonlóan működik.

[Manapság a böngészők széles körben támogatják.](https://caniuse.com/#search=classList) Egy csak olvasható tulajdon minden DOM elemen.

## A classList objektum szintaktikája

A szintaktika igen egyszerű: ki kell jelölnünk egy HTML elemet JavaScript-tel, majd használjuk a `classList` objektum egyik eljárását.

Hat eljárásunk van: `add()`, `remove()`, `item()`, `toggle()`, `contains()`, `replace()`. Ezen felül az objektum length tulajdonával hozzáférünk az osztályok számához is.

```html
<!-- HTML markup -->
<div class="main is-front-page"></div>
```

```js
// JavaScript kód
let main = document.querySelector('.main');

main.classList.remove('is-front-page');
main.classList.add('is-sub-page');
```

```html
<!-- HTML eredmény -->
<div class="main is-sub-page"></div>
```

A teljes objektum megtekintéséhez logoljuk ki az `element.classList` objektumot a konzolra.

## Osztály(ok) hozzáadása

Hogyha egy kiválasztott osztályt szeretnél hozzáadni, akkor add meg az adott elemen az `add()` eljárásnak paraméterként.

```js
// Új osztály hozzáadása a '.main' elemhez
main.classList.add('has-sidebar');
```

```js
// Több osztályt is hozzáadhatunk egyszerre vesszővel elválasztva
main.classList.add('has-sidebar', 'is-dark-style');
```

```html
<!-- HTML eredmény -->
<div class="main is-sub-page has-sidebar is-dark-style"></div>
```

Az a jó ezekkel a függvényekbn, hogy akkor sem dobnak hibát, ha valami nem stimmel. Például ha olyan osztályt adsz hozzá, amivel már rendelkezik a kiválasztott elem, ebben az esetben nem lesz még egyszer hozzáadva. Ugyanez igaz akkor is, ha eltávolítanál. Nincs hiba, ha az osztály nem létezik.

## Osztály(ok) eltávolítása

Hogy eltávolítsunk egy meghatározott osztályt a `remove()` eljárást kell használnunk. Akár több elemet is eltávolíthatunk egyszerre.

```js
// A has-sidebar osztály eltávolítása a main elemről
main.classList.remove('has-sidebar');
```

```html
<!-- HTML eredmény -->
<div class="main is-sub-page is-dark-style"></div>
```

**Több osztály kezelése esetén akár a spread szintaktikát is használhatjuk:**

```js
let classes = ['is-sub-page', 'is-dark-style'];
main.classList.remove(...classes );
```

## Osztályok billegtetése

A billegtető eljárás hasznos, mert így elkerülhetjük, hogy feltételeket írjunk. Ha egy elem rendelkezik a megadott osztállyal, akkor eltávolítjuk, ha nem, akkor hozzáadjuk.

```js
// A kiválasztott osztály billegtetése
main.classList.toggle('has-sidebar');
```

```html
<!-- HTML eredmény -->
<div class="main has-sidebar"></div>
```

**A függvény true-val tér vissza, ha hozzáadta és false-al ha eltávolította az osztályt.**

Rendelkezik egy második paraméterrel, ami a műveletet irányítja. Ha a második paraméter true, akkor hozzáadja az osztályt, ha false, akkor eltávolítja.

```js
// Az is-dark-style osztály hozzáadása, vagy eltávolítása, a colorScheme == 'dark' feltétel alapján
main.classList.toggle('is-dark-style', colorScheme == 'dark' );
```

## Osztály kicserélés

A `classList.replace()` eljárással egy már meglévő osztályt tudunk kicserélni egy másikra. Ez megint csak egy népszerű használati eset, amit rövidebben tudunk megoldani így.

```js
// A 'main' osztály kicserélése a 'secondary'-re
div.classList.replace('main', 'secondary');
```

```html
<!-- HTML eredmény -->
<div class="secondary has-sidebar"></div>
```

## Tartalmazza-e egy elem a megadott osztályt

Ha szeretnénk ellenőrizni, hogy egy elem rendelkezik-e a megnevezett osztállyal azt is könnyen megtehetjük. Ez többnyire egy if feltételben lesz hasznos.

```js
// true értékkel tér vissza
main.classList.contains('has-sidebar');
```

## Az x-edik osztály lekérése

Az item() eljárással index alapján is lekérhetünk egy osztályt.

```js
// Visszaadja a 'has-sidebar' osztályt
main.classList.item(1);
```
