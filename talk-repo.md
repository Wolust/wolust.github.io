---
title: Talk & Repo
layout: page
date: '2023-05-31 20:00:00'
meta_robots: index,follow
permalink: "/talk/"
description: Vorträge, Folien, Talks bei Wolust, die man hier nachlesen kann
sitemap: true
---
### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2024.1

1. Stefan: [{% avatar dewomser %}](https://github.com/dewomser) [Wolust](https://github.com/dewomser/LPD_2024/blob/main/LPD_24.1_Wolust.md) bei Github
2. Stefan: [{% avatar dewomser %}](https://github.com/dewomser) [Smarpt](https://github.com/dewomser/LPD_2024/blob/main/LPD_24.1_Smarpt.md) bei Github

### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2023.2

1. Stefan: [{% avatar dewomser %}](https://github.com/dewomser)  [Bash einfach](https://github.com/dewomser/BASH-LPD2023/) bei Github
2. Dankward: [Workshop Micropython]({{ site.baseurl }}/dankward_lpd23_2_vortrag)

### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2023.1

1. Michael: [{% avatar satwareAG-ironMike %}](https://github.com/satwareAG-ironMike)
  [Macht Werbung für Linux und den LPD im Offenen Kanal](https://www.youtube.com/watch?v=i6Qo5j2VIsw) Youtube Video
2. Stefan: [{% avatar dewomser %}](https://github.com/dewomser)  [APIund Bash](https://www.untergang.de/index.php/konferenzen-thema-linux/lpd-23-1-in-worms.html) Extern Webseite

### Hier gibts Vorträge zum nachlesen vom Linux Presentation day 2022.2

1. Stefan: [{% avatar dewomser %}](https://github.com/dewomser) [Sein Schieberegister und Wolust](https://www.untergang.de/pi-more-schieberegister/index.pdf) Extern pdf
2. Tobias: [OpenWrt - Die Entwicklung vom Routerbetriebssystem zur Linuxdistribution für Embedded Systems](https://gitlab.rlp.net/fsl/l-p-d/-/blob/lpd-2022-2/slides/lpd-2022-2_hswo_welz_openwrt.pdf) Extern pdf
3. Klaus: [{% avatar devcon2012 %}](https://github.com/devcon2012) [Sicheres Linux / Videokonferenzlösung SCC](https://gitlab.rlp.net/fsl/l-p-d/-/blob/lpd-2022-2/slides/lpd-2022-2_hswo_ramst%C3%B6ck_sicheres-linux.pdf) Extern pdf


### Hier gibts Vorträge zum nachlesen bis 2022.

1. Klaus: [{% avatar devcon2012 %}](https://github.com/devcon2012) [SCEP-EST-ACME]({{ site.baseurl }}/SCEP-EST-ACME)
2. Achim: [Ceph und Proxmox]({{ site.baseurl }}/ceph-und-proxmox)
3. Stefan: [{% avatar dewomser %}](https://github.com/dewomser) [Linux installieren gestern und heute](https://www.untergang.de/html-folien030302020-vhs/img0.html) Externer Link
4. Christian: [{% avatar cmuench %}](https://github.com/cmuench) [Einführung in die Container Technologie](https://muench.dev/slides/docker/#1) Externer Link
5. Achim: [Virtualisierung am Beispiel von Proxmox VE und VirtualBox](https://achwo.de/?download=Virtualisierung.pdf) Extern pdf
6. Christian: [{% avatar cmuench %}](https://github.com/cmuench) [Division By Zero PHPUnit](https://github.com/Wolust/test-division-by-zero) Extern Github
7. Christian: [{% avatar cmuench %}](https://github.com/cmuench) [Linux Dateisystem](https://speakerdeck.com/cmuench/linux-dateisystem)

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
