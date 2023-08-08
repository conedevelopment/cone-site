---
title: "Blog URL lekérése WordPress-ben"
date: "2022-03-24"
tags: ['wordpress']
thumbnail: "/img/blog/blog-url-lekerese-wordpress-ben.png"
thumbnailAlt: ""
---

**WordPress-ben statikus oldalt is be tudunk állítani a blog lista oldalnak (és a kezdőlapnak) és vannak esetek, amikor kódból szeretnénk elérni ennek az URL-jét.**

Háromféleképpen kérhetjük le az URL-t, mind a három egészen eltérő technika, de a végeredmény ugyanaz (abban az esetben, ha statikus oldalt állítottunk be a blognak).

A [site_url()](https://developer.wordpress.org/reference/functions/site_url/) függvényt használva lekérhetjük a jelenlegi oldalunk URL-jét, amit kiegészíthetünk extra paraméterrel, mint a blog útvonallal.

```php
echo esc_url(site_url('/blog/'));
```

A `get_option()` függvénnyel lekérhetjük a page_for_posts option értékét. Az az érték tárolja a blog oldalunk ID-ját (azonosítóját), amit aztán átadhatunk a `get_permalink()` függvénynek, hogy kinyerjük az URL-t.

```php
echo esc_url(get_permalink(get_option('page_for_posts')));
```

WordPress 4.5.0.-tól használhatjuk a [get_post_type_archive_link()](https://developer.wordpress.org/reference/functions/get_post_type_archive_link/) függvényt, hogy lekérjük a post (bejegyzések) tartalomtípus listaoldalunk URL-jét.

```php
echo esc_url(get_post_type_archive_link('post'));
```
