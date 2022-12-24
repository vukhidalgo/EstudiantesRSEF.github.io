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

/* No normal bullets please */
timeline {
  list-style-type: none;
}

timeline-item {
  /* You need to turn on relative positioning so the line is placed relative to the item rather than absolutely on the page */
  position: relative;

  /* Use padding to space things out rather than margins as the line would get broken up otherwise */
  margin: 0;
  padding-bottom: 1em;
  padding-left: 20px;
}

/* The actual line being placed before each list item, tweak width and color as appropriate */
timeline-item:before {
  background-color: #c00;
  width: 2px;
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 5px;
}

/* Start the line further down on the first list item */
timeline-item:first-child:before { top: 15px;  }

/* Stop the line short on the final list item */
timeline-item:last-child:before { height: 6px; }

/* Styles for the SVG bullet points */
.bullet { margin-left: -20px; width: 12px; fill: #c00; float: left; padding-right: 10px }
.bullet.big { width: 16px; margin-left: -22px; padding-right: 8px }

a { color: #06e; }

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
              <h3 class="justify"><strong>{{ person.nombre }}</strong><br>{{ person.rol }}</h3>
              <h5><a href="{{ person.linkedin }}" target="_blank" title="Explora su LinkedIn"><i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a></h5>
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
          <div class="col s12 m4 l4">
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
        <h5 class="justify">Trayectoria en el GdeE-RSEF</h5>
      </div>

      <p><strong>Cofundador y primer Presidente (oct. 2018 - oct. 2021)</strong></p>
      <timeline>
          <timeline-item>
            <div class="bullet big">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path><circle cx="16" cy="16" r="6"></circle></svg>
            </div>
            So, the line to the left..
          </timeline-item>
          <timeline-item>
            <div class="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
            </div>
            is created using a <code>:before</code> pseudo-element on each <code>&lt;li&gt;</code>..
          </timeline-item>
          <timeline-item>
            <div class="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
            </div>
            with no content, 2 pixels wide, red background color, and..
          </timeline-item>
          <timeline-item>
            <div class="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
            </div>
            positioned absolutely relative to the list item.
          </timeline-item>
          <timeline-item>
            <div class="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
            </div>
            The bullets are rendered using SVG which I tweaked from the BBC but are essentially just drawing circles.
          </timeline-item>    
        </timeline>

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
