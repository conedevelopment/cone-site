---
title: "Spruce CSS Framework bemutató"
date: "2023-02-04"
tags: ["css"]
thumbnail: "/img/blog/spruce-css-framework-bemutato.png"
thumbnailAlt: ""
---

**Spruce CSS egy könnyű, minimalista design rendszer Sass-al felépítve.**

## Mi is pontosan a Spruce CSS könyvtár?

- Sass-t használ, kicsi és alapból csak kevés utility osztállyal dolgozik.
- Kihasználja a Sass által nyújtott fő funkciókat, mint a változók, mixinek és függvények.
- Kihasználja a Sass modulokat, így @use-t és namespace-eket használ importhoz.
- [Relatív kicsi](https://github.com/conedevelopment/sprucecss), jelenleg durván ~1400 sor kódból áll a fordított verzió, de Sass-al használva [teljes kontrollunk van a generált kód felett](https://sprucecss.com/docs/elements/generators/).
- Modern, a legújabb CSS megoldásokat használja, mint a gridet, aspect-ratio-t, logikai tulajdonságokat, értékeket.
- Az alapkönyvtár csak nagyon kevés komponenst használ (űrlap elemeket többnyire). A komponenseket egy külön projekt keretében, a Spruce UI-on keresztül érheted el.
- Alapból támogatja a [sötét (vagy bármilyen más témát) módot](https://sprucecss.com/docs/customization/themes/), valamint az RTL írásmódot.
- Nincs benne klasszikus 12 oszlopos rácsrendszer.

További részletekért keresd fel a [hivatalos dokumentációt](https://sprucecss.com/docs/getting-started/introduction/)!

## Miért készítettünk egy újabb CSS keretrendszert?

Egy ideje már nem használtunk semmilyen CSS keretrendszert és nehezebb lett több projektet megfelelően karbantartani, frissíteni. Azzal, hogy nem egy nagyobb külső keretrendszert használsz, hanem elkészíted a sajátod szinte mindenre lesz ráhatásod.

Megalkodhatod azt ami a leginkább hasznos és kezes neked. Persze, mindezt tovább fejleszteni és fenntartani máskérdés. Úgy voltunk vele, hogy a legjobb megoldás az lesz, ha open-source módon publikáljuk és [elérhetővé tesszük npm-en](https://www.npmjs.com/package/sprucecss).

## Hogyan kezd el használni a Spruce CSS-t

Bármilyen open-source projekt esetén a dokumentáció épp ugyanolyan fontos, mint maga a kód. A dokumentációnk, akárcsak a kód folyamatos fejlesztés alatt áll, [így ez a legjobb kiindulási pont](https://sprucecss.com/docs/getting-started/installation/).

Mindemellett jó ha ismered a [Sass új modul rendszerét](https://sass-lang.com/blog/the-module-system-is-launched).

Projekt szintű integráláshoz pedig ajánljuk a [kezdő projektet](https://github.com/conedevelopment/sprucecss-starter-kit), amiben mintát találsz arra, hogy hogyan kell behúznod a saját kódbázisodba.
