---
title: "Miért ne hosztold magyar cégnél a weboldalad?"
date: "2022-03-14"
tags: ["alkalmazás-fejlesztés", "weboldal-fejlesztés"]
thumbnail: "/img/blog/miert-ne-hosztold-magyar-cegnel-a-weboldalad.png"
thumbnailAlt: ""
---

**A magyar tárhely, vagy hoszting szolgáltatás számunkra mindig egy érdekes jelenség volt. Úgy gondoljuk, hogy ezen a területen biztosan létezik egy külföldi, magyar minőségbeni ellentét, ami nem vet túl jó fényt az utóbbira.**

Fejlesztőként sokat használjuk a különböző hoszting szolgáltatók rendszereit és habár igaz, hogy egy [cPanel](https://cpanel.net/) sok mindent megold, ez sokat nem ér, ha az egyedi, saját rendszerek kibabrálnak velünk.

> A hoszting egy kritikus pontja bármelyik weboldalnak, vagy alkalmazásnak. A teljesítmény, biztonság alapja, nélkülözhetetlen.

Mi nem szeretünk magyar szolgáltatót ajánlani. Természetesen, ha szükséges akad olyan, amit nagyjából nyugodt szívvel ajánlunk, hiszen egy budapesti szervernek megvan az a hatalmas előnye, hogy fizikailag a lehető legközelebb van egy magyar célközönséghez.

Ez az iromány nem egy pozitív valami, egy gyűjtemény (ami bővülhet még) a konkrét, tényleges negatív tapasztalatainkból, sokszor számunkra teljesen abszurd dolgokkal kapcsolatban.

## A minőség és a költség

Egy tárhely csomag költsége egyenes arányban állhat a szolgáltatás minőségével. Tehát ha olcsót veszünk, az nem lesz túl kimagasló. Természetesen a túl olcsó tárhely (éves szinten 20 000 - 25 000 Ft alatt) biztosan mindig rossz üzlet és nem is szabad sokat elvárni tőle.

Értelemszerűen szerver és szerver között rengeteg különbség van. Ezt az írást nem is a fizikai (hardware) funkciókra hegyezzük ki.

Nem gondoljuk, hogy a magyar szolgáltatás azért lenne rosszabb, mert általánosságban olcsóbb. A leggyakoribb hoszting fajtában - a megosztott (shared) hosting - nincs nagy különbség árban idehaza és külföldi szolgáltatásban (általánosságban).

## Ne hosztolj idehaza mert

1. **Lehet, hogy cPanelt sem kapsz.** Sose válassz olyan szolgáltatót, aki nem biztosít neked naprakész cPanelt.
2. **Az egész tárhelyed be fog ragadni egy elavult verzióba.** Valamiért egész általános az a vélekedés, hogy ha egyszer vettél valamit (ebben az esetben egy hardware és software alapú szolgáltatást), akkor azt vetted amiért abban a pillanatban fizettél. Szerver szolgáltatások esetén ez nem elfogadható, kell az új PHP, Apache, SQL verzió, hogy a projektünk gyorsabb és biztonságosabb legyen.
3. **Lehet, hogy csak HTTP 1.1-el szolgálják ki az oldaladat.** Szerintünk lehet bármilyen büdzsé az a hoszting csomag, ne kelljen [HTTP 1.1-et](https://www.google.com/search?q=http+1.1+release+date&oq=http+1.1+release+date&aqs=chrome..69i57.3934j0j7&sourceid=chrome&ie=UTF-8) használnunk 2022-ben.
4. **Lehet, hogy egy PHP migrálásért (újabb verzióra frissítésért) fizetned kell.** Eszméletlen pofátlan ezért pénzt kérni, ahogy a többi alapvető szolgáltatás frissítéséért is az. Úgy kérnek szolgáltatók ezért pénzt, hogy eleve havi, vagy éves díjat szednek be azért, hogy szervert szolgáltatnak, fenntartanak.
5. **Olyan teendőket tolnak rád, ami nem a te dolgot.** Egyik helyen kérték a [Google reCaptcha](https://www.google.com/recaptcha/about/) beállítását az űrlapokra, ameddig nem tettük meg, addig letiltották az e-mail küldést. A reCaptcha egy jó dolgok, sokszor erősen ajánlott, de semmi közöm ahhoz, hogy ők képtelenek szűrni a spamet a saját szerverükön.
6. A hoszting szolgáltatók általában 3rd party programokat használnak az adminisztrációs felületeikhez. Ezek beállítása, fordítása, karbantartása láthatóan teljesen másodlagos. **Szörnyen sok hibát tartalmaznak, rosszul működnek, kiábrándító felhasználói élményt biztosítanak.**
7. Úgy gondoljuk, hogy a támogatásban van a legnagyobb eltérés. Így 2022-ben már idehaza is kb gyors reakciót kapunk, de igazi segítséget kevésbé. **Egy hoszting support pont az a terület ahol a proaktivitás szükséges, elébe menni plusz kérdéseknek (mert az ügyfél, a fejlesztő ezekkel annyira nincs képben).**

## És hogy honnan jön ez a minőség?

- Sok fejlesztő cég maga is nyújt tárhely szolgáltatásokat. Ilyenből még nem találkoztunk jóval.
- A hoszting szolgáltatás egy jó üzlet. Kevés emberrel lehet elérni nagy pénzforgalmat. Ide haza még a pocsékabb cégek is összehoznak +50-100 milliót éves szinten árbevételből. Úgy látjuk, hogy a ügyfél fluktuáció relatív kicsi, mivel költséges egy-egy költözés.
