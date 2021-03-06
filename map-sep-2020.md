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
{% elsif ort == "VHS" %}
  Wir sind am {{next.tag}}.{{next.monat}}.{{next.jahr}} um {{next.start}} in der Volkshochschule Worms <br />
 Der Stammtisch ist 3 mal jährlich in  den Räumen der [VHS- Worms](https://www.vhs-worms.de/), Neusatzschule Worms Willi-Brandt-Ring 5 / 4.Stock Computerlabor .
 <br />
 Diesmal nicht im Timescafe !
{% else %}
 Es gibt keinen Stadtplan für {{ ort }} . Nur für die Orte "VHS" und "Timescafe" sind Daten hinterlegt. Bitte 1.Wert "ort" in "daten.yaml" anpassen !
{% endif %}

<style>
			#map {
						height: 637px;
		}
	</style>
<div id='map'></div>

<script>

var cities = L.layerGroup();

{% if ort == "Timescafe" %}
 L.marker([49.632493, 8.363262]).addTo(cities).bindPopup('<b>Linux Stammtisch !</b><br>im Timescafe.').openPopup();
 var circle = L.circle([49.632493, 8.363262], {
{% elsif ort == "VHS" %}
L.marker([49.627460,8.357028]).addTo(cities).bindPopup('<b>Linux Stammtisch !</b><br>VHS Neusatzschule').openPopup();
var circle = L.circle([49.627460,8.357028], {
{% endif %}
	
    color: 'grey',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 500
}).addTo(cities);

circle.bindPopup("Noch maximal 500 Meter.");

	function success(position) { 
 var latitude = position.coords.latitude; 
 var longitude = position.coords.longitude; 
 	 
	
	L.marker([latitude, longitude]).bindPopup('Dein Standort.').addTo(cities);
	
	}
	function error() { 
	}
	
navigator.geolocation.getCurrentPosition(success, error);

	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGV3b21zZXIiLCJhIjoiY2p1NXByNTI1MHF3NjRkbzJ4bzdyemRrayJ9.gs3MZEcigyG_wdlH_q1Q1w';
		

	
		

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
	var map = L.map('map', {
{% if ort == "Timescafe" %}
center: [49.63290, 8.36309],
{% elsif ort == "VHS" %}
center: [49.627460,8.357028],
{% endif %}	

		
		zoom: 15,
		layers: [ streets,cities]
	});

	var baseLayers = {
		
		"Strassen": streets
	};

	var overlays = {
		"Standort": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);
	
 
</script>

[Diese Karte](https://www.openstreetmap.org/search?query=Worms%20Ludwigsplatz#map=19/49.63256/8.36326&layers=N) ist von Openstreetmap, veröffentlicht unter <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a>

{% if ort == "Timescafe" %}
Das TimesCafe ist vom Bahnhof zu Fuß in circa 10 Minuten erreichbar.

Eine Tiefgarage gibt es unter dem Ludwigsplatz, direkt vor dem Cafe
{% elsif ort == "VHS" %}
Wir sind in der VHS .

Die Einfahrt zum Lehrerparkplatz ist sehr schmal. Nicht für SUV geeignet.
{% endif %}

{% include fortune.html %}
