---
title: "Egy WordPress weboldal fenntartásának költségei"
date: "2024-04-21"
tags: ["wordpress"]
thumbnail: "/img/blog/egy-wordpress-weboldal-fenntartasanak-koltsegei.png"
thumbnailAlt: ""
---

<p class="lead">Egy weboldal fenntartásának költsége sokszor nem egyértelmű, főként akkor, ha már nem egy egyszerű portfólió oldalról van szó. De mégis mennyi? Hogyan tudunk nagyságrendi összeget számolni egy WordPress weboldal esetén?</p>

Értelemszerűen a saját tapasztalatainkról beszélünk elsődlegesen, ami lehet egy jó kiindulási alap, ha te is kíváncsi vagy mennyi fenntartani egy weboldalt, vagy alkalmazást.

## Nem mindegy, hogy milyen WordPress weboldalt üzemeltetsz

A költséget leginkább az elvárásaid és az, hogy mit üzemeltetsz fogja meghatározni. Elvárás alatt értjük a céljaidat. Ha egy profi megoldást akarsz, annak mindig ára lesz. Egy gyors oldal mögött jó hardware, jó software és jó folyamatok vannak.

**Fontos megkülönböztetni két oldalt típust. A statikusabb portfólió oldalt, ami bemutat téged, a céged és annak szolgáltatásait, valamint bármit ami már inkább egy alkalmazás, mint egy webáruház.**

Onnantól, hogy az oldaladon felhasználók regisztrálhatnak és végezhetnek műveletet a ugrásszerűen növekszik a háttérben futó folyamatok száma, ami röviden azt jelenti, hogy mindenből több kell (szerver, szolgáltatás).

## Domain + szerver bérlés díja egy WordPress weboldalhoz

A legalapvetőbb költségünk a domain és szerver vásárlás, bérlés költsége lesz. **Domain esetén durván éves szinten 3 - 5 000 forint közötti árral érdemes számolnunk.**

Tárhely esetén már nem lesz ennyire az egyszerű a becslés. **A legolcsóbb tárhely mindig a shared-hosting lesz**, ami azt jelenti, hogy egy olyan szerveren vásárolhatsz tárhelyet, amit sokan mások is használnak. Te megveszed ennek a tárhelynek egy szeletét, ami többnyire fizikai tárhelyet jelent és valamilyen formán fixált teljesítményt (felhasználható memória és CPU mag).

**A megosztott tárhely szinte mindig jó választás lehet, ha egy sima portfólió oldalról beszélünk**, havi pár ezer egyedi látogatóval.

Egy ilyen tárhely **durván 20 000 forintba kerül évente** ~10 GB tárhellyel (fájl + e-mail).

**Ha a WordPress oldalad nem csak egy portfólió oldal, hanem egy webáruház, vagy bármi más, ami inkább viselkedik már alkalmazásként (a felhasználók be tudnak lépni) már érdemes elgondolkodni egy VPS-en**, vagy bármilyen prémium - célzott - hoszting szolgáltatáson, aminek a havi díja körülbelül ott mozog majd, ahol a shared-hosting **éves díja (10 - 20 000 forint/hónap)**.

A VPS (Virtual Private Server) magyarul “virtuális dedikált szervert” jelent, ami csak téged szolgál és nem osztozol rajta a hagyományos értelemben másokkal. Ebből vásárolhatsz olyat, amin már van előre telepített program is (cPanel), de olyat is, ahol te telepítesz szabadon mindent.

## WordPress bővítmények költsége

Mi egyedi WordPress oldalakat készítünk, ami röviden azt jelenti, hogy nem dolgozunk vásárolt sablonnal, template builderek-kel, így ezek költségét nem soroljuk fel.

A bővítmények költsége függ az igényektől és a fejlesztőktől. Mi például két darab fizetős bővítményt használunk általában:

- **ACF ($49 / év):** egyedi mezőket tudunk létrehozni vele, egy fejlesztői eszköz.
- **WP Rocket ($59 / év):** teljesítmény optimalizáló bővítmény, ami hozzáad a kész oldalhoz egy extra réteget, hogy jobban teljesítsen (mérhetően). Felhasználóként ezzel sem találkozol majd, így ez is egy fejlesztői eszköz, azzal a különbséggel, hogy a bővítmény feladata közvetlenül befolyásolja a végfelhasználói élmény.

<figure class="figure">
    <img src="/img/blog/wp-rocket-preview.jpg" alt="Képernyőkép az aktuális WP Rocket landing oldalról"/>
    <figcaption class="figure-caption">A <a href="https://wp-rocket.me/">WP Rocket</a> az egyik legprofibb WordPress teljesítmény bővítmény.</figcaption>
</figure>

Mind a két bővítmény ára benne van a az általunk ajánlott árban. Ettől függetlenül nézzük a matekot:

- egy átlagos weboldalt durván 5 évig fenn fogunk tartani, tehát máris érdemes felszorozni öttel. **($49 + $59) * 5 = $540**
- Dollárban fogunk fizetni, így át kell váltani forintra. Ez a forint árfolyamtól függően nézhet ki jobban, vagy rosszabbul. A cikk írásakor: **199 330 Ft (369-es árfolyamon)**.
- Erre rájön még a 27%-os áfa szinte mindig: **253 149 Ft**.

Negyedmillió forint 5 évre vetítve, csak két bővítménnyel számolva úgy, hogy ez az olcsóbb bővítmény kategória. Ha Woo-hoz akarunk például ismétlődő fizetést, az $199 / év.

Mindez egy webáruház esetén már érdekesebben néz ki, mivel nagy az esély arra, hogy:

- legalább kell egy fizetési kapu bővítmény, mint [a mi SimplePay WooCommerce integrációnk](https://simplepay.conedevelopment.com/).
- Kell egy szállítást kezelő (például csomagpont választó) bővítmény.
- Kell egy számlázást kezelő integrációs bővítmény (Billingo, vagy Számlázz.hu).

**Egy dolog biztos:** legyen bármilyen bővítmény az oldaladban (ingyenes, fizetős) mindig frissítened kell, mert WordPress oldal esetén magas a feltörési kockázat (lévén nagyon népszerű rendszerről van szó),  így ha van az oldaladban egy fizetős bővítmény, az egy fix és előre kalkulálható költség.

## E-mail küldés, hogy a WordPress webáruházad üzenetei oda is érjenek

**A legjobb példa az extra költségekre talán az e-mail küldés**, amit triviálisnak tekintünk, hiszen természetes része az életünknek. Az e-mail küldés nem az, amit felhasználóként veszünk igénybe a hétköznapokban.

Szeretnéd, hogy az e-mailjeid oda is érjenek a felhasználókhoz? A legegyszerűbb és legbiztosabb megoldás az lesz, ha fizetsz egy 3rd-party szolgáltatónak (mint a SendGrid), aki garanciát vállal, hogy a küldött e-mailek 99.9% oda is fog érni a felhasználóhoz (valamint nem kerül spam-be). Ennek az ára durván $20-tól kezdődik havonta, attól függően, hogy mennyi a kiküldött e-mailek száma.

Az hogy miért nem akarsz a saját tárhelyről e-mailt küldeni? Mert osztozol a küldőn sok másik felhasználóval. Nem tudhatod mikor kerül feketelistára (aminek a közvetlen következménye lesz, hogy spam-be kerülsz) az egész szerver, amit simán okozhatsz te is. Gondolj bele abba, hogy egy webáruház esetén csupán egy rendeléshez hány db e-mailt kell kiküldeni (rendelés rögzítés, állapotváltozások, fizetés, visszaigazolások, admin értesítések).

**Az e-mail küldés kritikus része lesz egy webáruháznak, vagy bármilyen regisztrációt kezelő WordPress alapú webalkalmazásnak.**

Ciki kiírni, hogy “légy szíves nézd meg a spam mappát is”, plusz az e-maileddel történhet ezer más dolog is. Ezért jó, ha van egy dedikált felület, ahol meg tudod nézni, hogy melyik e-mail, milyen hibával nem ért oda. Amire aztán tudsz reagálni.

Természetesen mindezt úgy írjuk, hogy az oldalad költségvetését neked kell megtervezned. Ha tudod mennyi a havi bevételed, már tudsz is kalkulálni, hogy mennyi jut a fenntartásra.

Értelemszerűen a növekedéshez kellenek a jó eszközök, de elindulni lehet kicsiben, majd váltani, ha már pénzt is termel az áruház. De váltani kell.

## GitHub + Deploy, mert az oldalt fejleszteni és telepíteni is kell

Az egyedi témád (vagy bővítmény) kódját tárolni kell valahol. Mi GitHub-ot használunk erre. A GitHub egy kódtároló megoldás a Git verziókezelőhöz.

Arról, hogy mik a [verziókezelés előnyei](/hu/a-verziokezeles-elonyei/) már írtunk korábban. Ami ebben az esetbe fontos, hogy habár GitHub-ot bizonyos megkötések mellett tudjuk ingyenesen használni, de lehetnek olyan esetek, amikor már nem.

Az oldalunkat telepíteni is kell, lehetőleg nem FTP keresztül, manuálisan. Azért fontos egy continuous deployment megoldás, hogy az új fejlesztéseket, javításokat biztonságosan és egyszerűen tudjuk használni.

Automata telepítéskor a CI ([continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)) felültünkön futtathatjuk a tesztjeinket még mielőtt bármit az éles helyre másolnánk, így akadályozva meg az esetleges hibákat.

Minderre nagyon sok lehetőség és megoldás van. Alkalmazhatunk külön személyt a beállítására, vagy használhatjuk (ha a fejlesztőknek is megfelel) a [GitHub](https://github.com/) + [Forge](https://forge.laravel.com/) kombinációt.

## Felügyelet, karbantartás, fejlesztési idő

Mi van akkor, ha az egyik akciód felhívását (e-mailben) egy hiba miatt nem kapta meg durván 200-300 felhasználód, ezért ők most panaszkodnak, mert igazságtalannak érzik, hogy kimaradtak belőle?

Hogyan deríted, ki, hogy pontosan kik ők és hogyan éred el őket? Itt jön be az, hogy kell neked két ember:

- egy aki ért a kódhoz,
- egy aki ért a szerverhez.

Ketten mindezt fel tudják kutatni (megoldani a hibát), majd ki tudják küldeni azokat a kuponokat, amikkel tudod kárpótolni a kihagyott vásárlókat (hogy további pénzt keress).

Ez egy nagyon triviális példa, de talán jól érthető. Ezer másik ilyen lehet, ahol egy apróságon elcsúszik valami és pénzt veszíthetünk. Ez előfordul, de cél, hogy minimalizáljuk és kezeljük, ha megtörténik.

Ahhoz, hogy egy ilyet meg lehessen oldani fizetnünk kell valakinek, aki felügyeli az oldalt és beavatkozik, ha kell. Valamint, aki elé megy ezeknek a hibáknak.

## Összefoglalás: mennyibe kerül egy WordPress oldal üzemeltetése?

- **Egy “statikus” portfólió oldal**, ahol te szerkeszted a tartalmat és nem kell továbbfejleszteni durván 25-30 000 Ft-ból kijön évente (havi 1-10 ezer egyedi látogatóval) a hoszting + domain. Ehhez jönnek hozzá az egyedi bővítmények és fejlesztések (óradíj alapon), ami egyedi igény mindig.
- **Egy kisebb, közepes áruház esetén**, ahol havi 2 500 - 5 000 rendeléssel számolunk már egy shared hoszting nem a legjobb választás, legalább szükségünk lesz egy VPS-re, vagy egy prémium tárhelyre. Ennek a költség havi szinten 10 - 20 000 Ft között mozoghat. E-mail küldésért célszerű fizetnünk, ez durván $25 havonta (110 000 Ft / év). A fizetési kapu bővítmény valószínűleg fizetős lesz: 15 - 40 000 Ft között évente. A végösszeg durván 300 000 Ft plusz óradíjas fejlesztések, rendszerfelügyelet.
- **Nagyobb áruház esetén (+5 000 rendelés havonta)**, el kell indulni a lehető legkisebb optimális felállással és megnézni, hogy hogyan lehet skálázni. A közepes áruházak költségei lehetnek jó alapok, de mivel többet termel, többet szolgál ki ezért a költségek majd arányosan növekednek. Azt mindig látod, ha valamivel hiba van, vagy elfogy a szerver, de ezt általában nem éri meg megvárni.
