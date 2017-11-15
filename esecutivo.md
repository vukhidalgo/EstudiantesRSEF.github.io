---
layout: page
title: Junta de Gobierno
permalink: /esecutivo/
---

<div class="row">
  <div class="col s12 m4">
    <img class="materialboxed" data-caption="Logo AEEF." width="100%" src="{{ site.url }}/img/LogoAEEF.png">
  </div>
    <div class="col s12 m4 offset-m1">
  <p>La Junta de Gobierno es el órgano administrativo y ejecutivo de la Asociación, y está actualmente compuesta por 5 miembros.</p>
    </div>
</div>


{% for item in site.data.EC %}

## Junta de Gobierno ({{item.anno}})

Esta Junta de Gobierno fue elegida en las elecciones celebradas el {{ item.dataCISFex }}. 
{% if item.dataInizio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInizio }}.{% endif %}
{% if item.dataFine != nil %}I suoi membri sono rimasti in carica fino al {{ item.dataFine }}.{% endif %}

<ul class="collection">
  {% for membro in item.membri %}
      <li class="collection-item avatar">
        <img src="{{ membro.img }}" alt="" class="circle">
        <span class="title">{{ membro.nome }}</span>
        <p>{{ membro.ruolo }}<br>
          {{ membro.descr }}
        </p>
        <div class="secondary-content"><a href="mailto:{{ membro.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;"><i class="fa fa-lg fa-envelope"></i></a></div>
      </li>
  {% endfor %}
</ul>

{% if item.collaboratori != nil %}
## Colaboradores ({{item.anno}})

<ul class="collection">
  {% for membro in item.collaboratori %}
      <li class="collection-item avatar">
        <img src="{{ membro.img }}" alt="" class="circle">
        <span class="title">{{ membro.nome }}</span>
        <p>
          {{ membro.descr }}
        </p>
        <div class="secondary-content">
            {% if membro.mail != nil %}
            <a href="mailto:{{ membro.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;"><i class="fa fa-lg fa-envelope"></i>
            </a>
            {% endif %}
        </div>
      </li>
  {% endfor %}
</ul>
{% endif %}

{% endfor %}
  
## Mandatos precedentes

### Junta de Gobierno fundacional (marzo de 2017)
 
- Alejandro Fernández Muñoz - Presidente
- Raúl Solís León - Secretario General
- Víctor Sánchez Lara - Tesorero

