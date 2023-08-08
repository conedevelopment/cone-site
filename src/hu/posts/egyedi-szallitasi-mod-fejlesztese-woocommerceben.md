---
title: "Egyedi szállítási mód fejlesztése WooCommerceben"
date: "2019-03-08"
tags: ['wordpress']
thumbnail: ""
thumbnailAlt: ""
---

**A legtöbb webáruház esetében, a szállítás kérdése alapvető, így lényeges, hogy olyan megoldás szülessen amely lefedi az adott áruház egyedi igényeit. Nos, ez nem minden esetben adott, amennyiben az alapértelmezett szállítási módokat használjuk. Lássuk, hogyan tudunk egyedi szállítási módot írni áruházunkhoz.**

## A szállítási módok kibővítése

Hogy a szállítási mód kezelhető legyen az admin felületből, illetve a vásárlói oldalon, a következő kódot kell létrehozni:

add\_filter('woocommerce\_shipping\_methods', function ($methods) {
    $methods\['custom\_shipping'\] = CustomShipping::class;

    return $methods;
});

Az egyedi szállítási módot tipikusan, egy külön bővítménybe érdemes kiszervezni. Így a fenti kódot, a bővítményen keresztül futtatja a WordPress.

## Az egyedi szállítási mód kódja

Mindenek előtt, lássuk a kódot, majd a magyarázatot is hozzáfűzzük az egyes blokkokhoz. Mint minden Woo modul, itt is egy alap osztályt kell kiegészítenünk, amely már tartalmazza az alapvető funkcionalitásokat, amellyekkel már tudunk dolgozni.

class Shipping extends WC\_Shipping\_Method
{
    /\*\*
     \* The ID of the shipping method.
     \*
     \* @var string
     \*/
    public $id = 'custom\_shipping';

    /\*\*
     \* The title of the method.
     \*
     \* @var string
     \*/
    public $method\_title = 'Custom Shipping';

    /\*\*
     \* The description of the method.
     \*
     \* @var string
     \*/
    public $method\_description = 'Custom Shipping';

    /\*\*
     \* The supported features.
     \*
     \* @var array
     \*/
    public $supports = \[
        'settings',
    \];

    /\*\*
     \* Initialize a new shipping method instance.
     \*
     \* @return void
     \*/
    public function \_\_construct()
    {
        $this\->init\_form\_fields();
        $this\->init\_settings();
        $this\->registerHooks();

        $this\->enabled = isset($this\->settings\['enabled'\]) ? $this\->settings\['enabled'\] : 'no';
        $this\->title = isset($this\->settings\['title'\]) ? $this\->settings\['title'\] : 'Custom Shipping';
    }

    /\*\*
     \* Initialize the form fields.
     \*
     \* @return void
     \*/
    public function init\_form\_fields()
    {
        $this\->form\_fields = \[
            'enabled' => \[
                'title' => \_\_('Bekapcsolás'),
                'type' => 'checkbox',
                'description' => \_\_('A szállítási mód bekapcsolása.'),
                'default' => 'yes',
            \],
           'title' => \[
              'title' => \_\_('Cím'),
                'type' => 'text',
                'description' => \_\_('A szállítási mód címe.'),
                'default' => \_\_('Egyedi szállítási mód'),
            \],
        \];
    }

    /\*\*
     \* Calculate the shipping fees.
     \*
     \* @param  array  $package
     \* @return void
     \*/
    public function calculate\_shipping($package = \[\])
    {
        // ide jön az egyedi logika, amellyel kiszámoljuk a költséget
        // a $packages változót használhatjuk, ha a kosár/csomag tartalmát használni szeretnénk
        // pl.: az ár legyen a kosár értékének 20%-a

        $cost = $package\['cart\_subtotal'\] \* 0.2;

        $this\->add\_rate(\[
            'id' => $this\->id,
            'label' => $this\->title,
            'cost' => $cost,
        \]);
    }

    /\*\*
     \* Register the shipping method hooks.
     \*
     \* @return void
     \*/
    public function registerHooks()
    {
        add\_action("woocommerce\_update\_options\_shipping\_{$this->id}", \[$this, 'process\_admin\_options'\]);
    }
}

Az attribútomok a kód elején, csak az adminfelületen lesznek használatosak, illetve a szállítási mód azonosítására kellenek. Így ezeket nyugodtan "beégethetjük" a kódba.

A konstruktorban, az admin mezők kerülnek beállításra, majd a "Settings API" meghívása történik. Innentől kinyerni és menteni is tudunk a szállítási módhoz kapcsolódó beállításokat. Valamint, a "hookok" regisztálása történik

A registerHooks() methódus, egy egyedileg definiált metódus. Azért érdemes ilyes jellegű gyűjtő funkciókat alkalmazni, hogy a hook-visszahívás beállításainkat egy csoportba tudjuk rendezni, valamint, hogy a megfelelő időben kerüljenek regisztrálásra. Jelen esetben a konstruktor tökéletesen megfelel erre a célra.

A lényeges folyamat a calculate\_shipping() metódusban zajlik, hiszen itt számolható ki a konkrét szállítási ár. Látható, hogy könnyen kialakítható az egyedi logika ami alapján a számítás megtörténik. A $packages változó könnyen felhasználható, ha a szállítandó termékeket illetve a címet szeretnénk felhasználni a számítás során.

Ugyan itt végezhetőek el a külső API hívások amennyiben szükséges – pl.: ha egy csomagszállító szolgáltatást veszünk igénybe.

Ha minden sikeres, akkor az add\_rate() metódussal hozzáadjuk a kiszámolt árat a kosárhoz. Innentől a vásárló már látja, hogy az adott termékekre és címre milyen szállítási ár vonatkozik. Természetesen amennyiben a kosár tartalma frissül, az ár újra automatikusan kiszámításra kerül.

## Összegzés

Természetesen a lehetőségek jóval tágabbak a fent leírtaknál. Ha szeretnénk akár zónatámogatást is hozzáadhatunk a szállítási módhoz, így lehetőségünk lesz rá, hogy a meghatározott szállítási zónákban az ott beállított értékek alapján dolgozzon a szállítási modul.

Tulajdonképpen bármilyen számítási logikát alkalmazhatunk, így amennyiben a webáruházadban szükséges olyan megoldás alkalmazása, amelyet már létező bővítménnyel nem lehet megoldani, érdemes elgondolkozni az egyedi fejlesztésen.
