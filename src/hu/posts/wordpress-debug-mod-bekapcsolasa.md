---
title: "WordPress debug mód bekapcsolása"
date: "2022-03-29"
tags: ["wordpress"]
thumbnail: "/img/blog/wordpress-debug-mod-bekapcsolasa.png"
thumbnailAlt: ""
---

**A WordPress debug mód lehetővé teszi számunkra, hogy lássuk a szerveroldali hibákat miközben fejlesztünk. Ennek bekapcsolása egy szükséges lépés fejlesztés során, hogy meggyőződjünk kódunk megfelelő működéséről.**

A debug mód bekapcsolásához a `WP_DEBUG` állandót kell `true` értékre állítanunk a `wp-config.php` fájlban:

```php
// WP_DEBUG bekapcsolása
define('WP_DEBUG', true);
```

Beállíthatjuk a hibák kijelzésének módját is (szintén a `wp-config.php`-ban). Ha nem megjeleníteni, hanem logolni szeretnénk az esetleges hibaüzeneteket, akkor kapcsoljuk a `WP_DEBUG_LOG` állandót `true`-ra:

```php
// Debug-olás külön fájlba (/wp-content/debug.log)
define('WP_DEBUG_LOG', true);
```

Valamint kapcsoljuk ki az oldalon történő hiba megjelenítést:

```php
// A hiba megjelenítés kikapcsolása
define('WP_DEBUG_DISPLAY', false);
@ini\_set('display_errors', 0);
```

A `SCRIPT_DEBUG`-al állítjuk be, hogy a [WordPress](https://hu.wordpress.org/), a saját szükséges CSS és JS fájljait ne tömörített formában töltse be:

```php
// A core JS és CSS fájlok betöltése tömörítés nélkül
define('SCRIPT_DEBUG', true);
```

A hibakezelés teljes bekapcsolása (logolással) a következőképpen néz ki:

```php
// A WP_DEBUG mód bekapcsolása logolással
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);
define('SCRIPT_DEBUG', true);
```
