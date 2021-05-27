---
layout: default
title: ComJornadasVerano21
permalink: /JornadasVerano2021/ComiteOrganizador/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
        <h3 class="justify"><strong>Jornadas de Verano 2021</strong></h3>
          <h2 class="justify"><strong>Comité Organizador</strong></h2>
    <div class="section">
      <div class="row center">
          <div class="icon-block">
            <p align="center">Cristina Balsells Llort - Presidenta</p>
            <p align="center">Alejandro Fernández Muñoz - Vicepresidente y IT Manager</p>
            <p align="center">Pedro Villalba González - Responsable de Relaciones Públicas</p>
            <p align="center">Sergio Salvía Fernández - Relaciones Públicas</p>
            <p align="center">Alba Tacoronte Hernández - Diseño gráfico</p>
            <p align="center">Fátima Moñino - Redes Sociales</p>
            <p align="center">Inmaculada Pérez Pérez - Responsable de Logística</p>
            <p align="center">Imanol Corredoira Fernández - Logística</p>
            <p align="center">Jorge Morón Vidal - Logística</p>
            <p align="center">Irene Carrión López - Logística</p>
          </div>
        </div>
      </div>
    </div>

    {% for item in site.data.jornadas %}

  <div class="col s12 m6">
    <div class="row center">
    {% for miembro in item.miembros %}
    {% if miembro.class contains "OC" %}
      <ul class="collection waves-effect waves-light">
        <li class="collection-item avatar2">
          <img src="{{ miembro.img }}" alt="imagen" class="circle">
          <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
          <p>{{ miembro.rol }}</p>
        </li>
      </ul>
    {% endif %}
    {% endfor %}
    </div>
  </div>

    {% endfor %}

  </div>
  <div class="row center">
    <a href="{{ site.url }}/JornadasVerano2021/" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Volver a Jornadas Verano 2021</a>
  </div>
