---
title: "WordPress karbantartás (maintenance) mód"
date: "2013-12-16"
tags: ["wordpress"]
thumbnail: "/img/blog/wordpress-karbantartas-maintenance-mod.png"
thumbnailAlt: ""
---

**A WordPress Maintenance mód (karbantartási mód) képernyőjével valószínűleg már találkoztunk. Ez a képernyő jelenik meg akkor, amikor frissítjük az oldalunkat (magot, témát, bővítményt).**

Ez egy automatikusan, a rendszer által létrehozott fájl, amit minden rendszer frissítés előtt létrehoz a WP. Ez egy elég jó megoldás arra az esetre, ha elszeretnénk kerülni, hogy a felhasználóink hibaüzenetet kapjanak egy esetleges frissítés idején.

Természetesen a legtöbb esetben nem kell foglalkoznunk ezzel a fájlal, hiszen automatikusan kezeli a rendszert, azonban előfordulhat, hogy szükségünk lehet a manuális ki/bekapcsolásra, vagy esetleg szeretnénk beállítani egyedi megjelenést hozzá (természetesen jó ha tudjuk, hogy van alap esetben karbantartási mód a rendszerben).

## Karbantartási mód bekapcsolása fájl segítségével

Annyit kell tennünk, hogy létrehozunk egy `.maintenance` nevű fájlt a gyökér könyvtárunkban. A fájlnak a következő sort kell tartalmaznia:

```php
<?php
$upgrading = time();
```

Lényegében az `$upgrading` változónak állítunk be idő értéket, így előidézve az aktív módot. Bármilyen UNIX formázott időbélyeget megadhatunk.

A `.maintenance` fájl egy átmenti fájl, amit a WordPress használ a frissétéses során (amikor ki/be lép a karbantartási módba). Figyeljünk rá, hogy lehetséges, hogy ezt a fájlt felülírhatja egyhagyományos frissítés. Épp ezért ha hosszabb ideig szeretnénk így hagyni az oldalunkat nem biztos ez a legjobb megoldás.

**Ha bővítmény, vagy téma frissítésekor berakadtunk a karbantartási módba, akkor keressük meg ezt a fájlt a gyökérkönyvtárban és töröljük!**

### Karbantartási mód üzenet testreszabása

Természetesen ezt a megjelenő üzenetet testre is szabhatjuk. Beállíthatjuk a nekünk tetsző üzenetet, valamint létrehozhatjuk a tetszőleges formázást. Ebben az esetben bármilyen maintenance mód esetén ez az egyedi üzenet jelenek meg. Mindehhez annyit kell megtennünk, hogy a `wp-content` mappában létrehozunk egy `maintenance.php` nevű fájlt, amit tetszőlegesen testre szabunk.

## Karbantartás mód témából

Hatékony, egyszerű és hoszsútávú megoldás lehet, ha egy rövid saját kóddal kényszerítünk ki egy karbantartási módot. A következő kódot helyezzük el a témánk `functions.php` (vagy bárhova, ahol megfelelően lefuthat) fájlába:

```php
function cone_maintenance_mode() {
    if (!current_user_can('edit_themes') || !is_user_logged_in()) {
        wp_die("<h1>Karbantartás</h1><br />Jelenleg karbantartási munkák folynak, kérjük nézz vissza 1 óra múlva. Köszönjük a türelmed!");
    }
}
add_action('get_header', 'cone_maintenance_mode');
```

Ennek a megoldásnak az az előnye, hogy nem léphetünk ki belőle véletlenül, valamint egyszerű testreszabni.
