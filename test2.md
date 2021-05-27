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

<!-- MODAL WOOORKSSS, YEEEESSS -->

<div class="row">
<!-- Modal Trigger -->
<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
</div>

<!-- Modal Structure -->
<div id="modal1" class="modal">
  <div class="modal-content">
    <ul class="collection">
      <li class="collection-item avatar3">
        <div class="section">
          <div class="row">
            <img src="/img/junta/alejandro-fernandez.jpg" alt="" class="circle">
            <h2 class="justify"><strong>Ignacio Cirac Sasturiain</strong></h2>
            <h3 class="justify"><strong>Conferencia Inaugural</strong></h3>
          </div>
          <div class="row">
            <p>
              Rol
            </p>
            <hr>
            <div style="text-align: left;">
              <p>
                Descripción
              </p>
              <p style="text-align: justify;">
                Horario
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div style="text-align: left;">
              <p>
                Descripción
              </p>
              <p style="text-align: justify;">
                Horario
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>  
      </li>  
    </ul>

  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- TEST WITH ANOTHER ELEMENT! -->

  <div class="progress">
      <div class="indeterminate"></div>
  </div>

<!-- TEST WITH ANOTHER ELEMENT! -->

  <!-- Element Showed -->
  <a id="menu" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">menu</i></a>

  <!-- Tap Target Structure -->
  <div class="tap-target" data-target="menu">
    <div class="tap-target-content">
      <h5>Title</h5>
      <p>A bunch of text</p>
    </div>
  </div>

## Junta de Gobierno

<!-- First design -->

{% for item in site.data.EC2 %}

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

{% endfor %}

<!-- Second design -->

{% for item in site.data.EC3 %}

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

{% endfor %}

<!-- Third design -->

{% for item in site.data.EC2 %}

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

<!-- 5th design -->

{% for item in site.data.EC3 %}

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
