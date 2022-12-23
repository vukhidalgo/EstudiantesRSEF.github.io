---
layout: page
title: test2
permalink: /test2/
---

<head>
<style>

@media screen and (max-width: 600px) {
  #phone-header { display: block; }  /* show it on small screens */
}
@media screen and (min-width: 601px) {
  #phone-header { display: none; }   /* hide it elsewhere */
}

@media screen and (max-width: 600px) {
  #desktop-header { display: none; }  /* hide it on small screens */
}
@media screen and (min-width: 601px) {
  #desktop-header { display: block; }   /* show it elsewhere */
}

</style>
</head>


<div class="row">
  <div class="col s12 m4">
    <img class="materialboxed" data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
  <div class="col s12 m4 offset-m1">
  <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por 8 miembros.</p>
  </div>
</div>

<!-- MODAL WOOORKSSS, YEEEESSS -->

<div class="row">
Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

{% for item in site.data.EC3 %}

<div class="section" id="content-desktop">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.evento contains "EC3" %}
      <ul class="collection waves-effect waves-light" style="width: 300px">
        <a href="#{{ person.id | remove: "/" }}-modal3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
            <p class="rol" style="padding-left: 120px; padding-bottom: 25px">{{ person.rol }}</p>
          </li>
        </a>
      </ul>
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>

<div class="section" id="content-mobile">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.evento contains "EC3" %}
      <ul class="collection waves-effect waves-light" style="width: 90%">
        <a href="#{{ person.id | remove: "/" }}-modal3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
            <p class="rol" style="padding-left: 120px">{{ person.rol }}</p>
          </li>
        </a>
      </ul>
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>

{% endfor %}

## Juntas de Gobierno Anteriores

Sección en remodelación.


<!-- Modal JUNTA 3 -->

{% for person in site.persons %}
{% if person.evento contains "EC3" %}

<div id="{{ person.id | remove: "/" }}-modal3" class="modal">
  <div class="modal-content">
    <div style="padding-left: 30px; padding-right: 30px;">

    <!-- HEADER -->
      <!-- Versión móvil -->
      <div id="phone-header">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center" style="display: grid; justify-content: center; align-content: center">
            <img src="{{ person.img }}" alt="" class="circle" width="70%">
            </div>
          </div>
          <div class="col s12 m6 l6">        
            <div class="row center" style="display: grid; justify-content: center; align-content: center">
              <h3 class="justify">{{ person.nombre }}</h3>
              <h5 class="justify">{{ person.rol }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Versión escritorio -->
      <div id="desktop-header">
        <div class="row" >
          <img src="{{ person.bigheader }}">
        </div>
        <div class="row" >
          <!-- LinkedIn -->
          <div class="col s12 m4 l4" style="justify-content: start">
            <a href="{{ person.linkedin }}" target="_blank" title="Explora su LinkedIn"><i class="fa fa-3x fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
          <!-- Distinciones -->
          <div class="col s12 m4 l4" style="justify-content: center">
            <div class="row center">
              {% if person.insignia != nil %}<img src="/img/junta/distinciones/insignia.png" style="width: 20%;" title="Reconocido/a con la Insignia del Grupo de Estudiantes de la RSEF">{% endif %}
              {% if person.mencion != nil %}<img src="/img/junta/distinciones/mencion.png" style="width: 20%;" title="Galardonado/a con la Mención al Colaborador Distinguido del Grupo de Estudiantes de la RSEF">{% endif %}
              {% if person.medalla != nil %}<img src="/img/junta/distinciones/medalla.png" style="width: 20%;" title="Galardonado/a con la Medalla al Servicio Distinguido del Grupo de Estudiantes de la RSEF">{% endif %}
              {% if person.pnj22 != nil %}<img src="/img/junta/distinciones/pnj22.jpg" style="width: 17%;" title="Premiado con la Mención Honorífica en Ciencia y Tecnología en los Premios Nacionales de Juventud 2022">{% endif %}
            </div>
          </div>
          <!-- Última actualización del perfil -->
          <div class="col s12 m4 l4" style="justify-content: end; align-content:center;">
            <p style="color: grey; text-align: right;"><em>Last update: {{ person.lastupdate | date: '%b %Y' }}</em></p>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h5 class="justify">Biografía de {{ person.nombre }}</h5>
        {% if person.descr %}
          <p style="text-align: justify;">
            {{ person.descr }}
          </p>
        {% endif %}
      </div>

      <!-- Responsabilidades -->

      <div class="row">
        <h5 class="justify">Trayectoria en el GdeE</h5>
      </div>

      <!-- Artículos -->

      {% if person.arti1 %}
        <div class="row">
          <h5 class="justify">Artículos del blog</h5>
          <list class="a">
            {% if person.arti1 %}
              <li><a href="{{ person.lkar1 }}" target="_blank">{{ person.arti1 }}</a></li>
            {% endif %}
            {% if person.arti2 %}
              <li><a href="{{ person.lkar2 }}" target="_blank">{{ person.arti2 }}</a></li>
            {% endif %}
            {% if person.arti3 %}
              <li><a href="{{ person.lkar3 }}" target="_blank">{{ person.arti3 }}</a></li>
            {% endif %}
            {% if person.arti4 %}
              <li><a href="{{ person.lkar4 }}" target="_blank">{{ person.arti4 }}</a></li>
            {% endif %}
            {% if person.arti5 %}
              <li><a href="{{ person.lkar5 }}" target="_blank">{{ person.arti5 }}</a></li>
            {% endif %}
            {% if person.arti6 %}
              <li><a href="{{ person.lkar6 }}" target="_blank">{{ person.arti6 }}</a></li>
            {% endif %}
            {% if person.arti7 %}
              <li><a href="{{ person.lkar7 }}" target="_blank">{{ person.arti7 }}</a></li>
            {% endif %}
            {% if person.arti8 %}
              <li><a href="{{ person.lkar8 }}" target="_blank">{{ person.arti8 }}</a></li>
            {% endif %}
            {% if person.arti9 %}
              <li><a href="{{ person.lkar9 }}" target="_blank">{{ person.arti9 }}</a></li>
            {% endif %}
            {% if person.arti10 %}
              <li><a href="{{ person.lkar10 }}" target="_blank">{{ person.arti10 }}</a></li>
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
