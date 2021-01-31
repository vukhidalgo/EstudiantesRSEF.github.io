---
layout: default
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
      <h3 class="center"><strong>Preliminares de PLANCKS</strong></h3>
      <img class="materialboxed" width="100%" src="/img/eventos/2021-PLANCKS/Header - Prelis PLANCKS 21.png">
        <p>
          ¡Bienvenid@ a la página web oficial de las Preliminares de PLANCKS!
        </p>
        <p style="text-align: justify;">
          PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Este año, la prueba será online, tendrá lugar del 6 al 9 de mayo y estará organizada por la Universidad de Oporto. Además, la competición se enmarcará en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. ¿Y cómo puede un equipo conseguir clasificarse para esta competición? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.
        </p>
        <p>
          <strong>En esta web encontrarás información sobre</strong>: 
        </p>
      <list class="a">
        <li><a href="#PLANCKS&IAPS">Sitios Web oficiales</a> - PLANCKS 2021 y IAPS.</li>
        <li><a href="#Equipos">Equipos</a> - Preliminares de PLANCKS 2021.</li>
        <li><a href="#Supervisores">Supervisores de examen</a> - Preliminares de PLANCKS 2021.</li>
        <li><a href="#EdicionesAnteriores">Ediciones anteriores de las Preliminares</a>, con cuyos exámenes poder practicar.</li>
      </list>
    </div>
    <div class="section">
      <h3 id="PLANCKS&IAPS">PLANCKS 2021 & IAPS</h3>
      <h2>Sitios Web oficiales</h2>
      <p style="text-align: justify;">
        Descubre abajo toda la información sobre PLANCKS 2021 y sobre todas las oportunidades y eventos que organiza IAPS, la International Association of Physics Students. Por cierto, ¿sabías que, desde España, sólo se puede formar parte de IAPS través del Grupo de Estudiantes de la RSEF?
      </p>
      <div class="section">
        <div class="row">
          <div class="col s12 m6">
            <div class="row center">
              <a href="https://2021.plancks.org/" target="_blank" id="about-button" class="btn-large waves-effect waves-light">PLANCKS 2021</a>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="row center">
              <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light">Descubre IAPS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h3 id="Equipos">Preliminares de PLANCKS 2021</h3>
      <h2>Equipos - Información & Inscripción</h2>
        <p style="text-align: justify;">
          Clica en el botón inferior y descubre todo lo que necesitas saber para competir en las Preliminares de PLANCKS 2021: formato, fechas y formulario de inscripción. Este año, el formato online nos obliga a admitir a tan sólo a 30 equipos, y esto es <em>first come, first served</em>, así que date prisa y... ¡No pierdas tu plaza!
        </p>
    </div>
    <div class="section">
      <div class="row center">
        <a href="https://estudiantes.rsef.es/eventos-internacionales/2021/03/05/PreliminaresPLANCKS2021/" class="btn-large waves-effect waves-light">Equipos 2021</a>
      </div>
    </div>
    <div class="section">
      <h3 id="Supervisores">Preliminares de PLANCKS 2021</h3>
      <h2>Supervisores de examen - Información & Inscripción</h2>
        <p style="text-align: justify;">
          Clica en el botón inferior y descubre cómo convertirte en Supervisor/a de examen en las Preliminares de PLANCKS 2021. Se te redirigirá a una página con información sobre las Preliminares, y sobre los requisitos y responsabilidades del cargo. En esa página podrás acceder también al formulario de inscripción para Supervisores/as.
        </p>
      </div>
      <div class="section">
        <div class="row center">
          <a href="{{ site.url }}/PreliminaresPLANCKS/2021/Supervisores/" id="about-button" class="btn-large waves-effect waves-light">Supervisores/as examen 2021</a>
        </div>
      </div>
      <div class="section">
      <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
        <p style="text-align: justify;">
          Consulta en esta sección información sobre ediciones anteriores de las Preliminares de PLANCKS, como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.
        </p>
      </div>
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
