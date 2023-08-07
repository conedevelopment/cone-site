---
title: 'Blog'
layout: 'layout/posts.html'
pagination:
  data: collections.blog
  size: 24
  reverse: true
  alias: posts
paginationCaptionNext: "Következő"
paginationCaptionPrev: "Előző"
permalink: '/hu/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
hero:
    title:
        caption: "Bejegyzések <span class='highlighted'>web</span><br>és <span class='highlighted'>fejlesztés</span> témában"
    description: "Blogunkon keresztül megmutatjuk, hogy milyen technológiákkal dolgozunk és hogyan látjuk a webet."
    classes: 'hero--center hero--font-size:small hero--padding-block:small'
---
