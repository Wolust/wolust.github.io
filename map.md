---
title: Stadtplan
layout: page
tags: Stadtplan,  Map, Karte
date: '2019-01-02 13:29:00'
permalink: "/map/"
description: Open-Streetmap Karte.  Hier trifft sich  der Wormser Linux User Stammtisch
---


{% assign next = site.data.daten.linuxuser[0] %}
{% if next.ort contains "VHS" %}
  {% assign ort = "VHS" %}
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
 Im [Timescafe](http://www.timescafe.de/index.php?cafe=Worms&site=Startseite), Worms Ludwigsplatz / im Sommer sitzen wir gern draußen.
 <div id="mapid" style="height: 637px;"></div>
{% elsif ort == "VHS" %}
  Wir sind am {{next.tag}}.{{next.monat}}.{{next.jahr}} um {{next.start}} in der Volkshochschule Worms <br />
 Der Stammtisch ist 3 mal jährlich in  den Räumen der [VHS- Worms](https://www.vhs-worms.de/), Neusatzschule Worms Willi-Brandt-Ring 5 / 4.Stock Computerlabor .
 <br />
 Diesmal nicht im Timescafe !
 <div id="mapid" style="height: 637px;"></div>
{% else %}
 Keine Karte gefunden. Exception 404
 <div id="mapid" style="height: 637px;">
 <pre>
 ________________________________________
/ Es gibt keinen Stadtplan für {{ ort }} .   \
| Nur für die Orte \“VHS\” und           |
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
{% elsif ort == "VHS" %}
L.marker([49.627460,8.357028]).addTo(mymap).bindPopup('<b>Linux Stammtisch !</b><br>VHS Neusatzschule').openPopup();
var circle = L.circle([49.627460,8.357028], 500, {
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

Eine Tiefgarage gibt es unter dem Ludwigsplatz, direkt vor dem Cafe
{% elsif ort == "VHS" %}
Wir sind in der VHS .

Die Einfahrt zum Lehrerparkplatz ist sehr schmal. Nicht für SUV geeignet.
{% endif %}

{% include fortune.html %}
