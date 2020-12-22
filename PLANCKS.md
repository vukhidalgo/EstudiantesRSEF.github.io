---
layout: default
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---

<div class="section">
  <h3 class="center">PLANCKS</h3>
   <p>
      PLANCKS is an annual international physics contest for bachelor and master students. It’s usually a three day event and can include in addition to the competition itself social events like a symposium, excursions, parties and the award ceremony. PLANCKS is arranged by different IAPS member committees.
        <br>
         Participants of PLANCKS compete in teams consisting of three to four members and they have to answer very difficult physics exercises. Some countries are currently organising a preliminary for PLANCKS and the winners of these preliminaries will participate in PLANCKS, in other countries people can show interest and the participants will be selected by a random number generator.
       <br>
          The intention of the competition is to increase international collaboration, social activities and personal development of individual contestants. By gathering physics students from different parts of the world, a setting to exchange ideas and experiences and to challenge each other is created.       
   </p>
      
      {% assign loopindex = 0 %}
      {% for event in site.events reversed %}
      {% if event.title contains "PLANCKS"&&"Preliminares" and loopindex < 4 %}
      {% assign rowfinder = loopindex | modulo:2 %}
      {% if rowfinder == 0 %} 
      <div class="row"> 
      {% endif %}
        <div class="col s12 m6">
          <div class="card horizontal">
            <div class="card-image">
      	      <img style="height: 230px; object-fit: cover;" src="{{ event.cover }}">
            </div>
            <div class="card-content">
          	<span class="card-title grey-text text-darken-4">{{ event.title }}</span>
          	<p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} - {{ event.endingdate | date: '%d %b %Y' }}</small></p>
                </div>
          	<div class="card-action">
          	  <a href="{{ event.site }}">Site</a>
          	  <a href="{{ event.url }}">Info</a>
          	</div>
          </div>
        </div>
      {% if rowfinder == 1 %} 
      </div>
      {% endif %}
      {% assign loopindex = loopindex | plus: 1 %}
      {% endif %}
      {% endfor %}
      {% if loopindex == 1 %} 
      </div>
      {% endif %}
    </div>
