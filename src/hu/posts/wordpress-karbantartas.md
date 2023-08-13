---
title: "WordPress karbantartás"
date: "2021-07-29"
categories: 
  - "wordpress"
---

**WordPress esetében a karbantartás egy olyan terület, amire nem árt fokozottan figyelni. A népszerűsége miatt ezt a rendszert nagyon sokan támadják és próbálják feltörni. Sok törés pusztán abból a tényből adódik, hogy nem frissítettük időben a core-t, a bővítményeket, vagy a témát.**

Értelemszerűen a karbantartás nem csak a naprakész magot és bővítményeket jelenti. Egy weboldal folyamatos projekt, sosem készül el, mindig van mit hozzátenni, javítani.

**Nézzük hogy mire kell figyelnünk WordPress esetében, valamint általánosan is.**

## WordPress frissítése

**WordPress esetében a karbantartás alapvető és lényeges lépése a core, tehát maga a CMS frissítése.** Szerencsénkre ma már a biztonsági frissítéseket egy-egy támogatott, fő verzióhoz automatán is megkapjuk (megkaphatjuk, lekapcsolható), ami jóval biztonságosabbá teszi a rendszert egy-egy komolyabb problémával szemben.

Az automata frissítések jó dolgok, ha egy patch frissítésről van szó, ami bugot, hibát javít. Nagyobb fejlesztések frissítés után sokszor célszerűbb egy rövid manuális tesztet végezni és előre tájékozódni a változásokról, módosításokról. Ha érdekel a pontos [támogatott verzió](https://codex.wordpress.org/Supported_Versions) szám, akkor a hivatalos oldalon találsz idevágó információt. Nagy meglepetés nincs benne, hogy hosszabb távon csupán a nagyobb és újabb főverziókat támogatják, ezértis célszerű rendszeresen frissítenünk.

Egy-egy rendszerfrissítéssel nem csak biztonsági funkciókat kapunk, hanem számos újdonságot is, amit manapság a Gutenberg szerkesztő tesz ki, de ez kiegészül számos egész használható fejlesztői újdonsággal is.

## Téma, bővítmények frissítése

**A core (maga a WordPress, mint rendszer) után a témák és bővítmények frissítése a második fontos és kritikus lépés, ha a kódról van szó.** Mégpedig azért mert az oldalak nagyobb részét ezeken keresztül törik fel. Tapasztalat sajnos, hogy általában egy-egy közepesen megírt búvítményen keresztül (az utóbbi évek egyik nagy törése a MailPoet nevezetű e-mail küldő bővítményhez kötődik) könnyen bejuthatnak a támadók, akik aztán különböző módokon eltérítik, módosítják az oldal működését.

A téma frissítése általában akkor szükséges, amikor egy vásárolt témával dolgozunk. Egy egyedi fejlesztésre is ugyanazok a kritériumok vonatkoznak, azonban ezek többnyire zárt kódok, jóval szolídabb funkcionalitással (persze ettől függetlenül sok múlik a fejlesztőn és az üzemeltetőn is). A vásárolt sablon kódjához könnyű hozzáférnie bárkinek, pár 10 dollárért megvehetjük. Sokan használják őket, “megéri” kárt tenni bennük.

A népszerű WordPress bővítmények - ingyenes verziói majdnem mindig - open-source projektek, amiknek a kódjához könnyű hozzáférni. Nem meglepő, hogy akad akinek az a hobbija, hogy ezekben sebezhetőséget keres, amivel aztán vissza is él. Természetesen ez nem ilyen egyoldalú. Egy open-source kódon többen dolgoznak, relatív nagyon ritka a sebezhetőség. Ha mégis akad ilyen általában gyorsan jön egy biztonsági patch.

A bővítmények esetében - nem túl régi funkció - ma már kapcsolhatunk be automatikus frissítést. Mivel ma már a WordPress tudja érzékelni - és tájékoztatni minket e-mailben - ha az oldalunk megtörik (PHP hibával) ezért ennek az engedélyezése nem túl rizikós. Ha hiba van tudunk gyorsan reagálni, mert kapunk értesítést.

Bővítmények esetében - és általában mindig - jó szabály, ha igyekszünk redukálni a függőségeket. Dolgozzunk a lehető legkevesebb kiegészítővel, így is csökkentve a felesleges kockázatot.

## Adatbázis, teljesítmény

A WordPress-hez [szerver oldalról szükségünk van](https://hu.wordpress.org/about/requirements/) egy MySQL, vagy MariaDB adatbázisra. Sajnos, a WP architektúrája régi, sok helyen nem túl optimális, így bizonyos esetekben több munkát igényel. Amíg nincs egy hatalmas WooCommerce webáruházunk addig nem lesz sok gondunk, de így sem árt pár dologra figyelni.

Érdemes, legalább heti rendszerességgel optimalizálni az adatbázisunkat: törölni a revíziókat (bejegyzés verziókat), automatán mentett vázlatokat, lomtárban található elemeket, spam, törölt hozzászólásokat, tranzienseket. Erre az általunk is használt [WP Rocket](https://conedevelopment.com/hu/wordpress-teljesitmeny-optimalizalas-wp-rocket-segitsegevel/) egy tökéletes megoldás, ahol mindezt automatizálhatjuk.

**A WP Rocket segítségével - alapvetően ezt a célt szolgálja - általánosságban is optimalizálhatjuk a teljesítményt.** Egy oldal teljesítménye részben számszerűsíthető - [különböző, számszerűsített mérésekkel](https://conedevelopment.com/hu/wordpress-lassulas-miert-lassu-az-oldalam/) - , azonban ezek a számok gyorsan és gyakran változnak. Google esetében rangsorolási tényező a teljesítmény, ami jó részt Google szubjektív, így rendszeresen ellenőriznünk kell az oldalunkat ezekben az eszközökben (mint a [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)). Az oldalunk többnyire egy dinamikus, változó valami. Új oldalakkal, új tartalommal, új médiával. A változásokat követnünk, elemeznünk, mérnünk kell.

## Szerver frissítés

**Egy elavult és beragadt szerver az egyik legbanálisabb dolog, amit elkövethetünk. Sajnos, többször találkozunk vele, mint kellene.** Olyan hoszting szolgáltatót válasszunk, aki garantálja, hogy felkerüljön a legújabb apache/nginx, PHP és MySQL szolgáltatások. Ezeket a kiszolgáló szolgáltatásokat folyamatosan fejlesztik, ami a végfelhasználóknak általában annyit jelent, hogy gyorsabbak lesznek.

Ha cPanel-el rendelkező szolgáltatót választunk, akkor általában legalább a PHP verzió frissítésére van nekünk is lehetőségünk, ami WordPress esetében [már nagyon jó hír](https://kinsta.com/blog/php-benchmarks/).

## Biztonsági mentés

Az egyszerűen elérhető és könnyen visszaállítható biztonsági mentés minden projekt esetében ugyanolyan fontos. Számos bővítmény alapú szolgáltatás létezik, ami egy nekünk tetszőleges helyre (Google Drive például) kimenti az oldalunk fájljait és adatbázisát.

**Mi a [Jetpack Backup](https://jetpack.com/upgrade/backup/)\-ot (ez egy havídíjas szolgáltatás) szoktuk alkalmazni, ami a wordpress.com infrastruktúráját használja, ami egész jó garancia a megbízható teljesítményre.**

## Kinek a feladata?

**Ma, a WordPress frissítések relatív kicsi hibalehetőséggel automatizálhatóak. Természetesen hiba mindig akadhat, így mindig jó, ha van egy fejlesztő, vagy üzemeltető, akit gyorsan elérünk.**

Egy egyszerű portfólió oldal esetén mi általában beállítjuk az automata frissítést (ahol lehet) és azt tanácsoljuk az üzemeltetőnek, hogy nyugodtan kattintson mindig rá a frissítésekre (ha van elérhető) és frissítse a bővítményeket és a WordPress-t is.

Nagyobb oldalak esetén viszont érdemes megfontolni, hogy egy hozzáértő személynek, csapatnak fizessünk egy rendszeres havidíjat erre a feladatra.
