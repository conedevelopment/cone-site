---
title: "WordPress webáruház skálázása"
date: "2024-05-03"
tags: ["wordpress", "woocommerce"]
thumbnail: "/img/blog/wordpress-webaruhaz-skalazasa.png"
thumbnailAlt: ""
---

<p class="lead">A skálázás lényegében egy weboldal, webalkalmazás terhelhetőségének növelését jelenti. Erre alapvetően két féle módszer van: a vertikális- és a horizontális.</p>

Az ebben a bejegyzésben leírt pontokat elsődlegesen [WooCommerce](https://woocommerce.com/)-re értjük, de működnek bármilyen WordPress weboldalnál, vagy webáruháznál.

## Vertikális skálázás WordPress esetén

A vertikális skálázás (jelen esetben) inkább az elérhető lehetőségekkel próbál élni, új vagy külső erőforrás bevonása nélkül igyekszik hatást gyakorolni a teljesítményre.

A WordPress példányok általában nem klasszikus webes alkalmazásként működnek, hanem weboldalként, vagy webshopként, de így is számos lehetőségünk van, hogy vertikális skálázást alkalmazzunk, azaz nagyobb kapacitást biztosítani anélkül, hogy az üzemeltetés költsége magasabb lenne.

Nézzünk néhány példát WordPress skálázásra!

### Pseudo CRON helyett, valódi CRON használata

A WordPress pseudo CRON rendszere egy jó alap funkcionalitás, ami azonban egy forgalmasabb oldalon már túlságosan terhelheti a szerverünket.

Az al-CRON rendszer lényege, hogy egy feladat (job) futtatását egy weboldal esemény váltja ki (mint egy oldal látogatás). Ezekből a feladatokból rengeteg futhat és egy megoldandó plusz terhelést jelent amellett, hogy megbízhatatlanabb.

A WP CRON-nal szemben a hagyományos CRON feladatok fix időben futnak, függetlenül a WordPress példánytól és csak arra, amire mi szeretnénk.

[![Hogyan kapcsoljuk ki a WordPress pseudo CRON-t és kapcsoljuk be az igazi CRON-t](https://img.youtube.com/vi/CQOs9PMJ4nY/maxresdefault.jpg)](https://www.youtube.com/watch?v=CQOs9PMJ4nY)

### Revíziók kikapcsolása

A WordPress-ben alap funkció az automata bejegyzés mentés, ami azt jelenti, hogy a rendszer tárolja a vázlat és publikus korábbi bejegyzés verziókat. Ezekre aztán vissza tudunk állni, össze tudjuk hasonlítani őket.

Bizonyos oldalaknál ennek nincs értelme, mivel csak a törzs tartalmat menti az oldal. Többnyire egy kevésbé használt funkció, ami egész jól túl tudja tölteni az adatbázisunkat, ami aztán lassíthatja a lekérések sebességét.

A revíziók kikapcsolásához adjuk a következő sort a `wp-config.php` fájlhoz:

```php
define('WP_POST_REVISIONS', false);
```

### Gyorsítótár használata

A WordPress egy PHP alkalmazás. A felhasználó felkeres egy weboldalt, a PHP kód lekér az adatbázisból, összeállítja a HTML fájlt (és a többi erőforrást), majd visszaküldi a felhasználónak.

Ez igaz minden lekérésre, ami nem jó, ha olyan tartalmat adunk vissza, ami nem változik. Ezért célszerű a lehető legtöbb mindent a lehető legjobban cachelnünk. Azért, hogy ne üssük feleslegesen az adatbázist, valamint, hogy a felhasználó ne kérje le újra és újra a statikusz fájlokat.

Egy olyan bővítménnyel, mint a [WP Rocket](https://wp-rocket.me/) ezen problémák nagy részét feloldhatjuk.

### WooCommerce HPOS használata

A HPOS (High-Performance Order Storage) egy újfajta adatbázis struktúra a WooCommerce-hez, ami kifejezetten webáruházakra optimalizált.

Mindez hatalmas előny, mert ha le akarjuk lassítani az adatbázis kéréseinket nincs más dolgunk, mint telepíteni a Woo-t és létrehozni pár száz terméket, termékekként 4-5 variációval.

A [HPOS módot mi tudjuk bekapcsolni](https://woocommerce.com/document/high-performance-order-storage/) a webáruházunkban.

### Használd a legújabb PHP verziót

Az egyik legtriviálisabb módosítás az új [PHP](https://www.php.net/supported-versions.php), MySQL és Apache/NGINX verzió beállítása lesz. Ha van cPanel hozzáférésed a tárhelyedhez, akkor a PHP-t szinte biztosan mindig feljebb tudod majd állítani manuálisan egy újabb verzióra.

Az adatbázissal és kiszolgálóval valószínűleg már nem lesz ilyen szerencséd, de erre érdemes rákérdezni a szolgáltatónál.

### Használj kevesebb bővítményt

Általános igazság a WordPress bővítményekkel, hogy vigyáznunk kell velük. Számos bővítmény van, ami nem interferál túlságosan a kiszolgálással, de akad rengeteg olyan is, ami lekérések és erőforrások tömkelegét fogja létrehozni és betölteni.

A legjobb mindig az lesz, ha próbálod megírni a legtöbb dolgot te, mert azt tudod irányítani. Ha ez mégsem sikerül, akkor megbízható helyről vegyél bővítményt és teszteld megfelelően.

### A WordPress témán sok múlik

A WordPress téma fejlesztés ma két dolgot jelent:

- oldal összerakást egy builder-rel, ami többnyire 3rd-party (mint Elementor),
- egyedi téma írása (többnyire ACF mezőkkel).

Ha teljesítményt szeretnél valószínűleg az egyedi témára lesz szükséged. Ami a bővítményekre, az a témára is igaz. A kevesebb betöltött erőforrás mindig jobb, ahogy a kevesebb függőség is.

Minél kisebb és könnyebb a témád annál kevésbé terheli majd a szervert. Minél inkább te irányítod a kódot, annál jobban működik majd a további teljesítmény optimalizálás.

### Optimalizáld a képeket

A képek optimalizálása az egyik legegyszerűbb győzelmünk lehet. Egy WooCommerce webáruház esetén termékenként esélyes hogy 4-7 képed lesz átlagosan. Ez sok egyedi kép, ami fizikai méretben sem lesz már kicsi.

- WordPress esetén egy képből több vágott méret készül. Ha van 100 terméket és átlagosan van mindegyikhez 5 kép, 5 különböző mérettel az már 2500 különböző kép.
- A képek a szerveren foglalják a helyet, ami a kisebb gondunk lesz.
- Kiszolgálásnál már számít a méret, főleg mobilon. Törekedni kell arra, hogy a képek mérete a (mind fizikai, mind dimenzió) a lehető legoptimálisabb legyen, valamint arra, hogy mindig csak azt töltsd be, amire épp szükséged van.
- A betöltéshez ahol lehet használj lazy loading-got. Ennek lényege, hogy a képet nem az oldal betöltésnél töltöd be, hanem akkor amikor tényleg szükség van rá  (látja a felhasználó).
- Használj modern formátumot (mint a webp) és tömörítsd megfelelően.

## Horizontális skálázás WordPress esetén

A horizontális skálázás esetén, a teljesítmény növekedést inkább erősebb vagy modernebb hardveres támogatással éri el, amelynek költségvonzata is magasabb.

### Válasszunk megfelelő hoszting szolgáltatót

Általában igaz lesz, hogy a hoszting szolgáltatásunk ára egyenes arányban lesz annak teljesítményével. Egy WordPress webáruház egészen erőforrásigényes lehet.

Ne higgyük el a marketing szöveget, hogy fizetünk egy tárhelyért éves szinten 20-30 ezer forintot és mindenünk “korlátlan”. Egy szerveren nem valószínű, hogy a tárhelyünk fogy el elsőnek.

Egy komolyabb oldalnál neked legalább egy VPS, vagy egy premium hoszting kell, ahol azt kapod, amit vállal a szolgáltató.

Az is hasznos, ha van egy személy, aki felügyeli a szervered, beállítja neked, ahogy kell, valamint optimalizálja a WordPress példányodat. Ez plusz költség, de egy pénztermelő áruház esetén már megéri.

### Használj CDN-t az áruház kiszolgálására

A CDN (Content Delivery Network) egy több szerverből álló hálózat, aminek a célja, hogy feloldja a fizikai távolságból adódó késéseket.

Ha a szerver amin a WordPress weboldalad van az USA-ban található és te Magyarországról akarod megnézni, akkor az lassú lesz. Mégpedig azért, mert fizikailag messze van tőled.

Ezt oldhatod meg egy CDN-nel, ami tükrözi az oldalad a saját szerverre szerte a világban (így valahova európába is), elősegítve, hogy fizikailag is közelebb legyen hozzád a lekért tartalom.

Egy CDN sok más problémát is megold, amiről többet megtudhatsz a [CloudFlare](https://www.cloudflare.com/) oldalán.

Ha csak magyarországon értékesítesz, akkor a fizikai távolság nem lesz gond, viszont a CDN sok mást is megold neked, mint a képek optimalizálását, vagy a fokozott biztonságot.

[![Mi az a CDN (Content Delivery Network)?](https://img.youtube.com/vi/Bsq5cKkS33I/maxresdefault.jpg)](https://www.youtube.com/watch?v=Bsq5cKkS33I)

### Használj külső szolgáltatást, amire kell

Ha szeretnéd, hogy az e-mailjeid oda érjenek, akkor a legjobb esélyed, ha egy külső szolgáltatást használsz, mint a SendGrid.

Így nem a saját szervered terheled az e-mailek küldésével, ami nem feltétlenül a plusz terhelés miatt lesz fontos, hanem azért, hogy a levelek oda is érjenek.
