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
Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

{% for item in site.data.EC3 %}

<div class="section" id="content-desktop">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.evento contains "EC3" %}
      <ul class="collection waves-effect waves-light" style="width: 300px">
        <a href="#{{ person.id | remove: "/" }}-modal3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
            <p class="rol" style="padding-left: 120px; padding-bottom: 25px">{{ person.rol }}</p>
          </li>
        </a>
      </ul>
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>

<div class="section" id="content-mobile">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.evento contains "EC3" %}
      <ul class="collection waves-effect waves-light" style="width: 90%">
        <a href="#{{ person.id | remove: "/" }}-modal3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
            <p class="rol" style="padding-left: 120px">{{ person.rol }}</p>
          </li>
        </a>
      </ul>
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>

{% endfor %}

## Juntas de Gobierno Anteriores

Sección en remodelación.


<!-- Modal JUNTA 3 -->

{% for person in site.persons %}
{% if person.evento contains "EC3" %}

<div id="{{ person.id | remove: "/" }}-modal3" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="row center">
	    <img src="{{ person.header }}" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-top: 40px;">
            <h3 class="justify">{{ person.nombre }}</h3>
            <h5 class="justify">{{ person.rol }}</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h5 class="justify">Biografía</h5>
        {% if person.descr %}
          <p style="text-align: justify;">
            {{ person.descr }}
          </p>
        {% endif %}
      </div>
      
      <!-- Responsabilidades -->

      <div class="row">
        <h5 class="justify">¿Qué ha hecho en el GdeE?</h5>
        <list class="a">
          {% if person.part1 %}
            {% if person.link1 %}
              <li><a href="{{ person.link1 }}" target="_blank">{{ person.part1 }}</a></li>
            {% else %}
            <li>{{ person.part1 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part2 %}
            {% if person.link2 %}
              <li><a href="{{ person.link2 }}" target="_blank">{{ person.part2 }}</a></li>
            {% else %}
            <li>{{ person.part2 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part3 %}
            {% if person.link3 %}
              <li><a href="{{ person.link3 }}" target="_blank">{{ person.part3 }}</a></li>
            {% else %}
            <li>{{ person.part3 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part4 %}
            {% if person.link4 %}
              <li><a href="{{ person.link4 }}" target="_blank">{{ person.part4 }}</a></li>
            {% else %}
            <li>{{ person.part4 }}</li>
            {% endif %}
          {% endif %}
        </list>
      </div>
      
      <!-- Artículos -->
      
      {% if person.arti1 %}
        <div class="row">
          <h5 class="justify">Artículos del blog</h5>
          <list class="a">
            {% if person.arti1 %}
              <li><a href="{{ person.lkar1 }}" target="_blank">{{ person.arti1 }}</a></li>
            {% endif %}
            {% if person.arti2 %}
              <li><a href="{{ person.lkar2 }}" target="_blank">{{ person.arti2 }}</a></li>
            {% endif %}
            {% if person.arti3 %}
              <li><a href="{{ person.lkar3 }}" target="_blank">{{ person.arti3 }}</a></li>
            {% endif %}
            {% if person.arti4 %}
              <li><a href="{{ person.lkar4 }}" target="_blank">{{ person.arti4 }}</a></li>
            {% endif %}
            {% if person.arti5 %}
              <li><a href="{{ person.lkar5 }}" target="_blank">{{ person.arti5 }}</a></li>
            {% endif %}
            {% if person.arti6 %}
              <li><a href="{{ person.lkar6 }}" target="_blank">{{ person.arti6 }}</a></li>
            {% endif %}
            {% if person.arti7 %}
              <li><a href="{{ person.lkar7 }}" target="_blank">{{ person.arti7 }}</a></li>
            {% endif %}
            {% if person.arti8 %}
              <li><a href="{{ person.lkar8 }}" target="_blank">{{ person.arti8 }}</a></li>
            {% endif %}
            {% if person.arti9 %}
              <li><a href="{{ person.lkar9 }}" target="_blank">{{ person.arti9 }}</a></li>
            {% endif %}
            {% if person.arti10 %}
              <li><a href="{{ person.lkar10 }}" target="_blank">{{ person.arti10 }}</a></li>
            {% endif %}
          </list>
        </div>
      {% endif %}

     </div>
   </div>
  
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
   </div>
 </div>

 {% endif %}
 {% endfor %}       
	
	
	
	

<p>CODIGO ANTIGUO</p>
	
	
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
<a href="{{ miembro.linkedin }}" class="collection-item waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px" target="_blank">
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

---

<div class="section">
  <div class="col s12 m6">
    <div class="row center">
    {% for person in site.persons %}
    {% if person.evento contains "JornadasVerano2021" %}
    {% if person.destacado contains "YES" %}
      <ul class="collection waves-effect waves-light" style="width: 33%">
        <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
          <li class="collection-item avatar2">
            <img src="{{ person.img }}" alt="" class="circle">
            {% if person.nombredes %}
            <span class="title" style="padding-left: 10px">{{ person.nombredes }}</span>
            {% else %}
            <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
            {% endif %}
            {% if person.roldes %}
            <p style="padding-top: 10px">
              {{ person.roldes }}
            </p>
            {% else %}
            <p style="padding-top: 10px">
              {{ person.rol }}
            </p>
            {% endif %}
          </li>
        </a>
      </ul>
    {% endif %}
    {% endif %}
    {% endfor %}    
    </div>
  </div>
</div>

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
                  {% for person in site.persons %}
                  {% if person.evento contains "JornadasVerano2021" %}
                  {% if person.class contains "academia" %}
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
            <li>
              <div class="collapsible-header"><i class="material-icons">cast_for_education</i>Divulgación</div>
                <div class="collapsible-body">
                  <ul class="collection">
                    {% for person in site.persons %}
                    {% if person.evento contains "JornadasVerano2021" %}
                    {% if person.class contains "divulgacion" %}
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
        <div class="col s12 m6 l6">
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
                <li>
                  <div class="collapsible-header"><i class="material-icons">model_training</i>Spin-offs (Academia + Empresa)</div>
                    <div class="collapsible-body">
                      <ul class="collection">
                        {% for person in site.persons %}
                        {% if person.evento contains "JornadasVerano2021" %}
                        {% if person.class contains "mixto" %}
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

{% endif %}
{% endfor %}


<!-- Modal PONENTES -->

{% for person in site.persons %}
{% if person.evento contains "JornadasVerano2021" %}

<div id="{{ person.id | remove: "/" }}-modal" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">

      <div class="row">
        <div class="col s12 m6 l1"><p></p></div> <!-- Just because offset is not working -->
        <div class="col s12 m6 l4">
          <div class="row center">
          <img src="{{ person.img }}" alt="" class="circle" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h2 class="justify"><strong>{{ person.nombre }}</strong></h2>
            <h4 class="justify"><strong>Biografía y Libros Recomendados</strong></h4>
          </div>
        </div>
        <div class="col s12 m6 l1"><p></p></div> <!-- Just because offset is not working -->
      </div>

      <!-- Biografía -->

      <div class="row">
        <h4 class="justify"><strong>Biografía</strong></h4>
        {% if person.bio1 %}
        <p style="text-align: justify;">
        {{ person.bio1 }}
        </p>
        {% endif %}
        {%- if person.bio2 -%}<p style="text-align: justify;">
        {{ person.bio2 }}
        </p>{%- endif -%}
        {%- if person.bio3 -%}<p style="text-align: justify;">
        {{ person.bio3 }}
        </p>{%- endif -%}
        {%- if person.bio4 -%}<p style="text-align: justify;">
        {{ person.bio4 }}
        </p>{%- endif -%}
      </div>

      <!-- Recomendaciones -->

        <div class="row">
          <h4 class="justify" style="padding-bottom: 10px;"><strong>Recomendaciones</strong></h4>
          {%- if person.book1title -%}
          {% if person.book2title %}<div class="col s12 m6 l6">{% endif %}
            <div class="row center">
  		        <a href="{{ person.book1link }}" target="_blank"><img class="responsive-img" style="width:50%" src="{{ person.book1img }}"></a>
              <p style="text-align: center">
                <a href="{{ person.book1link }}" target="_blank">{{ person.book1title }}</a>
              </p>
            </div>
          </div>
          {%- endif -%}
          {%- if person.book2title -%}
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.book2link }}" target="_blank"><img class="responsive-img" style="width:50%" src="{{ person.book2img }}"></a>
              <p style="text-align: center">
                <a href="{{ person.book2link }}" target="_blank">{{ person.book2title }}</a>
              </p>
            </div>
          </div>
          {%- endif -%}
        </div>

        {%- if person.videotitle -%}
        <div class="row">
          <center><iframe width="642" height="361" src="{{ person.videolink }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </div>
        {%- endif -%}

    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

{% endif %}
{% endfor %}
