---
title: 'Blog'
layout: 'layout/posts.html'
pagination:
  data: collections.blog
  size: 2
  reverse: true
  alias: posts
paginationCaptionNext: "Előző"
paginationCaptionPrev: "Következő"
permalink: 'hu/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
---
