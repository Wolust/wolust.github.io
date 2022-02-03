---
title: Hilfe
layout: page
date: '2019-01-02 13:29:00'
meta_robots: noindex,nofollow
description: Anleitung zum Updaten der Webseite WOLUST Nächsten Termin und Zusammenfassung
sitemap: false
---

### So kann man einen Eintrag anlegen oder bearbeiten


1. Du brauchst einen Github-Account [github.com](https://github.com/)
2. Du mußt Mitglied werden bei [Organisation Wolust](https://github.com/Wolust) Bei  Christian @cmuench melden.
3. Um Einträge zu editieren, gehe nach wolust.github.io  -> data_
13. <span class="red">Einrückungen, Doppelpunkt, -Zeichen und Variablennamen nicht verändern !</span>
4. Dort gibt es [daten.yaml](https://github.com/Wolust/wolust.github.io/blob/master/_data/daten.yaml) Hier können neue Termine angelegt oder editiert werden .
5. Dort gibt es [review-2021.yaml](https://github.com/Wolust/wolust.github.io/blob/master/_data/review-2021.yaml) Hier können Stichpunkte zu vergangenen Treffen editiert und neu eingetragen werden. 
7. Tiefgreifende  Änderungen (Neuverlinkung oder Änderungen von Dateinamen)  funktionieren nur  nach einer Generierung mit Jekyll  !
8. Die Variable date ist tabu, weil sie zur Linkerzeugung benutzt wird. Die leere Variable date_update wird als aktuelles Änderungsdatum geparst. 
9. Nach jeder  Änderung erzeugtes Html und Links mit Github Actions testen ! [![Jekyll site CI](https://github.com/Wolust/wolust.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/Wolust/wolust.github.io/actions/workflows/jekyll.yml)
10. Hilfe bei Fehlern: wolust@untergang.de

### Nur mal ausprobieren oder spielen.

Du willst Ruby, die Gems und Jekyll gar nicht installieren.  Wenns bei dir Docker und Git gibt, wir haben ein Docker-YAML auf unserer Webseite.
und so gehts:
1. Klone unsere Webseite von Github. git clone https://github.com/Wolust/wolust.git
2. Öffne eine Shell: cd in_den_clone_ordner
3. docker -compose up
4. Wenn alles geklappt hat. öffne einen Webbrowser http://0.0.0.0:4000
5. Mit http://0.0.0.0:4000/admin/ kannst du testweise Änderungen an der Homepage machen. 
6. Viel Spaß mit Jekyll und der Wolustwebseite.

### Wissenswertes
<strong>Wolust Git-Liste:</strong>
<ul>
 {% for repository in site.github.public_repositories %}
<li> <a href="{{ repository.html_url }}">{{ repository.name }}</a>
<br />
{{ repository.description }}
<br />
Zuletzt upgedatet: {{ repository.updated_at | date: "%-d.%m.%Y %H:%M" }}
</li>
{% endfor %}
</ul>

<strong>Aktuelle Server Einstellung</strong>
<ul>
<li>Diese Homepage kann man mit Git <a href="{{ site.github.clone_url }}">klonen</a></li>
<li>Jekyll Version : {{ site.github.versions.jekyll }}</li>
<li>Liquid Version : {{ site.github.versions.liquid }}</li>
<li>Lizenz : {{ site.github.license.key }}</li>
</ul>

**Schreibt hier:**

[{% avatar dewomser %}](https://github.com/dewomser) [{% avatar cmuench %}](https://github.com/cmuench)

**Geht zum Wolust und hat ein Github-Account:**

[{% avatar dewomser %}](https://github.com/dewomser) [{% avatar cmuench %}](https://github.com/cmuench) [{% avatar devcon2012 %}](https://github.com/devcon2012) [{% avatar doppeldau %}](https://github.com/doppeldau) 
[{% avatar satwareAG-ironMike %}](https://github.com/satwareAG-ironMike)
### Pixyll Jekyll-Thema ist die  Basis für diese Site:
Theme crafted with &lt;3 by <a href="http://johnotander.com">John Otander</a> (<a href="https://twitter.com/4lpine">@4lpine</a>).
&lt;/&gt; available on <a href="https://github.com/johnotander/pixyll">GitHub</a>.



 {% include fortune.html %}
