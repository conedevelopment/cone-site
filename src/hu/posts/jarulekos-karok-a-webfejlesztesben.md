---
title: "Járulékos károk a webfejlesztésben"
date: "2022-03-01"
tags: ["alkalmazás-fejlesztés", "weboldal-fejlesztés"]
thumbnail: "/img/blog/jarulekos-karok-a-webfejlesztesben.png"
thumbnailAlt: ""
---

**A cikk címében található járulékos károk (collateral damage) a mi esetünkben járulékos kiadásokat jelent. És hogy pontosan mit is értünk ezalatt? A rejtett kiadásokat, amiket általában egyéni rossz döntések okoznak a webfejlesztés során.**

> A járulékos kár minden olyan halál, sérülés vagy **egyéb kár**, amelyet egy tevékenység véletlen eredménye okoz. [Wikipedia](https://en.wikipedia.org/wiki/Collateral_damage)

**A teljes kép érdekében:** tisztában vagyunk benne, hogy mindenki hibázik. Volt, hogy a mi szakmai döntéseinknek is voltak plusz költségei (amit igyekeztünk mi megfizetni). Nem szeretnénk hárítani a felelősséget magunkról sem. A hibáinkat, tévedéseinket igyekszünk megélni, vállalni, megfizetni.

A következőkben két gyakorlati példával mutatnánk be azt, hogy mit is értünk a járulékos veszteségen - amiből temérdek fordulhat elő egy projekt esetében legyen az kisebb, vagy nagyobb -, káron, ha weboldal, vagy webalkalmazás fejlesztésről van szó.

## Ha egy szereplő nem igazán ért ahhoz, amit csinál

Szakmai területen nagyon kritikusak vagyunk. Tudjuk milyen a jó kód - a saját területünkön -, tudjuk milyen ha szaga van. Nem csak a kódhoz értünk, tudjunk, hogy hogyan kell felépíteni, megtervezni egy web alapú projektet. Tudjuk, hogyan kell létrehozni valamit a nulláról, úgy hogy teljesítsen. Értünk a UI, grafikai tervezéshez, UX-hez, inkluzivitáshoz.

Egyik személyes tikkem az SVG (Scalable Vector Graphics). A modern weben az SVG (vektoros képformátum) egy nagyon gyakori és jó formátum, amiről a grafikusok nagy részének fogalma sincs.

SVG-t olyan helyen lehet használni, ahol PNG-t is használnánk, monoton, illusztrációszerű képeknél, mint a logók. Legnagyobb előnye, hogy kicsi és mindig tűéles lesz minden eszközön. Ezenkívül XML alapú kód alkotja, tehát ember számára is olvasható, szerkeszthető.

Többször futottunk bele abba a szituációba, hogy egy vektorosan kivitelezhető grafikát kértünk SVG-ként, de amit kaptunk az egy SVG-be ágyazott raszterkép volt. Ezt többnyire úgy követték el, hogy Adobe Illustrator-ban fogták a raszter képet és kimentették SVG-ként.

Egy nagyon apró hiba ez (rengeteg hasonló kaliberű jelenség létezik), de relatív sok többletmunkát okoz, amit valakinek meg kell fizetnie. Egy vektoros kép esetében számos dolog van (felbontás, képméretek) amivel egyszerűbben lehet tervezni. Ha nincs ilyen formátum, az többlet munkát eredményez, úgy hogy az eredmény is silányabb lesz.

## Amikor nem vesszük tudomásul, hogy egy webes projekt hosszú távú

A legkisebb weboldal sem egy adott pillanatra készül, hanem a következő 2-3 évre. Ezt fontos szem előtt tartani, mivel nem mindegy, hogy mennyi idő bővíteni és karbantartani.

Klasszikus példa, amikor át kell venni egy meglévő projektet. Azt gondolhatnánk, hogy az open-source világában, könnyű átvenni egy olyan rendszert ([WordPress](https://wordpress.org/), [Laravel](https://laravel.com/)), amit ismerünk, pedig ez ritkán van így.

Természetesen az hogy valamit milyen nehéz átvenni és tovább fejleszteni egy nagyon széles spektrum. **Az biztos, hogy 10-20 nettó munkaóra alatt szinte semmilyen átvétel nem fog kijönni.** Ez az az idő és költség, amivel alsó hangon illik kalkulálni.

Ami efelett van az viszont már lehet hogy egész nagy járulékos kár, amit sok esetben egy korábbi fejlesztő(k) okoz.

> Fontos megkülönböztetni az átvételt és az újraírást. Újraírásnál egy új projekt készül (annak teljes költségével), átvétel esetén megismerjük a kódot, olyan szinten hogy magabiztosan tudjuk azt továbbfejleszteni. Akadhat sok olyan eset is, amikor az újraírás a jobb döntés, de nagy projektek esetén ez nagy költséget jelent.

Ha fejlesztünk, akkor az egyik alapvető cél a hosszú távú, relatív költséghatékony fenntartás is. Amikor olyan kódot készítünk amibe már körülményes belenyúlni 1 év múlva, már hibáztunk. Ennek a hibának időben és pénzben ára lesz, amit valakinek meg kell fizetnie.

Általában a refaktorálással rengeteg fejfájást lehet elkerülni, így ezt célszerű belekalkulálni karbantartásként bármilyen projektbe.

## Összefoglalás

A fenti példák egyszerűek (általában láthatatlanok) és mégis előfordulnak. A fejlesztőd, terveződ, grafikusod feladata, hogy a szakmai tudásával megkíméljen tőlük.
