---
layout: page
title: test2
permalink: /test2/
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

<div class="section">
  <div class="row">
    <div class="col s12 m6">
      <div class="row center">
        <ul class="collection waves-effect waves-light">
  {% for miembro in item.miembros %}	
	<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
	<li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="imagen" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.nombre }}
        </p>
      </li>
	</a>
  {% endfor %}
</ul>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="row center">
        <ul class="collection waves-effect waves-light">
  {% for miembro in item.miembros %}	
	<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
	<li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="imagen" class="circle-float">
        <span class="title" style="vertical-align: middle">{{ miembro.nombre }}</span>
        <p style="vertical-align: middle">
          {{ miembro.nombre }}
        </p>
      </li>
	</a>
  {% endfor %}
</ul>
      </div>
    </div>
  </div>
</div>

<ul class="collection waves-effect waves-light">
  {% for miembro in item.miembros %}	
	<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
	<li class="collection-item avatar">
        <img src="" alt="imagen" class="circle">
		<strong><p class="title" style="vertical-align: middle">{{ miembro.nombre }}</p></strong>
        <p style="vertical-align: middle">
          {{ miembro.nombre }}
        </p>
      </li>
	</a>
  {% endfor %}
</ul>


{% endfor %}


\\ btn NO
\\ fixed-action-btn NO
\\ btn-flat NO 
\\ btn-floating NO
\\ btn-large NO
\\ collection-item WORKS 1/2
\\ collection NO
\\ collection-item avatar NO, almost but no
\\ {{ miembro.img }}

<a href="https://www.iaps.info/" target="_blank" class="waves-effect waves-light">Descubre IAPS</a>
