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
          PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es una competición internacional de física teórica. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. La competición se enmarca en un evento de varios días repleto de charlas, excursiones y actividades para que los participantes se conozcan entre sí. ¿Cómo puede un equipo conseguir clasificarse para esta competición? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.
        </p>
        <p>
          <strong>En esta web encontrarás información sobre</strong>: 
        </p>
      <list class="a">
        <li>La <a href="#Prelis2021">edición 2021 de las Preliminares de PLANCKS</a>.</li>
        <li>Sobre los <a href="#Sup">requisitos, responsabilidades e inscripción de los Supervisores de examen</a> de la edición 2021.</li>
        <li>Sobre <a href="#EdAnt"> ediciones anteriores de las Preliminares</a>, con cuyos exámenes poder practicar.</li>
      </list>
      <p></p> <!-- Some very ugly way of spacing... -->
      <h2 id="Prelis2021"><strong>Preliminares de PLANCKS 2021</strong></h2>
        <p>
          Las Preliminares de PLANCKS 2021 consistirán en un conjunto de 4-5 problemas, y tendrán lugar <strong>online</strong> el <strong>viernes 5 de marzo de 16:00h a 19:00h</strong> (se requerirá conectarse con 15 minutos de antelación). Durante las Preliminares, cada equipo contará con una sala de videollamada para que sus miembros puedan comunicarse entre sí y realizar el examen. Todas y cada una de esas salas estarán supervisadas en todo momento.
        </p>
        <p>
          Tod@ estudiante que desee participar deberá reunir un equipo de tres a cuatro personas, también estudiantes de grado y/o máster. Una vez formado el equipo, deberá rellenar el formulario de inscripción. <strong>La inscripción a las Preliminares de PLANCKS 2021 se abrirá en esta página web a las 00:01 del 1 de febrero de 2021</strong>. Este año, las plazas son limitadas, y nuestra filosofía es 'first come, first served', ¡así que apuntaros cuanto antes y no perdáis vuestra plaza! Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional.
        </p>
      <p></p> <!-- Some very ugly way of spacing... -->
      <h2 id="Sup"><strong>Supervisores de examen 2021</strong></h2>
        <p>
          Clica en el botón inferior y descubre cómo convertirte en Supervisor/a de examen en las Preliminares de PLANCKS 2021. Se te redirigirá a una página con información sobre las Preliminares, y sobre los requisitos y responsabilidades del cargo. En esa página podrás acceder también al formulario de inscripción para Supervisores/as.
        </p>
      
<div class="container">
   <div class="section">
      <div class="row center">
        <a href="{{ site.url }}/PreliminaresPLANCKS/2021/Supervisores/" id="about-button" class="btn-large waves-effect waves-light">Supervisores/as examen 2021</a>
      </div>
   </div>
</div>
      <p></p> <!-- Some very ugly way of spacing... -->
      <h2 id="EdAnt"><strong>Ediciones Anteriores</strong></h2>
        <p>
          Consulta en esta sección información sobre ediciones anteriores de las Preliminares de PLANCKS, como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.
        </p>

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
