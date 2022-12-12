---
layout: default
title: Física, ¿y ahora qué?
permalink: /FisicaYAhoraQue/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- HEADER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2022-Gastrofisica/banner-gastrofisica.png">

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">Empezamos este nuevo curso con el ciclo de charlas <strong>"Física... ¿y ahora qué?"</strong>
        En estas charlas en colaboración con el <a href="https://www.cofis.es" id="cofis" target="_blank">Colegio Oficial de Físicos</a> contaremos con diversos invitados que nos contarán más sobre la diversidad de salidas de la Física, desde la empresa hasta la investigación científica. </p>
    
<!-- EDICIONES ANTERIORES -->
    <div class="section" id="ediciones-anteriores">
      <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
      <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.title contains "y ahora qu"%}
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
</div>
