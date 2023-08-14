---
title: "WordPress auditálás - Miért szükséges? Miért hasznos?"
date: "2021-09-17"
tags: ["wordpress"]
thumbnail: "/img/blog/wordpress-auditalas-miert-szukseges-miert-hasznos.png"
thumbnailAlt: ""
---

**Az audit (vagy auditálás) egy olyan folyamat, ami igyekszik feltárni meghatározott rendszerek hiányosságait egy objektív kritérium rendszerhez viszonyítva.**

Ez így önmagában egészen általános és természetesen a fogalmat lehet tovább pontosítani. Pontosabban - a mi esetünkben WordPress és webfejlesztést érintve - egy audit során igyekszünk feltárni, hogy az adott weboldal, alkalmazás mennyire nevezhető jónak, technikailag is mérhető szempontok alapján. **Mint például:**

- **mennyire gyors az oldal betöltése?** A teljesítmény mérhető, monitorozható objektíven.
- **Milyen az írt kód minősége?** Egy web alapú projektben számos technológia keveredik, csak nyelveket érintve van **HTML**, **CSS**, **JavaScript** és **PHP**. A kódot elrontani nem nehéz, hosszú távon fenntartani, támogatni már annál inkább.
- **Vizuálisan milyen hibákat tartalmaz?** Az hogy milyen a terv, dizájn a legtöbb esetben szubjektív, azonban a vizuális hibák, következetlenségek már nem.
- **Akadálymentes, inkluzív hibákat tartalmaz?** A WCAG szabvány mentén pontosan és nagy pontossággal objektíven lehet meghatározni, hogy egy oldalon milyen akadályok, inkluzív hibák vannak.

## Miért van szükségünk az auditra?

Ha a fentieket figyelembe vesszük akkor kirajzolódik: mert szeretnénk látni a kódunk, projektünk aktuális állapotát. [Egy audit során](https://conedevelopment.com/hu/szolgaltatasaink/alkalmazas-es-weboldal-audit-allapotfelmeres/) nem történik más, mint ellenőrzés (listaírás). Nem írunk kódot, nem javítunk semmit.

És miért hasznos? Mert információ, fontos információ. Mi csak abban az esetben tudunk átvenni meglévő WordPress oldalt, ha előtte auditálhatjuk azt. Látatlanban semmi vállalást nem tudunk tenni ezen a téren. Habár egy WP oldal sok esetben egyszerű kell hogy legyen, láttunk már itt mindent. Egy auditálás során megismerhetjük az oldalt és feltárhatjuk annak hibáit.

> Ez a részletes leírás hatalmas segítség az elvégzendő feladatok priorizálásánál, valamint segít abban, hogy átlássuk az oldalt. A WordPress hiába egy open-source rendszer, amire bárki fejleszthet (ahova ugyanazokat a bővítményeket állíthatjuk be), minden oldal más és más.

WordPress esetében mi csak egyedi oldal átvételét, auditját szoktuk vállalni. Sajnos, a tapasztalat az, hogy a mai divatos többcélú (multi-purpose) témákat nem igazán lehet és éri meg továbbfejleszteni.

## Mire figyelünk az audit során?

Alapvetően a korábbi listában lévő pontok mindegyikére. Mi szeretünk egy átfogóbb dokumentumot kiadni a kezünkből. WP esetén az alkalmazás logikát teljesen fel kell tárni, ilyenkor törekszünk arra, hogy a felesleges bővítményeket elimináljuk. A téma esetében általában a felesleges duplikációk és a CSS fájl mérete szokott komoly fejtörést okozni.

## Mihez kezdjünk az audit eredményével?

Ha van a kezünkben egy részletes dokumentum a feltárt problémákkal akkor nincs más hátra, mint ezek javítása. Valószínűleg ez lesz az igazán költséges (mind időben, mind pénzben) kör. Szánnunk kell arra, ha azt akarjuk, hogy az oldalunk egészségesebb legyen. Ha szerencsénk van, akkor az oldalunk refaktorálható (újraírható lépésekben), ha nincs akkor az alapoktól kell újraírni.
