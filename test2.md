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

<ul class="collection">
  {% for miembro in item.miembros %}	
	<a href="{{ miembro.linkedin }}" style="color: $off-black;" target="_blank">
	<li class="collection-item avatar waves-effect waves-light">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
	<p>
          {{ miembro.descr }}
        </p>
      </li>
	</a>
	<hr>
  {% endfor %}
</ul>

{% endfor %}


<a href="https://www.iaps.info/" target="_blank" class="collection-item avatar waves-effect waves-light">Descubre IAPS</a>
