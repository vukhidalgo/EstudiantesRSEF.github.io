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

{% for person in item.miembros %}

Miembro {{person.nombre}}

{% endfor %}
{% endfor %}



