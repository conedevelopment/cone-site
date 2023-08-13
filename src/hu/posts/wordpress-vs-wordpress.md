---
title: "WordPress vs. WordPress"
date: "2021-07-13"
categories: 
  - "wordpress"
---

**A WordPress fejlesztés érdekes jelenség napjainkban. Egy bizonyos szinten mindig az volt. Már korán túl népszerű volt (jelenleg durván a weboldalak 35%-a ezen a rendszeren fut) és a népszerűséggel jó pár minden jár. Sok feltört oldal, hozzá nem értő fejlesztők és az örökös eszmefuttatás arról, hogy ez egy rossz termék.**

Pedig ez egy vállalható rendszer. Az biztos, hogy bizonyos részei elavultak ma már és míg a [Drupalnak](https://www.drupal.org/) sikerült egy technikai irányváltást végigvinnie, addig a WP Core csapat ilyet nem akar(t). Ma már megy a kapkodás, hogy legyen előrehaladás (Gutenberg), de anélkül, hogy a fejlesztők lemennének a nullára ez egy rögös út (ahogy látjuk).

## A népszerűség és a következményei

Alapvetően jó pár faktor létezik, hogy miért pont a WordPress lett a népszerű. **A teljesség igénye nélkül a következők:**

- Az egyik első volt az open-source PHP CMS-ek között.
- Már korán megjelent mögötte egy cég (Automattic), ami nagyon komoly üzletet épített fel ennek köszönhetően és tudta, akarta támogatni az open-source fejlesztést.
- Relatív bárki könnyen építhet(ett) rá üzletet. Bővítmény, téma, egyéb szolgáltatás, fejlesztés formájában.
- Az előző pont miatt hamar létrejött egy nagy ökoszisztéma.
- Megjelentek a vizuális oldal építő (visual site builder) rendszerek. Amiknek az a lényege, hogy egy laikus (vég)felhasználó nagyon sok mindent össze tud kattintani saját maga, fel tudja építeni a neki tetsző oldalt vizuálisan.

**A nagy népszerűségnek általában akad számos hátulütője is, nézzük mik ezek (a teljesség igénye nélkül):**

- Sajnos, előfordul, hogy ami nagy, az csak nagyon lassan képes változni. WP esetében például nagyon sokáig alap volt a régi PHP verziók támogatása, ami érthetetlen. Lehetett volna fő verziót úgy ugrani, hogy a régi, beragadt példányokat még támogatjuk egy darabig. Valami okból itt nem ez volt a helyzet.
- Mivel a technikai fejlődés lassú volt, sok fejlesztő egyszerűen átpártolt egy másik rendszerre (Laravel, Drupal). De az elpártolás csupán a technikai fejlődés miatt is megtörtént. Ma már számos új, néhol jobb technológia létezik egy oldal elkészítésére.
- Megjelentek azok a személyek, akik igazából nem nagyon fejlesztenek (technikai értelemben). Ők a kivitelezők, (implementer). Képzettebbek, mint a laikus felhasználók, de összességében saját kódot nem nagyon írnak és nem nagyon terveznek. Egy kivitelező is képes jól keresni azzal, hogy vett sablonokat állít be és ad el és értelemszerűen jó munkát is végezhet.
- A WP jelenleg nagy részt laikusoknak szól. Csinálj oldalt magadnak. Ami alapjaiban egy jó dolog, de ha ma bármire rá szeretnél keresni WordPress fejlesztés területén szinte biztos, hogy el lennél térítve laikus megoldások felé (például, hogy hogyan old meg az aktuális problémát egy bővítménnyel).
- Az oldal építő bővítmények ([Elementor](https://elementor.com/), Visual Composer, Divi) nagyon népszerűek lettek, nem egy technikai követelményt olvastunk, ahol úgy kellett volna WordPress-t fejlesztenünk, hogy Elementor-ral csináljuk. Ezek az eszközök ritkán alkalmasak egyedi fejlesztésre.

## WordPress vs. WordPress

**Jelenleg két fajta (fejlesztett, létrehozott) WordPress oldal létezik. Az egyik amit fejlesztettek, a másik amit összekattintottak. A kettő között van egy-két komoly különbség. Mondjuk ezt úgy, hogy mind a kettőnek megvan a megfelelő helye.**

Nekünk is nagy munka, hogy megkülönböztessük magunkat, azoktól a kivitelezőktől, akik oldalépítőt használnak. Ha valamire ajánlatot adunk (WP alapon) fontos, hogy hangsúlyozzuk mit is kínálunk.

### Ki a WordPress kivitelező?

Egy oldalépítővel elkészített weblap, vett sablon jó egy kezdő projekthez, egy kezdő vállalkozásnak. Egy egyszerű cégbemutató oldalhoz sokszor nem kell túl sok funkció, de persze ez mindig függ az igényektől és a célközönségtől is.

Amit mi tapasztaltunk az-az, hogy egy ilyen rendszert nem nagyon lehet tovább vinni. Ha például megkeresnek minket egy Divi oldallal, mi azt nem tudjuk átvenni (csak nagyon ritkán). Habár jól értünk a WordPress-hez, de a Divi-hez nem.

A Divi egy akkora kódbázis, amit fejlesztőként átlátni nagyon nagy munka (csak úgy tudunk megfelelő eredményt létrehozni, ha értünk ahhoz, amivel dolgozni kell). Az hogy egy ilyen oldalt optimális állapotba hozzunk temérdek erőfeszítés, ami önmagában nem nagyon érné meg a költségeit.

> Manapság egy összekattintott oldal is lehet több százezer forint. Nem vitatjuk el, hogy van vele munka és hogy a legvégén elvégezheti azt a feladatot, ami a célja. Viszont ettől függetlenül ezek éves szinten 50-100$-os tételek, amiket tovább értékesítenek.

Hosszútávon a továbbfejlesztésük, karbantartásuk biztos, hogy ugyanolyan költséges lesz, mint bármi más projektté (ha lesz kompetens fejlesztő, aki hajlandó tovább vinni).

**Három alapvető és komoly problémával szinte mindig szembesülünk ezen oldalak esetén:**

1. Nagyon egyszerű beragadni egy-egy korábbi verzióba (bővítmény, téma, core), ami WordPress esetén nem túl ideális.
2. Hatalmas mennyiségű felesleggel dolgoznak. Általában minden ilyen oldalt le lehet fogyasztani 3-4-szer kisebb méretre.
3. Rengeteg apró hiba (bug) van a felületeken. Kisebb-nagyobb elcsúszások méretben, igazításban, funkcionális hibák, hibásan betöltött betűtípusok, angol nyelvű szövegrészletek. Laikusként ezeket talán nehezebb észrevenni (és tudatosan megfogalmazni), de abban biztosak vagyunk, hogy sokan érzékelik őket.

## Ki a WordPress fejlesztő?

Ezzel szemben [mit csinál a WordPress fejlesztő](https://conedevelopment.com/hu/szolgaltatasaink/weboldal-fejlesztes/)? Megírja a saját kódját és egy jóval optimálisabb végterméket készít (mint az implementer). Na nem a WordPress-t, az mindenkinek adott, hanem a témát és a bővítményt.

Nálunk egy egyedi WordPress oldal fejlesztése során cél, hogy a lehető legkevesebb függőség legyen. Általában ez 4-6 megbízható, megfelelően támogatott bővítményt jelent (aminek egy része fejlesztői bővítmény). Amit célszerű és lehet azt mi írunk meg.

A téma csak azt tartalmazza amire szükség van, nincsenek benne felesleges elemek, nem nagy és nem lassú (extra lépéskén [WP Rocketet alkalmazunk](https://conedevelopment.com/hu/wordpress-teljesitmeny-optimalizalas-wp-rocket-segitsegevel/)). A legvégén a WP nem más, mint egy PHP keretrendszer (CMS formájában). Általában tartalomkezelésre kell és erre ideális. Sokan ismerik, megbízható, egyszerűen kezelhető.

A cél minden esetben a hosszútávú támogatás és továbbfejleszthetőség.

Nem mindegy, hogy a [Page Speed Inshights](https://developers.google.com/speed/pagespeed/insights/?hl=hu&url=https%3A%2F%2Fconedevelopment.com%2Fhu%2F&tab=mobile), a [web.dev](https://web.dev/measure/) elemző, vagy a [WebPageTest](https://www.webpagetest.org/) milyen eredményeket mutat. Természetesen egy egészséges oldalnak ezeken a számokon kívül még sok egyéb tényezője van és lehet.

\[caption id="attachment\_1623" align="alignnone" width="1310"\]![A WordPress alapú, angol nyelvü blogunk teljesítménye a web.dev elemzőben. Teljesítmény: 100/88, akadálymentesség: 100/97, bevett gyakorlatok: 100/100, SEO: 100/100](images/web-dev-elemzo-pineco-de.png) A pineco.de (angol nyelvű blogunk) főoldala a Google web.dev elemzőjében, ami - legalább részben - a Lighthouse alapján mér.\[/caption\]

## Összegzés

Fejlesztés során fekete-fehér válaszok nincsenek. Egy webes projekt mindig komoly feladat, akkor is, ha csak egy egyszerű portfólió oldalról van szó. Számos lépés mindig ugyanaz, amit nem lehet és nem is érdemes kikerülni. Az egyedi fejlesztés előnye - _WordPress esetén kifejezetten_ - hogy egy nagyon irányított végtermék jön létre, amit hosszú távon is vihető tovább és technikailag jól teljesít. Ettől függetlenül egy téma, sablon is nagyon hasznos lehet, a költséghatékonysággal nehéz vitatkozni.
