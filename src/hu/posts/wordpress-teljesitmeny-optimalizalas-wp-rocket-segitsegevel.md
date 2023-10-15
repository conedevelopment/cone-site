---
title: "WordPress teljesítmény optimalizálás WP Rocket segítségével"
date: "2020-02-01"
tags: ["wordpress"]
thumbnail: "/img/blog/wordpress-teljesitmeny-optimalizalas-wp-rocket-segitsegevel.jpg"
thumbnailAlt: ""
---

**A WordPress teljesítményoptimalizálás az esetek nagy részében egy szükséges lépés.**

Ez a CMS önmagában sokszor nem a legjobban teljesítő megoldás. Ha nem szentelünk elég figyelmet a részletekre, akkor egy fizikai méretében hatalmas oldalt kaphatunk. Értelemszerűen a végeredmény nem feltétlenül csak a választott CMS rendszer hibájának tudható be, de sokat hozzátehet. **Egy teljesítményorientált webes terméket készíteni összetett feladat.**

Elméletben lehetséges, hogy egy gyors WordPress témát készítsünk mindenféle optimalizáló bővítmény nélkül, de a valóságban ez nem ilyen egyszerű. Egy témából számos, teljesítményhez köthető dolgot nem irányíthatunk például mint a betöltött bővítmény erőforrások mennyiségét, méretét. Ez az a pont, ahol képbe kerül a WP Rocket, amivel egy amolyan utolsó lépésként optimalizálható honlapunk.

## Mitől lesz gyors egy WordPress oldal?

Hogy lássuk, miben segíthet nekünk a [WP Rocket](https://wp-rocket.me/) elsőként látnunk kell a teljes képet. A teljesítmény egy web alapú projekt esetén szinte minden területen jelen van. Optimalizálni kell a médiafájlokat (kép, videó), tömöríteni és egyesíteni a CSS/JS erőforrásokat, csökkentenil az adatbázis lekéréseket és így tovább.

> Megjegyzés: a teljesítmény sosem könnyű és mindig egyedi. A következő részben általános információt találsz a WordPress részekről.

**Ha gyors WP oldalt szeretnél, akkor legalább a következőkre lesz szükséged:**

- Egyedi témára, ami csak azt tartalmazza, ami feltétlen szükséges. Ha te készíted (vagy megbízol valakit vele), akkor te tudod meghatározni, hogy mit tartalmazzon. Egy több célra reklámozott ThemeForest oldal 20.000+ sor CSS-el, amiből csupán az 1%-át használja az oldalunk nem biztos, hogy a legjobb választás.
- Segít, ha előre tervezel a bővítmény használattal. Az önmagában nem gond, ha sok bővítményed van, a WordPress egy jól bővíthető rendszer. Az azonban nem elhanyagolható tényező, hogy ezek mekkora terhet rónak az oldalra.
- Alapvetően jó irány, ha limitáljuk a harmadikfél által fejlesztett kiegészítőket.
- Optimalizált képekre és videókra van szükséged. Az interneten a legtöbb sávszélességet a média fájlok foglalják le. Épp ezért az oldalad nagy részét is ezek fogják kitenni. Fontos, hogy figyelj a megfelelő optimalizálására.
- Megbízható és gyors hosztingra van szükséged. A megfelelő tárhely szolgáltatás mindennek az alapja. Mi WordPress-hez az A2 Hosting-ot ajánljuk!
- És a legvégén, kell egy bővítmény ami összességében segít neked optimalizálni. Ez a bővítmény nem képes kijavítani az előző pont hibáit. Nem tesz mást, mint plusz rétegben javít a honlapunk teljesítményén.

## Mi az a WP Rocket?

**A WP Rocket volt az egyik első kereskedelmi WordPress teljesítmény bővítmény, amit egy komolyabb fejlesztő csapat készít és támogat**. A licenszeddel kapsz egy részletes [dokumentációs oldalt](https://docs.wp-rocket.me/), ahol minden lényeges információt megtalálsz, valamint ticketeken keresztül személyes támogatást is kérhetsz. Egy minden az egyben optimalizáló kiegészítő, amit folyamatosan fejlesztenek. Az egyik kulcs funkciója, hogy laikusként is könnyen kezelhető.

![](/img/blog/wp-rocket-file-optimization-kepernyo.png) *A fájl optimalizálási beállítások a WP Rocket admin felületén.*

Nekünk fejlesztőknek is nagy segítség az egyszerűsége. Az aktiválás után, már csupán pár opció bekapcsolásával nagy javulást érhetünk el a teljesítményben.

Azt tudnod kell, hogy nincsenek általános megoldások. Ez a bővítmény lehet, hogy megfelelően működik az általunk készített oldalakon, de ettől még egy másik környezetben okozhat gondot. Ennek neked kell utánanézned.

Ezt leszámítva, mi csak ajánlani tudjuk. **Egy oldalhoz $49/év, de vehetsz korlátlan licenszet is, ami egy kicsit drágább, de több oldal esetén teljesen megéri.**

## Hogyan segíthet nekünk a WP Rocket?

Nagyon sok lehetőség van erre, ami szituáció függő. A következőkben azokat a funkciókat sorolom fel, amiket mi mindig használunk:

- Statikus cache beállítása élettartam ciklussal. WP Rocket-en keresztül statikus HTML oldalakat fogunk kiszolgálni, ami jóval gyorsabb lesz, mint a PHP. Beállíthatunk törlési ciklust is, vagyis hogy milyen időközönként törölje a cache-elt fájljainkat a rendszer.
- Optimalizáljuk a statikus fájlokat. Egyesítjük és tömörítjük a CSS/JS fájlokat, valamint a kiszolgált HTML kódot.
- Eltávolítjuk a query string-eket a fájlok végéről. Betöltjük a JavaScript fájlokat „deferred” módon (ha valami, akkor ez könnyen megtörheti az oldal működését).
- A médiafájlok esetében (képek, videók, iframe) bekapcsoljuk a késleltetett betöltést (lazyloading).
- Kikapcsoljuk a WP emoji funkciót.
- Előtöltést kapcsolunk be az XML oldaltérkép alapján.
- Automata adatbázis tisztítást állítunk be.
- Beállítjuk a CloudFlare zóna azonosítókat, ha az oldal rá van kötve a CDN-re. Így egyszerűbb lesz a távoli cache törlés.
- Korlátozzuk a Heartbeat API-t.

**Mindezt pár perc alatt megtehetjük úgy, hogy nem valószínű a hiba.**

## Megéri a pénzét?

**Számunkra abszolút! Neked? Úgy gondoljuk, hogy igen, de mindenképpen ki kell próbálni.** Garancia nincsen, de egy baráti összegért megvásárolhatod, amennyiben nem felel meg visszatérítést is kérhetsz.

**Az ügyfeleknek mindez gyorsabb és optimálisabb oldalt jelent, a felhasználóknak egy sokkal jobb felhasználói élményt, valamint kevesebb adatforgalmat.**
