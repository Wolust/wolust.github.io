---
title: Nächster Wolust
layout: post
date: Jan 01, 2019 8:00 PM
update_date: "''"
categories: Ort Zeit
description: Das ist der Terminkalender der Linux User Gruppe Worms
summary-date: summary braucht man hier nicht mehr
last_modified_at: Jun 05, 2019 6:00 AM
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
<strong> {{next.tag}}.{{next.monat}}.{{next.jahr}} 19:30 im {{next.ort}} {{next.strasse}} </strong>
</li></ul>
# Geplantes Programm
1. **Init :** Wer wir sind. Was wir hier machen wollen. Veranstaltung planen mit Struktur damit kein Chaos entsteht. Referent: Mike Renner  (5-10 Minuten)

2. **Zertifikate  für Dokumente + Webseiten**
    Am Beispiel SSL, TLS und GPGP
   Referent: Klaus Ramstöck  (30 Minuten)

3. **Die Linux Verzeichnisstruktur erklärt**
- Welche Verzeichnisse existieren in jedem Linux System?
- Wo darf ich als Benutzer einfach Daten ändern?
- Wo sollte man nicht einfach etwas ändern?
- Was ist POSIX oder Linux Standard Base?
- Unterschiede zu anderen Betriebssystemen
- Referent: Christian Münch (30 Minuten)

4. Ersatzvortrag  (Nur im Notfall)
    „Programmieren“ mit  STRG-C  und STRG-V am Raspberry Pi
    [ähnlicher Vortrag ]( https://youtu.be/jHTqgAL3Rqo)
    Referent: Stefan Höhn  (20 Minuten)

5. Kann sein, dass es noch Kurzbeiträge von anderen Personen gibt.

6.  Hands on:
- Der Raspberry Pi läßt es blinken. zB. eine LED am Christbaum.
- Zertifikate testen, manipulieren, Gültigkeit erkennen.

7. Nächster Stammtisch in der Neusatzschule VHS-Worms 2020
-  Thema: Was ist Linux, eine Einführung.
-  Ausblick 2020
-  Schluß, Danke
-  Referent: Stefan Höhn

Weitere Treffen ohne Gewähr:
<ul>
{% for treffen  in site.data.daten.linuxuser %}
   {% if treffen.meeting <> "Nächstes Treffen" %}
 <li>
 {{treffen.meeting}} :
     {{treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.ort}} {{treffen.strasse}}
 </li>  
  {% endif %}
{% endfor %}


{% include share_buttons.html %}
