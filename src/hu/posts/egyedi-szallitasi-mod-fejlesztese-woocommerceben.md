---
title: "Egyedi szállítási mód fejlesztése WooCommerceben"
date: "2019-03-08"
tags: ["wordpress"]
thumbnail: "/img/blog/egyedi-szallitasi-mod-fejlesztese-woocommerceben.png"
thumbnailAlt: ""
---

**A legtöbb webáruház esetében, a szállítás kérdése alapvető, így lényeges, hogy olyan megoldás szülessen amely lefedi az adott áruház egyedi igényeit. Nos, ez nem minden esetben adott, amennyiben az alapértelmezett szállítási módokat használjuk. Lássuk, hogyan tudunk egyedi szállítási módot írni áruházunkhoz.**

## A szállítási módok kibővítése

Hogy a szállítási mód kezelhető legyen az admin felületből, illetve a vásárlói oldalon, a következő kódot kell létrehozni:

```php
add_filter('woocommerce_shipping_methods', function ($methods) {
    $methods['custom_shipping'] = CustomShipping::class;

    return $methods;
});
```

> Az egyedi szállítási módot tipikusan, egy külön bővítménybe érdemes kiszervezni. Így a fenti kódot, a bővítményen keresztül futtatja a WordPress.

## Az egyedi szállítási mód kódja

Mindenek előtt, lássuk a kódot, majd a magyarázatot is hozzáfűzzük az egyes blokkokhoz. Mint minden Woo modul, itt is egy alap osztályt kell kiegészítenünk, amely már tartalmazza az alapvető funkcionalitásokat, amellyekkel már tudunk dolgozni.

```php
class Shipping extends WC_Shipping_Method
{
    /**
     * The ID of the shipping method.
     *
     * @var string
     */
    public $id = 'custom_shipping';

    /**
     * The title of the method.
     *
     * @var string
     */
    public $method_title = 'Custom Shipping';

    /**
     * The description of the method.
     *
     * @var string
     */
    public $method_description = 'Custom Shipping';

    /**
     * The supported features.
     *
     * @var array
     */
    public $supports = [
        'settings',
    ];

    /**
     * Initialize a new shipping method instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->init_form_fields();
        $this->init_settings();
        $this->registerHooks();

        $this->enabled = isset($this->settings['enabled']) ? $this->settings['enabled'] : 'no';
        $this->title = isset($this->settings['title']) ? $this->settings['title'] : 'Custom Shipping';
    }

    /**
     * Initialize the form fields.
     *
     * @return void
     */
    public function init_form_fields()
    {
        $this->form_fields = [
            'enabled' => [
                'title' => __('Bekapcsolás'),
                'type' => 'checkbox',
                'description' => __('A szállítási mód bekapcsolása.'),
                'default' => 'yes',
            ],
           'title' => [
                'title' => __('Cím'),
                'type' => 'text',
                'description' => __('A szállítási mód címe.'),
                'default' => __('Egyedi szállítási mód'),
            ],
        ];
    }

    /**
     * Calculate the shipping fees.
     *
     * @param  array  $package
     * @return void
     */
    public function calculate_shipping($package = [])
    {
        // ide jön az egyedi logika, amellyel kiszámoljuk a költséget
        // a $packages változót használhatjuk, ha a kosár/csomag tartalmát használni szeretnénk
        // pl.: az ár legyen a kosár értékének 20%-a

        $cost = $package['cart_subtotal'] * 0.2;

        $this->add_rate([
            'id' => $this->id,
            'label' => $this->title,
            'cost' => $cost,
        ]);
    }

    /**
     * Register the shipping method hooks.
     *
     * @return void
     */
    public function registerHooks()
    {
        add_action("woocommerce_update_options_shipping_{$this->id}", [$this, 'process_admin_options']);
    }
}
```

Az attribútomok a kód elején, csak az adminfelületen lesznek használatosak, illetve a szállítási mód azonosítására kellenek. Így ezeket nyugodtan "beégethetjük" a kódba.

A konstruktorban, az admin mezők kerülnek beállításra, majd a "Settings API" meghívása történik. Innentől kinyerni és menteni is tudunk a szállítási módhoz kapcsolódó beállításokat. Valamint, a "hookok" regisztálása történik

A `registerHooks()` methódus, egy egyedileg definiált metódus. Azért érdemes ilyes jellegű gyűjtő funkciókat alkalmazni, hogy a hook-visszahívás beállításainkat egy csoportba tudjuk rendezni, valamint, hogy a megfelelő időben kerüljenek regisztrálásra. Jelen esetben a konstruktor tökéletesen megfelel erre a célra.

A lényeges folyamat a `calculate_shipping()` metódusban zajlik, hiszen itt számolható ki a konkrét szállítási ár. Látható, hogy könnyen kialakítható az egyedi logika ami alapján a számítás megtörténik. A `$packages` változó könnyen felhasználható, ha a szállítandó termékeket illetve a címet szeretnénk felhasználni a számítás során.

Ugyan itt végezhetőek el a külső API hívások amennyiben szükséges – pl.: ha egy csomagszállító szolgáltatást veszünk igénybe.

Ha minden sikeres, akkor az `add_rate()` metódussal hozzáadjuk a kiszámolt árat a kosárhoz. Innentől a vásárló már látja, hogy az adott termékekre és címre milyen szállítási ár vonatkozik. Természetesen amennyiben a kosár tartalma frissül, az ár újra automatikusan kiszámításra kerül.

## Összegzés

Természetesen a lehetőségek jóval tágabbak a fent leírtaknál. Ha szeretnénk akár zónatámogatást is hozzáadhatunk a szállítási módhoz, így lehetőségünk lesz rá, hogy a meghatározott szállítási zónákban az ott beállított értékek alapján dolgozzon a szállítási modul.

Tulajdonképpen bármilyen számítási logikát alkalmazhatunk, így amennyiben a webáruházadban szükséges olyan megoldás alkalmazása, amelyet már létező bővítménnyel nem lehet megoldani, érdemes elgondolkozni az egyedi fejlesztésen.
