---
layout: page
title: Junta de Gobierno
permalink: /testjunta/
---

<div class="row">
  <div class="col s12 m4">
    <img data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
    <div class="col s12 m6 offset-m1">
  <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por 11 miembros.</p>
    </div>
</div>
	
	
{% for item in site.data.EC3 %}

## Junta de Gobierno ({{item.anno}})

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

{% for item in site.data.EC3 %}

<div class="col s12 m6" id="content-desktop">
  <div class="row center">
  {% for miembro in item.miembros %}
    <ul class="collection waves-effect waves-light" style="width: 28%">
      <a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px" target="_blank">
        <li class="collection-item avatar2">
          <img src="{{ miembro.img }}" alt="imagen" class="circle">
          <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
          <p>{{ miembro.rol }}</p>
        </li>
      </a>
    </ul>
  {% endfor %}
  </div>
</div>

<div class="col s12 m6" id="content-mobile">
  <div class="row center">
  {% for miembro in item.miembros %}
    <ul class="collection waves-effect waves-light" style="width: 90%">
      <a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px" target="_blank">
        <li class="collection-item avatar2">
          <img src="{{ miembro.img }}" alt="imagen" class="circle">
          <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
          <p>{{ miembro.rol }}</p>
        </li>
      </a>
    </ul>
  {% endfor %}
  </div>
</div>

{% endfor %}

## Juntas de Gobierno Anteriores

Sección en remodelación.

<!--
<ul class="collection">
  {% for miembro in item.miembros %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
        <div class="secondary-content-JdeG">
          <a href="mailto:{{ miembro.mail }}?subject={{ miembro.subject }}">
            <i class="fa fa-lg fa-envelope">
            </i>
          </a>
         {% if miembro.linkedin != nil %}
	  <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	    <i class="fa fa-lg fa-linkedin-square" aria-hidden="true">
            </i>
	  </a>
         {% endif %}
        </div>
	<p>
          {{ miembro.descr }}
        </p>
      </li>
  {% endfor %}
</ul>
{% if item.colaboradores != nil %}
## Colaboradores ({{item.curso}})
<ul class="collection">
  {% for miembro in item.colaboradores %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
        <div class="secondary-content-JdeG">
          <a href="mailto:{{ miembro.mail }}?subject={{ miembro.subject }}">
            <i class="fa fa-lg fa-envelope">
            </i>
          </a>
         {% if miembro.linkedin != nil %}
	  <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	    <i class="fa fa-lg fa-linkedin-square" aria-hidden="true">
            </i>
	  </a>
         {% endif %}
        </div>
	<p>
          {{ miembro.descr }}
        </p>
      </li>
  {% endfor %}
</ul>
{% endif %}
{% if item.colaboradores-pasados != nil %}
## Juntas de Gobierno Anteriores
 <ul class="collection">
  {% for miembro in item.colaboradores-pasados %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
        <div class="secondary-content-JdeG">
         {% if miembro.linkedin != nil %}
	  <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	    <i class="fa fa-lg fa-linkedin-square" aria-hidden="true">
            </i>
	  </a>
         {% endif %}
        </div>
	<p>
          {{ miembro.descr }}
        </p>
      </li>
  {% endfor %}
</ul>
{% endif %}
{% endfor %} -->
