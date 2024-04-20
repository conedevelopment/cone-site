---
layout: "layout/posts.html"
pagination:
    data: "collections"
    size: 1
    reverse: true
    alias: "tag"
permalink: "/hu/cimke/{{ tag | slug }}/"
eleventyComputed:
    title: "#{{ tag }}"
---
