---
layout: page
title: Delegaciones
permalink: /delegaciones/
redirect_from:
---

En esta página podrás encontrar información sobre qué son, dónde están y cómo crear una nueva Delegación del Grupo de Estudiantes de la RSEF. 

## ¿Qué son?

Descubre con este vídeo todo lo que nuestras Delegaciones pueden ofrecerte:

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/hm7Ur7Jxh_0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## ¿Dónde están?

{% assign n = 0 %}
{% for item in site.data.LC %}
	{% unless item.congelado %}
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
				{% if item.presidente != nil %}
				Presidenta/e: {{ item.presidente }}
				{% endif %}
				<br>
				Fundación: {{ item.fundacion }}
				<br>
				{% if item.ex != nil %}
				Ex presidentes/as: {{ item.ex }}
				{% endif %} 				
				</p>
				<br>
				{% if item.ins != nil %}	
				<a href="{{ item.ins }}" target="_blank" title="Página Instagram">
				<i class="fa fa-lg fa-instagram" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.tw != nil %}	
				<a href="{{ item.tw }}" target="_blank" title="Página Twitter">
				<i class="fa fa-lg fa-twitter-square" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.fb != nil %}	
				<a href="{{ item.fb }}" target="_blank" title="Página Facebook">
				<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.url != nil %}	
				<a href="{{ item.url }}" target="_blank" title="Página Web">
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
