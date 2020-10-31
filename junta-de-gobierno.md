---
layout: page
title: Junta de Gobierno
permalink: /junta-de-gobierno/
---

<div class="row">
  <div class="col s12 m4">
    <img class="materialboxed" data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
    <div class="col s12 m4 offset-m1">
  <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por 8 miembros.</p>
    </div>
</div>


{% for item in site.data.EC %}

## Junta de Gobierno ({{item.anno}})

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

<ul class="collection">
  {% for miembro in item.miembros %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
          <br>
          {{ miembro.descr }}
        </p>
        <div class="secondary-content">
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
          <br>
          {{ miembro.descr }}
        </p>
        <div class="secondary-content">
          {% if miembro.mail != nil %}
            <a href="mailto:{{ miembro.mail }}?subject={{ miembro.subject }}">
	      <i class="fa fa-lg fa-envelope"></i>
            </a>
          {% endif %}
	  {% if miembro.linkedin != nil %}	
	    <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	      <i class="fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
	    </a>
          {% endif %}
        </div>
      </li>
  {% endfor %}
</ul>
{% endif %}

{% if item.colaboradores-pasados != nil %}
## Miembros de la Junta de Gobierno y Colaboradores pasados

<ul class="collection">
  {% for miembro in item.colaboradores-pasados %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
          <br>
          {{ miembro.descr }}
        </p>
        <div class="secondary-content">
	  {% if miembro.linkedin != nil %}	
	    <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	      <i class="fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
	    </a>
          {% endif %}
        </div>
      </li>
  {% endfor %}
</ul>
{% endif %}

{% endfor %}
