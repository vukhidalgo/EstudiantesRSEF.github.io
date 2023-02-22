---
layout: default
title: Encuentro Nacional de Estudiantes de Física 2023
permalink: /ENEF2023/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
      <img class="materialboxed" width="100%" src="/img/eventos/2021-Jornadas/HeaderJornadas21cLogo.jpg">
      <p>
        ¡Bienvenid@ a la página web oficial de las Jornadas de Verano del Grupo de Estudiantes de la RSEF!
      </p>
      <p style="text-align: justify;">
        Las Jornadas de Verano son el evento de desarrollo profesional y personal del Grupo de Estudiantes de la RSEF. Diseñado por y para estudiantes de grado, máster y doctorado en física de toda España, tendrá lugar del 13 al 15 de julio en formato on-line, y tratará temáticas muy diversas: física experimental y teórica, divulgación, empresa... ¡Y no faltarán oportunidades para que los participantes se conozcan entre sí!
      </p>
      <p style="text-align: justify;">
	Si eres una persona inquieta, con ganas de aprender y seguir creciendo, no lo dudes: apúntate a las Jornadas y ayúdanos a seguir construyendo una comunidad de físic@s unida y conectada. Para participar, simplemente debes ser miembro del Grupo de Estudiantes de la RSEF ¿Que aún no lo eres? <a href="{{ site.url }}/inscripcion" target="_blank">Estás a cinco minutos de conseguirlo.</a> Síguenos en redes y anímate: ¡las incripciones ya están abiertas! <!-- ¡Síguenos en redes y estate atent@ porque pronto abriremos inscripciones! -->
      </p>
      <p style="text-align: right;">
        <strong>Fdo.: el <a class="modal-trigger" href="#ModalComOrgJor21">Comité Organizador de las Jornadas de Verano 2021</a>.</strong>
      </p>

      <!-- MODAL COMITÉ ORGANIZADOR -->

      <div id="ModalComOrgJor21" class="modal">
        <div class="modal-content">
          <h3 class="justify"><strong>Jornadas de Verano 2021</strong></h3>
          <h2 class="justify"><strong>Comité Organizador</strong></h2>

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

          <p>Conócenos mejor en la <a href="{{ site.url}}/junta-de-gobierno" target="_blank">web de la Junta de Gobierno</a> del Grupo de Estudiantes de la RSEF.</p>

        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
        </div>
      </div>

    <!-- INDEX AS BUTTONS -->

    <div class="section">
      <div class="row">
        <div class="col s12 m6 l3">
          <div class="row center">
		        <a href="#Actividades" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Objetivos</a>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="row center">
		        <a href="#Horario" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Horario</a>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="row center">
            <a href="#Ponentes" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Ponentes</a>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="row center">
            <a href="#Participar" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">¡Inscríbete!</a>
          </div>
        </div>
      </div>
    </div>

     <!-- OBJETIVOS -->

    <div class="section">
      <h3 id="Actividades">Objetivos</h3>
      <h2>Aprender Física · Conocer Personas · Desarrollar Habilidades</h2>
      <div class="section">
        <div class="row">
          <div class="col s12 m6 l4">
            <div class="row center">
  		        <img class="materialboxed" width="70%" src="/img/eventos/2021-Jornadas/aprender.png">
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="row center">
  		        <img class="materialboxed" width="70%" src="/img/eventos/2021-Jornadas/conocer.png">
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="row center">
              <img class="materialboxed" width="70%" src="/img/eventos/2021-Jornadas/desarrollar.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HORARIO -->

    <div class="section">
      <h3 id="Horario">Horario</h3>
      <h2>Día a día, del 13 al 15 de julio de 2021</h2>
        <p style="text-align: justify;">
          Iremos desvelando la agenda de cada día en nuestras redes sociales, ¡así que permanece atent@!
        </p>
    </div>
    <div class="section">
      <div class="row center">
        <img class="materialboxed" width="80%" src="/img/eventos/2021-Jornadas/HorarioWebAmpliadoPremio.png">
      </div>
    </div>

    <!-- PONENTES -->

    <div class="section">
      <h3 id="Ponentes">Ponentes</h3>
      <h2>Elegimos que nos enseñen los mejores</h2>
        <p style="text-align: justify;">
          Algun@s ponentes que ya nos han confirmado:
        </p>
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

     <h2>¡Haz click en cada categoría y descúbrelos a tod@s!</h2>

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
                 <ul class="collapsible">
                   <li>
                     <div class="collapsible-header"><i class="material-icons">language</i>Físic@s por el mundo</div>
                       <div class="collapsible-body">
                         <ul class="collection">
                           {% for person in site.persons %}
                           {% if person.evento contains "JornadasVerano2021" %}
                           {% if person.class contains "mundo" %}
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

     <!-- PONENTES OLD

     {% for item in site.data.jornadas %}
     {% if item.anno contains "2021" %}

     <div class="section">
       <div class="row">
         <div class="col s12 m6 l6">
           <div class="row center">
           <h2 style="text-align: center;">Academia</h2>
           <ul class="collection">
             {% for miembro in item.miembros %}
             {% if miembro.class contains "academia" %}
             <li class="collection-item avatar">
               <img src="{{ miembro.img }}" alt="" class="circle">
               <span class="title">{{ miembro.nombre }}</span>
               <p>
                 {{ miembro.rol }}
               </p>
               <hr>
               <div style="text-align: left;">
               <p>
                 {{ miembro.descr }}
               </p>
               <p style="text-align: justify;">
                 {{ miembro.horario }}
               </p>
               </div>
             </li>
             {% endif %}
             {% endfor %}
           </ul>
           </div>
         </div>
         <div class="col s12 m6 l6">
         <div class="row center">
         <h2 style="text-align: center;">Empresa</h2>
         <ul class="collection">
           {% for miembro in item.miembros %}
           {% if miembro.class contains "empresa" %}
           <li class="collection-item avatar">
             <img src="{{ miembro.img }}" alt="" class="circle">
             <span class="title">{{ miembro.nombre }}</span>
             <p>
               {{ miembro.rol }}
             </p>
             <hr>
             <div style="text-align: justify;">
             <p>
               {{ miembro.descr }}
             </p>
             <p style="text-align: justify;">
               {{ miembro.horario }}
             </p>
             </div>
           </li>
           {% endif %}
           {% endfor %}
         </ul>
         </div>
         <div class="row center">
         <h2 style="text-align: center;">Mixtos Academia - Empresa</h2>
         <ul class="collection">
           {% for miembro in item.miembros %}
           {% if miembro.class contains "mixto" %}
           <li class="collection-item avatar">
             <img src="{{ miembro.img }}" alt="" class="circle">
             <span class="title">{{ miembro.nombre }}</span>
             <p>
               {{ miembro.rol }}
             </p>
             <hr>
             <div style="text-align: left;">
             <p>
               {{ miembro.descr }}
             </p>
             <p style="text-align: justify;">
               {{ miembro.horario }}
             </p>
             </div>
           </li>
           {% endif %}
           {% endfor %}
         </ul>
         </div>
         <div class="row center">
         <h2 style="text-align: center;">Divulgación</h2>
         <ul class="collection">
           {% for miembro in item.miembros %}
           {% if miembro.class contains "divulgacion" %}
           <li class="collection-item avatar">
             <img src="{{ miembro.img }}" alt="" class="circle">
             <span class="title">{{ miembro.nombre }}</span>
             <p>
               {{ miembro.rol }}
             </p>
             <hr>
             <div style="text-align: justify;">
             <p>
               {{ miembro.descr }}
             </p>
             <p style="text-align: justify;">
               {{ miembro.horario }}
             </p>
             </div>
           </li>
           {% endif %}
           {% endfor %}
         </ul>
         </div>
         <div class="row center">
         <h2 style="text-align: center;">Estudiantes</h2>
         <ul class="collection">
           {% for miembro in item.miembros %}
           {% if miembro.class contains "estudiantes" %}
           <li class="collection-item avatar">
             <img src="{{ miembro.img }}" alt="" class="circle">
             <span class="title">{{ miembro.nombre }}</span>
             <p>
               {{ miembro.rol }}
             </p>
             <hr>
             <div style="text-align: justify;">
             <p>
               {{ miembro.descr }}
             </p>
             <p style="text-align: justify;">
               {{ miembro.horario }}
             </p>
             </div>
           </li>
           {% endif %}
           {% endfor %}
         </ul>
         </div>
       </div>
     </div>

     {% endif %}
     {% endfor %} -->

    <!-- INSCRÍBETE -->

      <div class="section">
        <h3 id="Participar">¡Inscríbete!</h3>
        <p style="text-align: justify;">
          ¿Deseando que lleguen las Jornadas? ¡Y nosotros también! Corre y apúntate ya, porque...
        </p>
        <p class="center"><strong>CIERRE INSCRIPCIONES EN</strong></p>
	      <h3 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h3>
	<h2 style="text-align: center;">Miembros del Grupo de Estudiantes: Inscripción Gratuita</h2>
        <h2 style="text-align: center;">Estudiante (menor 25 años): Membresía RSEF 2021 + Jornadas = 10€</h2>
        <h2 style="text-align: center;">Estudiante (entre 25 y 30 años): Membresía RSEF 2021 + Jornadas = 30€</h2>
      </div>
      <div class="section">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2>Paso 1:</h2>
              <a href="{{ site.url }}/inscripcion" target="_blank" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Inscripción Grupo Estudiantes RSEF</a>
              <p>(Omítase si se es miembro del Grupo de Estudiantes)</p>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2>Paso 2:</h2>
              <a href="https://forms.gle/8m4cPrmqeFeCxieu8" target="_blank" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Inscripción Jornadas Verano 2021</a>
            </div>
          </div>
        </div>
      </div>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jul 11, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "INSCRIPCIONES CERRADAS";
  }
}, 1000);
</script>        


    </div>
  </div>
</div>
