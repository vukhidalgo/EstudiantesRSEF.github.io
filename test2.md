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


{% for item in site.data.EC2 %}

## Junta de Gobierno ({{item.anno}})

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

<!-- First design -->

<div class="section">
  <div class="row">
    <div class="col s12 m6">
      <div class="row center">
        <ul class="collection waves-effect waves-light">
  {% for miembro in item.miembros %}
	<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
	<li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="imagen" class="circle">
        <span class="title" style="vertical-align: middle">{{ miembro.nombre }}</span>
        <p style="padding-bottom: 42px">{{ miembro.rol }}</p>
      </li>
	</a>
  {% endfor %}
</ul>
      </div>
    </div>

<!-- Second design -->

    <div class="col s12 m6">
      <div class="row center">
        <ul class="collection waves-effect waves-light">
  {% for miembro in item.miembros %}
	<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
	<li class="collection-item avatar2">
        <img src="{{ miembro.img }}" alt="imagen" class="circle">
        <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
        <p>{{ miembro.rol }}</p>
      </li>
	</a>
  {% endfor %}
</ul>
      </div>
    </div>
  </div>
</div>

<!-- Third design -->

<div class="col s12 m6">
  <div class="row center">
  {% for miembro in item.miembros %}
    <ul class="collection waves-effect waves-light">
<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87);" target="_blank">
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
  </div>
</div>

{% endfor %}

\\ btn NO
\\ fixed-action-btn NO
\\ btn-flat NO
\\ btn-floating NO
\\ btn-large NO
\\ collection-item WORKS 1/2
\\ collection NO
\\ collection-item avatar NO, almost but no
