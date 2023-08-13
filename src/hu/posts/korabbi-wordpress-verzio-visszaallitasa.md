---
title: "Korábbi WordPress verzió visszaállítása"
date: "2021-07-09"
categories: 
  - "wordpress"
---

**Előfordulhat, olyan szituáció (igaz, ritkán), amikor WordPress frissítés után, vissza kell állnunk egy előző verzióra.**

Több okból is szükségünk lehet visszaállításra. Általában valamelyik bővítményt már nem támogatják egy új verzió esetében (többnyire nagyobb ugrás esetén), vagy épp a WordPress funkciói nem akarnak működni az aktuális szerver konfiguráción.

**Összességben a visszaállítás inkább egy gyors, áthidaló megoldás** (amivel nyerhetünk egy kis időt), mivel mindig a legújabb verziót érdemes használnunk.

A WordPress egy sokat próbált rendszer, így nem okoz komolyabb problémát a visszaállítás. Nézzük a lépéseket!

## WordPress visszaállítás lépései

### 1\. lépés

Töltsük le a szükséges [WordPress verziót](https://hu.wordpress.org/download/releases/) a hivatalos, magyar oldalról. Itt minden release-t megtalálunk 2.5-ig visszamenőleg.

### 2\. lépés

FTP program (vagy cPanel fájlkezelő) segítségével készítsünk biztonsági mentést a jelenlegi verzióról! Csak a **wp-admin**, **wp-includes** és a **gyökér könyvtárban található fájlokat** fogjuk módosítani. Tehát a wp-content mappát – ahol a témák, bővítmények, feltöltések találhatóak – nem (semmi olyanhoz nem nyúlunk, ami az oldalunk egyedi tartalmában szerepet játszik). Fontos, hogy a gyökérkönyvtárból a **.htacces** és **wp-config.php** fájlt szintén meg kell tartanunk (de ezeket egy a hivatalos oldalról letöltött verzióban nem is találjuk meg, mivel telepítés során hozzuk őket létre). Ezek oldal specifikus információt tartalmaznak, utóbbi például az adatbázis kapcsolat adatait.

### 3\. lépés

Nyissuk meg a letöltött korábbi verziót és jelöljük ki, majd másoljuk fel az éles szerverre a **wp-admin**, **wp-includes** és a **gyökér könyvtárban található fájlokat**.

### 4\. lépés

Miután felmásoltuk a fájlokat a WordPress-től kapunk egy üzenetet, miszerint **frissíteni kell az adatbázisunkat**. Kattintsunk a frissítésre, majd azután a folytatás gombra.

\[caption id="attachment\_1607" align="alignnone" width="978"\]![A képen a WordPress adatbázis frissítésének panelja látható.](images/wp-refresh.png) WordPress adatbázis frissítése.\[/caption\]

A negyedik lépés után készen is vagyunk. Nyissuk meg az oldal előnézetét és ellenőrizzük az eredmény. Mivel az adatbázist, az adatbázis kapcsolatot és az .htaccess fájlt nem módosítottuk, az oldalunknak megfelelően kell működnie továbbra is.

> **FONTOS:** ez az eljárás főként akkor ajánlott, ha egy verziószám eltérés van a verziók között. Valószínű ebben az esetben nem lesznek további gondjaink a bővítményekkel. Ha mégis van egyéb bővítmény probléma, akkor meg kell keresnünk a problémás példányt, majd be kell szereznünk egy kompatibilis verziót a hivatalos oldaláról. A beszerzett - régebbi - verziót a wp-content/plugins mappa alatt kell felmásolnunk (lecseréljük a bővítmény mappáját).
