---
title: "WordPress biztonság - Összességében nem egy nehéz feladat"
date: "2019-03-06"
categories: 
  - "wordpress"
---

**Egy program esetén nem biztos, hogy beszélhetünk 100%-os biztonságról. Sajnos, ez egy olyan dolog, amivel a fejlesztés jár. Elvben természetesen létezik a feltörhetetlen rendszer, de sokszor bebizonyosodik, hogy ez nem igaz.**

De hogy mit jelent ez valójában? Lényegében semmi olyat, amitől tartanunk kellene. A legtöbb alkalmazás jól karbantartott és biztonságos, ám WordPress esetében nekünk sem árt figyelni.

Rengeteg bővítmény érhető el, ami azt a célt szolgálja, hogy a WordPress biztonságosabb legyen. Úgy gondoljuk, hogy egy megfelelő szerver esetén ezekre nincs szükségünk. Persze, az sosem árt, ha felhúzzuk a saját biztonsági rétegünket.

**A következőkben azt a módszert igyekszünk bemutatni, amit mi használunk egy WP oldal esetében, hogy a lehető legbiztonságosabb legyen. Mindez lehet, hogy egyszerűnek tűnik, de valójában tényleg csak ennyi lenne.**

## Válasszunk megfelelő szervert

Ez az a terület, ahol nem lesz elegendő az alapvető minimum. Ha esetleg valami problémád van és a hosztingtól csak annyi választ kapsz, hogy náluk minden okés, akkor gondban leszel. Ez az a terület, amiről csak akkor derül ki, hogy használhatatlan, ha téged már kár ért.

Nem lesz jó, ha szeretnél frissíteni az új PHP verzióra és nem tudod megtenni. Ahogy az sem, ha az Apache, vagy az SQL nem naprakész. Arról nem is beszélve, ha a shared hosztingon egy másik oldal felzabálja az összes szerver erőforrást és a te oldalad is lelassul.

Sajnos, több negatív tapasztalatunk van ezen a téren, mint az szükséges lenne. Nyugodt szívvel nem nagyon tudunk ajánlani magyar szolgáltatót. Ha vállalható megoldást keresel, keresd angolul a nagyobbakat.

Egy jó szerver előnye nem csak abból áll, hogy van hozzá support és minden eszköz naprakész. Egy jó szerver megvéd a spamtől, a túlterheléstől és a brute force-támadástól.

## Használjunk erős jelszót

Az egyik legbanálisabb támadási forma a brute force, vagyis az amikor simán megtippelik, hogy mi a felhasználóneved és a jelszavad. Ezt egy megfelelő szolgáltatónak ki kell védenie és le kell tiltania a káros IP-ket.

Erre mi általában a [Jetpack biztonsági funkcióját használjuk](https://jetpack.com/), ami kitiltja a sokszor tévesen próbálkozókat.

A legegyszerűbb hogy elkerüld, hogy feltörjék a jelszavad, ha erőset használsz. A WP-ben már évek óta bent a fejlett jelszógeneráló, ami nem is nagyon akarja engedni, hogy gyengét állíts be. Legyen hosszú, legyen benne betű, szám és speciális karakter.

## Frissítsük a WordPress-t, a témát és a bővítményeket

**Ez valami elképesztően alapvető és mégsem az.** Azért kell frissítened a lehető leggyorsabban, mert könnyen lehet hogy napvilágra kerül egy biztonsági rés, amit patchelnek. Mindez semmit nem ér majd, ha a tiédet nem frissíted…

A WordPress core biztonsági frissítéseit általában alapból megkapjuk. Bővítmény, téma esetén már nem ilyen egyszerű. Azért sem, mert ezek frissítésével akár problémánk is lehet, így jobb ha mi kezeljük őket manuálisan.

## A biztonsági mentés nem árt, ha más szerveren van

Ez megint csak akkor lesz fontos, ha már gond van. Vissza tudjuk állítani a fájlokat, az adatbázist? Ha megfelelő a szerver szolgáltatás, akkor kapunk biztonsági mentést (elviekben mindenhol alap, gyakorlatban már nem biztos).

A legjobb megoldás azonban az, ha egy alkalmazunk egy külső szolgáltatást ami lementi az oldalt külső szerverre és segít visszaállítani is, ha gond van. Ha előfizetünk Jetpack-re, akkor használhatjuk az egyik legjobb ilyen megoldást, a [VaultPress-et](https://vaultpress.com/).

## Összegzés - WordPress biztonság

A biztonságot sose hagyagoljuk. Minden projekt más és más, így nehéz általánosítani. Alapvetően a naprakész kód és a megfelelő szerver már a problémáink nagy részét megoldhatják, de ettől függetlenül is figyelmesen kezeljük oldalainkat.
