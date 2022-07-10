---
layout: event
categories: eventos-internacionales
title: "Mesa redonda: estudiantes de física por España"
shorttitle: ""
startingdate: 2022-07-12
endingdate:
place: Murcia y online
hidedataincover: ""
locandina:
cover: /img/eventos/2022-Bienal/PortadaMesaRedonda.png
gallery:
site: /eventos-internacionales/2022/07/12/MesaRedondaBienal
ranking: 
exam:
comm:
---

<div class="section">
  <div class="row">
	  
    <div class="col s12 m6 l7">
      <div class="row center">
        <p style="text-align: justify;">
          La <strong>Bienal de física de la RSEF</strong> es el evento de encuentro de toda la comunidad física española.
          Este año la 38a edición tendrá lugar en <strong>Murcia del 11 al 15 de julio</strong> y queremos que también sea una oportunidad para que nosotr@s, estudiantes de física, nos encontremos, compartamos inquietudes y aprendamos de la mejor física de nuestro país.
	</p>
	<p style="text-align: justify;">
	  Es por esto que desde el GdeE estamos participando por primera vez de forma activa en la Bienal organizando la <strong>Mesa Redonda: estudiantes de física por España</strong>.
          En ella hablaremos con estudiantes de doctorado sobre los aspectos positivos y negativos que están viviendo, cómo ven su futuro, sus recomendaciones a otros estudiantes, y mucho más.
 	</p>
        <p style="text-align: justify;">
          Será el <strong>martes 12 de julio de 15:30h a 17h</strong> y estará moderada por Pedro Villalba González, Vocal del GdeE y de la DFTP.
          Sigue nuestras redes sociales y échale un vistazo a la <a href="https://www.um.es/fisica/bienal-2022/programa.php" target="_blank" id="bienal-web">página web de la Bienal</a> para tener las últimas informaciones sobre los panelistas que nos acompañarán. ¡Te esperamos!
	</p>
      </div>
    </div>
    <div class="col s12 m6 l5" style="padding: 20px">
      <img class="materialboxed" width="90%" src="/img/eventos/2022-Bienal/MesaRedonda.jpeg">
    </div>
	 
  </div>

	
<!-- AUTORES -->
  <div class="row"> 
    <h3 id="Autores">¡Conoce a l@s ponentes de la mesa redonda!</h3>
    <div class="col s12 m6">
      <div class="row center">
      {% for person in site.persons %}
      {% if person.evento contains "Bienal2022" %}
      {% if person.modera contains "YES" %}
        <ul class="collection waves-effect waves-light" style="width: 80%">
          <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
            <li class="collection-item avatar2">
              <img src="{{ person.img }}" alt="" class="circle">
              <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
              <p style="padding-top: 10px">{{ person.rol }}</p>
            </li>
          </a>
        </ul>
      {% endif %}
      {% endif %}
      {% endfor %}    
      </div>

      <div class="row center">
      {% for person in site.persons %}
      {% if person.evento contains "Bienal2022" %}
      {% if person.modera contains "NO" %}
        <ul class="collection waves-effect waves-light" style="width: 40%">
          <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
            <li class="collection-item avatar2">
              <img src="{{ person.img }}" alt="" class="circle">
              <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
              <p style="padding-top: 10px">{{ person.rol }}</p>
            </li>
          </a>
        </ul>
      {% endif %}
      {% endif %}
      {% endfor %}    
      </div>
    </div>

    <!-- Modal PONENTES -->

    {% for person in site.persons %}
    {% if person.evento contains "Bienal2022" %}

    <div id="{{ person.id | remove: "/" }}-modal" class="modal">
      <div class="modal-content">
        <div class="section" style="padding-left: 30px; padding-right: 30px;">

          <div class="row">
            <div class="col s12 m6 l6">
              <div class="row center">
                <img src="{{ person.img }}" alt="" class="circle" width="70%">
              </div>
            </div>
            <div class="col s12 m6 l6">        
              <div class="row center" style="padding-left: 30px; padding-top: 50px;">
                <h3 class="justify">{{ person.nombre }}</h3>
                <h5 class="justify">{{ person.aff }}</h5>
                <h5 class="justify" style="padding-top: 10px;">{{ person.roldes }}</h5>
              </div>
            </div>
          </div>

          <div class="row">
            <h2 class="justify">Biografía</h2>
            {%- if person.bio1 -%}<p style="text-align: justify;">
            {{ person.bio1 }}
            </p>{%- endif -%}
            {%- if person.bio2 -%}<p style="text-align: justify;">
            {{ person.bio2 }}
            </p>{%- endif -%}
            {%- if person.bio3 -%}<p style="text-align: justify;">
            {{ person.bio3 }}
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
     
  </div>
</div>
     
