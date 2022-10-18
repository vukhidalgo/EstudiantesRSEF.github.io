---
layout: default
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- HEADER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2022-PLANCKS/Versión definitiva.png">

      <!-- COMENTARIO PARA PRÓXIMAS VECES: LOS ARCHIVOS ES MEJOR NOMBRARLOS SIN UTILIZAR ACENTOS Y SIN DEJAR ESPACIOS ENTRE PALABRAS -->

<!-- RESULTADOS -->
      <hr>
      <h2 style="text-align: center;">
        <span style="color: #A1A7EA;">
          <a href="https://drive.google.com/file/d/1EwHQMn3ToKZKP-gpT1EyS-rrCHyS5ZZv/view?usp=sharing" target="_blank"><strong>RESULTADOS DE LAS PRELIMINARES DE PLANCKS 2022</strong></a>
        </span>
      </h2>
      <hr>

<!-- SOLUCIONES -->
      <h2 style="text-align: center;">
        <span style="color: #A1A7EA;">
          <a href="https://drive.google.com/drive/folders/17blBbgvKqz17WHktJYhnanSugrKsyZYD?usp=sharing" target="_blank"><strong>SOLUCIONES EXAMEN</strong></a>
        </span>
      </h2>
      <hr>

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? Vuelven en su quinta edición las <strong>Preliminares de PLANCKS</strong> y esta vez... ¡en formato presencial! Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center;"><i class="material-icons" style="padding-right: 8px;">info</i>Información general</a>
        </div>
        <div class="row center">
          <a href="#equipos-modal" id="equipos-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i>Equipos</a>
          <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i>Supervisoras/es</a>
          <a href="#conocer-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">explore</i>Conoce Plancks</a>
          <a href="#inscripcion-modal" id="inscripcion-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i>Inscríbete</a>
          <!-- <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i>Inscríbete</a> -->
        </div>
      </div>


<!-- COMITÉS -->
      <p style="text-align: justify;">Además, puedes <a href="#ModalComOrgPre22" class="modal-trigger">consultar aquí</a> los integrantes del Comité Organizador de las Preliminares de PLANCKS 2022.</p>
    </div>

<!-- AUTORES -->

    <div class="section">
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
     </div>


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
        <strong><h3>El mapa de las Preliminares de PLANCKS 2022</h3></strong>
        <p style="text-align: justify;">¡En el siguiente mapa puedes consultar todas las sedes y correspondientes aulas de las Preliminares 2022!</p>

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

              var markerUCM = new google.maps.Marker({ map: map, position: UCM, title: "Universidad Complutense de Madrid" });
              const UCMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Complutense de Madrid</h5>' +
                '<div id="bodyContent"><p><b>Facultad de Ciencias Físicas.</b> Aula 4A.</p>' +
                "</div></div>";
              const UCMwindow = new google.maps.InfoWindow({ content: UCMcontent, });
              markerUCM.addListener("click", () => { UCMwindow.open({ anchor: markerUCM, map, shouldFocus: false, }); });

              var markerUV = new google.maps.Marker({ map: map, position: UV, title: "Universitat de València" });
              const UVcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat de València</h5>' +
                '<div id="bodyContent"><p><b>Facultat de Física.</b> Aula 4103, Bloque D.</p>' +
                "</div></div>";
              const UVwindow = new google.maps.InfoWindow({ content: UVcontent, });
              markerUV.addListener("click", () => { UVwindow.open({ anchor: markerUV, map, shouldFocus: false, }); });

              var markerURJC = new google.maps.Marker({ map: map, position: URJC, title: "Universidad Rey Juan Carlos" });
              const URJCcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Rey Juan Carlos</h5>' +
                '<div id="bodyContent"><p><b>Departamental II.</b> Aula 028.</p>' +
                "</div></div>";
              const URJCwindow = new google.maps.InfoWindow({ content: URJCcontent, });
              markerURJC.addListener("click", () => { URJCwindow.open({ anchor: markerURJC, map, shouldFocus: false, }); });

              var markerUS = new google.maps.Marker({ map: map, position: US, title: "Universidad de Sevilla" });
              const UScontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Sevilla</h5>' +
                '<div id="bodyContent"><p><b>Facultad de Física.</b> Aula Magna.</p>' +
                "</div></div>";
              const USwindow = new google.maps.InfoWindow({ content: UScontent, });
              markerUS.addListener("click", () => { USwindow.open({ anchor: markerUS, map, shouldFocus: false, }); });

              var markerUAB = new google.maps.Marker({ map: map, position: UAB, title: "Universitat Autònoma de Barcelona" });
              const UABcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat Autònoma de Barcelona</h5>' +
                '<div id="bodyContent"><p><b>Facultat de Ciències.</b> Aula C3/032.</p>' +
                "</div></div>";
              const UABwindow = new google.maps.InfoWindow({ content: UABcontent, });
              markerUAB.addListener("click", () => { UABwindow.open({ anchor: markerUAB, map, shouldFocus: false, }); });

              var markerUNED = new google.maps.Marker({ map: map, position: UNED, title: "Universidad Nacional de Educación a Distancia" });
              const UNEDcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Murcia</h5>' +
                '<div id="bodyContent"><p><b>Facultad de Economía y Empresa.</b> B1.0.095. Aula F0/20.</p>' +
                "</div></div>";
              const UNEDwindow = new google.maps.InfoWindow({ content: UNEDcontent, });
              markerUNED.addListener("click", () => { UNEDwindow.open({ anchor: markerUNED, map, shouldFocus: false, }); });

              var markerUVA = new google.maps.Marker({ map: map, position: UVA, title: "Universidad de Valladolid" });
              const UVAcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Valladolid</h5>' +
                '<div id="bodyContent"><p><b>Aulario M. Delibes.</b> Aula 108.</p>' +
                "</div></div>";
              const UVAwindow = new google.maps.InfoWindow({ content: UVAcontent, });
              markerUVA.addListener("click", () => { UVAwindow.open({ anchor: markerUVA, map, shouldFocus: false, }); });

              var markerUC3M = new google.maps.Marker({ map: map, position: UC3M, title: "Universidad Carlos III de Madrid" });
              const UC3Mcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Carlos III de Madrid</h5>' +
                '<div id="bodyContent"><p>Aula 1.2.G04.</p>' +
                "</div></div>";
              const UC3Mwindow = new google.maps.InfoWindow({ content: UC3Mcontent, });
              markerUC3M.addListener("click", () => { UC3Mwindow.open({ anchor: markerUC3M, map, shouldFocus: false, }); });

              var markerUSAL = new google.maps.Marker({ map: map, position: USAL, title: "Universidad de Salamanca" });
              const USALcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Salamanca</h5>' +
                '<div id="bodyContent"><p><b>Edificio trilingüe.</b> Aula V.</p>' +
                "</div></div>";
              const USALwindow = new google.maps.InfoWindow({ content: USALcontent, });
              markerUSAL.addListener("click", () => { USALwindow.open({ anchor: markerUSAL, map, shouldFocus: false, }); });

              var markerUPC = new google.maps.Marker({ map: map, position: UPC, title: "Universitat Politècnica de Catalunya" });
              const UPCcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat Politècnica de Catalunya</h5>' +
                '<div id="bodyContent"><p><b>Campus Nord.</b> Aula A4-105.</p>' +
                "</div></div>";
              const UPCwindow = new google.maps.InfoWindow({ content: UPCcontent, });
              markerUPC.addListener("click", () => { UPCwindow.open({ anchor: markerUPC, map, shouldFocus: false, }); });

              var markerUAM = new google.maps.Marker({ map: map, position: UAM, title: "Universidad Autónoma de Madrid" });
              const UAMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Autónoma de Madrid</h5>' +
                '<div id="bodyContent"><p><b>Módulo 13.</b> Aula 401.</p>' +
                "</div></div>";
              const UAMwindow = new google.maps.InfoWindow({ content: UAMcontent, });
              markerUAM.addListener("click", () => { UAMwindow.open({ anchor: markerUAM, map, shouldFocus: false, }); });

              var markerUNIZAR = new google.maps.Marker({ map: map, position: UNIZAR, title: "Universidad de Zaragoza" });
              const UNIZARcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Zaragoza</h5>' +
                '<div id="bodyContent"><p><b>Edificio de Física.</b> Aula 3.</p>' +
                "</div></div>";
              const UNIZARwindow = new google.maps.InfoWindow({ content: UNIZARcontent, });
              markerUNIZAR.addListener("click", () => { UNIZARwindow.open({ anchor: markerUNIZAR, map, shouldFocus: false, }); });

              var markerUNIOVI = new google.maps.Marker({ map: map, position: UNIOVI, title: "Universidad de Oviedo" });
              const UNIOVIcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Oviedo</h5>' +
                '<div id="bodyContent"><p>Aula B03.</p>' +
                "</div></div>";
              const UNIOVIwindow = new google.maps.InfoWindow({ content: UNIOVIcontent, });
              markerUNIOVI.addListener("click", () => { UNIOVIwindow.open({ anchor: markerUNIOVI, map, shouldFocus: false, }); });

              var markerEHU = new google.maps.Marker({ map: map, position: EHU, title: "Euskal Herriko Unibertsitatea" });
              const EHUcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Euskal Herriko Unibertsitatea</h5>' +
                '<div id="bodyContent"><p><b>Facultad de Ciencia y Tecnología.</b> Aula 2.4.</p>' +
                "</div></div>";
              const EHUwindow = new google.maps.InfoWindow({ content: EHUcontent, });
              markerEHU.addListener("click", () => { EHUwindow.open({ anchor: markerEHU, map, shouldFocus: false, }); });

              var markerUM = new google.maps.Marker({ map: map, position: UM, title: "Universidad de Murcia" });
              const UMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Murcia</h5>' +
                '<div id="bodyContent"><p>Sala de seminarios CIOyN.</p>' +
                "</div></div>";
              const UMwindow = new google.maps.InfoWindow({ content: UMcontent, });
              markerUM.addListener("click", () => { UMwindow.open({ anchor: markerUM, map, shouldFocus: false, }); });

              var markerUB = new google.maps.Marker({ map: map, position: UB, title: "Universitat de Barcelona" });
              const UBcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat de Barcelona</h5>' +
                '<div id="bodyContent"><p><b>Facultat de Física.</b> Sala de Juntes 104.</p>' +
                "</div></div>";
              const UBwindow = new google.maps.InfoWindow({ content: UBcontent, });
              markerUB.addListener("click", () => { UBwindow.open({ anchor: markerUB, map, shouldFocus: false, }); });

              var markerUA = new google.maps.Marker({ map: map, position: UA, title: "Universitat d'Alacant" });
              const UAcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                "<h5 class='firstHeading'>Universitat d'Alacant</h5>" +
                '<div id="bodyContent"><p>Sala de juntas del DFISTS.</p>' +
                "</div></div>";
              const UAwindow = new google.maps.InfoWindow({ content: UAcontent, });
              markerUA.addListener("click", () => { UAwindow.open({ anchor: markerUA, map, shouldFocus: false, }); });


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
    {% if event.title != "Preliminares de PLANCKS 2022"%}
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
        <p style="text-align: justify;"><strong>¿Qué es PLANCKS?</strong> PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Además, la competición se enmarca en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. Conoce más información sobre PLANCKS y IAPS <a href="#conocer-modal" class="modal-trigger">aquí</a>. Este año, la prueba tendrá lugar del 5 al 8 de mayo en la Universidad LMU de Munich. ¿Y cómo puede un equipo conseguir clasificarse para esta prueba final? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.</p>
        <p style="text-align: justify;"><strong>¿Cómo y cuándo tendrán lugar las Preliminares?</strong> Las Preliminares de PLANCKS 2022 en España se celebrarán el próximo <strong>viernes 4 de marzo por la tarde</strong>, de forma simultánea en sedes situadas en facultades de física del territorio nacional. La prueba durará 3 horas y tendrá lugar de 16:00 a 19:00 (GMT+1).</p>
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
        <p style="text-align: justify;"><strong>¿En qué consisten las Preliminares?</strong> Las Preliminares de PLANCKS 2022 consistirán en un conjunto de 4 problemas. Puedes ver las pruebas de otros años en la <a class="modal-close" href="#ediciones-anteriores">sección de Ediciones anteriores</a>.</p>
        <p style="text-align: justify;"><strong>¿Cómo puedo participar en las Preliminares?</strong> Es muy sencillo: si conoces un@s cuant@s amig@s con los que te apetecería pasar un buen rato, resolver problemas que resultan todo un reto e inventarte respuestas disparatadas cuando no sepas por donde salir, reúne un equipo de hasta cuatro personas y no lo dudes: <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank">¡inscríbete!</a> Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional. Por cierto, es posible que el comité organizador os pida ayuda para encontrar un aula y un/a supervisor/a para poder garantizar una sede de las Preliminares en vuestra ciudad.</p>
        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a href="https://shorturl.at/bdhDU" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="section" style="padding-left: 15px; padding-right: 15px; border: 2px solid #293183;">
        <strong>Términos y Condiciones de IAPS</strong> | Todos los participantes:
        <p style="text-align: justify;">- Declaran conocer que PLANCKS está regulado por el Artículo 12 de las <a href="https://drive.google.com/open?id=1kkJ4YaXtghuGasOxzGdi8yqALL00DI6m" target="_blank">IAPS Regulations</a>.</p>
        <p style="text-align: justify;">- Y se comprometen a cumplir las <a href="https://drive.google.com/open?id=1oTMqzvJEgceuSg4bSMcCfeRRnNv_hSEO" target="_blank">Reglas Generales de PLANCKS</a>, además del <a href="https://drive.google.com/file/d/1alG7j3AqSKoiXHKLHBo5Eb3-olbKrEoO/view?usp=sharing" target="_blank">IAPS Code of Conduct</a>.</p>
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
      <div class="row center">
        <h3 class="justify">Información para supervisoras/es</h3>
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
        <p style="text-align: justify;"><strong>¿Cómo puedo supervisar un examen en las Preliminares 2022?</strong> Es muy sencillo: sólo tienes que rellenar <a href="https://forms.gle/GSXuS5ELfqqj7mhH7" id="inscripcion-supervisores-button" target="_blank">este formulario</a>. Una vez cumplimentado, nos pondremos en contacto contigo para informarte de los siguientes pasos.</p>
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
          Este año PLANCKS será organizado por la Sociedad Alemana de Física y ya hay 28 países de 4 continentes que han confirmado que organizarán sus preliminares. Si quieres conocer más sobre PLANCKS y IAPS, la International Association of Physics Students, clica en los enlaces siguientes.
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
            <a href="https://forms.gle/v8owEfCFjK4BNaD68" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i>Inscripción equipos</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://forms.gle/GSXuS5ELfqqj7mhH7" id="inscripcion-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132); display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i>Inscripción supervisoras/es</a>
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

<div id="ModalComOrgPre22" class="modal">
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
