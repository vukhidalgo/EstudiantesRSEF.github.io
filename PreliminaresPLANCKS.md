---
layout: default
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
      <h3 class="center"><strong>Preliminares de PLANCKS</strong></h3>
        <p>
          ¡Bienvenid@ a la página web oficial de las Preliminares de PLANCKS!
        </p>
        <p>
          PLANCKS (Physics League Across Numerous Countries for Kick-ass Students), el segundo mayor evento de IAPS, consiste en una competición internacional de física teórica para equipos de tres a cuatro estudiantes de grado y/o máster. La prueba tiene lugar en un país distinto cada año, y se enmarca en un evento de varios días repleto de charlas, excursiones y actividades para que los participantes se conozcan entre sí. ¿Cómo puede un equipo conseguir clasificarse para esta prueba final? Desde España, debe clasificarse en las Preliminares que organizamos a nivel nacional.
        </p>
        <p>
         En esta página puedes encontrar toda la información que necesitas sobre Preliminares pasadas (¡con cuyos exámenes poder practicar!), así como sobre el formato, fecha, hora y lugar (en 2021, online) de la próxima edición (aviso: la información sobre la próxima edición se actualizará en torno a mediados - finales de enero de 2021).   
        </p>
      
<!-- <div class="container">
   <div class="section">
      <div class="row center">
        <a href="{{ site.url }}/PreliminaresPLANCKS/" id="about-button" class="btn-large waves-effect waves-light">Preliminares de PLANCKS 2021</a>
      </div>
   </div>
</div> -->

      {% assign loopindex = 0 %}
      {% for event in site.events reversed %}
      {% if event.title contains "Preliminares de PLANCKS"%}
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
          	<p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} {% if event.endingdate != nil %} - {{ event.endingdate | date: '%d %b %Y' }}                    {% endif %} </small></p>
            </div>
          	<div class="card-action">
          	  <a href="{{ event.ranking }}" target="_blank">Clasificación</a>
              <a href="{{ event.exam }}" target="_blank">Soluciones</a>
          	  <a href="{{ event.url }}">Post web</a>
              <a href="{{ event.comm }}">Comités Organizador y Académico</a>
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
