---
layout: default
title: Preliminares PLANCKS 2023
permalink: /PreliminaresPLANCKS2023/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2023-PLANCKS/banner.png">


<!-- RESULTADOS -->
<!--      <hr>
      <h2 style="text-align: center;">
        <span style="color: #A1A7EA;">
          <a href="https://drive.google.com/file/d/1EwHQMn3ToKZKP-gpT1EyS-rrCHyS5ZZv/view?usp=sharing" target="_blank"><strong>RESULTADOS DE LAS PRELIMINARES DE PLANCKS 2022</strong></a>
        </span>
      </h2>
      <hr> -->

<!-- SOLUCIONES -->
<!--      <h2 style="text-align: center;">
        <span style="color: #A1A7EA;">
          <a href="https://drive.google.com/drive/folders/17blBbgvKqz17WHktJYhnanSugrKsyZYD?usp=sharing" target="_blank"><strong>SOLUCIONES EXAMEN</strong></a>
        </span>
      </h2>
      <hr> -->

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? ¡Ya tenemos aquí la sexta edición de las <strong>Preliminares de PLANCKS</strong>! Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center;"><i class="material-icons" style="padding-right: 8px;">info</i>Información general</a>
        </div>
        <div class="row center">
          <a href="#equipos-modal" id="equipos-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i>Equipos</a>
          <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i>Supervisoras/es</a>
          <a href="#conocer-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">explore</i>Conoce Plancks</a>
          <a href="#premios-modal" id="premios-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">star</i>Premios</a>
          <a href="#inscripcion-modal" id="inscripcion-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i>Inscríbete</a>
          <!-- <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i>Inscríbete</a> -->
        </div>
      </div>

<!-- COUNTDOWN -->
      <div class="row">  
        <p style="text-align: justify;">Las inscripciones para las Preliminares de PLANCKS 2023 se abrirán en...</p>
        <h4 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h4>
      </div>


<!-- COMITÉS -->
      <p style="text-align: justify;">Además, puedes <a href="#OCPrelis23" class="modal-trigger">consultar aquí</a> los integrantes del Comité Organizador de las Preliminares de PLANCKS 2023.</p>
    </div>

<!-- AUTORES -->

<!--    <div class="section">
      <h3 id="Autores">¡Conoce a l@s autor@s de los problemas!</h3>
        <p style="text-align: justify;">
          Los miembros del Comité Académico de las Preliminares PLANCKS 2022 son:
        </p>

       <div class="col s12 m6">
         <div class="row center">
         {% for person in site.persons %}
         {% if person.evento contains "Prelis2022" %}
         {% if person.presi contains "YES" %}
           <ul class="collection waves-effect waves-light" style="width: 40%">
             <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
               <li class="collection-item avatar2">
                 <img src="{{ person.img }}" alt="" class="circle">
                 <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
                 <p style="padding-top: 10px">{{ person.rol }}</p>
               </li>
             </a>
           </ul>
         {% endif %}
         {% endif %}
         {% endfor %}    
         </div>

         <div class="row center">
         {% for person in site.persons %}
         {% if person.evento contains "Prelis2022" %}
         {% if person.presi contains "NO" %}
           <ul class="collection waves-effect waves-light" style="width: 40%">
             <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
               <li class="collection-item avatar2">
                 <img src="{{ person.img }}" alt="" class="circle">
                 <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
                 <p style="padding-top: 10px">{{ person.rol }}</p>
               </li>
             </a>
           </ul>
         {% endif %}
         {% endif %}
         {% endfor %}    
         </div>
       </div>
     </div> -->


     <!-- Modal PONENTES -->

     {% for person in site.persons %}
     {% if person.evento contains "Prelis2022" %}

     <div id="{{ person.id | remove: "/" }}-modal" class="modal">
       <div class="modal-content">
         <div class="section" style="padding-left: 30px; padding-right: 30px;">

           <div class="row">
             <div class="col s12 m6 l6">
               <div class="row center">
                <img src="{{ person.img }}" alt="" class="circle" width="70%">
               </div>
             </div>
             <div class="col s12 m6 l6">        
               <div class="row center" style="padding-left: 30px; padding-top: 50px;">
                 <h3 class="justify">{{ person.nombre }}</h3>
                 <h5 class="justify">{{ person.aff }}</h5>
                 <h5 class="justify" style="padding-top: 10px;">{{ person.roldes }}</h5>
               </div>
             </div>
           </div>

           <div class="row">
             <h2 class="justify">Biografía</h2>
             {%- if person.bio1 -%}<p style="text-align: justify;">
             {{ person.bio1 }}
             </p>{%- endif -%}
             {%- if person.bio2 -%}<p style="text-align: justify;">
             {{ person.bio2 }}
             </p>{%- endif -%}
             {%- if person.bio3 -%}<p style="text-align: justify;">
             {{ person.bio3 }}
             </p>{%- endif -%}
           </div>

         </div>
       </div>
       <div class="modal-footer">
         <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
       </div>
     </div>

     {% endif %}
     {% endfor %}


<!-- MAP -->
    <div class="section">
      <div class="section">
        <strong><h3>El mapa de las Preliminares de PLANCKS 2023</h3></strong>
        <p style="text-align: justify;">¡En el siguiente mapa puedes consultar todas las sedes y correspondientes aulas de las Preliminares 2023!</p>

          <html>
            <head>
              <style>
                #map {
                  height: 600px;
                  width: 100%;
                }
              </style>
            </head>

            <body>
          <div id="map"></div>
          <script>            
            function initMap() {
              // A couple of places
              var centerPen = {lat: 40.416775, lng: -3.703790};
              var centerPos = {lat: 36.7875,   lng: -7.0135};
              // Facultades de https://www.cofis.es/elfisico/facultades.html
              var UA  = {lat: 38.386904, lng: -0.515303}; // Facultat de Ciències (Sant Vicent del Raspeig)
              var UAB = {lat: 41.501105, lng: 2.109064}; // Facultat de Ciències (Bellaterra)
              var UAM = {lat: 40.545385, lng: -3.695173}; // Facultad de Ciencias
              var UB  = {lat: 41.384376, lng: 2.117189}; // Facultat de Física
              var UNICAN = {lat: 43.471183, lng: -3.801105}; // Facultad de Ciencias (Santander)
              var UCM = {lat: 40.450831, lng: -3.726087}; // Facultad de Ciencias Físicas
              var UCO = {lat: 37.914788, lng: -4.716931}; // Facultad de Ciencias
              var UEM = {lat: 40.373069, lng: -3.919072}; // Universidad Europea de Madrid (Villaviciosa de Odón)
              var UEV = {lat: 39.475430, lng: -0.365282}; // Universidad Europea de Valencia
              var UNEX = {lat: 38.884575, lng: -7.009206}; // Facultad de Ciencias (Badajoz)
              var UGR = {lat: 37.179751, lng: -3.609293}; // Facultad de Ciencias
              var UIB = {lat: 39.636006, lng: 2.647993}; // Edifici Mateu Orfila i Rotger
              var ULL = {lat: 28.481822, lng: -16.320882}; // Facultad de Ciencias (San Cristóbal de La Laguna)
              var UM  = {lat: 38.020841, lng: -1.169795}; // Facultad de Química
              var UNED  = {lat: 38.016856, lng: -1.170757}; // Facultad de Economía y Empresa
              var UNIOVI = {lat: 43.357762, lng: -5.853536}; // Facultad de Ciencias
              var EHU = {lat: 43.330791, lng: -2.969898}; // Zientzia eta Teknologia Fakultatea (Leioa)
              var USAL = {lat: 40.960396, lng: -5.670694}; // Facultad de Ciencias
              var USC = {lat: 42.875917, lng: -8.560536}; // Facultade de Física
              var US =  {lat: 37.359384, lng: -5.986452}; // Facultad de Física
              var UV  = {lat: 39.507232, lng: -0.420012}; // Facultat de Física (Burjassot)
              var UVA = {lat: 41.663388, lng: -4.705462}; // Facultad de Ciencias
              var UNIZAR = {lat: 41.642249, lng: -0.900222}; // Facultad de Ciencias
              var URJC = {lat: 40.335479, lng: -3.877537}; // Campus de Móstoles
              var UC3M = {lat: 40.332473, lng: -3.765400}; // Campus de Leganés
              var UPC = {lat: 41.388412, lng: 2.112770}; // Campus Diagonal
              // Create map, draw it in the targetElem and sets the cameraPosition
              var targetElem = document.getElementById('map');
              // var cameraPosition = { zoom: 5.25, center: centerPos };
              var cameraPosition = { zoom: 6, center: centerPen };
              var map = new google.maps.Map(targetElem, cameraPosition);

              // We have already displayed the map, let's add markers
<!--
              var markerUCM = new google.maps.Marker({ map: map, position: UCM, title: "Universidad Complutense de Madrid" });
              const UCMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Complutense de Madrid</h5>' +
                '<div id="bodyContent"><p><b>Facultad de Ciencias Físicas.</b> Aula 4A.</p>' +
                "</div></div>";
              const UCMwindow = new google.maps.InfoWindow({ content: UCMcontent, });
              markerUCM.addListener("click", () => { UCMwindow.open({ anchor: markerUCM, map, shouldFocus: false, }); });
-->
            }
          </script>

          <!-- Loads maps library (with places library) and then calls initMap() -->
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap&key=AIzaSyD1Jrpoe5nWt64lkJlxQ_9f5oAn7p5qvoU">
          </script>
        </body>
      </html>
    </div>

<!-- EDICIONES ANTERIORES -->
    <div class="section" id="ediciones-anteriores">
      <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
      <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.title contains "Preliminares de PLANCKS"%}
    {% if event.title != "Preliminares de PLANCKS 2023"%}
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
            {% if event.comm != nil %}<a href="{{ event.comm }}">Comités Organizador y Académico</a>{% endif %}
        	</div>
        </div>
      </div>
    {% if rowfinder == 1 %}
      </div>
    {% endif %}
    {% assign loopindex = loopindex | plus: 1 %}
    {% endif %}
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
      <div class="row center">
        <h3 class="justify">Información general</h3>
        <p style="text-align: justify;"><strong>¿Qué es PLANCKS?</strong> PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Además, la competición se enmarca en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. Conoce más información sobre PLANCKS y IAPS <a href="#conocer-modal" class="modal-trigger">aquí</a>. Este año, la prueba tendrá lugar del 12 al 16 de mayo en la Universidad de Milán. ¿Y cómo puede un equipo conseguir clasificarse para esta prueba final? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.</p>
        <p style="text-align: justify;"><strong>¿Cómo y cuándo tendrán lugar las Preliminares?</strong> Las Preliminares de PLANCKS 2023 en España se celebrarán el próximo <strong>viernes 3 de marzo por la tarde</strong>, de forma simultánea en sedes situadas en facultades de física del territorio nacional. La prueba durará 3 horas y tendrá lugar de 16:00 a 19:00 (GMT+1).</p>
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
      <div class="row center">
        <h3 class="justify">Información para equipos</h3>
        <p style="text-align: justify;">Lee la información general de las Preliminares de PLANCKS en <a href="#info-modal" class="modal-trigger">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿En qué consisten las Preliminares?</strong> Las Preliminares de PLANCKS 2023 consistirán en un conjunto de 4 problemas. Puedes ver las pruebas de otros años en la <a class="modal-close" href="#ediciones-anteriores">sección de Ediciones anteriores</a>.</p>
        <p style="text-align: justify;"><strong>¿Cómo puedo participar en las Preliminares?</strong> Es muy sencillo: si conoces un@s cuant@s amig@s con los que te apetecería pasar un buen rato, resolver problemas que resultan todo un reto e inventarte respuestas disparatadas cuando no sepas por donde salir, reúne un equipo de hasta cuatro personas y no lo dudes: <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank">¡inscríbete!</a> Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional. Por cierto, es posible que el comité organizador os pida ayuda para encontrar un aula y un/a supervisor/a para poder garantizar una sede de las Preliminares en vuestra ciudad.</p>
        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a href="https://shorturl.at/bdhDU" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="section" style="padding-left: 15px; padding-right: 15px; border: 2px solid #018c45;">
        <strong>Términos y Condiciones de IAPS</strong> | Todos los participantes:
        <p style="text-align: justify;">- Declaran conocer que PLANCKS está regulado por el Artículo 12 de las <a href="https://www.iaps.info/wp-content/uploads/2019/10/IAPS-Regulations-Final-Version-Sept2019.pdf" target="_blank">IAPS Regulations</a>.</p>
        <p style="text-align: justify;">- Y se comprometen a cumplir las <a href="https://www.iaps.info/wp-content/uploads/2021/01/PLANCKS-General-Rules-EGM-2020.pdf" target="_blank">Reglas Generales de PLANCKS</a>, además del <a href="https://www.iaps.info/wp-content/uploads/2022/08/IAPS-Code-of-Conduct-2020.pdf" target="_blank">IAPS Code of Conduct</a>.</p>
        <p style="text-align: justify;">Además, habrán de tener en cuenta que el Grupo de Estudiantes de la RSEF no ejerce en modo alguno de intermediario económico en este convocatoria de PLANCKS.</p>
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
      <div class="row center">
        <h3 class="justify">Información para supervisoras/es</h3>
        <p style="text-align: justify;">¡Hola! Si has llegado hasta esta página es que puedes ser un/a posible supervisor/a de examen en las Preliminares de PLANCKS 2023. A continuación, te introducimos brevemente a las Preliminares y te contamos cuáles son los requisitos y las responsabilidades del cargo.</p>
        <p style="text-align: justify;">Lee sobre la información general de las Preliminares de PLANCKS en <a href="#info-modal" class="modal-trigger">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿Cuáles son los requisitos del cargo de Supervisor/a?</strong> Son dos:</p>
        <list class="a">
          <li style="text-align: justify;">Ser investigador pre- o post-doctoral o ser docente universitario (en activo o jubilado).</li>
          <li style="text-align: justify;">Comprometerse a tener disponibilidad en el rango horario 15:30h - 19:30h el viernes 3 de marzo de 2023, así como a dedicar esa disponibilidad a las responsabilidades abajo indicadas.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cuáles son las responsabilidades del cargo de Supervisor/a?</strong> Son las siguientes:</p>
        <list class="a">
          <li style="text-align: justify;">Imprimir las hojas de la prueba y custodiarlas hasta la realización del examen.</li>
          <li style="text-align: justify;">Comprobar la identificación de los participantes a la prueba.</li>
          <li style="text-align: justify;">Supervisar el desarrollo de la prueba durante su realización y velar por el cumplimiento de las normas establecidas.</li>
          <li style="text-align: justify;">Recoger las hojas de la prueba y escanearlas para enviarlas al Comité Organizador.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cómo puedo supervisar un examen en las Preliminares 2023?</strong> Es muy sencillo: sólo tienes que rellenar <a href="https://forms.gle/GSXuS5ELfqqj7mhH7" id="inscripcion-supervisores-button" target="_blank">este formulario</a>. Una vez cumplimentado, nos pondremos en contacto contigo para informarte de los siguientes pasos.</p>
        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a href="https://shorturl.at/bdhDU" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
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
      <div class="row center">
        <h3 class="justify">Conoce Plancks </h3>
        <p style="text-align: justify;">
          Este año PLANCKS será organizado por la Asociación Italiana de Estudiantes de Física. La última edición reunió 250 participantes de más de 50 países. Si quieres conocer más sobre PLANCKS y IAPS, la International Association of Physics Students, clica en los enlaces siguientes.
        </p>
      </div>
    </div>
    <div class="section">
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/events/plancks/plancks-2023-in-milan/" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: #018c45">Conoce Plancks</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: #018c45">Conoce IAPS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- PREMIOS MODAL -->
<div id="premios-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Premios</h3>
        <p style="text-align: justify;">
          Este año PLANCKS será organizado por la Asociación Italiana de Estudiantes de Física. La última edición reunió 250 participantes de más de 50 países. Si quieres conocer más sobre PLANCKS y IAPS, la International Association of Physics Students, clica en los enlaces siguientes.
        </p>
      </div>
    </div>
    <div class="section">
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/events/plancks/plancks-2023-in-milan/" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: #018c45">Conoce Plancks</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: #018c45">Conoce IAPS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- INSCRIPCIÓN MODAL -->
<div id="inscripcion-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section">
      <div class="row center">
        <h3 class="justify">¡Inscríbete!</h3>
      </div>
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i>Inscripción equipos</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://forms.gle/GSXuS5ELfqqj7mhH7" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #018c45; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i>Inscripción supervisoras/es</a>
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


<!-- MODAL COMITÉ ORGANIZADOR -->

<div id="OCPrelis23" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">El Comité Organizador</h3>

        {% for item in site.data.prelis %}
        {% for miembro in item.miembros %}
        {% if miembro.class contains "OC" %}
        <ul class="collection waves-effect waves-light">
          <li class="collection-item avatar2">
            <img src="{{ miembro.img }}" alt="imagen" class="circle">
            <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
            <p>{{ miembro.rol }}</p>
          </li>
        </ul>
        {% endif %}
        {% endfor %}
        {% endfor %}

        <p>Conócenos mejor en la <a href="{{ site.url}}/junta-de-gobierno" target="_blank">web de la Junta de Gobierno</a> del Grupo de Estudiantes de la RSEF.</p>


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
  var countDownDate = new Date("Feb 3, 2023 0:00:01").getTime();

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
      document.getElementById("countdown").innerHTML = "INSCRIPCIONES ABIERTAS";
    }
  }, 1000);
</script>
