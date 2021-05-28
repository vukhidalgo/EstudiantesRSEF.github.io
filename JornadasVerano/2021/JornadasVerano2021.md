---
layout: default
title: Jornadas de Verano 2021
permalink: /JornadasVerano2021/
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
	Si eres una persona inquieta, con ganas de aprender y seguir creciendo, no lo dudes: apúntate a las Jornadas y ayúdanos a seguir construyendo una comunidad de físic@s unida y conectada. Para participar, simplemente debes ser miembro del Grupo de Estudiantes de la RSEF ¿Que aún no lo eres? <a href="{{ site.url }}/inscripcion" target="_blank">Estás a cinco minutos de conseguirlo.</a> ¡Síguenos en las redes y estate atent@ porque pronto abriremos inscripciones!
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
        <img class="materialboxed" width="80%" src="/img/eventos/2021-Jornadas/HorarioWebAmpliado.png">
      </div>
    </div>

    <!-- PONENTES -->

    <div class="section">
      <h3 id="Ponentes">Ponentes</h3>
      <h2>Elegimos que nos enseñen los mejores</h2>
        <p style="text-align: justify;">
          Ya nos han confirmado:
        </p>
     </div>

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
           <h2 style="text-align: center;">Mixtos</h2>
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
         </div>
       </div>
     </div>

     {% endif %}
     {% endfor %}

    <!-- INSCRÍBETE -->

      <div class="section">
        <h3 id="Participar">¡Inscríbete!</h3>
        <p style="text-align: justify;">
          ¿Deseando que lleguen las Jornadas? ¡Y nosotros también! Ya sólo faltan para que puedas inscribirte...
        </p>
	      <h3 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h3>
        <h2 style="text-align: center;">Estudiante (x<25 años): Membresía RSEF 2021 + Jornadas = 10€</h2>
        <h2 style="text-align: center;">Estudiante (25<span>&#8804;</span>x<30 años): Membresía RSEF 2021 + Jornadas = 30€</h2>
      </div>
      <div class="section">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2>Paso 1:</h2>
              <a href="{{ site.url }}/inscripcion" target="_blank" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Inscripción Grupo Estudiantes RSEF</a>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2>Paso 2:</h2>
              <a href="" target="_blank" class="btn-large waves-effect waves-light" style="color:#323333;background-color:#E0C58B">Inscripción Jornadas Verano 2021</a>
            </div>
          </div>
        </div>
      </div>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jun 2, 2021 12:00:00").getTime();

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
    document.getElementById("countdown").innerHTML = "INSCRIPCIONES ABIERTAS";
  }
}, 1000);
</script>        


    </div>
  </div>
</div>
