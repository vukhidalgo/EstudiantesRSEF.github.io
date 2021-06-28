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

    <div class="section" style="padding-left: 30px; padding-right: 30px;">

      <div class="row">
        <div class="col s12 m6 l1"><p></p></div> <!-- Just because offset is not working -->
        <div class="col s12 m6 l4">
          <div class="row center">
          <img src="/img/junta/alejandro-fernandez.jpg" alt="" class="circle" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h2 class="justify"><strong>Prof. Ignacio Cirac</strong></h2>
            <h3 class="justify"><strong>Conferencia Inaugural</strong></h3>
            <h4 class="justify"><strong>Biografía y Libros Recomendados</strong></h4>
          </div>
        </div>
        <div class="col s12 m6 l1"><p></p></div> <!-- Just because offset is not working -->
      </div>
      <div class="row">
        <h4 class="justify"><strong>Biografía</strong></h4>
        <p style="text-align: justify;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>

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

{% for item in site.data.jornadas %}
{% if item.anno contains "2021" %}

<div class="section">
  <div class="col s12 m6">
    <div class="row center">
    {% for miembro in item.miembros %}
    {% if miembro.destacado contains "YES" %}
      <ul class="collection waves-effect waves-light" style="width: 33%">
        <li class="collection-item avatar2">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
        </li>
      </ul>
    {% endif %}
    {% endfor %}
    </div>
  </div>
</div>


{% endif %}
{% endfor %}

---

{% for item in site.data.jornadas %}
{% if item.anno contains "2021" %}

  <div class="section">
    <div class="row">
      <div class="col s12 m6 l6">
        <div class="row center">
          <h2 style="text-align: center;">Academia & Divulgación</h2>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header"><i class="material-icons">school</i>Academia</div>
                <div class="collapsible-body">
                  <ul class="collection">
                    {% for miembro in item.miembros %}
                    {% if miembro.class contains "academia" %}
                    <li class="collection-item avatar">
                      <img src="{{ miembro.img }}" alt="" class="circle">
                      <span class="title">{{ miembro.nombre }}</span>
                      <p style="padding: 0px">
                        {{ miembro.rol }}
                      </p>
                      <hr>
                      <div style="text-align: left;">
                      <p style="padding: 0px">
                        {{ miembro.descr }}
                      </p>
                      <p style="text-align: justify; padding: 0px">
                        {{ miembro.horario }}
                      </p>
                      </div>
                    </li>
                    {% endif %}
                    {% endfor %}
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">cast_for_education</i>Divulgación</div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      {% for miembro in item.miembros %}
                      {% if miembro.class contains "divulgacion" %}
                      <li class="collection-item avatar">
                        <img src="{{ miembro.img }}" alt="" class="circle">
                        <span class="title">{{ miembro.nombre }}</span>
                        <p style="padding: 0px">
                          {{ miembro.rol }}
                        </p>
                        <hr>
                        <div style="text-align: left;">
                        <p style="padding: 0px">
                          {{ miembro.descr }}
                        </p>
                        <p style="text-align: justify; padding: 0px">
                          {{ miembro.horario }}
                        </p>
                        </div>
                      </li>
                      {% endif %}
                      {% endfor %}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2 style="text-align: center;">Empresa & Spin-offs</h2>
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header"><i class="material-icons">work</i>Empresa</div>
                    <div class="collapsible-body">
                      <ul class="collection">
                        {% for miembro in item.miembros %}
                        {% if miembro.class contains "empresa" %}
                        <li class="collection-item avatar">
                          <img src="{{ miembro.img }}" alt="" class="circle">
                          <span class="title">{{ miembro.nombre }}</span>
                          <p style="padding: 0px">
                            {{ miembro.rol }}
                          </p>
                          <hr>
                          <div style="text-align: justify;">
                          <p style="padding: 0px">
                            {{ miembro.descr }}
                          </p>
                          <p style="text-align: justify; padding: 0px">
                            {{ miembro.horario }}
                          </p>
                          </div>
                        </li>
                        {% endif %}
                        {% endfor %}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header"><i class="material-icons">model_training</i>Spin-offs (Academia + Empresa)</div>
                      <div class="collapsible-body">
                        <ul class="collection">
                          {% for miembro in item.miembros %}
                          {% if miembro.class contains "mixto" %}
                          <li class="collection-item avatar">
                            <img src="{{ miembro.img }}" alt="" class="circle">
                            <span class="title">{{ miembro.nombre }}</span>
                            <p style="padding: 0px">
                              {{ miembro.rol }}
                            </p>
                            <hr>
                            <div style="text-align: justify;">
                            <p style="padding: 0px">
                              {{ miembro.descr }}
                            </p>
                            <p style="text-align: justify; padding: 0px">
                              {{ miembro.horario }}
                            </p>
                            </div>
                          </li>
                          {% endif %}
                          {% endfor %}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

  {% endif %}
  {% endfor %}
