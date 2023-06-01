---
title: Talk & Repo
layout: page
date: '2023-05-31 20:00:00'
meta_robots: index,follow
permalink: "/talk/"
description: Vorträge, Folien, Talks bei Wolust,  die man hier nachlesen kann
sitemap: true
---
### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2023.1
1. Michael: [Macht Werbung für Linux und den LPD im Offenen Kanal](https://www.youtube.com/watch?v=i6Qo5j2VIsw) Youtube Video
2. Stefan: [APIund Bash](https://www.untergang.de/index.php/konferenzen-thema-linux/lpd-23-1-in-worms.html) Extern Webseite

### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2022.2

1. Stefan: [Sein Schieberegister und Wolust](https://www.untergang.de/pi-more-schieberegister/index.pdf) Extern pdf
2. Tobias: [OpenWrt - Die Entwicklung vom Routerbetriebssystem zur Linuxdistribution für Embedded Systems](https://gitlab.rlp.net/fsl/l-p-d/-/blob/lpd-2022-2/slides/lpd-2022-2_hswo_welz_openwrt.pdf) Extern pdf
3. Klaus: [Sicheres Linux / Videokonferenzlösung SCC](https://gitlab.rlp.net/fsl/l-p-d/-/blob/lpd-2022-2/slides/lpd-2022-2_hswo_ramst%C3%B6ck_sicheres-linux.pdf) Extern pdf


### Hier gibts Vorträge zum nachlesen bis 2022.

1. Klaus: [SCEP-EST-ACME]({{ site.baseurl }}/SCEP-EST-ACME)
2. Achim: [Ceph und Proxmox]({{ site.baseurl }}/ceph-und-proxmox)
3. Stefan: [Linux installieren gestern und heute](https://www.untergang.de/html-folien030302020-vhs/img0.html) Externer Link
4. Christian: [Einführung in die Container Technologie](https://static.muench.dev/presentation/docker/index.html#1) Externer Link
5. Achim: [Virtualisierung am Beispiel von Proxmox VE und VirtualBox](https://achwo.de/?download=Virtualisierung.pdf) Extern pdf
6. Christian: [Division By Zero PHPUnit](https://github.com/Wolust/test-division-by-zero) Extern Github
7. Christian: [Linux Dateisystem](https://speakerdeck.com/cmuench/linux-dateisystem)

### Repos
Alle Repos die im Rootverzeichnis von Wolust liegen, werden hier automatisch angezeigt. (Es muss nichts verlinkt werden)

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

 {% include fortune.html %}
