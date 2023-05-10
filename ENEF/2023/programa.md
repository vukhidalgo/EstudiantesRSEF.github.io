---
layout: enef
title: Encuentro Nacional de Estudiantes de Física 2023
hidden: true
permalink: /ENEF2023/programa
---

<div class="no-pad-top" id="index-page">
  <div class="container">
  
    <div class="section">


<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Banner-5.png">

	
<!-- PROGRAMA -->
      <div class="section">
        <h4 id="programa">Programa</h4>
	<p style="text-align: justify;">¡Ya está aquí el programa preliminar del ENEF! Podéis ver que contamos con las mejores oportunidades de networking, divulgación y desarrollo profesional. Aunque aun puede estar sujeto a cambios, cuenta con actividades interesantes como ponencias científicas, talleres de desarrollo profesional, visitas a laboratorios, oportunidades de networking, feria de empresas, concurso de presentaciones... combinado con actividades lúdicas y culturales como una fiesta de prau y una espicha asturiana. Además de un día extra en uno de los parajes naturales más bonitos de España.</p>
        <p style="text-align: justify;">¿Te lo vas a perder? Comprueba que ya eres miembro del GdeE e <a href="{{ site.url }}/ENEF2023/#inscribete">inscríbete al ENEF</a>.</p>
        <div class="row">
          <img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Programa-2.png">
        </div>
	
	<h3 id="concurso-tesis">¡Preséntame tu tesis en 5 minutos!</h3>
	<p style="text-align: justify;">También queremos que TÚ seas el protagonista de este programa.
	Si te gusta la divulgación y quieres probar tus dotes artísticos, ¡te presentamos el mejor lugar: el concurso “Preséntame tu tesis en 5 minutos”! Puedes presentar un proyecto de investigación personal, tu TFG, TFM o una parte de tu tesis, o un proyecto de una asignatura.</p>
	<p style="text-align: justify;">Si quieres participar en este concurso o te lo estás pensando, indícalo en el formulario de inscripción y reservamos tu plaza. Además, <strong>aquellas personas que nos indiquen que quieren participar tendrán más posibilidades de recibir una plaza en el ENEF</strong>. Más adelante te explicaremos el funcionamiento más concreto y te pediremos el título y el abstract de tu presentación, junto con la composición del jurado. La presentación con mejor equilibrio entre calidad científica, capacidad de síntesis y divulgación amena será la ganadora y... ¡recibirá un PREMIO!</p>

      </div>
	    
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


	  
<!-- SPONSORS -->
      <div class="section">
        <h2>Organiza:</h2>
        <div class="row">
          <div class="col s12 m6 l6">
            <img id="logo GdeE" class="materialboxed" width="100%" src="/img/logos/gdee-rsef.png" alt="Grupo de Estudiantes de la RSEF">
          </div>
	</div>
	<h2>Colaboradores oro:</h2>
        <div class="row">	
          <div class="col s12 m6 l6">
            <img id="logo EPS-YM" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/YoungMinds.png" alt="European Physical Society - Young Minds">
          </div>
	  <div class="col s8 m4 l4">
            <img id="logo EDP" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/edp.png" alt="EDP">
          </div>
	</div>
	<h2>Colaboradores plata:</h2>
	<div class="row">
	  <div class="col s12 m4 l4">
            <img id="logo TKELEVATOR" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/TKE.png" alt="TKElevator">
          </div>
	  <div class="col s12 m4 l4">
            <img id="logo TIMEO" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/FATineo.png" alt="Fundación Automáticos Tineo">
          </div>
	  <div class="col s12 m4 l4">
            <img id="logo CASIO" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/CDE.png" alt="CASIO">
          </div>
        </div>
	<div class="row">
	  <div class="col s12 m4 l4">
            <img id="logo Merkle" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/Merkle.png" alt="Merkle">
          </div>
        </div>
      </div>
	  
    </div>
	   
    
  </div>
</div>

<!-- Modal PONENTES -->

{% for person in site.persons %}
{% if person.evento contains "JornadasVerano2021" %}

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
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h3 class="justify">{{ person.nombre }}</h3>
            <h5 class="justify">Biografía y Contenido Recomendado</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h2 class="justify">Biografía</h2>
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
        <h2 class="justify" style="padding-bottom: 12px;">Contenido Recomendado</h2>
        {%- if person.book1title -%}
          {%- if person.book2title -%}<div class="col s12 m6 l6">{%- endif -%}     
            <div class="row center">
              <a href="{{ person.book1link }}" target="_blank"><img class="responsive-img" style="width:50%; align: center;" src="{{ person.book1img }}"></a>
              <p style="text-align: center; padding-right: 2px; padding-left: 2px;">
                <a href="{{ person.book1link }}" target="_blank">{{ person.book1title }}</a>
              </p>
            </div>
          {%- if person.book2title -%}</div>{%- endif -%}      
          {%- endif -%}
        {%- if person.book2title -%}
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.book2link }}" target="_blank"><img class="responsive-img" style="width:50%" src="{{ person.book2img }}"></a>
              <p style="text-align: center; padding-right: 2px; padding-left: 2px;">
                <a href="{{ person.book2link }}" target="_blank">{{ person.book2title }}</a>
              </p>
            </div>
          </div>
        {%- endif -%}
      </div>

      {%- if person.videotitle -%}
        <div class="row">
          <center><iframe width="642" height="361" src="{{- person.videolink -}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </div>
      {%- endif -%}

      {%- if person.otherinfo1link -%}
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.otherinfo1link }}" target="_blank">{{ person.otherinfo1text }}</a>
            </div>
          </div>
          {%- if person.otherinfo2link -%}
            <div class="col s12 m6 l6">
              <div class="row center">
                <a href="{{ person.otherinfo2link }}" target="_blank">{{ person.otherinfo2text }}</a>
              </div>
            </div>
          {%- endif -%}
        </div>
      {%- endif -%}

      {%- if person.otherinfo3link -%}
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.otherinfo3link }}" target="_blank">{{ person.otherinfo3text }}</a>
            </div>
          </div>
          {%- if person.otherinfo4link -%}
            <div class="col s12 m6 l6">
              <div class="row center">
                <a href="{{ person.otherinfo4link }}" target="_blank">{{ person.otherinfo4text }}</a>
              </div>
            </div>
          {%- endif -%}
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
