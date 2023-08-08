---
title: "Egyedi email cím összekötése Gmaillel"
date: "2019-06-29"
tags: ['eszközök']
thumbnail: ""
thumbnailAlt: ""
---

**Gyakran fut be hozzán olyan kérdés, hogy szeretnének a domainhez saját email címet, amelyet a Gmail felületén keresztül tudnak kezelni. Összeszedtük pár lépésben, hogy mi a teendő, lássuk!**

## Az egyedi email cím létrehozása

Abban az esetben, ha rendelkezünk saját domain névvel, és egy hozzá kapcsolt tárhellyel, a cPalenen keresztül léte tudjunk hozni saját email címeket. Ennek módja felületenként eltérhet, de többnyire viszonylag kézenfekfő a folyamat.

Miután létrehoztuk a domainhez tartozó címet, két dologra lesz szükségünk: magára az email címre és a jelszóra amit beállítottunk.

## Az SMTP és a POP3 adatok

Első körben tisztázzuk a fogalmakat. Röviden és nagyon egyszerűen: az SMTP a levéküldésért felelős protokoll, azaz ennek a segítségével tudunk az egyedi emailről levelet küldeni, míg a POP3 a levelek letöltésért felel.

A biztonságos kapcsolat érdekében, az SSL/TLS beállításokat ajánlott használni.

Miután létrehoztuk az email címet, elérhetővé válnak az adatok. A következőkre van szükség:

- felhasználónév,
- kiszolgáló,
- jelszó,
- port.

Fontos, hogy a jelszót korábban mi adtuk meg, amikor létrehoztuk az email címet.

Ha minden meg van, akkor jöhet az összekapcsolás a Gmail felületén.

## Gmail integráció

Az integrációt két alkalommal kell megcsinálni. Egyszer a levélküldésnek (SMTP), egyszer pedig a levélfogadásnak (POP3).

Navigáljunk a **Beállítások > Fiókok és Importálás** fül alá, ahol kezelni tudjuk a külső email címeinket. Első lépésként a levélfogadást állítsuk be, mert a hitelesítési folyamatnál szükségünk lesz rá.

A **Fiókok és Importálás fül alatt**, az "_E-mailek ellenőrzése más fiókokban_" szekció alatt adjunk hozzá egy új fiókot. Az email cím megadása után, válasszuk a POP3 alapú letöltést majd adjuk meg a szolgáltatótól kimásolt POP3 adatokat. A sikeres hitelesítést követően a megadott emailre érkező leveleket a Gmail automatikusan letölti és megjelenik a postaládában.

Miután beállítottuk a levélfogadást jöhet a levélküldés: A **Fiókok és Importálás fül alatt**, az "_E-mail küldése erről a címről_" szekció alatt adjunk hozzá egy új címet. A következő lépésben meg tudjuk adni a szükséges adatokat, amelyeket korábban kimásoltunk a szolgáltató adminfelületéről. Ez esetben az SMTP adatokra van szükségünk. A POP3-tól eltérően itt a hitelesítésnek egy extra lépése van – ezért volt szükség a POP3 beállítására előbb. A rendszer elküld egy hitelesítő kódot az általunk integrálandó email címre, amelyet vagy bemásolunk az ablakba, vagy az emailben található link segítségével fejezzük be a folyamatot.

## Összegzés

Ha a fenti lépések hiba nélkül lefutottak, a Gmail fiókunkból tudjuk kezelni az egyedi emaillel kapcsolatos leveleinket. Fogadni és küldeni is egyaránt tudunk.

Ez a megoldás azért lehet kézenfekvő és kényelmes, mert így nincs szükség egy külső alkalmazásra vagy a szolgáltató által biztosított webmail felületre, hogy leveleinket kezeljük. Mindent egy helyen, kényelmesen tudunk intétni.
