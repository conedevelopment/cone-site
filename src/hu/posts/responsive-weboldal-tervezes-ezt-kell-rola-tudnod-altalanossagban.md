---
title: "Responsive weboldal tervezés - Ezt kell róla tudnod általánosságban"
date: "2019-03-23"
tags: ["tervezés"]
thumbnail: "/img/blog/responsive-weboldal-tervezes-ezt-kell-rola-tudnod-altalanossagban.png"
thumbnailAlt: ""
---

**Ha szeretnél egy weboldalt manapság, akkor az már alapvető, hogy az oldal reszponzív legyen. Ma már egy és ugyanazon oldalnak vállalhatóan kell működnie egy asztali és mobil böngészőben egyaránt.**

Ebben a rövid írásban azt igyekszünk összefoglalni, hogy laikusként mit illik tudnunk erről a tervezési formáról. Reméljük, neked is a segítségedre lesz! ;)

> A szövegben ezt a fogalmat nevezzük responsive, reszponzív, vagy alkalmazkodó tervezésnek is. Mindegyik ugyanazt takarja, igazán magyar megfelelője a fonetikus íráson kívül nem nagyon létezik.

## Mi az a reszponzív weboldal tervezés?

A responsive design fogalmát még Ethan Marcotte alkotta meg 2010-ben. A lényege, hogy egyesíti, kombinálja a folyékony szerkezetet, rugalmas képeket (média elemeket) és a média lekérdezéseket. Lefordítva annyit jelent mindez, hogy lehetőségünk van olyan oldalak létrehozására, amik megfelelően néznek ki kisebb és nagyobb kijelzővel rendelkező eszközökön is. Értelemszerűen, hogy mindezt milyen minőségben tudja az adott oldal, vagy alkalmazás függ a tervezéstől és a fejlesztéstől.

Ez a fajta tervezési szemlélet a mobil oldalak megfelelő alternatívája lett. Nagy előnye volt, hogy elkerülte a duplikált tartalmat (a m.oldalunk.hu előtagú domainek esetében), így nem kellett külön foglalkoznunk a canonical URL-ek beállításával, valamint két különálló oldal karbantartásával.

## Weboldal és weboldal között is sok a különbség

Ha egymás mellé rakunk két reszponzív weboldalt nem biztos, hogy megmondjuk mi a különbség a kettő között, de egy fejlesztő/tervező megfogja.

**Egyszerű alap hibákat elkövetni, mint:**

- a nem megfelelő, vagy rossz információk átadása,
- nem megfelelő navigáció kialakítása,
- figyelmen kívül hagyni a teljesítményt.

## Miért van szükségem alkalmazkodó weboldalra?

A legegyszerűbb válasz az, hogy azért mert szeretnéd elérni a lehető legtöbb felhasználót. Ma már az internetet böngészők legalább fele mobil eszközről böngészik szinte bármilyen esetben. Ez a szám csak nőni fog az elkövetkező időszakban.

Egy komolyan mobilra optimalizált weboldal elképesztő előnyt jelenthet neked, a cégednek, a termékednek.

[Ma már a Google is értékeli, hogy egy oldal mobilbarát, vagy sem](https://search.google.com/test/mobile-friendly?id=zkNCahytEcpvdrKq0lqiFA).  Értelemszerűen senki nem tudja, hogy a keresőóriás mi alapján állítja össze a rangsort, de ez egy olyan ajánlás, amit figyelembe kell vennünk, ha érdekelnek minket a mobil felhasználók.

## A weboldal tervezés nem egyszerű, hát még ha responsive

Alapvetően egy megfelelő és jól teljesítő weboldal elkészítése rengeteg idő és energia. Reszponzív oldal esetén ez még inkább igaz.

Ha megfelelő tervezőt választasz, akkor a legtöbb terhet leveszi a válladról és segít dönteni, hogy milyen tervezés mintákat válasszatok. Ha ki akarsz szolgálni egy oldalról mobil és asztali felhasználókat is, ahhoz bizony szükséges némi kompromisszum. Vannak megoldások, amik mobilon értelmüket vesztik, így nem érdemes őket alkalmazni. Mobil eszközökön a teljesítmény jóval kritikusabb, az eszközök gyengébbek és az internet elérés is korlátoltabb. Éppen ezért jó, ha a mobile-first szemléletet választjuk.

## A mobile-first tervezési szemlélet

A mobile-first szemlélet lényege, hogy a kisebb, mobil eszközöket tekinti alapvetőnek és onnan építkezik tovább a nagyobb kijelzővel rendelkező eszközökre.

Ezzel a módszerrel kevésbé duzzad fel a mobil UI, kevesebb lesz a felesleges tartalom. Könnyebb úgy terveznünk, ha arra fókuszálunk, hogy mi az ami fontos a mobilos felhasználóknak, mivel ők kisebb kijelzővel rendelkeznek.

## A tesztelés nagyobb erőforrásokat igényel

Ma már a mobil böngészők lényegében ugyanolyan fejlettek, mint a nagyobb, asztali társaik. Technikailag nem sok extra dologra kell figyelnünk. Amire kell, az a tényleges használhatóság.

A használhatóság tesztelése során a legjobb, ha tényleges mobil eszközöket használunk, különböző méretekben. Ezt kiegészíthetjük a böngészők beépített emulátoraival. A lényeg, hogy a lehető legtöbb kijelző méreten, eszközön nézzük át alaposan.
