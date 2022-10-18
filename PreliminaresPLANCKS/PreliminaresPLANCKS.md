---
layout: default
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---


<div class="section">

<!-- INTRODUCCIÓN -->
    <p style="text-align: justify;">
    ¿Te gustan los retos y te apasiona la física? ¿Quieres aspirar a representar a nuestro país en un concursoo internacional con estudiantes de física de todo el mundo?
    El Grupo de Estudiantes de la RSEF lleva ya cinco años organizando las <strong>Preliminares de PLANCKS</strong> en España. Para participar sólo hace falta reunir un grupo de motivados como tú para pasar una tarde resolviendo problemas de física.
    Si ves que falta poco para la próxima edición de las Preliminares, entra a ver qué se cuece. Mientras, puedes explorar las últimas ediciones del concurso.
    Y si quieres conocer más sobre PLANCKS, consulta <a href="https://www.iaps.info/events/plancks/what-is-plancks/" target="_blank">esta página</a> de la International Association of Physics Students (IAPS). ¡Bienvenid@!</p>


  <div class="section">

<!-- EDICIONES ANTERIORES -->
  <div class="section" id="ediciones-anteriores">
    <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
    <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
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



<!-- TIMER SCRIPT -->
<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 26, 2022 23:59:59").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "INSCRIPCIONES CERRADAS";
    }
  }, 1000);
</script>
