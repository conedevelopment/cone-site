---
title: "Bazar: egy e-commerce csomag Laravelhez"
permalink: "bazar-laravel-e-commerce-csomag"
date: "2020-11-01"
tags: ["bazar", "laravel"]
thumbnail: "/img/blog/bazar-cover.jpg"
thumbnailAlt: ""
---

**2020 januárjában elkezdtünk dolgozni egy új Laravel csomagon, ami széles körben nyújt e-commerce funkciókat alkalmazásokhoz. Nemrég fejeztük be a v0.1-es verziót, így itt az ideje, hogy megnézzük mit is tud ez a rendszer.**

## Miért készítettünk egy újabb csomagot?

Erre több válaszunk is van, nézzünk párat:

- A tapasztalataink - és kutatásaink alapján - úgy láttuk, hogy a jelenlegi Laravel e-commerce megoldások általában komplett alkalmazások, nem telepíthető csomagok. Mi egy drop-in megoldást akartunk készíteni, amit könnyen lehet integrálni egy már meglévő Laravel alkalmazásba is.
- A legtöbb ilyen csomagnak számos függősége van. Olyan megoldást akartunk létrehozni, ami a lehető legkevesebb - de legalább népszerűbb és stabil - függőségekkel dolgozik.
- Ezen csomagok bővíthetősége számos esetben nem túl egyszerű vagy nem kellőképpen kiforrott. Egy olyan felületet akartunk készíteni, amit könnyen lehet biztosan bővíteni.

## Mik a Bazar központi funkciói?

A 0.1.0-ás - ami jelenleg egy béta verzió - verzióban a következő funkciókat implementáltuk:

- Felhasználó, termék, verzió, rendelés, tranzakció, kategória, média, cím CRUD kezelés,
- beépített, süti alapú kosár kezelés és könnyen bővíthető kosár driver,
- adó és kedvezmény kezelés,
- fizetési kapuk,
- szállítási módok,
- egyszerű e-mail alapú értesítések,
- intuitív admin felület,
- pénztár szolgáltatás,
- dokumentáció.

Az 1.0.0-ás verzióig a célunk, hogy stabilizáljuk az API-t és közben azokra a funkciókra fókuszáljunk, amiket kihagytunk.

## Bazár kipróbálása

Elsőként tisztázzuk: a Bazar már használható éles környezetben, viszont nem biztos, hogy ezzel kellene felépítened a következő nagyobb méretű webáruházadat. Elsőként azért, mert ebben az állapotban még gyakoribbak az API változások. A felmerülő problémák, PR-ok, bug jelentések miatt gyakoribbak lehetnek az új verziók.

Ha ezek alapján elnyerte a tetszésedet a csomagunk, használnád, szeretnél részt venni a fejlesztésében, akkor kérünk keresd fel a [hivatalos dokumentációt](https://bazar.conedevelopment.com/), ahol több részletet találsz!
