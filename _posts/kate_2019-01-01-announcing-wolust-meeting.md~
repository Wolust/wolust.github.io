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
<li><strong>Volkshochschule</strong> Worms hat wieder geöffnet! Bitte Mund-Nase-Masken und portable Linuxgeräte mitbringen.
Vorträge von Christian und Achim</li>
<li>
<strong>Einführung in die Container-Technologie.</strong> Theoretische Einführung gefolgt
von kleineren Beispielen. Folgende Fragen werden beantwortet:
<ul>
<li>- Wie funktioniert das technisch?</li>
<li>- Wie kommen meine Daten in einen Container?</li>
<li>- Was brauche ich um mit Docker zu starten?</li>
<li>- Was sind die Vorteile von Containern?</li>
<li>- Wie sehen moderne Infrastrukturen aus?</li>
</ul>
</li>
<li><strong>Virtualisierung am Beispiel von Proxmox VE und VirtualBox</strong>
<ul>
<li>- Was ist Virtualisierung und welche Technik steckt dahinter?</li>
<li>- Welche Voraussetzungen werden für Virtualisierung gebraucht?</li>
<li>- Was sind die Vorteile von Virtualisierung?</li>
<li>- Was kann ich mit Virtualisierung erreichen, wo wird sie eingesetzt?</li>
<li>- Wie schütze ich meine Daten? - Snapshots, Replizierung, Backups.</li>
<li>- Vergleich verschiedener Virtualisierungslösungen.</li>
</ul>


</li>
<li><strong>Hands on</strong> falls noch Zeit und Erwünscht</li>
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
     {{treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.start}} {{treffen.ort}} {{treffen.strasse}}
 </li>  
  {% endif %}
{% endfor %}


{% include share_buttons.html %}
