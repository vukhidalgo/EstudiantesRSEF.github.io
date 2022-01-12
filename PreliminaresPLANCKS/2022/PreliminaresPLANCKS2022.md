---
layout: default
title: Preliminares PLANCKS 2022
permalink: /PreliminaresPLANCKS2022/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
    <img class="materialboxed" width="50%" src="/img/eventos/2022-PLANCKS/LogoPrelis22clogo.png">
    <p>
      ¡Bienvenid@ a la página web oficial de las Preliminares de PLANCKS!
    </p>
    <p style="text-align: justify;">
      PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Este año, la prueba tendrá lugar del 5 al 8 de mayo y estará organizada por la Universidad LMU de Munich. Además, la competición se enmarcará en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. ¿Y cómo puede un equipo conseguir clasificarse para esta competición? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.
    </p>
    <h3>Preliminares de PLANCKS 2022</h3>
    <p style="text-align: justify;">
      Toda la información que necesitas para competir en las Preliminares de PLANCKS 2022  (formato, fechas, formulario de inscripción) estará disponible en...
    </p>
    <h2>Mientras, ¿por qué no empiezas a entrenar?</h2>
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
