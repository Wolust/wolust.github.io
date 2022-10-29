---
title: Stadtplan
layout: page
tags: Stadtplan,  Map, Karte
date: '2019-01-02 13:29:00'
permalink: "/map/"
description: Open-Streetmap Karte.  Hier trifft sich  der Wormser Linux User Stammtisch
---


{% assign next = site.data.daten.linuxuser[0] %}
{% if next.ort contains "Hochschule" %}
  {% assign ort = "Hochschule" %}
{% elsif next.ort contains "Timescafe" %}
  {% assign ort = "Timescafe" %}

{% else %}
  {% assign ort = "dummy" %}
{% endif %}


{% if ort == "Timescafe" %}
 Wir sind am {{next.tag}}.{{next.monat}}.{{next.jahr}} um {{next.start}} im Timescafe
 <ul>
 <li>WOLUST jeden Monat am 1. Dienstag</li>
 </ul>
 Im [Timescafe](http://www.timescafe.de), Worms Ludwigsplatz / im Sommer sitzen wir gern draußen.
 <div id="mapid" style="height: 637px;"></div>
{% elsif ort == "Hochschule" %}
Wir sind am {{next.tag}}.{{next.monat}}.{{next.jahr}} um {{next.start}} in der Hochschule Worms <br />
Der Stammtisch ist jährlich in den Räumen der [Hochschule- Worms](https://www.hs-worms.de/lpd-2022-2/),<br />Gebäude N 1. Stock Erenburgerstr. Worms.
 <br />
 Diesmal nicht im Timescafe

 <div id="mapid" style="height: 637px;"></div>
{% else %}
 Keine Karte gefunden. Exception 404
 <div id="mapid" style="height: 637px;">
 <pre>
 ________________________________________
/ Es gibt keinen Stadtplan für {{ ort }} .   \
| Nur für die Orte \“Hochschule\” und           |
| \“Timescafe\” sind Daten hinterlegt.   |
| Bitte 1.Wert \“ort\” in \“daten.yaml\” |
\ anpassen !                             /
 ----------------------------------------
              \   ^__^
               \  (oo)\_______
                  (__)\       )\/\
                      ||----w |
                      ||     ||
</pre>
</div>
{% endif %}





<script>

	var mymap = L.map('mapid').setView([49.63290, 8.36309], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV3b21zZXIiLCJhIjoiY2p1NXByNTI1MHF3NjRkbzJ4bzdyemRrayJ9.gs3MZEcigyG_wdlH_q1Q1w', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);




{% if ort == "Timescafe" %}
 L.marker([49.632493, 8.363262]).addTo(mymap).bindPopup('<b>Linux Stammtisch !</b><br>im Timescafe.').openPopup();
 var circle = L.circle([49.632493, 8.363262], 500, {
{% elsif ort == "Hochschule" %}
 L.marker([49.635074, 8.345403]).addTo(mymap).bindPopup('<b>Linux Stammtisch !</b><br>Hochschule.').openPopup();
var circle = L.circle([49.6350742, 8.3454037], 500, {
{% else %}
lolo
{% endif %}


		color: 'grey',
		fillColor: '#f03',
		fillOpacity: 0.2
	}).addTo(mymap).bindPopup("Maximal noch 500 Meter");



	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

</script>

{% if ort == "Timescafe" %}
Das TimesCafe ist vom Bahnhof zu Fuß in circa 10 Minuten erreichbar.

<s>Eine Tiefgarage gibt es unter dem Ludwigsplatz, direkt vor dem Cafe</s>
{% elsif ort == "Hochschule" %}
Wege zur Veranstaltung : zu Fuß, Bus, Bahn, Auto
{% else %}
lolo
{% endif %}

{% include fortune.html %}
