---
layout: default
title: Prelisconmodales
permalink: /Prelisconmodales/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
      
    <!-- AUTORES -->

    <div class="section">
      <h3 id="Autores">¡Conoce a l@s autor@s de los problemas!</h3>
        <p style="text-align: justify;">
          Los miembros del Comité Académico de las Preliminares PLANCKS 2022 son:
        </p>
     </div>

     <div class="section">
       <div class="col s12 m6">
         <div class="row center">
         {% for person in site.persons %}
         {% if person.evento contains "Prelis2022" %}
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
         {% endfor %}    
         </div>
       </div>
     </div>


     <!-- Modal PONENTES -->

     {% for person in site.persons %}
     {% if person.evento contains "Prelis2022" %}

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
