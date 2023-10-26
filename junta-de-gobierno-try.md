---
layout: page
title: Junta de Gobierno
permalink: /junta-de-gobierno-try
---

<!-- INTRO -->

{% for item in site.data.EC4 %}

<div class="row">
  <div class="col s12 m4">
    <img data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
    <div class="col s12 m6 offset-m1">
      <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por {{ item.nmiembros }} miembros.</p>
    </div>
</div>

## Junta de Gobierno actual

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

<!--
{% for person in item.miembros %}

Miembro {{person.nombre}}

{% endfor %}
-->

<div class="section" id="content-desktop">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.EC4 %}
      <ul class="collection waves-effect waves-light" style="width: 300px">
        <a href="#{{ person.id | remove: "/" }}-modal3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
            <p class="rol" style="padding-left: 120px; padding-bottom: 25px">{{ person.EC4 }}</p>
          </li>
        </a>
      </ul>
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>
{% endfor %}



