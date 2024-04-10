---
title: "Optimális képek használata a weben"
date: "2020-05-19"
tags: ["jegyzetek"]
thumbnail: "/img/blog/optimalis-kepek-hasznalata-a-weben.png"
thumbnailAlt: ""
---

**A weboldal egyik legkritikusabb része a kép. Nem mindegy, hogy mivel és hogyan dobjuk fel a vizuális megjelenést.**

A kép alap online, fontos egy portfóliónál, de még inkább fontos egy webáruháznál. Ha el akarsz adni valamit - ebben az esetben valamilyen terméket - akkor jó fotó kell. Nem csak jó fotó, de optimális is. Mivel adott, hogy akár galériák (egynél több termékfotó) is megjelennek egy-egy termékről, ezért azok teljesítményét nem hanyagolhatjuk el.

**A termék képeinket optimalizálni kell:**

- csökkentenünk kell a fizikai méretüket,
- a felbontásukat,
- megfelelő megjelenítési minőséget kell beállítanunk,
- figyelnünk kell az alt értékekre.

A képek optimalizálása önmagában nem könnyű feladat, mivel számos dologra kell figyelnünk, nézzük részletesen!

## 1. Figyeljünk az elnevezésre

Ha készítünk egy képet a telefonunkkal, akkor annak egy számunkra értelmezhetetlen neve lesz betűkkel és számokkal. Ezt már tölthetjük is fel az oldalunkra. De valóban jó ez a számunkra értelmetlen elnevezés? Nem lenne jobb, ha egy-egy feltöltött fotó fájl nevének lenne jelentése az átlag felhasználónak is?

[![](/img/blog/sotetkek-noi-futocipo-rozsaszin-csikkal.jpg)](https://conedevelopment.com/img/blog/sotetkek-noi-futocipo-rozsaszin-csikkal.jpg)

Ha megfelelően nevezzük el a fájljainkat nem csak magunknak könnyítjük meg a munkát, hanem a keresőknek is. Ezzel a módszerrel a fájlok nevével is erősíthetjük a kulcsszavainkat, valamint számíthat a Google képkeresőjében (a keresők nehezen állapítják meg, hogy mi van egy képen) is.

```html
<img src="sotetkek-noi-futocipo-rozsaszin-csikkal.jpg">
```

## 2. Mindig adjunk meg a megfelelő alt értéket

Az alt tulajdonság a kép alternatívájaként funkciónál, ha annak valamiért meghiúsul a letöltése, vagy más okból nem tudjuk feldolgozni. Ez fontos az akadálymentesség szempontjából, hiszen vannak olyan embertársaink, akik látáskárosultak. Ezzel a tulajdonsággal plusz információt adhatunk a képünk mellet.

```html
<img src="sotetkek-noi-futocipo-rozsaszin-csikkal.jpg" alt="Sötétkék női futócipő rózsaszín csíkkal">
```

Ezt az értéket minden kép esetében ki kell töltenünk. Sajnos ez a leggyakoribb és legkönnyebben orvosolható akadálymentesítési hiba.

**A kitöltéshez kövessük a következő szabályokat:**

- Egyszerűen írjuk le, hogy mi található a képen.
- Ha a terméknek van termékszáma, akkor azt írjuk ki itt is.
- Ne itt akarjuk plusz kulcsszavakat hozzáadni, törekedjünk a lényegre.
- Ha a képünk csupán díszítő elem, akkor hagyjuk üresen az értékét.

## 3. Csökkentsük a képek méretét

A weboldalak méretének nagyobb részét szinte kivétel nélkül a képek teszik ki. Az hogy egy oldal lassú sokszor köthető ehhez. Ez egy olyan terület amit jól lehet és érdemes is folyamatosan optimalizálni.

Számos eszköz létezik, amivel konvertálhatjuk, vagy kimenthetjük a képeket tömörített formában. Az Adobe Photoshop, vagy az [Affinity Designer](https://affinity.serif.com/en-us/designer/) két jó asztali alkalmazás erre a célra. Weben, mi leginkább a [TinyPNG](https://tinypng.com/)\-t ajánljuk, ami integrálható oldalba, alkalmazásba is.

**Ma három népszerű fájl típust különböztetünk meg online:**

- **JPG:** általános formátum fotóknak. Veszteséges, jól optimalizálható 60-65%-os tömörítésig.
- **PNG:** veszteségmentes formátum. Főként illusztrációk esetén hasznos, ahol sok a monokróm, egyszínű részlet. Támogatja az áttetszést. Akár tömöríthető is alfa csatornás megoldással.
- **WebP:** veszteséges és veszteségmentes módja is van. Új formátum, amit a Google hozott létre. Szinte minden területen jobb teljesítményre képes, mint a JPG, vagy a PNG. Jelenleg [a Safari nem támogatja](https://caniuse.com/#search=webp). Ha lehetséges használjuk ezt (kombinálva a PNG, JPG formátumokkal).

## 4. Válasszuk a megfelelő fájltípust

Minden formátumnak megvannak a hátrányai és előnyei. Mindig az éppen aktuális feladatra legalkalmasabbat használjuk (lásd előző szekció)!

## 5. Figyeljünk a bélyegképekre

A bélyegképek a lista nézetekben jelennek meg. Ezek kiterjedést tekintve kisebb helyen szerepelnek. Fontos, hogy a méretük a lehető legapróbb legyen, ha lehetséges töltsük be őket lazyloading segítségével, valamint mindig adjunk meg megfelelő alt értéket.

> **Lazyload:** képek betöltése késleltetve. A kép csak akkor tölt be, amikor az feltétlenül szükséges, amikor a felhasználó elérte azt a görgetés során. Az eredmény gyorsabb oldal, kisebb méret. Ma már létezik natív böngésző támogatása is.

## 6. Figyeljünk arra, hogy mi van rajtuk

Termékfotók esetében nem mindegy hogy mi és hogyan jelenik meg. Sokat számít az elhelyezés, hogy a termék a lehető legelőnyösebb oldalát mutassa.

A vásárló online nem próbálhatja fel/ki a terméket, így másképpen kell meggyőzni. A leghatásosabb módja ennek a kép. Nézz csak meg egy iPhone landing oldalt, minden erről szól.
