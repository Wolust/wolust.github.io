---
title: Rückblick 2016
layout: post
date: '2016-12-11 15:31:19 +0000'
summary: Zusammenfassung und Stichpunkte
categories: treffen
update_date: ''
description: Kurzer Report der Wolust Stammtische 2016 
---

<!-- JSON-LD-Markup generiert von Google Strukturierte Daten: Markup-Hilfe -->
<script type="application/ld+json">
{ "@context" : "http://schema.org", "@type" : "Article", "name" : "Die Treffen 2016", "author" : { "@type" : "Person", "name" : "Stefan Höhn" }, "datePublished" : "2016-12-11", "image" : "https://wolust.de/images/tux-wolust.jpg", "articleSection" : "{{ review.inhalt }}", "url" : "https://wolust.de/treffen/2016/12/11/lasmeeting/", "publisher" : { "@type" : "Organization", "name" : "wolust" } }
</script>



<ul>
 {% for review  in site.data.review16.linuxuser %}
    <li>  {{ review.inhalt }} </li>
 {% endfor %}
</ul>
