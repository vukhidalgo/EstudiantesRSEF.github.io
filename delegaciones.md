---
layout: page
title: Delegaciones
permalink: /delegaciones/
redirect_from:
---

{% assign n = 0 %}
{% for item in site.data.LC %}
	{% assign n = n | plus: 1 %}
{% endfor %}

El Grupo de Estudiantes de la RSEF cuenta por el momento con {{ n }} Delegaciones en:

<ul id="presidenti_LC" class="collection">
	{% for item in site.data.LC %}
		{% unless item.congelado %}
			<li class="collection-item avatar" id="{{ item.nombre }}">
				<div class="tertiary-content">
					<img src="{{ item.logo }}">
				</div>
				{% assign image = "/img/presidenti/vuoto.png" %}
				{% unless item.img == "" %}
					{% assign image = item.img %}
				{% endunless %}
				<img src="{{ item.img }}" alt="" class="circle">
				Delegación de <b> {{ item.nombre }} </b>
				<p>
				Presidente/a: {{ item.presidente }} 
				<br>
				Fundación: {{ item.fundacion }}
				<br>
				{% if item.ex != nil %}
				Ex presidentes/as: {{ item.ex }}
				{% endif %} 				
				</p>
				<br>
				{% if item.ins != nil %}	
				<a href="{{ item.ins }}" target="_blank" title="Pagina Facebook">
				<i class="fa fa-lg fa-instagram-square" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.url != nil %}	
				<a href="{{ item.url }}" target="_blank" title="Pagina Web">
				<i class="fas fa-lg fa-globe" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.reglamento != nil %}
				<a href="{{ item.reglamento }}" target="_blank" title="Reglamento Interno">
				<i class="fa fa-lg fa-file-text"></i>
				</a>
				{% endif %}
				<a href="mailto:{{ item.mail }};" title="Email Delegación">
				<i class="fa fa-lg fa-envelope"></i>
				</a>
			</li>
		{% endunless %}
	{% endfor %}
</ul>


## ¿Quieres crear una nueva Delegación?

Consulta [esta página](/nueva-delegacion/).
