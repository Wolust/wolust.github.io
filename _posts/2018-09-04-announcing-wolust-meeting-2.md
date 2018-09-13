---
title: Nächster Wolust
layout: post
date: '2018-09-05 17:30:00'
summary: 02.10.2018 19:30 Uhr im Timescafe .
categories: Ort Zeit
update_date: ''
description: Das ist der Terminkalender der Linux User Gruppe Worms
---

Wormser Linux Stammtisch Termine 

<ul>
 {% for treffen  in site.data.daten.linuxuser %}
 {% if treffen.meeting == "Nächstes Treffen" %}
 {{treffen.meeting}} :
   <li><strong>  {{ treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} 19:30 im {{treffen.ort}}
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


{% include share_buttons.html %}
