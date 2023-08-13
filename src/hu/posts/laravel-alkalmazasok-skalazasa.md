---
title: "Laravel alkalmazások skálázása"
date: "2022-01-26"
tags: ["alkalmazás-fejlesztés", "laravel"]
thumbnail: "/img/blog/laravel-alkalmazasok-skalazasa.png"
thumbnailAlt: ""
---

**Manapság a keretrendszerek skálázhatósága egy komoly kritérium lehet, akkor amikor megválasztjuk a környezetet a fejlesztéshez. Ebben a cikkben azt nézzük meg, hogy Laravel használatakor, milyen eszközöket biztosít ezen a területen.**

## Mi az a keretrendszer?

A keretrendszer egy eszközkészlet, ami megkönnyíti, stabilabbá, skálázhatóbbá teszi az alkalmazás fejlesztést. A Laravel egy PHP alapú, igen népszerű és komolytudású rendszer.

## Mi is a skálázás?

A skálázás alapvetően valamilyen optimalizálást, vagy az erőforrások bővítést jelent (például, ha a rendszerünk, szerverünk összeomlik egy nagyobb terhelés alatt, akkor bővítenünk, vagy optimalizálnunk kell). Amikor a meglévő erőforrásaink keretin belül optimalizáljuk az alkalmazást, azt **horizontális** skálázásnak hívjuk. Amennyiben az erőforrásokat bővítjük, azt **vertikális** skálázásnak nevezzük. A cikkben a horizontális skálázással foglalkozunk.

## Cache

**A cache (gyorsítótár) használata talán az egyik legalapvetőbb lépés a skálázás során.** Ennek lényege az, hogy amikor egy erőforrás igényesebb, összetettebb számítást futtatunk le, az eredményt egy adott időre letároljuk egy könnyen és gyorsan elérhető tárolóba. Így legközelebb amikor az eredményt használni szeretnénk, nem kell lefuttatni újra a teljes számítást, csak a végeredményt kell lekérnünk a gyorsítótárból.

A Laravel alkalmazásfejlesztéshez egy nagyon egyszerűen használható cache API-t nyújt, ami lehetővé teszi, hogy a kódunkból lényegében bárhol és bármikor elérjük a gyorsítótárat.

A hivatalos dokumentáció: [https://laravel.com/docs/master/cache](https://laravel.com/docs/master/cache)

## Adatbázis optimalizálás

**Talán az elején érdemes leszögezni, hogy egy rosszul megtervezett adatbázis optimalizálása ha nem is lehetetlen, de a legtöbb esetben nem túl sikeres.** Igazi optimalizálásról akkor lehet beszélni, ha az adatbázisunk szerkezetileg is alkalmas erre.

Fontos, hogy a táblák és az oszlopok az adott adatszerkezet "alakját" vegyék fel, és ez ne csak az oszlopok neveiben mutatkozzon meg, hanem az adattípusokban, méretében is, valamint a megfelelő kulcsok és indexek használatában.

A hibás tervezésen felül egy másik gyakori hiba az úgy nevezett "N+1 query". Ennek lényege röviden az, hogy az eredetileg betöltött _N_ számú rekord mindegyike 1 újabb SQL kérést futtat le. Ennek több oka is lehet, például az adott rekord egy kapcsolatához szeretnénk hozzáférni.

Szerencsére a Laravel ebben is segítséget nyújt nekünk. Az "eager loading" segítségével, az N+1 kérés helyett 2 db SQL kéréssel meg tudjuk oldani az újabb adatok betöltését. Ez jelentősen leredukálja a pontenciális kérések számát, csökkentve az erőforrásigényt és a futási időt.

A hivatalos dokumentáció: [https://laravel.com/docs/master/eloquent-relationships#eager-loading](https://laravel.com/docs/master/eloquent-relationships#eager-loading)

## Queue

A queue (sor) kezelés a Laravel talán egyik legnagyszerűbb eszköze. Lényege, hogy olyan erőforrás igényes feladatokat (email küldés, riport készítés, stb.) nem azonnal végzi el a rendszer, hanem sorba állítja a háttérben futó queueba. A queue a beérkező feladatokon (job) végigmegy és elvégzi a kívánt folyamatokat. Tehát az idő és erőforrás igényes feladatok nem szinkron futnak le, hanem aszinkron a háttérben.

A Laraveles implementáció egyik legnagyobb előnye, hogy nagyon jól paraméterezhető, hogy az adott feladatot hogyan dolgozza fel a queue a háttérben, így a lehető legnagyobb rugalmasságot biztosítva.

A hivatalos dokumentáció: [https://laravel.com/docs/master/queues](https://laravel.com/docs/master/queues)

## Összegzés

A fent felsorolt technikák mellett még számos lehetőségünk van az alkalmazásunk optimalizálására, skálázására.

Amennyiben már a tervezéskor jól választjuk meg az eszközöket és a struktúrát, úgy az alkalmazásunk viszonylag kis erőforrással is fenn tudjuk tartani. Ez olcsóbb szerverkonfigurációkat jelent, így hosszútávon nem jelentéktelen költséget is megtakaríthatunk.
