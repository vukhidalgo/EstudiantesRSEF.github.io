---
layout: default
title: Preliminares PLANCKS 2022
permalink: /Prelis/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- HEADER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2022-PLANCKS/Versión definitiva.png">

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? Vuelven en su quinta edición las <strong>Preliminares de PLANCKS</strong> y esta vez... ¡en formato presencial! Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center;"><i class="material-icons">info</i>   Información general</a>
        </div>
        <div class="row">
          <div class="col s12 m3">
            <div class="row center">
              <a href="#equipos-modal" id="equipos-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center;"><i class="material-icons">groups</i>\00a0\00a0Equipos</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center;"><i class="material-icons">remove_red_eye</i>   Supervisoras/es</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="#conocer-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center;"><i class="material-icons">description</i>   Conoce Plancks</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); border: 5px solid #B4B7D4; display: inline-flex; align-items: center;"><i class="material-icons">create</i>   Inscríbete</a>
            </div>
          </div>
        </div>
      </div>
      
<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Información general</a>
        </div>
        <div class="row">
          <div class="col s12 m3">
            <div class="row center">
              <a href="#equipos-modal" id="equipos-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Equipos</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Supervisoras/es</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="#conocer-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Conoce Plancks</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="https://www.iaps.info/" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); border: 2px solid #B4B7D4;">Inscríbete</a>
            </div>
          </div>
        </div>
      </div>

<!-- COUNTDOWN -->
    <p style="text-align: justify;">Las inscripciones para las Preliminares de PLANCKS 2022 se abrirán en...</p>
    <h4 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h4>
      
<!-- COMITÉS -->
      <p style="text-align: justify;">Además, puedes <a href="#comites-modal" class="modal-trigger">consultar aquí</a> los integrantes de los Comités Organizador y Académico de las Preliminares de PLANCKS 2022.</p>
    </div>
      
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
      
  </div>
</div>


<!-- INFO MODAL -->
<div id="info-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Información general</h3>
        <p style="text-align: justify;"><strong>¿Qué es PLANCKS?</strong> PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Además, la competición se enmarca en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. Conoce más información sobre PLANCKS y IAPS <a href="#conocer-modal" class="modal-trigger">aquí</a>. Este año, la prueba tendrá lugar del 5 al 8 de mayo en la Universidad LMU de Munich. ¿Y cómo puede un equipo conseguir clasificarse para esta prueba final? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.</p>
        <p style="text-align: justify;"><strong>¿Cómo y cuándo tendrán lugar las Preliminares?</strong> Las Preliminares de PLANCKS 2022 en España se celebrarán el próximo <strong>viernes 4 de marzo por la tarde</strong>, de forma simultánea en sedes situadas en facultades de física del territorio nacional. La prueba durará 2 horas y tendrá lugar de 15h a 17h o de 16h a 18h dependiendo de la sede, a decisión del Comité Organizador.</p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- EQUIPOS MODAL -->
<div id="equipos-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Información para los equipos</h3>
        <p style="text-align: justify;">Lee la información general de las Preliminares de PLANCKS en <a href="#info-modal" class="modal-trigger">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿En qué consisten las Preliminares?</strong> Las Preliminares de PLANCKS 2022 consistirán en un conjunto de 4 problemas. Puedes ver las pruebas de otros años en la <a class="modal-close" href="#ediciones-anteriores">sección de Ediciones anteriores</a>.</p>
        <p style="text-align: justify;"><strong>¿Cómo puedo participar en las Preliminares?</strong> Es muy sencillo: si conoces un@s cuant@s amig@s con los que te apetecería pasar un buen rato, resolver problemas que resultan todo un reto e inventarte respuestas disparatadas cuando no sepas por donde salir, reúne un equipo de hasta cuatro personas y no lo dudes: <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank">¡inscríbete!</a> Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional. Por cierto, es posible que el comité organizador os pida ayuda para encontrar un aula y un/a supervisor/a para poder garantizar una sede de las Preliminares en vuestra ciudad.</p>
      </div>
    </div>
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="section" style="padding-left: 10px; padding-right: 10px; border: 2px solid #293183;">
        <strong>Términos y Condiciones de IAPS</strong> | Todos los participantes:
        <p style="text-align: justify;">- Declaran conocer que PLANCKS está regulado por el Artículo 12 de las <a href="https://drive.google.com/open?id=1kkJ4YaXtghuGasOxzGdi8yqALL00DI6m" target="_blank">IAPS Regulations</a>.</p>
        <p style="text-align: justify;">- Y se comprometen a cumplir las <a href="https://drive.google.com/open?id=1oTMqzvJEgceuSg4bSMcCfeRRnNv_hSEO" target="_blank">Reglas Generales de Plancks</a>, además del <a href="https://drive.google.com/file/d/1alG7j3AqSKoiXHKLHBo5Eb3-olbKrEoO/view?usp=sharing" target="_blank">IAPS Code of Conduct</a>.</p>
        <p style="text-align: justify;">Además, habrán de tener en cuenta que el Grupo de Estudiantes de la RSEF no ejerce en este convocatoria de PLANCKS de intermediario económico en modo alguno.</p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- SUPERVISORES MODAL -->
<div id="supervisores-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Información para las/los supervisoras/es</h3>
        <p style="text-align: justify;">¡Hola! Si has llegado hasta esta página es que puedes ser un/a posible Supervisor/a de examen en las Preliminares de PLANCKS 2022. A continuación, te introducimos brevemente a las Preliminares y te contamos cuáles son los requisitos y las responsabilidades del cargo.</p>
        <p style="text-align: justify;">Lee sobre la información general de las Preliminares de PLANCKS en <a href="#info-modal" class="modal-trigger">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿Cuáles son los requisitos del cargo de Supervisor/a?</strong> Son dos:</p>
        <list class="a">
          <li style="text-align: justify;">Ser investigador pre- o post-doctoral o ser docente universitario (en activo o jubilado).</li>
          <li style="text-align: justify;">Comprometerse a tener disponibilidad en el rango horario 15:30h - 19:30h el viernes 4 de marzo de 2022, así como a dedicar esa disponibilidad a las responsabilidades abajo indicadas.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cuáles son las responsabilidades del cargo de Supervisor/a?</strong> Son las siguientes:</p>
        <list class="a">
          <li style="text-align: justify;">Imprimir las hojas de la prueba y custodiarlas hasta la realización del examen.</li>
          <li style="text-align: justify;">Comprobar la identificación de los participantes a la prueba.</li>
          <li style="text-align: justify;">Supervisar el desarrollo de la prueba durante su realización y velar por el cumplimiento de las normas establecidas.</li>
          <li style="text-align: justify;">Recoger las hojas de la prueba y escanearlas para enviarlas al Comité Organizador.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cómo puedo supervisar un examen en las Preliminares 2022?</strong> Es muy sencillo: sólo tienes que rellenar <a href="https://www.iaps.info/" id="inscripcion-button" target="_blank">este formulario</a>. Una vez cumplimentado, nos pondremos en contacto contigo para informarte de los siguientes pasos.</p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- CONOCER MODAL -->
<div id="conocer-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Conoce Plancks </h3>
        <p style="text-align: justify;">
          Este año PLANCKS será organizado por la Sociedad Alemana de Física y ya hay 28 países de 4 continentes que han confirmado que organizarán sus preliminares. Si quieres conocer más sobre PLANCKS y IAPS, la asociación internacional de estudiantes de física que nos reúne, clica en los enlaces siguientes.
        </p>
      </div>
    </div>
    <div class="section">
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.dpg-physik.de/vereinigungen/fachuebergreifend/ak/akjdpg/events/wettbewerbe/plancks" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Conoce Plancks</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132)">Conoce IAPS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- COMITÉS MODAL-->
<div id="comites-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Los Comités Organizador y Académico</h3>
        <div class="row">
          <div class="col s12 m6 l7">
            <div class="icon-block">
              <h5 class="center">Comité Organizador</h5>
              <p align="center">Inmaculada Pérez Pérez - Presidenta</p>
              <p align="center">Cristina Balsells Llort - Vicepresidenta</p>
              <p align="center">Pablo Blanco Mas - Secretaría e inscripciones</p>
              <p align="center">Sergio Salvía Fernández - Responsable de Relaciones Públicas</p>
              <p align="center">Odette Alonso-Sañudo Álvarez - Relaciones Públicas</p>
              <p align="center">Alejandro Fernández Muñoz - Responsable Web y IT</p>
              <p align="center">Joan Llobera Querol - Web y IT</p>
              <p align="center">Imanol Corredoira Fernández - Logística</p>
              <p align="center">Irene Carrión López - Logística</p>
              <p align="center">Pedro Villalba González - Logística</p>
            </div>
          </div>
          <div class="col s12 m6 l5">
            <div class="icon-block">
              <h5 class="center">Comité Académico</h5>
              <p align="center">No podemos desvelar su composición hasta después de la realización de la prueba. ;)</p>
              <p align="center"></p>
              <p align="center"></p>
              <p align="center"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- TIMER SCRIPT -->
<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 1, 2022 00:00:01").getTime();

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
