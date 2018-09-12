---
title: Die Treffen 2018
layout: post
date: '2018-09-05 17:00:00'
summary: Zusammenfassung und Stichpunkte
categories: jekyll pixyll treffen
update_date: ''
---

<ul>
 {% for review  in site.data.review.linuxuser %}
    <li>  {{ review.inhalt }} </li>
 {% endfor %}
</ul>
