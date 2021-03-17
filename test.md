---
layout: default
title: Preliminares PLANCKS
permalink: /test/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
      <ul class="collection">
{% for item in site.data.EC %}
  {% for miembro in item.miembros %}
      <li class="collection-item avatar">
        <img src="{{ miembro.img }}" alt="" class="circle">
        <span class="title">{{ miembro.nombre }}</span>
        <p>
          {{ miembro.rol }}
        </p>
        <div class="secondary-content-JdeG">
          <a href="mailto:{{ miembro.mail }}?subject={{ miembro.subject }}">
            <i class="fa fa-lg fa-envelope">
            </i>
          </a>
         {% if miembro.linkedin != nil %}	
	  <a href="{{ miembro.linkedin }}" target="_blank" title="Perfil LinkedIn">
	    <i class="fa fa-lg fa-linkedin-square" aria-hidden="true">
            </i>
	  </a>
         {% endif %}
        </div>
	<p>
          {{ miembro.descr }}
        </p>
      </li>
  {% endfor %}
</ul>
    </div>
  </div>
</div>


