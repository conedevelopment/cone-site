---
title: "Spam védelem beállítása Contact Form 7 bővítményben"
date: "2020-03-01"
tags: ["wordpress"]
thumbnail: "/img/blog/spam-vedelem-beallitasa-contact-form-7-bovitmenyben.png"
thumbnailAlt: ""
---

**Megvédeni magunkat a spamtől WordPress-ben nem mindig a legkönnyebb. A népszerű és nagy rendszerek hátránya, hogy mindenki ismeri őket, így a spammerek is. Ha van bármilyen űrlapunk - _legyen az hozzászólás, vagy kapcsolat_ - biztosak lehetünk benne, hogy megtalálnak minket is a kéretlen üzenetek.**

Ebben a bejegyzésben azoknak igyekszünk segíteni, akik a népszerű [Contact Form 7](https://hu.wordpress.org/plugins/contact-form-7/) bővítményt használják. Számos megoldás van a spam szűrésre, értelemszerűen az összeset nem tudjuk érinteni, csak azokat, amiket mi is használunk.

A spam szűrés általában mindig ugyanazokból a lépésekből áll, védjünk bármilyen űrlapot. Ez egy több lépéses folyamat: meg kell akadályoznunk az űrlapok küldését, valamint ha egyszer már a szerverünkön van, akkor ott is tovább kell szűrnünk.

És hogy miért káros a spam? Terheli a tárhelyünket, valamint ki akarna kéretlen tartalmat az oldalán közzétenni? Ha engeded hogy bárki közzétegyen bármit az oldaladon hozzászólás formájában, akkor nyugodtan visszalinkelhet saját magára.

## Mi az a Contact Form 7?

Az egyik legnépszerűbb WordPress űrlap bővítmény. Ingyenesen használható, könnyen bővíthető, számtalan dologra használható.

## Hogyan védjük meg az űrlapjainkat?

> A következő felsorolásban azokat a megoldásokat találod, amiket mi is próbáltunk és használunk. Mindegyik működőképes önállóan, de sok esetben jó ötlet lehet kombinálni őket.

### Honeypot

Az egyik legalapvetőbb spam védelem talán a honeypot, ami úgy véd meg minket a botokból, hogy egy a felhasználó számára láthatatlan mezőt hoz létre. A honeypot mezőt elrejtjük, amit a botok aztán kitöltenek. Az űrlap nem kerül elküldésre, ha ebben a rejtett mezőben van érték.

A módszer előnye, hogy a felhasználónak nem okoz plusz fejtörést. Természetesen nem a legacélosabb megoldás, mert egy intelligensebb bot kijátszhatja, de még így is sok kéretlen üzenet akadhat fenn rajta.

Szerencsénkre a CF7 bővítményhez létezik ilyen bővítmény, amivel mi magunk adhatunk honeypot mezőt az űrlapokhoz.

**Honeypot mezők hozzáadása a Contact Form 7 űrlaphoz:**

- [Telepítsük a bővítményt](https://hu.wordpress.org/plugins/contact-form-7-honeypot/).
- Navigáljunk az űrlap szerkesztő nézetéhez.
- Adjunk hozzá egy honeypot mezőt.
- Mentsük az űrlapot.

![](/img/blog/contact-form-7-honeypot-mezo-1200x651.png)

### Google reCaptcha

A Google reCaptcha-ja jelenleg már a harmadik verziónál tart, ami már jobban használható a legtöbb felhasználónak. Továbbra is lehetnek használhatósági problémák vele, ezért érdemes „láthatatlan” módban használni. Ebben a módban ugyanis a felhasználónak nem szükséges semmilyen interakciót csinálnia.

Ez a megoldás közvetlenül integrálva van a Contact Form 7-be. Első lépésben azonban szükségünk lesz egy [saját API kulcsra](https://www.google.com/recaptcha/intro/v3.html), ami az aktuális domainhez társul.

Ha megvan a kulcsunk, akkor navigáljunk a **Kapcsolat -> Integrációk** menüpont alá és illesszük be a korábban generált kulcsokat.

![](/img/blog/contact-form-7-recaptcha-integracio.png)

### Akismet

Az [Akismet](https://hu.wordpress.org/plugins/akismet/) egy magas szintű spam szűrő API az Automattic-tól. Minden új WordPress telepítéssel felkerül. Hatalmas mennyiségű spamet szűr napról-napra.

A bővítmény bekapcsolása után szükségünk lesz egy felhasználói fiókra, amit készíthetünk ingyenesen is személyes használatra. Ha összekötöttük az Akismetet a felhasználói fiókunkkal már csak a megfelelő módosításokat kell elvégeznünk az űrlapokon.

Ez annyit jelent, hogy meg kell mondanunk a CF7-nek hogy milyen mezőt milyen feltétel alapján adjon tovább az Akismet-nek vizsgálatra. A bővítmény alapbeállításként tudja kezelni az ilyen típusú spam szűrést, csupán bővíteni kell az alap mezőket.

```html
// A név mező esetén ezt:
[text* your-name]

// Írjuk át erre:
[text* your-name akismet:author]
```

A teljes listáért keresd fel a [hivatalos dokumentációt](https://contactform7.com/spam-filtering-with-akismet/)!
