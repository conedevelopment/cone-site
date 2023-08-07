---
title: "A verziókezelés előnyei"
date: "2022-02-11"
tags: ['alkalmazás-fejlesztés', 'jegyzetek']
thumbnail: "/img/blog/a-verziokezeles-elonyei.png"
thumbnailAlt: ""
---

**Sajnos sok esetben találkozunk olyan projekttel, ahol már előfordult, hogy a kód egy része elveszett, vagy felülírásra került, esetleg hiba csúszott a rendszerbe, de már nem lehet beazonosítani, hogy hol és mikor. Erre megoldást nyújt egy verziókezelő rendszer használata, amelynek előnyeit ismertetjük néhány pontban.**

## Minden előzmény egy helyen

Verziókezelő rendszer nélkül hogyan is néz ki egy fejlesztési folyamat? Van egy példány a weboldalból/alkalmazásból a szerveren és van egy a fejlesztési környezetben. Amikor módosítjuk a kódot a fejlesztési környezetben – amely valószínűleg a saját eszközünk –, az friss állományokat feltöltjük a szerverre, általában FTP-n keresztül.

A probléma ezzel az, hogy teljes mértékben visszakövethetetlen, hogy hogy nézett ki a kód a feltöltés előtt, vagy mondjuk 1 hete. Ez azzal jár, hogy ha 1-1 hiba kerül a kódba, azok megkeresése problémás és időigényes, ha egyáltalán megtaláljuk.

A verziókezelés használata esetén, nem a szerverre töltjük fel a módosításokat, hanem a verziókezelő rendszerbe. A rendszer minden módosítást különálló entitásként kezel, teljes mértékben visszakereshető, hogy az adott időpillanatban mi és hol változott. Ha kell, bármikor vissza tudunk állni az adott időpillanat állapotára. Tehát biztonságosabb és átláthatóbb a fejlesztés folyamata. Éppen ezért már egy egyszerűbb weboldal fejlesztése során is több mint ajánlott.

## Párhuzamos fejlesztés

További előnye, hogy ha több fejlesztő dolgozik egyszerre a kódon, gond nélkül szinkronizálni lehet az adott állapotokat. Verziókezelés nélkül ez nem ennyire egyértelmű.

A szinkronizálás mellett a másik nagy előnye, hogy az egyik fejlesztő nem tudja felülírni a másik kódját. Tehát megfelelő használat mellett, akár egy nagyobb csoport fejlesztő is dolgozhat ugyan azok a kódbázison anélkül, hogy bármi nemű veszteség lépne fel.

## Egyedi és automatizált folyamatok

A legtöbb rendszerben lehetőségünk van arra, hogy bizonyos eseményeket követően automatikusan futtassunk egyedileg testreszabott folyamatokat. Ilyen például a [GitHub Actions](https://github.com/features/actions), ahol teszteket futtathatunk a friss kódon, élesíthetjük az új kódbázist, stb.

Ezek az automatizmusok rengeteg időt spórolhatnak meg a fejlesztőknek, így érdemes kicsit utánajárni, hogy milyen lehetőségeink vannak ezen a téren.

## Összegzés

Amennyiben **megrendelő** vagy, bátran kérd a fejlesztőidet, hogy használják a verziókezelést – amennyiben nem teszik – és hogy adjanak neked is hozzáférést a kódhoz. Ha nem is érted a kódot, a hibajegyeket még böngészheted, sőt akár nyithatsz is újat, amennyiben hibával találkozol (az online verziókezelő alkalmazások projektmenedzsment eszközként is funkcionálnak).

Ha **fejlesztő** vagy, és még nem használsz verziókezelő rendszert, javasoljuk, hogy kezd el, mert sok felesleges körtől óvhatod meg magad. Emellett, a kód is biztonságban van, bármi történjék.
