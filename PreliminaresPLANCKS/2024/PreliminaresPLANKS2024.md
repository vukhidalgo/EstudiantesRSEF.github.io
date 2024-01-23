---
layout: default
title: Preliminares PLANCKS 2024
permalink: /PreliminaresPLANCKS2024/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
     <div class="section">

<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2023-PLANCKS/BANNER.png">


<!-- RESULTADOS -->
      <!--
      <hr>
      <h2 style="text-align: center;">        
          <a href="{{ site.url}}/PreliminaresPLANCKS/2023/resultados2023_new.pdf" target="_blank"><span style="color: #3ca41c;"><strong>RESULTADOS DE LAS PRELIMINARES DE PLANCKS 2024</strong></span></a>        
      </h2>
      -->

<!-- SOLUCIONES -->
      <!--
      <hr>
      <h2 style="text-align: center;">        
          <a href="https://drive.google.com/file/d/1elsvYhQMpE_bpDTwNEvnG_b20V-6u6e1/view?usp=share_link" target="_blank"><span style="color: #3ca41c;"><strong>SOLUCIONES DE LOS PROBLEMAS</strong></span></a>        
      </h2>
      <hr>
      -->

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? ¡Ya tenemos aquí la séptima edición de las <strong>Preliminares de PLANCKS</strong>! <!-- Y este año... como novedad, con <strong>1000€ en PREMIOS</strong> gracias al apoyo de la Fundación Ramón Areces. --> Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center;"><i class="material-icons" style="padding-right: 8px;">info</i><strong>Información general</strong></a>
        </div>
        <div class="row center">
          <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i><strong>Supervisoras/es</strong></a>
          <a href="#plancks-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">explore</i><strong>Conoce Plancks</strong></a>
          <a href="#premios-modal" id="premios-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">star</i><strong>Premios</strong></a>
          <a href="#inscripcion-modal" id="inscripcion-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i><strong>Inscríbete</strong></a>
        </div>
      </div>

<!-- COUNTDOWN -->
      <div class="row">  
        <p style="text-align: justify;">Las inscripciones para las Preliminares de PLANCKS 2024 se cerrarán en...</p>
        <h3 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h3>
        <p style="text-align: justify;">¡No dejes tu inscripción para el último momento para asegurarnos que tendrás aulas y supervisores disponibles en tu facultad!</p>
        <p style="text-align: justify;"> Sólo para equipos con miembros del GdeE. El día 1 de febrero iniciamos la promoción a todos los estudiantes de física de España. ¡Así que sé el primero y no te quedes sin plaza!</p>
      </div> 
      
<!-- FINAL INSCRIPCIONES -->
<!--      <div class="section">  
        <div class="row center">
          <p style="text-align: justify;">¡Las inscripciones para las Preliminares de PLANCKS 2024 han sido un éxito! Hemos vuelto a superar el número de participantes, con un total de...</p>
          <h3 style="text-align: center;">60 equipos</h3>
          <h3 style="text-align: center;">228 participantes</h3>
          <h3 style="text-align: center;">16 sedes en 9 comunidades autónomas</h3>
          <p style="text-align: justify;">¡Gracias por ser parte de las Preliminares de PLANCKS 2023 y contribuir a su éxito!</p>
        </div>
      </div>
-->


<!-- AUTORES -->
<!--
      <div class="section">
        <h3 id="Autores">¡Conoce a l@s autor@s de los problemas!</h3>
        <p style="text-align: justify;">Los miembros del Comité Académico de las Preliminares PLANCKS 2024 son:</p>

        <div class="col s12 m6">
          <div class="row center">
            {% for person in site.persons %}
            {% if person.evento contains "Prelis2024" %}
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
            {% endfor %}    
          </div>
       </div>
     </div>
-->

<!-- COMITÉS -->

      <p style="text-align: justify;">Además, puedes <a href="#comites-modal" class="modal-trigger">consultar aquí</a> los integrantes del Comité Organizador de las Preliminares de PLANCKS 2023.</p>
    </div>

    
     <!-- Modal PONENTES -->

     {% for person in site.persons %}
     {% if person.evento contains "Prelis2024" %}

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
<!--
    <div class="section">
      <div class="section">
        <strong><h3>El mapa de las Preliminares de PLANCKS 2024</h3></strong>
        <p style="text-align: justify;">¡En el siguiente mapa puedes consultar todas las sedes y correspondientes aulas de las Preliminares 2024!</p>

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
              var UAH = {lat: 40.510801, lng: -3.346646}; // Campus Científico-Tecnológico
              var URV = {lat: 41.133793, lng: 1.242566}; // Campus Sescelades
              // Create map, draw it in the targetElem and sets the cameraPosition
              var targetElem = document.getElementById('map');
              // var cameraPosition = { zoom: 5.25, center: centerPos };
              var cameraPosition = { zoom: 6, center: centerPen };
              var map = new google.maps.Map(targetElem, cameraPosition);

              // We have already displayed the map, let's add markers

              var markerEHU = new google.maps.Marker({ map: map, position: EHU, title: "Euskal Herriko Unibertsitatea" });
              const EHUcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Euskal Herriko Unibertsitatea</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const EHUwindow = new google.maps.InfoWindow({ content: EHUcontent, });
              markerEHU.addListener("click", () => { EHUwindow.open({ anchor: markerEHU, map, shouldFocus: false, }); });

              var markerUVA = new google.maps.Marker({ map: map, position: UVA, title: "Universidad de Valladolid" });
              const UVAcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Valladolid</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UVAwindow = new google.maps.InfoWindow({ content: UVAcontent, });
              markerUVA.addListener("click", () => { UVAwindow.open({ anchor: markerUVA, map, shouldFocus: false, }); });

              var markerUNIOVI = new google.maps.Marker({ map: map, position: UNIOVI, title: "Universidad de Oviedo" });
              const UNIOVIcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Oviedo</h5>' +
                '<div id="bodyContent"><p></p>' +
                "</div></div>";
              const UNIOVIwindow = new google.maps.InfoWindow({ content: UNIOVIcontent, });
              markerUNIOVI.addListener("click", () => { UNIOVIwindow.open({ anchor: markerUNIOVI, map, shouldFocus: false, }); });

              var markerUAM = new google.maps.Marker({ map: map, position: UAM, title: "Universidad Autónoma de Madrid" });
              const UAMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Autónoma de Madrid</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UAMwindow = new google.maps.InfoWindow({ content: UAMcontent, });
              markerUAM.addListener("click", () => { UAMwindow.open({ anchor: markerUAM, map, shouldFocus: false, }); });  
            
              var markerUCM = new google.maps.Marker({ map: map, position: UCM, title: "Universidad Complutense de Madrid" });
              const UCMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Complutense de Madrid</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UCMwindow = new google.maps.InfoWindow({ content: UCMcontent, });
              markerUCM.addListener("click", () => { UCMwindow.open({ anchor: markerUCM, map, shouldFocus: false, }); });            

              var markerUAB = new google.maps.Marker({ map: map, position: UAB, title: "Universitat Autònoma de Barcelona" });
              const UABcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat Autònoma de Barcelona</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UABwindow = new google.maps.InfoWindow({ content: UABcontent, });
              markerUAB.addListener("click", () => { UABwindow.open({ anchor: markerUAB, map, shouldFocus: false, }); });  

              var markerUGR = new google.maps.Marker({ map: map, position: UGR, title: "Universidad de Granada" });
              const UGRcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Granada</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UGRwindow = new google.maps.InfoWindow({ content: UGRcontent, });
              markerUGR.addListener("click", () => { UGRwindow.open({ anchor: markerUGR, map, shouldFocus: false, }); });

              var markerUB = new google.maps.Marker({ map: map, position: UB, title: "Universitat de Barcelona" });
              const UBcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat de Barcelona</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UBwindow = new google.maps.InfoWindow({ content: UBcontent, });
              markerUB.addListener("click", () => { UBwindow.open({ anchor: markerUB, map, shouldFocus: false, }); });
 
              var markerUC3M = new google.maps.Marker({ map: map, position: UC3M, title: "Universidad Carlos III de Madrid" });
              const UC3Mcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad Carlos III de Madrid</h5>' +
                '<div id="bodyContent"><p></p>' +
                "</div></div>";
              const UC3Mwindow = new google.maps.InfoWindow({ content: UC3Mcontent, });
              markerUC3M.addListener("click", () => { UC3Mwindow.open({ anchor: markerUC3M, map, shouldFocus: false, }); });

              var markerUS = new google.maps.Marker({ map: map, position: US, title: "Universidad de Sevilla" });
              const UScontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Sevilla</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const USwindow = new google.maps.InfoWindow({ content: UScontent, });
              markerUS.addListener("click", () => { USwindow.open({ anchor: markerUS, map, shouldFocus: false, }); });            

              var markerUM = new google.maps.Marker({ map: map, position: UM, title: "Universidad de Murcia" });
              const UMcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Murcia</h5>' +
                '<div id="bodyContent"><p></p>' +
                "</div></div>";
              const UMwindow = new google.maps.InfoWindow({ content: UMcontent, });
              markerUM.addListener("click", () => { UMwindow.open({ anchor: markerUM, map, shouldFocus: false, }); }); 
            
              var markerUAH = new google.maps.Marker({ map: map, position: UAH, title: "Universidad de Alcalá" });
              const UAHcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Alcalá</h5>' +
                '<div id="bodyContent"><p></p>' +
                "</div></div>";
              const UAHwindow = new google.maps.InfoWindow({ content: UAHcontent, });
              markerUAH.addListener("click", () => { UAHwindow.open({ anchor: markerUAH, map, shouldFocus: false, }); }); 
            
              var markerUV = new google.maps.Marker({ map: map, position: UV, title: "Universitat de València" });
              const UVcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat de València</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UVwindow = new google.maps.InfoWindow({ content: UVcontent, });
              markerUV.addListener("click", () => { UVwindow.open({ anchor: markerUV, map, shouldFocus: false, }); });            

              var markerUSAL = new google.maps.Marker({ map: map, position: USAL, title: "Universidad de Salamanca" });
              const USALcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universidad de Salamanca</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const USALwindow = new google.maps.InfoWindow({ content: USALcontent, });
              markerUSAL.addListener("click", () => { USALwindow.open({ anchor: markerUSAL, map, shouldFocus: false, }); });            

              var markerUIB = new google.maps.Marker({ map: map, position: UIB, title: "Universitat de les Illes Balears" });
              const UIBcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat de les Illes Balears</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const UIBwindow = new google.maps.InfoWindow({ content: UIBcontent, });
              markerUIB.addListener("click", () => { UIBwindow.open({ anchor: markerUIB, map, shouldFocus: false, }); });

              var markerURV = new google.maps.Marker({ map: map, position: URV, title: "Universitat Rovira i Virgili" });
              const URVcontent =
                '<div id="content"><div id="siteNotice"></div>' +
                '<h5 id="firstHeading" class="firstHeading">Universitat Rovira i Virgili</h5>' +
                '<div id="bodyContent"><p><b></b></p>' +
                "</div></div>";
              const URVwindow = new google.maps.InfoWindow({ content: URVcontent, });
              markerURV.addListener("click", () => { URVwindow.open({ anchor: markerURV, map, shouldFocus: false, }); });

            }
          </script>
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap&key=AIzaSyB43GhHrWc2g0mZrOXQfZbYrimhd36a4q4">
          </script>    
        </body>
      </html>
    </div>
-->


<!-- EDICIONES ANTERIORES -->
    <div class="section" id="ediciones-anteriores">
      <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
      <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.title contains "Preliminares de PLANCKS"%}
    {% if event.title != "Preliminares de PLANCKS 2024"%}
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

        <p style="text-align: justify;"><strong>¿En qué consisten las Preliminares?</strong> Las Preliminares de PLANCKS 2024 es una competición de física teórica por equipos en la que habrá que resolver 4 problemas. Puedes ver las pruebas de otros años en la <a class="modal-close" href="#ediciones-anteriores">sección de Ediciones anteriores</a>.</p>
        
        <p style="text-align: justify;"><strong>¿Cómo puedo participar en las Preliminares?</strong> Es muy sencillo: si conoces un@s cuant@s amig@s con los que te apetecería pasar un buen rato, resolver problemas que resultan todo un reto e inventarte respuestas disparatadas cuando no sepas por donde salir, reúne un equipo de hasta cuatro personas y no lo dudes: <a href="https://forms.gle/ae8FCyQvty9tRrSS9" id="inscripcion-button" target="_blank">¡inscríbete!</a> Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional. Por cierto, es posible que el comité organizador os pida ayuda para encontrar un aula y un/a supervisor/a para poder garantizar una sede de las Preliminares en vuestra ciudad.</p>

        <p style="text-align: justify;"><strong>¿Cómo y cuándo tendrán lugar las Preliminares?</strong> Las Preliminares de PLANCKS 2023 en España se celebrarán el próximo <strong>lunes 1 de marzo por la tarde</strong>, de forma simultánea en sedes situadas en facultades de física del territorio nacional. La prueba durará 3 horas y tendrá lugar de 16:00 a 19:00 (GMT+1).</p>
        
        <p style="text-align: justify;"><strong>Y si la prueba os sale muy bien hay premio por partida doble...</strong></p>
        
        <list class="a">
          <li style="text-align: justify;">Las Preliminares de PLANCKS son además la fase de clasificación nacional para PLANCKS en nuestro país. El mejor equipo de las Prelis nos representará en mayo en la final, ¡que se celebra en Dublín! La inscripción y alojamiento estará cubierta por el Grupo de Estudiantes. ¿Que aun no sabes lo que es PLANCKS? Encuentra toda la información en <a href="#plancks-modal" class="modal-trigger">este enlace</a>.</li>
          <!-- <li style="text-align: justify;">¡Y este año, como novedad, tenemos premios para los dos mejores equipos gracias a la financiación de la Fundación Ramón Areces! Lee más en <a href="#premios-modal" class="modal-trigger">este enlace</a>.</li> -->
        </list>

        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a href="Competition_Rules_PrelisPLANCKS24.pdf" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="section" style="padding-left: 15px; padding-right: 15px; border: 2px solid #018c45;">
        <strong>Términos y Condiciones de IAPS</strong> | Todos los participantes:
        <p style="text-align: justify;">- Declaran conocer que PLANCKS está regulado por el Artículo 12 de las <a href="https://www.iaps.info/wp-content/uploads/2023/01/iaps__Regulations_2022.pdf" target="_blank">IAPS Regulations</a>.</p>
        <p style="text-align: justify;">- Y se comprometen a cumplir las <a href="https://www.iaps.info/wp-content/uploads/2021/01/PLANCKS-General-Rules-EGM-2020.pdf" target="_blank">Reglas Generales de PLANCKS</a>, además del <a href="https://www.iaps.info/wp-content/uploads/2022/08/IAPS-Code-of-Conduct-2020.pdf" target="_blank">IAPS Code of Conduct</a>.</p>
        <p style="text-align: justify;">Además, habrán de tener en cuenta que el Grupo de Estudiantes de la RSEF no ejerce en modo alguno de intermediario económico en este convocatoria de PLANCKS.</p>
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
          Este año contamos con el apoyo y financiación de la <a href="https://www.fundacionareces.es" id="ramon-areces" target="_blank">Fundación Ramón Areces</a>, que nos permite ofrecer premios a los dos mejores equipos: 550€ para el primer equipo y 450€ para el segundo. Además, los clasificados participarán en la fase internacional de PLANCKS en Dublín, con la inscripción y el alojamiento financiado por el Grupo de Estudiantes.
        </p>
        <p style="text-align: justify;">
          Todo esto no sería posible sin el apoyo de la Fundación Ramón Areces y de los miembros del GdeE. ¡Así que muchas gracias por confiar en nosotros!
        </p>
        <p style="text-align: justify;">
          Si aún no sabes de qué estamos hablando, clica en este <a href="#info-modal" class="modal-trigger">este enlace</a>.
        </p>
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
        <p style="text-align: justify;">¡Hola! Si has llegado hasta esta página es que puedes ser un/a posible supervisor/a de examen en las Preliminares de PLANCKS 2024. A continuación, te contamos cuáles son los requisitos y las responsabilidades del cargo.</p>
        <p style="text-align: justify;">Lee sobre la información general de las Preliminares de PLANCKS en <a href="#info-modal" class="modal-trigger">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿Cuáles son los requisitos del cargo de Supervisor/a?</strong> Son dos:</p>
        <list class="a">
          <li style="text-align: justify;">Ser investigador pre- o post-doctoral o ser docente universitario (en activo o jubilado).</li>
          <li style="text-align: justify;">Comprometerse a tener disponibilidad en el rango horario 15:30h - 19:30h el lunes 1 de marzo de 2024, así como a dedicar esa disponibilidad a las responsabilidades abajo indicadas.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cuáles son las responsabilidades del cargo de Supervisor/a?</strong> Son las siguientes:</p>
        <list class="a">
          <li style="text-align: justify;">Imprimir las hojas de la prueba y custodiarlas hasta la realización del examen.</li>
          <li style="text-align: justify;">Comprobar la identificación de los participantes a la prueba.</li>
          <li style="text-align: justify;">Supervisar el desarrollo de la prueba durante su realización y velar por el cumplimiento de las normas establecidas.</li>
          <li style="text-align: justify;">Recoger las hojas de la prueba y escanearlas para enviarlas al Comité Organizador el mismo día de la prueba.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cómo puedo supervisar un examen en las Preliminares 2024?</strong> Es muy sencillo: sólo tienes que rellenar <a href="https://forms.gle/yDEvVWuEY71osu2z7" id="inscripcion-supervisores-button" target="_blank">este formulario</a>. Una vez cumplimentado, nos pondremos en contacto contigo para informarte de los siguientes pasos.</p>
        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a href="https://drive.google.com/file/d/1Rg48G45oEnFR7w9CxcF1VcY7t-hvD_M6/view?usp=sharing" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- CONOCER MODAL -->
<div id="plancks-modal" class="modal">
  <div class="modal-content-tight">
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Conoce Plancks </h3>
        <p style="text-align: justify;"><strong>¿Qué es PLANCKS?</strong> PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Además, la competición se enmarca en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí.</p>
        <p style="text-align: justify;">
          Este año PLANCKS será organizado por la Asociación Italiana de Estudiantes de Física y la prueba tendrá lugar del 23 al 27 de mayo en la Universidad de Dublín. ¡La última edición reunió 250 participantes de más de 50 países! Si quieres conocer más sobre PLANCKS y IAPS, la International Association of Physics Students, clica en los enlaces siguientes.
        </p>
      </div>
    </div>
    
    <div class="section">
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/events/plancks/plancks-2023-in-milan/" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c"><strong>Conoce Plancks</strong></a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c"><strong>Conoce IAPS</strong></a>
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
            <a href="https://forms.gle/ae8FCyQvty9tRrSS9" id="inscripcion-equipos-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i><strong>Inscripción equipos</strong></a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://forms.gle/yDEvVWuEY71osu2z7" id="inscripcion-supers-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i><strong>Inscripción supervisores</strong></a>
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
              <p align="center">Joan Llobera Querol - Presidenta</p>
              <p align="center">Irene Carrión López - Vicepresidenta</p>
              <p align="center">Misael Samir Malqui Cruz - Redes </p>
              <p align="center">Lucía Longo - Redes </p>
              <p align="center">María Sánchez Hernández - Redes </p>
              <p align="center">Miguel Durán Vera - Web </p>
              <p align="center">Adrián Marín Boyero - Grafismos </p>
              <p align="center">Víctor Palma Cortés - Logística</p>
              <p align="center">Eric Jiménez Zurera - Logística</p>
              <p align="center">Eloi Casalé Cabanes - Logística</p>
              <p align="center">Manuel Porrón Álvarez - Logística </p>
              <p align="center">Inmaculada Pérez Pérez  - Senior Advisor</p>
              
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
  var countDownDate = new Date("Feb 26, 2024 23:59:59").getTime();

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
      document.getElementById("countdown").innerHTML = "INSCRIPCIONES CERRADAS.";
    }
  }, 1000);
</script>
