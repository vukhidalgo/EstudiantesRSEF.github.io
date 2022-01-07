---
layout: default
title: Preliminares PLANCKS
permalink: /testPrelis/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
      
<!-- HEADER -->
      
      <img class="materialboxed" width="100%" src="/img/eventos/2021-PLANCKS/Header - Prelis PLANCKS 21.png">

<!-- INTRODUCCIÓN -->
      
      <p>
        ¡Bienvenid@ a la página web oficial de las Preliminares de PLANCKS!
      </p>
      <p style="text-align: justify;">
        PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Este año, la prueba será online, tendrá lugar del 6 al 9 de mayo y estará organizada por la Universidad de Oporto. Además, la competición se enmarcará en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí. ¿Y cómo puede un equipo conseguir clasificarse para esta competición? Desde España, debe lograrlo en las Preliminares que organizamos a nivel nacional.
      </p>
      
<!-- BOTONES -->
      
      <div class="section">
        <div class="row center">
          <a href="#info-modal" class="collection-item modal-trigger btn-large waves-effect waves-light" style="color: rgba(255, 99, 71, 0.7)">Información general</a>
        </div>
        <div class="row">
          <div class="col s12 m3">
            <div class="row center">
              <a href="#equipos-modal" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 0.7)">Equipos</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="#supervisores-modal" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 0.7)">Supervisoras/es</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="https://2021.plancks.org/" target="_blank" id="about-button" class="btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 0.7)">Conoce Plancks</a>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="row center">
              <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 1)">Inscríbete</a>
            </div>
          </div>
        </div>
      </div>
     
<!-- COMITÉS -->
      
      <p style="text-align: justify;">
        Además, puedes <a href="#comites-modal" class="modal-trigger">consultar aquí</a> los integrantes de los Comités Organizador y Académico de las Preliminares de PLANCKS 2021.
      </p>
    </div>    

<!-- EDICIONES ANTERIORES -->
    
      <div class="section">
      <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
        <p style="text-align: justify;">
          Consulta en esta sección información sobre ediciones anteriores de las Preliminares de PLANCKS, como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.
        </p>
      </div>
      {% assign loopindex = 0 %}
      {% for event in site.events reversed %}
      {% if event.title contains "Preliminares"%}
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

    <!-- JUNTA -->

    <div class="section">
      <div class="col s12 m6">
        <div class="row center">
        {% for person in site.persons %}
        {% if person.evento contains "EC3" %}
          <ul class="collection waves-effect waves-light" style="width: 33%">
            <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
              <li class="collection-item avatar2">
                <img src="{{ person.img }}" alt="" class="circle">
                <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
                <p style="padding-top: 10px">
                  {{ person.rol }}
                </p>
              </li>
            </a>
          </ul>
        {% endif %}
        {% endfor %}    
        </div>
      </div>
    </div>

<!-- Modal INFO -->

<div id="info-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 70px;">
        <h3 class="justify">Información general</h3>
      </div>
    </div>
  </div>
  
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div> 

<!-- Modal EQUIPOS -->

<div id="equipos-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 70px;">
        <h3 class="justify">Información para los equipos</h3>
      </div>
    </div>
  </div>
  
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div> 

<!-- Modal SUPERVISORES -->

<div id="supervisores-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 70px;">
        <h3 class="justify">Información para las/los supervisoras/es</h3>
      </div>
    </div>
  </div>
  
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div> 

<!-- Modal CONOCER -->

<div id="conocer-modal" class="modal">
  <div class="modal-content">
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 70px;">
        <h3 class="justify">Conoce Plancks </h3>
      </div>
    </div>
    
    <div class="section>
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://2021.plancks.org/" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 0.7)">Conoce Plancks</a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: rgba(255, 99, 71, 1)">Conoce IAPS</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div> 

<!-- Modal COMITES -->

<div id="comites-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 70px;">
        <h3 class="justify">Los comités organizador y aadémico</h3>
      </div>
    </div>
  </div>
  
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div> 


<!-- Modal JUNTA -->

{% for person in site.persons %}
{% if person.evento contains "EC3" %}

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
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h3 class="justify">{{ person.nombre }}</h3>
            <h5 class="justify">{{ person.rol }}</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h5 class="justify">Biografía</h5>
        {% if person.descr %}
          <p style="text-align: justify;">
            {{ person.descr }}
          </p>
        {% endif %}
      </div>
      
      <!-- Responsabilidades -->

      <div class="row">
        <h5 class="justify">¿Qué ha hecho en el GdeE?</h5>
        <list class="a">
          {% if person.part1 %}
            {% if person.link1 %}
              <li><a href="{{ person.link1 }}" target="_blank">{{ person.part1 }}</a></li>
            {% else %}
            <li>{{ person.part1 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part2 %}
            {% if person.link2 %}
              <li><a href="{{ person.link2 }}" target="_blank">{{ person.part2 }}</a></li>
            {% else %}
            <li>{{ person.part2 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part3 %}
            {% if person.link3 %}
              <li><a href="{{ person.link3 }}" target="_blank">{{ person.part3 }}</a></li>
            {% else %}
            <li>{{ person.part3 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part4 %}
            {% if person.link4 %}
              <li><a href="{{ person.link4 }}" target="_blank">{{ person.part4 }}</a></li>
            {% else %}
            <li>{{ person.part4 }}</li>
            {% endif %}
          {% endif %}
        </list>
      </div>
      
      <!-- Artículos -->
      
      {% if person.arti1 %}
        <div class="row">
          <h5 class="justify">Artículos del blog</h5>
          <list class="a">
            {% if person.arti1 %}
              <li><a href="{{ person.lkar1 }}" target="_blank">{{ person.arti1 }}</a></li>
            {% endif %}
          </list>
        </div>
      {% endif %}

     </div>
   </div>
  
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
   </div>
 </div>

 {% endif %}
 {% endfor %}       
 
