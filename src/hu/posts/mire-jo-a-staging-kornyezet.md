---
title: "Mire jó a staging környezet?"
date: "2022-02-24"
tags: ["eszközök"]
thumbnail: "/img/blog/mire-jo-a-staging-kornyezet.png"
thumbnailAlt: ""
---

**A "staging" vagyis az átmeneti környezet egy hasznos tesztfelület a weboldal és alkalmazásfejlesztés során. Ebben a cikkben ismertetjük, hogy ez pontosan mit is jelent, és milyen előnyei lehetnek.**

## Fejlesztői környezetek

Általában a fejlesztés során 3 környezetet különböztetünk meg: **_development_**, **_staging_** és **_production_**.

- A **development** környezet általában a fejlesztők eszközén található (számítógépén), az alkalmazás kódja itt kerül megírásra majd először futtatásra. Ez a környezet eltérhet a végső, production környezettől, mivel nem biztos, hogy minden futtatási (szerver) eszköz rendelkezésünkre áll a saját számítógépünkön.
- A **staging** környezet (jó esetben) egy klónozott példánya az éles környezetünknek. Itt ugyan az a webszerver, adatbázis vagy [PHP](https://www.php.net/) verzió fut mint az éles környezetben. Viszont, más – általában random generált – adatokkal van feltöltve az adatbázis.
- Az **éles környezet** az, ahol az alkalmazásunk valós felhasználókkal, valós adatokkal fut. Ide kerül ki utoljára a kód.

## Pontosan mire jó a staging környezet?

Olyan [alkalmazásoknál](https://conedevelopment.com/hu/szolgaltatasaink/alkalmazas-fejlesztes/), ahol a forgalom már akkora, hogy kieséssel járó hibajavításokat már nem lehet károk nélkül végrehajtani, már erősen megfontolandó, hogyan lehet ezeket a hibákat már a telepítés előtt kiszűrni és javítani.

Erre egy remek megoldás a staging környezet. Itt a lényeg nem más, mint az új funkciókat az éles környezettel teljesen megegyező rendszerben tesztelhetjük, ellenben ha hibát észlelünk, az nincs hatással a valós felhasználókra. Lényegében egy plusz tesztfelület, ahol megengedhetjük magunknak, hogy hibázzunk.

Amennyiben a hiba javításra kerül és a tesztek sikeresen lefutnak, úgy biztonsággal telepíthetjük az új kódot az éles szerverre.

Hogy ne legyen túl drága a staging környezet fenntartása, úgy érdemes lehet az erőforrásokat a minimumon tartani, hiszen a terhelés minimális.

**A staging környezet tehát egy átmeneti szerver, aminek a konfigurációja megegyezik az élesével. Célja, hogy teszteljünk, hibákat javítsunk. Általánban a kritikusabb projekteknél fontos, mint egy webalkalmazás, webáruház, ahol egy kisebb hibának is látható kára van. Egy portfólió oldal esetén felesleges többnyire felesleges többletmunkát eredményez.**
