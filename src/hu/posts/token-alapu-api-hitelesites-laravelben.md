---
title: "Token alapú API hitelesítés Laravelben"
date: "2019-02-16"
tags: ["laravel"]
thumbnail: "/img/blog/token-alapu-api-hitelesites-laravelben.png"
thumbnailAlt: ""
---

**A webes API-k kapcsolódási felületet biztosítanak a különböző szoftver komponenseknek. Az API lehetővé teszi, hogy különböző technológiák által küldött kéréseket feldolgozva egységes választ adjon vissza. Szerencsére Laravel és Vue segítségével egyszerűen kialakíthatunk ilyen API szerver-kliens kapcsolatokat.**

## Az API felületekről általában

Az API-k olyan felületeket, interfészeket biztosítanak, amelyek lehetővé teszik, hogy különböző platformokról érkező kéréseket feldolgozva egységesen feldolgozható választ juttassanak vissza.

Képzeljük csak el, egy felület, ahova Django, Laravel, WordPress, Rails, node.js vagy akár egyszerű JavaScript segítségével is küldhetünk valamilyen adatcsomagot és a válasz minden fél részére feldolgozható.

Látható, hogy ezek a felületek széles körben is használhatóak, így nagy kérdés, hogy miként lehet megoldani az egységes hitelesítési formát, amennyiben az API igényli. Tehát lássuk, hogy a Laravel hogyan oldja meg ezt a kérdést.

## API felületek Laravelben

A keretrendszer alapértelmezetten nyújt egyszerű API integrációt. Az API felületek kialaításánál annyi a teendőnk, hogy az adott útvonalakat az „api” middleware csoportba soroljuk. A színfalak mögött ez sok változtatást eszközöl a útvonalon és az ahhoz tartozó kontrolleren – hiszen állapotfüggőből állapotmentessé alakul – de hitelesítés szempontjából így is nagyon egyszerű dolgunk van.

Azokat az API útvonalakat, amelyek hitelesítést igényelnek, az „auth:api” middleware-rel kell ellátni. A hitelesítéshez a felhasználókhoz tartozó „api\_token” használható, amelyet a HTTP kéréskor az „Authorization” fejlécben „Bearer” tokenként vagy az URL egy paramétereként az „api\_token” kulccsal tudunk elküldeni.

## A megvalósítás

Laravel esetében alapvetően az AJAX hívásokat szeretnénk hitelesíteni. Így a feladatunk, hogy a hívásokat kezelő keretrendszert megfelelően felparaméterezzük. Általában a Vue és Laravel kombóhoz az axios JS könyvtárat szokás használni, így most mi is így teszünk. Kezdjük a token kinyerésével és a window objektumhoz csatolásával.

```php
// footer.blade.php

<script>
    window.Laravel = {!! json_encode([
        'csrfToken' => csrf_token(),
        'apiToken' => $currentUser->api_token ?? null,
    ]) !!};
</script>
```

Ezt követően a bootstrap.js-ben be tudjuk állítani, hogy az axios minden kérést a tokennel együtt küldjön el az API felületre.

```js
// bootstrap.js

import Vue from "vue";
import axios from "axios";

window.Vue = Vue;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + Laravel.apiToken,
};

window.Vue.prototype.$http = axios;
```

Tulajdonképpen nincs más hátra, mint a kontrollerben lekezelni a kérést. Hasonlóan mint a munkamenet alapú folyamatokál, itt is a kérésen keresztül kapjuk meg az azonosított felhasználót.

```php
// app/Http/Controllers/SomeApiController.php

<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class SomeApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {
        $user = $request->user();

        return response()->json($user);
    }
}
```

Látható, hogy a felhasználót az átadott token alapján került hitelesítésre és nem a munkamenet alapján. Így a token alapú hitelesítés valóban platformfüggetlen és állapotmentes folyamat.
