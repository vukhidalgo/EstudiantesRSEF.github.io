---
layout: page
title: ¡Colabora con la Junta de Gobierno del Grupo de Estudiantes de la RSEF!
permalink: /colabora/
---

Encuentra abajo la oportunidad que más encaje contigo (y si no tienes configurado el ordenador para que el botón de cada oportunidad abra tu email, contáctanos comentándonos cuál te interesa más en estudiantes@rsef.es). ¡Te esperamos!

<!-- OFERTAS -->

{% for offer in site.offers %}
  {% if offer.active contains "YES" %}
    <div class="section">
      <div class="col s12 m6">
        <div class="row center">
	  <p>
	  {{ offer.nombre }}
	  </p>
        </div>
      </div>
    </div>
  {% endif %}
{% endfor %}   


<!-- MANUAL OFERTAS IN COLLAPSIBLE -->

<h2>¡Haz click en cada categoría y descúbrelos a tod@s!</h2>

{% for item in site.data.jornadas %}
{% if item.anno contains "2021" %}

    <div class="section">
      <div class="row">
        <div class="col s12 m6 l12">
          <div class="row center">
            <h2 style="text-align: center;">Empresa & Spin-offs</h2>
            <ul class="collapsible">
              <li>
                <div class="collapsible-header"><i class="material-icons">work</i>Empresa</div>
                <div class="collapsible-body">
                  <ul class="collection">
                    {% for person in site.persons %}
                      {% if person.evento contains "JornadasVerano2021" %}
                        {% if person.class contains "empresa" %}
                          <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
                          <li class="collection-item avatar">
                          <img src="{{ person.img }}" alt="" class="circle">
                          <span class="title">{{ person.nombre }}</span>
                          <p style="padding: 0px">
                            {{ person.rol }}
                          </p>
                          <hr>
                          <div style="text-align: left;">
                            <p style="padding: 0px">
                              {{ person.descr }}
                            </p>
                            <p style="text-align: justify; padding: 0px">
                              {{ person.horario }}
                            </p>
                          </div>
                          </li>
                          </a>
                        {% endif %}
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

<!-- {% endif %} -->
<!-- {% endfor %} -->



<!-- COSAS QUE AÚN NO FUNCIONAN -->

<!--
<div class="section">
  <div class="col s12 m6">
    <div class="row center">
      {% for offer in site.offers %}
        {% if offer.active contains "YES" %}
	    offer.nombre
	  <ul class="collection waves-effect waves-light" style="width: 33%">
            <a href="#{{ offer.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
              <li class="collection-item avatar2">
                <img src="{{ offer.img }}" alt="" class="circle">

                <span class="title" style="padding-left: 10px">{{ offer.nombre }}</span>
                {% if offer.roldes %}
                <p style="padding-top: 10px">
                  {{ offer.roldes }}
                </p>
		{% endif %}
              </li>
            </a>
          </ul>
        {% endif %}
      {% endfor %}    
    </div>
  </div>
</div> -->

<!-- Modal OFERTAS -->

<!-- {% for offer in site.offers %}
{% if offer.active contains "YES" %}

<div id="{{ offer.id | remove: "/" }}-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">

      <div class="row">

	<div class="col s12 m6 l6">
          <div class="row center">
            <img src="{{ offer.img }}" alt="" class="circle" width="70%">
          </div>
        </div>

        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h3 class="justify">{{ offer.nombre }}</h3>
            <h5 class="justify">Detalles</h5>
          </div>
        </div>
      </div> -->

      <!-- Detalles -->

      <!-- <div class="row">
        <h2 class="justify">Detalles</h2>
        {% if offer.respde %}
          <p style="text-align: justify;">
          Responsabilidad de: {{ offer.respde }}
          </p>
        {% endif %}
        {%- if offer.tareas -%}<p style="text-align: justify;">
          Tareas que llevar a cabo: {{ offer.tareas }}
          </p>{%- endif -%}
        {%- if offer.habilidades -%}<p style="text-align: justify;">
          Habilidades / Conocimientos necesarios: {{ offer.habilidades }}
          </p>{%- endif -%}
        {%- if offer.horas -%}<p style="text-align: justify;">
          Horas de trabajo / semana (estimación): {{ offer.horas }}
          </p>{%- endif -%}
	{%- if offer.duracion -%}<p style="text-align: justify;">
          Duración de la colaboración: {{ offer.duracion }}
          </p>{%- endif -%}
      </div>

    </div>
  </div>

  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>

  </div>
</div>

{% endif %}
{% endfor %}
-->