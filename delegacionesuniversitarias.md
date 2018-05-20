---
layout: page
title: Delegaciones Universitarias
permalink: /delegacionesuniversitarias/
redirect_from:
---

{% assign n = 0 %}
{% for item in site.data.LC %}
	{% assign n = n | plus: 1 %}
{% endfor %}

La AEEF cuenta por el momento con {{ n }} Delegaciones Universitarias en:

<ul class="collection">
	{% for item in site.data.LC %}
	    <li class="collection-item avatar" id="{{ item.nombre }}">
	      	<img src="{{ item.img }}" alt="" class="circle">
	      	<span class="title">
				Delegación Universitaria de {{ item.nombre }}
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
	      	<div class="secondary-content">
				{% if item.fb != nil %}
					<a href="{{ item.fb }}" title="Pagina Facebook">
						<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
					</a>
				{% endif %}
				{% if item.reglamento!= nil %}
		        	<a href="{{ item.reglamento }}" title="Reglamento Interno">
						<i class="fa fa-lg fa-file-text"></i>
					</a>
				{% endif %}
	      		<a href="mailto:{{ item.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;" title="Email de la DU">
					<i class="fa fa-lg fa-envelope"></i>
				</a>
			</div>
	    </li>
	{% endfor %}
</ul>


## ¿Quieres crear una nueva Delegación Universitaria?

Consulta [esta](/nuevadelegacionuniversitaria/) página.
