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

<!-- <ul class="collection">
	{% for item in site.data.LC %}
	    <li class="collection-item avatar" id="{{ item.nombre }}">
	      	<img src="{{ item.img }}" alt="" class="circle">
	      	<span class="title">
				Delegación de {{ item.nombre }}
			</span>
	      	<p>
				Presidente: {{ item.presidente }} 
				<br>
	        	        Fundación: {{ item.fundacion }}
				<br>
				{% if item.ex != nil %}
					Ex presidente: {{ item.ex }}
				{% endif %} 				
	      	</p>
		<img src="{{ item.img }}" alt="" class="circle">
	      	<div class="secondary-content">
				{% if item.fb != nil %}
					<a href="{{ item.fb }}" title="Pagina Facebook">
						<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
					</a>
				{% endif %}
				{% if item.reglamento != nil %}
		        	<a href="{{ item.reglamento }}" title="Reglamento Interno">
						<i class="fa fa-lg fa-file-text"></i>
					</a>
				{% endif %}
			        {% if item.mail != nil %}
	      		        <a href="mailto:{{ item.mail }}" title="Email Delegación">
					      <i class="fa fa-lg fa-envelope"></i>
				        </a>
			        {% endif %}
			</div>
	    </li>
	{% endfor %}
</ul> -->

<ul id="presidenti_LC" class="collection">
	{% for item in site.data.LC %}
		{% unless item.congelato %}
			<li class="collection-item avatar" id="{{ item.nombre }}">
				<!-- <div class="tertiary-content">
					<img src="{{ item.logo }}">
				</div> -->
				{% assign image = "/img/presidenti/vuoto.png" %}
				{% unless item.img == "" %}
					{% assign image = item.img %}
				{% endunless %}
				<img src="{{ item.img }}" alt="" class="circle">
				Comitato Locale	di <b> {{ item.nombre }} </b>
				<p>
				Presidente: {{ item.presidente }} 
				<br>
				Fondazione: {{ item.fundacion }}
				<br>
				{% if item.ex != nil %}
				Ex presidenti: {{ item.ex }}
				{% endif %} 				
				</p>
				<br>
				{% if item.fb != nil %}	
				<a href="{{ item.fb }}" target="_blank" title="Pagina Facebook">
				<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.url != nil %}	
				<a href="{{ item.url }}" target="_blank" title="Pagina Web">
				<i class="fas fa-lg fa-globe" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.regolamento != nil %}
				<a href="{{ item.reglamento }}" target="_blank" title="Regolamento Interno">
				<i class="fa fa-lg fa-file-text"></i>
				</a>
				{% endif %}
				<a href="mailto:{{ item.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;" title="Indirizzo email">
				<i class="fa fa-lg fa-envelope"></i>
				</a>
			</li>
		{% endunless %}
	{% endfor %}
</ul>


## ¿Quieres crear una nueva Delegación?

Consulta [esta página](/nueva-delegacion/).
