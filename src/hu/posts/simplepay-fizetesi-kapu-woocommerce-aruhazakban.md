---
title: "SimplePay fizetési kapu WooCommerce áruházakban"
date: "2019-04-09"
categories: 
  - "woocommerce"
---

**Az OTP SimplePay, talán a legismertebb hazai fejlesztésű kártyás fizetési megoldás, amely integrálhatóságot nyújt bármeny webshophoz. Saját WooCommerce áruházakhoz írt bővítményünk alapján, ismertetjük a tapasztalatainkat, amelyek az értékesítőt illetve a fejlesztőt is érinthetik.**

## Felvezetés

Talán nem áll messze a valóságtól, hogy a webes vásárlások esetén, a kártyás fizetések a leggyorsabb fizetési módok. A tranzakció azonnal megtörténik, és az utalással járó pár napos átfutási idő is másodpercekre csökken. Sőt, még az azonosítás és a hitelesítés is a megadott kártya adatok alapján történik, így még azt a pár perces bejelentkezési folyamatot is megspóroljuk, mint amit a PayPal esetén kellene lebonyolítani.

A legtöbb bank – _a megfelelő szerződés mellett_ – nyújt integrálhatóságot a kártyás fizetésekhez, de a legtöbb esetben ezek rendkívül bonyolult dokumentációval és bonyolult, hosszadalmas munkával valósíthatók meg. **Talán ennek is köszönhető, hogy a SimplePay hamar népszerű lett, hiszen a fent említett megoldásokkal szemben, mindenképpen egyszerűbb és átláthatóbb lett a fejlesztés folyamata.**

## Mit tud a SimplePay?

A számunkra néhol vitatható technikai megoldások ellenére, a SimplePay valóban hozza azt, amit egy ilyen fizetési megoldásnak tudnia kell. **Fizetés kártyával, fizetés utalással, többféle pénznem, visszatérítés és ismétlődő fizetések** – erről még később szót ejtünk.

De hogyan is működik? A vásárló a fizetésnél a SimplePay kapun keresztül fizet, amely a megfelelő adatokat összegyűjtve átirányítja a vásárlót a fizetési oldalra, ahol a kártyaadatok megadásával a vásárló fizet. A vásárló ezt követően újra az áruház oldalára kerül, de a háttérben több minden is lezajlik. Először is csalás ellenőrzés, majd ezt követően egy üzenetküldés történik a SimplePay részéről a webshop irányába. Ezt a kérést a webshop feldolgozza, és a rendelés fizetett állapotú lesz.

A visszatérítés két irányú lehet. Indítható a SimplePay oldaláról és a webshop felületéről is. Ha a bővítmény megfelelően alkalmazza a visszaigazolásokat és hitelesítéseket, mindkettő megfelelően működhet.

Ismétlődő fizetésekre is lehetőség van. Ennek a lényege, hogy egy fizetés során a kártya párosításra kerül egy egyedi tokennel. A token tárolásra kerül, így a későbbiekben a token segítségével fizetés indítható a kártya adatok nélkül, akár a kereskedő oldaláról is. Ezt tipikusan ismétlődő fizetések esetén haználatos, illetve, ha visszatérő vásárlóként időt akarunk spórolni és kérjük a kártyaadatok tárolását a gyorsabb vásárlás érdekében.

Ahogy korábban említettük, nem minden esetben van tökéletes technikai megoldás. Az ismétlődő fizetések esetében a legérdekesebb a helyzet. Abban az esetben, ha periodikusan szeretnénk automatizálni a fizetéseket (pl.: havi/éves feliratkozások), az időzítés a webshop feladata és nem a SimplePay végzi. Ez nem feltétlenül gond, ha az áruház rendelkezik a megfelelő személlyel, aki az ebből fakadó feladatokat és esetleges hibákat ellátja, hárítja. Viszont amennyiben a szolgáltatás nagy felhasználóbázissal rendelkezik, lehet, hogy ez a megoldás nem  a legelőnyösebbek.

Ebben az esetben, szerintünk inkább ajánlott valamely nagy szolgáltató megoldása. A magyarországon is elérhető Braintree - _ami egy PayPal termék_ -, amellyel talán érdemesebb próbálkozni abban az esetben, ha ismétlődő fizetéseket szeretnénk kezelni.

Többek közt ezért, az általunk fejlesztett bővítménybe, csak az egyszeri kártyás fizetés és visszatérítés került be, mert a SimplePay ezt tudja hozni megbízhatóan és egyszerűen karbantarthatóan.

## A szerződés menete

**Hogy a SimplePay integrálható legyen az oldalunkon, előbb szerződni kell az OTP SimplePay-jel.** A szerződés előtt kapcsolatba kell lépni velük, majd kellő adatok megadása után, a szerződés elkészül.

Szerződés után mind a teszt fiókhoz és az éles fiókhoz is hozzáférést kapunk. Érdemes mindeképpen a teszt felülettel kísérletezni egy darabig, hogy az esetlegesen felmerülő hibákat javítsuk, illetve, hogy átlássuk, hogy mi hogyan működik pontosan.

## SimplePay fizetési kapu WooCommerce áruházakhoz

Amennyiben érdekelne a bővítményünk, úgy keresd fel a [projekt oldalát](https://simplepay.conedevelopment.com/)!
