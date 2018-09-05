---
title: Nächstes Treffen
layout: post
date: '2018-09-05 17:30:00'
summary: 02.10.2018 19:30 Uhr im Timescafe .
categories: jekyll pixyll Ort Zeit
---

Wir Treffen uns am 1. Dienstag  jeden Monats

<ul>
 {% for treffen  in site.data.daten.linuxuser %}
 {% if treffen.meeting == "Nächstes Treffen" %}
 {{treffen.meeting}} :
   <li><strong>  {{ treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.ort}}
	 </strong></li>
  {% endif %}
{% endfor %}
</ul>
Weitere Treffen ohne Gewähr:
<ul>
{% for treffen  in site.data.daten.linuxuser %}
   {% if treffen.meeting <> "Nächstes Treffen" %}
 <li>
 {{treffen.meeting}} :
     {{ treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.ort}}
 </li>  
  {% endif %}
{% endfor %}
</ul>
