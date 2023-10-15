---
title: "Hosszútávú elavulás, avagy miért válasszunk mainstream rendszert"
date: "2019-02-25"
tags: ["wordpress", "jegyzetek"]
thumbnail: "/img/blog/hosszutavu-elavulas-avagy-miert-valasszunk-mainstream-rendszert.png"
thumbnailAlt: ""
---

**Több pro és kontra érv is felmerülhet, hogy miért jó egy harmadik fél által fejlesztett CMS-t (vagy bármilyen más, a fejlesztéshez köthető rendszert) használni egy teljesen egyedi rendszerrel szemben. Ez rendben is van. Ettől függetlenül érdemes kiemelni egy kevésbé ismert tényt, még pedig az elavulást.**

Jó pár tartalomkezelő rendszert használtam már, láttam belülről, vagy láttam ahogy más küzd vele. Szembeötlő, hogy ezekben a rendszerekben közös az elavulás. Úgy 10 éve készült egy CMS, foltozzák, toldozzák, itt-ott bővítik, de a legtöbb még arra is képtelen, hogy egy responsive admin sablont felmutasson. Persze jelen esetben én most nem technikai háttérre gondolok, hogy mennyire jövőt álló a kód, mennyire használ új technológiákat. Arra gondolok csupán, hogy a UI és ami még fontosabb az UX sokszor pocsék.

Úgy vettem észre, hogyha felakarod mérni egy CMS fejlettségét nézd meg a média kezelést. Ez általában mindig jól mutatja, hogy az adott rendszer milyen. Igaz, lehet hogy ezt szakértő szemmel jobban látni.

## De mindez mégis miért van így?

Úgy gondolom - és rajtam kívül még sokan -, egy ilyen gyorsan fejlődő közegben nem nagyon van kifogás a több éves fejlettségi lemaradásra.

A helyzet általában az, hogy ezeket a rendszereket inkább eladják, mint fejlesztik. Ehhez hozzátartozik az is, hogy sok feladatot egy rossz rendszer is elláthat, maximum nem annyira hatékonyan.

Sok esetben az is lehet hogy fejlesztik a saját, egyedi rendszereket, de ilyenkor általában kap egy új verziószámot és a te rendszeredet nem mindig tudja frissíteni. Egy minőségi ugrás esetén szerintem ez is rendben van, azonban az, hogy nem lehet migrálni ésszerű keretek között az már nem.

Az elavulás egyik oka lehet, hogy nincs meg hozzá a fejlesztői elhatározás, idő vagy pénz. Sok esetben a szakértelem sem, mivel nem biztos, hogy a kódot kellően átlátja mindenki. Ezeket a rendszereket általában egy-két ember fejleszti és általában a dokumentáció is hiányos.

## Mi a helyzet egy harmadik fél rendszerével?

Egy harmadik fél által készített rendszer - legyen fizetős, vagy open source - a nagy előnye, hogy más fejleszti és megoldott a frissítés mikéntje. WordPress esetében az egész ökoszisztéma fejlődik a maggal együtt. Amikor megjelent a responsive tervezés, mint fogalom ráreflektálva - igaz nem túl gyorsan - lett új admin felület, ami jobban nézett ki és ha nagyon akarod akár mobilon is használhatod (igaz, ez ott is idegőrlő tud lenni).

Új technológiák, amiket aztán a fejlesztők fel tudnak használni folyamatosan kerülnek be (lásd: REST API). Itt nem igazán találkozol elavulással - természetesen itt is megszűnhet, vagy visszaeshet a lendület főként a egy-egy bővítménynél. Mindettől függetlenül a rendszered mind biztonság, mind funkció szempontjából frissülnek.

### És hogy ez miért nagyon jó?

- Ha egyszer úgy döntesz, hogy megújítod az oldalad, semmi gond. Míg az oldalad terve és funkciói idővel elavulnak, addig a megfelelően frissített CMS-ed továbbra is jól fut és teljesít.
- Ebben az esetben nem lesz problémád, ha a szövegszerkesztődbe be akarsz majd illeszteni egy egyszerű Instagram bejegyzést. Nem kell lebokszolnod a fejlesztővel és nem kell tudomásul venned, hogy ezt nem csinálják meg. Ebben az esetben ez csak működni fog.

## Az eszmefuttatáshoz két kiegészítés még hozzátartozik:

- főként CMS és WordPress oldalról közelítettem meg a témát, de bármilyen más területre is jó lehet, ilyen például egy adatbázis szolgáltatás, ami tényleg skálázható.
- a leírtak nem jelentik azt, hogy az egyik jobb, mint a másik. Ez mindig projekt függő. Ha nagyon egyedi fejlesztésed van, amit nem lehet megvalósítani WordPress-ben - vagy bármi másban -, akkor egyedi kell. Ez így rendben is van. Sok jó és karban tartott egyedi rendszer is létezik - igaz, hajlamosak jól elbújni. Annyit már az elején érdemes tisztázni, hogy mindennek meddig kell „modernnek” lennie. Mennyi az az idő, amíg fut a projekt. Mindezt azért, mert egy web alapú megoldás általában nem egy projekt, hanem egy folyamat.
