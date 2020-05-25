---
title: Nächster Wolust
layout: post
date: May 07, 2020 4:33 AM
update_date: "''"
description: Das ist der Terminkalender der Linux User Gruppe Worms
summary-date: summary braucht man hier nicht mehr
last_modified_at: May 07, 2020 4:33 AM
categories: linux worms
---

<ul>
<li>Wormser Linux Stammtisch Termine. Jeden 1. Dienstag im Monat</li>
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
<li><strong>Volkshochschules</strong> Worms hat wieder geöffnet! Bitte portable Linuxgeräte mitbringen oder USB-Sticks mit Image</li>
<li>
<strong>Klaus</strong> erzählt was zum InfoGopher oder zum "IntentionLogging".
Intentionlogging ist ein Konzept, das er sich aus den Fingern gesogen habe, um mit Logausgaben von komplexen Serverprogrammen besser zurechtzukommen.
Der InfoGopher ist so eine Art WebSpider/Robot/... Er soll Informationen zusammentragen und verdichten.
<a href="https://github.com/devcon2012/infogopher">Software ist von Klaus und auf Github"</a>
</li>
<li>
<strong>Stefan</strong> hat auch was:
Aktuelle Webseiten automatisch schneiden, bearbeiten, neu zusammenfügen und anzeigen am Beispiel einer Tageszeitung.
Werkzeug :bash, sed, grep, curl, HTML-Kenntnisse
Kurzvortrag mit Hands-on
</li>
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
