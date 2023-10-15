---
title: "Jó ötlet egy linket új lapon megnyitni?"
date: "2022-04-05"
tags: ["weboldal-fejlesztés", "akadálymentesség"]
thumbnail: "/img/blog/jo-otlet-egy-linket-uj-lapon-megnyitni.png"
thumbnailAlt: ""
---

**A rövid válasz az, hogy nem. A linkek megnyitása új lapon, vagy ablakban néhány esetben elfogadott, máskülönben meg semmi más, mint a felhasználó szándékának felülírása.**

Ha szeretnénk egy linket új fülön megnyitni, akkor használhatjuk a `target="blank"` attribútumot és értéket a kiválasztott HTML elemen.

Egy link megnyitása ilyen módon zavaró lehet (azoknak biztosan, akiknek gondot okoz a vizuális érzékelés). Új fülre kényszerítéssel felülírjuk a felhasználó döntését és elvárásait (alapértelmezetten a linkek ugyanazon a lapon nyílnak meg), ami sosem egy jó ötlet UX szempontjából. De mégis miért ilyen gyakori minta?

**Azért tesszük mert:**

- valaki, valamikor jó ötletnek gondolta, mert így a felhasználó nem navigál el az oldalról, ha esetleg egy külső oldalra mutató linkre kattint. Ebben az esetben a mi, tehát az eredeti oldal továbbra is megnyitva marad a böngészőben. A felhasználó kattint, navigál, de mi részben kicselezzük. Sajnos, úgy tűnik, hogy ez egy olyan minta amit sokan átvettek, mert azt feltételezik, hogy van bármi haszna.
- Van rá egy nyomós okunk és a megfelelő módon csináljuk.

## Miért ne nyissunk meg hivatkozást új lapon?

- A felhasználó tudja, hogy mit akar. Ha szeretne egy linket megnyitni új fülön, akkor használja a középső egérgombot (Windows-on), vagy a jobb egérgombot lenyomva a „Link megnyitása új lapon / ablakban” menü elemre kattint.
- Feleslegesen zavarjuk össze a felhasználót. Nem csak azokat akik képernyőfelolvasót használnak, hanem az idősebbeket, a digitálisan kevésbé tapasztaltakat.
- Azért mert mindenki csinálja még nem biztos, hogy egy jó ötlet.

## Mikor nyissunk meg linket új lapon?

Alapvetően akkor kellene csak megnyitnunk automatán egy linket új lapon, ha a felhasználó ebben feltétlen érdekelt. A jó példa erre egy űrlap GDPR (General Data Protection Regulation) checkbox-al (mint a [kapcsolati oldalunkon](https://conedevelopment.com/hu/kapcsolat/)). Egy felhasználó lehet hogy elolvasná az adatkezelést, amihez el kell navigálnia. Ahhoz, hogy biztos ne veszítse el a korábban kitöltött adatokat a legegyszerűbb, ha új lapon nyitjuk meg az adatkezelés linket.

De ebben az esetben is tájékoztatnunk kellene a felhasználót. Az adatkezelés ilyen módon történő megnyitása gyakori minta, de mégis jobb ha következetesen tesszük. A legegyszerűbb mód, ha szövegesen, a hivatkozás után kiírjuk, hogy ez a link új ablakban fog megnyílni.

```html
<a href="/adatkezeles/" target="_blank" rel="noopener">Adatkezelés (megnyitás új ablakban)</a>
```

Attól függően, hogy mik az elvárások ezt a megoldást lehet tovább fokozni és automatán beilleszteni egy ikont megfelelő `aria-label` értékkel az összes linkre, amin `target="_blank"` található.
