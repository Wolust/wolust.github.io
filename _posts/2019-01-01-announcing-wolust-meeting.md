---
title: Nächster Wolust
layout: post
date: '2021-11-07 04:33:00'
update_date: "''"
description: Das ist der Terminkalender der Linux User Gruppe Worms
summary-date: summary braucht man hier nicht mehr
last_modified_at: Nov 07, 2020 4:33 AM
categories:
- linux
- worms
---

<ul>
<li>Wormser Linux Stammtisch Termine. Jeden 1. Dienstag im Monat</li>

<!--Wer sich für Linux oder andere freie Betriebssysteme interessiert und aus der Gegend in und um Worms kommt, der ist bei uns herzlich willkommen.Stelle Deine Projekte, Probleme und Lösungen vor! Tipps für Anfänger und Umsteiger. -->
<li>Eine <a href="{{ site.baseurl }}/map">Openstreetmap-Karte</a> zeigt unseren aktuellen Treffpunkt</li>

<li>
{% assign next = site.data.daten.linuxuser[0] %}
{{next.meeting}} :
<strong> {{next.tag}}.{{next.monat}}.{{next.jahr}} {{next.start}} : {{next.ort}} {{next.strasse}} </strong>

<div class="well">
Wer sich für Linux oder andere freie Betriebssysteme interessiert und aus der Gegend in und um Worms kommt, der ist bei uns herzlich willkommen. Stelle Deine Projekte, Probleme und Lösungen vor! Tipps für Anfänger und Umsteiger. <s>Um am Online Stammtisch teilnehmen zu können musst Du an der <a href="https://vhs.cloud">VHS-Cloud</a> angemeldet sein. Kurs : "linux@worms.vhs.cloud" (das ist keine URL)</s>
</div>
</li>
</ul>


Weitere Treffen ohne Gewähr:
<ul>
{% for treffen  in site.data.daten.linuxuser %}
   {% if treffen.meeting <> "Nächstes Treffen" %}
 <li>
 {{treffen.meeting}} :
     {{treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.start}} {{treffen.ort}} {{treffen.strasse}}
 </li>  
  {% endif %}
{% endfor %}


{% include share_buttons.html %}
