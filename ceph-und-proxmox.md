---
title: Ceph und Proxmox
layout: page
description: Ceph und Proxmox verteilter Server Beitrag von Achim Wolff
author: Achim Wolff
---

## hier ein paar weitere Infos zu meinen Experimenten mit Proxmox und Ceph.
### Zunächst paar Links:Proxmox VE (Virtual Environment)
[https://www.proxmox.com/de/proxmox-veDoku](https://www.proxmox.com/de/proxmox-veDoku) dazu:
[https://pve.proxmox.com/pve-docs/](https://pve.proxmox.com/pve-docs/)
LXC als Containerverwaltung:[https://linuxcontainers.org/](https://linuxcontainers.org/)
### Ceph als verteiltes Storage
[Cluster-Dateisystem](https://ceph.com/](https://ceph.com/)
Ich habe testweise 3 alte Rechner dafür benutzt und auf allen drei per
USB-Stick  Proxmox VE installiert. Einfach das ISO hier herunterladen:
[https://www.proxmox.com/de/downloads/item/proxmox-ve-5-4-iso-installer](https://www.proxmox.com/de/downloads/item/proxmox-ve-5-4-iso-installer)
und per dd auf einen USB-Stick schreiben - Einstecken - Booten.
Bei der Installation muss man nur ein root-Passwort setzen, den
Hostname und eine feste IP (empfohlen) vergeben. Die Installation
dauerte auf den ollen Kisten (Core2 DUO mit 4GB RAM und je 2x240GB SSD)
jeweils nicht mehr als 5 Minuten!

Ich habe aus Performancegründen für das Ceph noch in jeden Rechner eine
weitere Netzwerkkarte eingebaut (Dual Gigabit) und für Ceph ein eigenes
Netz aufgespannt (wird auch so empfohlen)
Die drei Systeme fügt man dann per Webinterface zu einem Cluster-Pool
zusammen und kann da schon auf dem Lokalen Storage VMs und/oder LXC-
Container installieren.Als Basis für die Virtualisierung dient
QEMU/KVM.

Die jeweils 2. SSDs in den Hosts habe ich dann zu einem Ceph-Storage
verbunden. Auf jedem Host liegt somit je ein Ceph-Monitor, ein OSD
(Object Storage) und ein Metadata-Server. 
Die Monitore überwachen sich gegenseitig und führen das Loadbalancing
durch. In den OSDs werden die Daten abgelegt. Der Metadata-Server
beherbergt die Metadaten für die OSDs - hier gibt es nur einen aktiven,
die anderen laufen auf Standby und übernehmen bei einem Ausfall
selbständig.

Auf den OSDs wird dann ein Ceph-Verbund angelegt, der als Datenspeicher
dient - je nach Einstellung mit voller Redundanz (jeder Node erhält
alle Daten) oder (wie z. B. bei RAID 5) auch eine einfache Redundanz -
erhöht dann die Kapazität.Für den Zugriff verwendet man dann entweder
RADOS (RBD - Rados Blockdevice) für die Diskimages der VMs oder
Container - oder CephFS als Filesystem um dort ISOs oder Backups
abzulegen.

Weiteres Schmankerl ist das HA (High Availability - Hochverfügbarkeit).
Hier kann man einen HA-Pool anlegen, der bei Ausfällen eines Hosts alle
VMs und Container auf einen anderen Host verschiebt und dort wieder
startet. Genauso ist auch eine Live-Migration einer VM auf einen
anderen Host möglich.

Beachtlich ist die deutlich bessere Performance bei solchen Aktionen
gegenüber dem Citrix XenServer - hier dauert die Migration einer VM auf
einen anderen Host u. U. mehrere Minuten, während der Proxmox dafür nur
Sekunden braucht.

Das Ceph repariert sich auch selbständig - ich habe testweise bei einem
Host, auf dem eine Windows-VM läuft, einfach mal das Stromkabel
abgezogen. Damit waren die VMs, die auf diesem Host liefen, natürlich
erst einmal weg.Es dauert aber noch keine Minute, da wurden die VMs auf
einem anderen der verbliebenen Hosts gestartet und waren somit wieder
verfügbar.

Wir der ausgeknipste Rechner wieder hochgefahren, klinkt sich das
System wieder in den Pool ein, das Ceph repariert sich selbständig und
alles läuft wieder.

Wenn man einen Host planmäßig herunterfahren will (z. B. für
Reparaturen oder Aufrüstungen) kann man die VMs und Container natürlich
live migrieren, ohne das der Anwender da irgendwas von merkt.
Das ganze System macht einen stabilen und ordentlichen Eindruck -
selbst auf der alten Hardware, die ich zum Testen hier habe.Kein
Wunder: basiert ja auch auf Debian.

Es gibt von einigen Hardware-Anbietern auch fertige System dafür, wie
z. B. Thomas Krenn oder SysGen (auf Nachfrage).

### Hier noch eine Übersicht der im Repo angebotenen LXC-Container:


mail            proxmox-mailgateway-5.2-standard_5.2-
1_amd64.tar.gzsystem          alpine-3.7-

default_20180913_amd64.tar.xzsystem          alpine-3.8-

default_20180913_amd64.tar.xzsystem          alpine-3.9-

default_20190224_amd64.tar.xzsystem          archlinux-base_20190426-

1_amd64.tar.gzsystem          centos-6-

default_20161207_amd64.tar.xzsystem          centos-7-

default_20171212_amd64.tar.xzsystem          debian-8.0-standard_8.11-

1_amd64.tar.gzsystem          debian-9.0-standard_9.7-

1_amd64.tar.gzsystem          fedora-28-

default_20180907_amd64.tar.xzsystem          fedora-29-

default_20181126_amd64.tar.xzsystem          gentoo-current-

default_20180906_amd64.tar.xzsystem          opensuse-15.0-

default_20180907_amd64.tar.xzsystem          opensuse-42.3-

default_20171214_amd64.tar.xzsystem          ubuntu-16.04-

standard_16.04.5-1_amd64.tar.gzsystem          ubuntu-18.04-

standard_18.04.1-1_amd64.tar.gzsystem          ubuntu-18.10-

standard_18.10-2_amd64.tar.gzsystem          ubuntu-19.04-

standard_19.04-1_amd64.tar.gzcontainer       debian-9-ansible_15.0-

1_amd64.tar.gzcontainer       debian-9-asp-net-apache_15.1-

1_amd64.tar.gzcontainer       debian-9-b2evolution_15.2-

1_amd64.tar.gzcontainer       debian-9-bugzilla_15.2-

1_amd64.tar.gzcontainer       debian-9-cakephp_15.1-

1_amd64.tar.gzcontainer       debian-9-canvas_15.2-

1_amd64.tar.gzcontainer       debian-9-codeigniter_15.1-

1_amd64.tar.gzcontainer       debian-9-collabtive_15.2-

1_amd64.tar.gzcontainer       debian-9-concrete5_15.1-

1_amd64.tar.gzcontainer       debian-9-core_15.0-

1_amd64.tar.gzcontainer       debian-9-couchdb_15.0-

1_amd64.tar.gzcontainer       debian-9-django_15.1-

1_amd64.tar.gzcontainer       debian-9-dokuwiki_15.1-

1_amd64.tar.gzcontainer       debian-9-domain-controller_15.0-

1_amd64.tar.gzcontainer       debian-9-drupal7_15.3-

1_amd64.tar.gzcontainer       debian-9-drupal8_15.5-

1_amd64.tar.gzcontainer       debian-9-e107_15.1-

1_amd64.tar.gzcontainer       debian-9-elgg_15.2-

1_amd64.tar.gzcontainer       debian-9-espocrm_15.2-

1_amd64.tar.gzcontainer       debian-9-ezplatform_15.2-

1_amd64.tar.gzcontainer       debian-9-fileserver_15.0-

1_amd64.tar.gzcontainer       debian-9-foodsoft_15.0-

1_amd64.tar.gzcontainer       debian-9-foswiki_15.1-

1_amd64.tar.gzcontainer       debian-9-gallery_15.1-

1_amd64.tar.gzcontainer       debian-9-ghost_15.2-

1_amd64.tar.gzcontainer       debian-9-gitea_15.2-

1_amd64.tar.gzcontainer       debian-9-gitlab_15.2-

1_amd64.tar.gzcontainer       debian-9-gnusocial_15.1-

1_amd64.tar.gzcontainer       debian-9-icescrum_15.1-

1_amd64.tar.gzcontainer       debian-9-jenkins_15.4-

1_amd64.tar.gzcontainer       debian-9-joomla3_15.4-

1_amd64.tar.gzcontainer       debian-9-lamp_15.1-

1_amd64.tar.gzcontainer       debian-9-lapp_15.0-

1_amd64.tar.gzcontainer       debian-9-laravel_15.1-

1_amd64.tar.gzcontainer       debian-9-lighttpd-php-fastcgi_15.1-

1_amd64.tar.gzcontainer       debian-9-limesurvey_15.1-

1_amd64.tar.gzcontainer       debian-9-magento_15.2-

1_amd64.tar.gzcontainer       debian-9-mahara_15.0-

1_amd64.tar.gzcontainer       debian-9-mambo_15.1-

1_amd64.tar.gzcontainer       debian-9-mantis_15.1-

1_amd64.tar.gzcontainer       debian-9-matomo_15.1-

1_amd64.tar.gzcontainer       debian-9-mattermost_15.2-

1_amd64.tar.gzcontainer       debian-9-mayan-edms_15.1-

1_amd64.tar.gzcontainer       debian-9-mediaserver_15.1-

1_amd64.tar.gzcontainer       debian-9-mediawiki_15.2-

1_amd64.tar.gzcontainer       debian-9-mibew_15.1-

1_amd64.tar.gzcontainer       debian-9-moinmoin_15.0-

1_amd64.tar.gzcontainer       debian-9-mongodb_15.0-

1_amd64.tar.gzcontainer       debian-9-moodle_15.1-

1_amd64.tar.gzcontainer       debian-9-mumble_15.0-

1_amd64.tar.gzcontainer       debian-9-mysql_15.1-

1_amd64.tar.gzcontainer       debian-9-nextcloud_15.1-

1_amd64.tar.gzcontainer       debian-9-nginx-php-fastcgi_15.1-

1_amd64.tar.gzcontainer       debian-9-nodejs_15.0-

1_amd64.tar.gzcontainer       debian-9-observium_15.1-

1_amd64.tar.gzcontainer       debian-9-odoo_15.1-

1_amd64.tar.gzcontainer       debian-9-omeka_15.1-

1_amd64.tar.gzcontainer       debian-9-opencart_15.0-

1_amd64.tar.gzcontainer       debian-9-openldap_15.0-

1_amd64.tar.gzcontainer       debian-9-openvpn_15.1-

1_amd64.tar.gzcontainer       debian-9-orangehrm_15.1-

1_amd64.tar.gzcontainer       debian-9-oscommerce_15.1-

1_amd64.tar.gzcontainer       debian-9-otrs_15.1-

1_amd64.tar.gzcontainer       debian-9-owncloud_15.1-

1_amd64.tar.gzcontainer       debian-9-phpbb_15.1-

1_amd64.tar.gzcontainer       debian-9-phplist_15.2-

1_amd64.tar.gzcontainer       debian-9-plone_15.0-

1_amd64.tar.gzcontainer       debian-9-postgresql_15.0-

1_amd64.tar.gzcontainer       debian-9-prestashop_15.1-

1_amd64.tar.gzcontainer       debian-9-processmaker_15.3-

1_amd64.tar.gzcontainer       debian-9-punbb_15.1-

1_amd64.tar.gzcontainer       debian-9-rails_15.1-

1_amd64.tar.gzcontainer       debian-9-redmine_15.1-

1_amd64.tar.gzcontainer       debian-9-revision-control_15.0-

1_amd64.tar.gzcontainer       debian-9-roundup_15.2-

1_amd64.tar.gzcontainer       debian-9-sahana-eden_15.1-

1_amd64.tar.gzcontainer       debian-9-silverstripe_15.1-

1_amd64.tar.gzcontainer       debian-9-simpleinvoices_15.1-

1_amd64.tar.gzcontainer       debian-9-simplemachines_15.1-

1_amd64.tar.gzcontainer       debian-9-sitracker_15.1-

1_amd64.tar.gzcontainer       debian-9-suitecrm_15.2-

1_amd64.tar.gzcontainer       debian-9-symfony_15.1-

1_amd64.tar.gzcontainer       debian-9-syncthing_15.1-

1_amd64.tar.gzcontainer       debian-9-tkldev_15.0-

1_amd64.tar.gzcontainer       debian-9-tomcat-apache_15.1-

1_amd64.tar.gzcontainer       debian-9-tomcat_15.1-

1_amd64.tar.gzcontainer       debian-9-torrentserver_15.0-

1_amd64.tar.gzcontainer       debian-9-trac_15.0-

1_amd64.tar.gzcontainer       debian-9-tracks_15.1-

1_amd64.tar.gzcontainer       debian-9-typo3_15.1-

1_amd64.tar.gzcontainer       debian-9-ushahidi_15.1-

1_amd64.tar.gzcontainer       debian-9-vanilla_15.1-

1_amd64.tar.gzcontainer       debian-9-web2py_15.1-

1_amd64.tar.gzcontainer       debian-9-wordpress_15.2-

1_amd64.tar.gzcontainer       debian-9-xoops_15.1-

1_amd64.tar.gzcontainer       debian-9-yiiframework_15.1-

1_amd64.tar.gzcontainer       debian-9-youphptube_15.1-

1_amd64.tar.gzcontainer       debian-9-zencart_15.1-

1_amd64.tar.gzcontainer       debian-9-zoneminder_15.1-

1_amd64.tar.gzcontainer       debian-9-zurmo_15.2-1_amd64.tar.gz

Da sind neben kompletten Betriebssystemen auch so schicke Dinge dabei
wie Drupal, Wordpress, Nextcloud, Mattermost, Magento, OpenVPN, usw...

**Geschrieben von Achim Wolf. Mail: achim.wolff@achwo.de Web: [https://achwo.de](https://achwo.de)**
