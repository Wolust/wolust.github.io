---
title: Nächster Wolust
layout: post
date: '2018-09-05 17:30:00'
summary: '02.10.2018 19:30 Uhr im Timescafe .'
categories: Ort Zeit
update_date: ''
description: Das ist der Terminkalender der Linux User Gruppe Worms
---

{% for treffen  in site.data.daten.linuxuser %}
 {% if treffen.meeting == "Nächstes Treffen" %}
    
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Wormser Linux User Stammtisch",
  "startDate": "{{treffen.jahr}}-{{treffen.monat}}-{{ treffen.tag }}T19:30-08",
  "location": {
    "@type": "Place",
    "name":"Worms {{treffen.ort}}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ludwigsplatz 1",
      "addressLocality": "{{treffen.ort}}",
      "postalCode": "67547",
      "addressRegion": "RLP",
      "addressCountry": "De"
    }
  },
  "image": "https://wolust.de/images/tux-wolust.jpg",
  "description": "Wormser Linux User treffen sich einmal im Monat. Wenn du Interesse an Linux hast, komm vorbei und setz dich dazu !",
  "endDate": "{{treffen.jahr}}-{{treffen.monat}}-{{ treffen.tag }}T23:00",
  "offers": {
    "@type": "Offer",
    "url": "https://www.wolust.de",
    "price": "0",
    "priceCurrency": "€",
    "availability": "http://schema.org/InStock",
    "validFrom": "2018-09-08T15:20"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Tux der Linux Pinguin"
  }
}
</script>  

{% endif %}
{% endfor %}

<strong>Wormser Linux Stammtisch Termine</strong><br />
Wer sich für Linux oder andere freie Betriebssysteme interessiert und aus der Gegend in und um Worms kommt, der ist bei uns herzlich willkommen. Stelle Deine Projekte, Probleme und Lösungen vor! Tipps für Anfänger und Umsteiger.
<ul>
 {% for treffen  in site.data.daten.linuxuser %}
 {% if treffen.meeting == "Nächstes Treffen" %}
 {{treffen.meeting}} :
   <li><strong>  {{treffen.tag}}.{{treffen.monat}}.{{treffen.jahr}} 19:30 im {{treffen.ort}}
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
     {{treffen.tag }}.{{treffen.monat}}.{{treffen.jahr}} {{treffen.ort}}
 </li>  
  {% endif %}
{% endfor %}
</ul>


{% include share_buttons.html %}
