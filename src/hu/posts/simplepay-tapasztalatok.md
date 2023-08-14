---
title: "SimplePay tapasztalatok"
date: "2021-03-31"
tags: ["webaruhaz", "woocommerce"]
thumbnail: "/img/blog/tapasztalatok-a-simplepay-rol-mint-szolgaltatas.png"
thumbnailAlt: ""
---

**Az OTP SimplePay hazánk egyik piacvezető online fizetési megoldása. Webáruházakhoz, mobil alkalmazásokhoz és egyéb platformokhoz nyújt fizetési felületet. Mi is fejlesztettünk egy [ingyenes integrációt WooCommerce áruházakhoz](https://simplepay.conedevelopment.com/), így közel két év után, megosztanánk tapasztalatainkat, észrevételeinket és mások visszajelzéseit.**

Az összehasonlításban a Stripe-ot vesszük alapul, amely már tavaly szeptember óta elérhető itthon is. A Stripe-ra tekinthetünk úgy mint benchmark a versenytársai mellett, hiszen a legtöbb területen kiemelkedő minőséget nyújt.

## I. Költségek

Amikor a kereskedő megköti a szerződést a csatlakozásról a SimplePay-el, egy egyszeri csatlakozási díjat kell megfizetnie. Ezt elvileg a kereskedőre szabják, tehát az árak eltérhetnek, de a tapasztalok szerint, egy kisebb vállalkozás esetében ez _50 000 HUF_ környékén mozoghat.

Továbbá, mint minden szolgáltatónál, itt is jutalékot fizet a kereskedő a sikeres tranzakciókat követően. Ez jellemzően _1-2,5%_ közé esik (most számoljunk a középértékkel, ami _1,75%_), de hasonlóan mint a csatlakozási díj esetében, erre is egyedi ajánlatot kap a kereskedő.

A Stripe esetében nincs csatlakozási díj, és [a jutalék európai kártyáknál](https://stripe.com/en-hu/pricing) _1,4% + 85 HUF_, minden sikeres tranzakció esetében.

Nézzük meg, hogy ez mit jelent egy [_11 000 HUF_ értékű vásásnál](https://minner.hu/e-kereskedelmi-webaruhaz-statisztika-2018/):

<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>SimplePay (1,75%)</th>
                <th>Stripe (1,4% + 85 HUF)</th>
                <th>Különbség</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>192,5 HUF</td>
                <td>239 HUF</td>
                <td>46,5 HUF</td>
            </tr>
        </tbody>
    </table>
</div>

Tehát, ebben az esetben a fenti számokkal operálva, a Stripe tranzakciónként _46,5 HUF_\-al drágább mint a SimplePay. Ha figyelembe vesszük a csatlakozási díjat, akkor átlagosan _11 000 HUF_\-os tranzakciókkal számolva, kb. **1075 db** vásárlás után fordul át megtérülővé a SimplePay használata. Mindenki döntse el magának, hogy ez sok vagy kevés.

> Nem vettük számításba a közvetett költségeket, mint a SimplePay esetében a bővítmények megvásárlását és beállítását (amennyiben nem ingyenes), ami akár újabb 30-40 000 HUF is lehet. Valamint ne felejtsük el, hogy minél nagyobb a vásárlás értéke, a SimplePay annál drágább a Stripe-hoz képest.
>
> Stripe esetén [hivatalos bővítmény](https://woocommerce.com/products/stripe/) létezik például WooCommerce-hez igyenesen. Természetesen beállítási költsége ennek is lehet, amennyiben nem magunknak végezzük el.

## II. Stabilitás, SLA (Service Level Agreement), elérhetőség, API státusz

Egy másik kardinális pont, a szolgáltatás stabilitása. Tulajdonképpen ez a kiváltó ok, amiért ez a cikk létrejött. Az elmúlt hetekben, hónapokban, az általunk fejlesztett [WooCommerce bővítmény GitHub felületén](https://github.com/conedevelopment/simplepay-gateway) és e-mailben is több ízben kaptunk visszajelzéseket (valamint tapasztaltuk meg személyesen is), hogy fizetéskor nem volt elérhető a rendszer vagy időtúllépés miatt leállt a fizetés folyamata. Sőt, [a SimplePay Facebook oldalán](https://www.facebook.com/SimplePay-674589696081156/) is többen számoltak be erről a jelenségről kommentek formájában.

A [SimplePay ÁSZF-ben](https://simplepay.hu/wp-content/uploads/2020/09/simplepay_b2b_aszf_20201001.pdf) az SLA-t illetően az áll, hogy:

> A SimplePay rendszer az év minden napján, napi 24 órán keresztül üzemel, minimum évi 99,5%-os rendelkezésre állást biztosítva...

Egy hónapra (30 nap) lebontva ez maximum _216 perc (3,6 óra)_ kiesést jelent anélkül, hogy sérülne az SLA.

Mivel a SimplePay esetében, nincs kezünkben olyan rendszerállapotot indikáló eszköz mint a [Stripe-nál](https://status.stripe.com/) (vagy bármely más életszerű API esetében), így saját méréseket végeztünk, hogy megbecsüljük az intervallumokat, amikor az API nem volt elérhető. A mérés _2020\. november_ havi eredménye:

<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Mikortól</th>
                <th>Meddig</th>
                <th>Kimaradás</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2020-11-05 02:20:01</td>
                <td>2020-11-05 02:30:02</td>
                <td>10p</td>
            </tr>
            <tr>
                <td>2020-11-19 00:00:01</td>
                <td>2020-11-19 01:30:02</td>
                <td>90p</td>
            </tr>
            <tr>
                <td>2020-11-23 10:00:11</td>
                <td>2020-11-23 10:30:11</td>
                <td>30p</td>
            </tr>
            <tr>
                <td>2020-11-25 13:00:12</td>
                <td>2020-11-25 13:30:12</td>
                <td>30p</td>
            </tr>
            <tr>
                <td>2020-11-26 12:50:01</td>
                <td>2020-11-26 15:10:11</td>
                <td>80p</td>
            </tr>
            <tr>
                <td>2020-11-30 10:10:12</td>
                <td>2020-11-30 10:20:11</td>
                <td>10p</td>
            </tr>
            <tr>
                <td>2020-11-30 14:40:11</td>
                <td>2020-11-30 15:40:01</td>
                <td>60p</td>
            </tr>
        </tbody>
    </table>
</div>

> A kéréseket az [itt található kóddal](https://github.com/conedevelopment/simplepay-gateway/issues/48#issuecomment-736551915), 10 percenként küldtük. Abban az esetben, amikor nem _HTTP/200_ volt a válaszkód, mentettük az UTC időbélyeget. Sokkal pontosabb képet festene, ha gyakrabban küldenénk kéréseket, ezért a valóságban meglehet, hogy két kérés között elérhető volt a szolgáltatás, azonban sokkal valószínűbb, hogy két egymás után küldött és visszapattant kérés között, az API nem volt elérhető.

Ha a fenti kimaradásokat összeadjuk, akkor 310 percet kapunk. Tehát, 2020 novemberében a mi méréseink alapján – ami nem tekinthető reprezentatívnak, mivel harmadik félként próbáltuk megmérni, valamint nincs információnk arról, hogy mennyi volt a tervezett leállás – 310 perces intervallumban volt egy fajta szolgáltatás kiesés. Ami tovább csavarja a dolgot, hogy a kiesések főleg nappal fordulnak elő, tehát az aktív vásárlási sávban.

A 310 perc több mint a maximum kimaradásként tekinthető 216 perc, de egy hónapra vetítve azért arányosan nem sokkal lépi át azt. Viszont itt csak egy típusú kimaradást mértünk, tehát olyan problémákat, amikor a szolgáltatás más részei esnek ki (pl.: admin felület) az nem szerepel a számításban. Tehát a valós kimaradás akár több is lehet.

**A probléma inkább az, hogy nincs egy felület mint a Stripe esetében, ahol tájékozódni lehet, hogy milyen állapotban van az API**. Így erre reagálni sem tud a kereskedő, pl. ideiglenesen letiltani a kártyás fizetést a webáruházban.

> Megjegyzés: 2020 decemberében és 2021 januárjában még mindig fennállt az állandó, havi több órás szolgáltatáskiesés.

A SimplePay – ha utólagosan is – kommunikál a Facebook oldalán, elnézést kér a kellemetlenségért. Ez rendben is lenne, csak a _kereskedőnek nem kellemetlensége van, hanem vesztesége_, és a kettő nem ugyan az.

## III. Dokumentáció és SDK

Míg az első két pont elsősorban a kereskedőt, és a vásárlókat érinti, ez már sokkal inkább a fejlesztők munkájára van hatással. Az itt megfogalmazott pontokat, inkább javaslatként, ötletként fogalmazunk meg.

[A dokumentáció](https://simplepay.hu/fejlesztoknek/#page-intro-text) csak PDF formátumban elérhető. Ez több szempontból is problémás: ügyelni kell, hogy mindig a legfrissebb verzió legyen letöltve, ezen felül a keresés, könyvjelzőzés – ami egyébként fejlesztés közben gyakori – nem igazán fejlesztőbarát ebben a formában. Egy statikus, rendszeresen frissített dokumentációs oldallal, egyszerűen ki lehetne váltani a PDF-es megoldást és jóval több lehetőséget tartogat mint a jelenlegi állapot.

A dokumentációban ugyan listázva vannak a végpontok egy-egy HTTP lekéréssel és válasszal, de klasszikus REST API dokumentáció nincs, pedig igazán nagy segítséget az nyújthatna a fejlesztőknek.

A dokumentációban fellelhető mintakód csak PHP nyelven elérhető, más nyelven íródott integrációk szempontjából ez problémás lehet.

Az SDK csak ZIP fájlformátumban tölthető le, nem elérhető GitHub-on, sem Composer csomagként. Open-source megközelítésből sajnos ezek nagyon gyenge mutatók, holott ez tipikusan olyan terület, ahol minden fél jól járna valamilyen OS platform használatával.

Folytatva a Stripe párhuzamot, elmondható, hogy ott a dokumentáció részletezett, érthető és átlátható (annak is aki nem feltétlenül beszél magasabb szinten angolul). Könnyen kereshető és mindig rendelkezésre áll a legfrissebb kiadás (azonnal, letöltés nélkül, nem PDF-be csomagolva). A legtöbb népszerű nyelvhez elérhető a dokumentáció, mintakód és a nyelvspecifikus SDK. A ismertebb keretrendszerekhez integrációk és csomagok érhetők el, amelyek folyamatosan kapnak támogatást. Ez óriási előnyt jelent a fejlesztőknek és a felhasználóknak egyaránt.

## IV. Egyéb

Itt olyan "apróságokat" szedtünk össze, amelyeknek nem érdemes külön fejezetet dedikálni, ellenben érdemes megemlíteni.

### Korlátok

A bővítmény oldalán már korábban összeszedtünk [korlátokat](https://simplepay.conedevelopment.com/a-simplepay-bovitmeny-korlatai), itt ezeket csak belinkeljük.

### Admin

A SimplePay admin felülete nem igazán felhasználóbarát, kezelése sok esetben nem egyértelmű.

Hibás űrlap mentésekor, a visszajelzés esetenként széttöri az oldalt, nem jelöli ki a hiba helyét (pl. egy szóköz kerül az IPN URL-be, ez másoláskor sokszor előfordulhat).

Akadálymentesség szempontjából sajnos nincs miről beszélni, ebbe bele sem mennénk. Lehet, hogy nincs erre a felületre vonatkozó előírás, de TAB billentyűt vagy nyilakat szinte mindenki használ, nem csak egy rétegnek kedvezne a kialakítása.

A szövegezés nem egységes. Ez ugyan részlet kérdés, de azért jelzi, hogy nem lett túlgondolva a felület.

### Biztonság

Az egyik legnagyobb probléma, hogy a titkosító kulcs (`SECRET_KEY`) fix, nem generálható újra. Abban az esetben, ha valahogy kiszivárogna ez az adat, nincs lehetőségünk újat lekérni és ezzel érvényteleníteni az előző kulcsot.

## V. Összegzés

Fontos, hogy a fent leírtak a mi tapasztalatink és véleményünk, valamint első sorban a webes felületekre vonatkozik. Nem reprezentatív, lehet, hogy egyedül vagyunk azzal, ahogy a kérdést látjuk. Azt is kiemelnénk, hogy nem látunk rá sok háttérfolyamatra. Nem tudjuk egy-egy hibának a kiváltó okát és nem is szeretnénk nagy megfejtésekbe belemenni, mert ahonnan mi nézzük ezt nem is lehet.

Az viszont érzékelhető, hogy a SimplePay sajnos egy középszerű szolgáltatás jelenleg. Nem igazán van terület ahol megugrana egy olyan lécet ami kiváltaná azt az érzést, hogy szívesen használja az ember. Pedig valószínűleg meglenne a megfelelő erőforrás a SimplePay mögött, hogy szintet lépjen, de sajnos egyelőre ez még várat magára. Kár, pedig jó eséllyel sokunkat örömmel töltene el, ha lenne egy igazán minőségi szolgáltatás a magyar piacon.
