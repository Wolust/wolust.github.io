---
title: Nächster Wolust
layout: post
date: Mar 07, 2020 4:33 AM
update_date: "''"
description: Das ist der Terminkalender der Linux User Gruppe Worms
summary-date: summary braucht man hier nicht mehr
last_modified_at: Apr 07, 2020 4:33 AM
categories: linux worms
---

<ul>
<li>Wormser Linux Stammtisch Termine</li>
</ul>
<!--Wer sich für Linux oder andere freie Betriebssysteme interessiert und aus der Gegend in und um Worms kommt, der ist bei uns herzlich willkommen. Stelle Deine Projekte, Probleme und Lösungen vor! Tipps für Anfänger und Umsteiger. -->

Eine Openstreetmap-Karte zeigt unseren aktuellen [Treffpunkt]({{ site.baseurl }}{% link map.md %})

<ul>
<li>
{% assign next = site.data.daten.linuxuser[0] %}
{{next.meeting}} :
<strong> {{next.tag}}.{{next.monat}}.{{next.jahr}} {{next.start}} im {{next.ort}} {{next.strasse}} </strong>
<div class="well">
<ol>
<li>Klaus zeigt neue Software</li>
<li>Stefan zeigt Jekyll auf dem Tablet</li>
<li>Aktuelles / freie Themenwahl </li>
</ol>
</div>
</li>
</ul>


Weitere Treffen ohne Gewähr:
<ul>
{% for treffen  in site.data.daten.linuxuser %}
   {% if treffen.meeting <> "Nächstes Treffen" %}
 <li>
 {{treffen.meeting}} :
     {{treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{next.start}} {{treffen.ort}} {{treffen.strasse}}
 </li>  
  {% endif %}
{% endfor %}


{% include share_buttons.html %}