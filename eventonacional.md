---
layout: page
title: Eventos Nacionales
permalink: /eventonacional/
---


## Próximamente

{% assign loopindex = 0 %}
{% for event in site.events reversed%}
{% if event.date >= site.time and event.categories contains "eventonacional" %}
{% assign rowfinder = loopindex | modulo:2 %}
{% if rowfinder == 0 %}
<div class="row">
{% endif %}
  <div class="col s12 m6">
    <div class="card horizontal">
      <div class="card-image">
	    {% if event.locandina %}
            <img style="height: 520px; object-fit: contain;" src="{{ event.locandina }}" href="#{{ event.id | remove: "/" }}-modal">
        {% else %}
            <img style="height: 520px; object-fit: contain;" src="{{ site.url }}/img/eventonacional/IAPSposter.png">
        {% endif %}
      </div>
      <div class="card-content">
      	<span class="card-title grey-text text-darken-4">{{ event.title }}</span>
    	<p>{{ event.CL }}</p>
      </div>
    	<div class="card-action">
            {% if event.facebook %}<a href="{{ event.facebook }}"><i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i></a>{% endif %}
            {% if event.locandina %}<a href="{{ event.locandina }}"><i class="fa fa-lg fa-file-image-o"></i></a>{% endif %}
            {% if event.link %}<a href="{{ event.link }}"><i class="fa fa-lg fa-link"></i></a>{% endif %}
            {% if event.gallery %}<a href="{{ event.gallery }}"><i class="fa fa-lg fa-camera-retro"></i></a>{% endif %}
            {% if event.report %}<a href="{{ event.report}}"><i class="fa fa-lg fa-file-text"></i></a>{% endif %}
    	</div>
    </div>
  </div>
{% if rowfinder == 1 %}
</div>
{% endif %}
{% assign loopindex = loopindex | plus: 1 %}
{% endif %}
{% endfor %}
{% if rowfinder == 0 %}
</div>
{% endif %}
{% if loopindex == 0 %}
<ul class="collection">
    <li class="collection-item"> No hay eventos programados. Stay tuned! </li>
</ul>
{% endif %}


## Eventos Pasados

{% assign loopindex = 0 %}
{% for event in site.events reversed%}
{% if loopindex < 3 and event.date < site.time and event.categories contains "eventonacional" %}
{% assign rowfinder = loopindex | modulo:2 %}
{% if rowfinder == 0 %}
<div class="row">
{% endif %}
  <div class="col s12 m6">
    <div class="card horizontal">
      <div class="card-image">
	    {% if event.locandina %}
            <img style="height: 520px; object-fit: contain;" src="{{ event.locandina }}" href="#{{ event.id | remove: "/" }}-modal">
        {% else %}
            <img style="height: 520px; object-fit: contain;" src="{{ site.url }}/img/AISF_LOGO_nobkg.png">
        {% endif %}
      </div>
      <div class="card-content">
      	<span class="card-title grey-text text-darken-4">{{ event.title }}</span>
    	<p>{{ event.CL }}</p>
      </div>
    	<div class="card-action">
            {% if event.facebook %}<a href="{{ event.facebook }}"><i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i></a>{% endif %}
            {% if event.locandina %}<a href="{{ event.locandina }}"><i class="fa fa-lg fa-file-image-o"></i></a>{% endif %}
            {% if event.link %}<a href="{{ event.link }}"><i class="fa fa-lg fa-link"></i></a>{% endif %}
            {% if event.gallery %}<a href="{{ event.gallery }}"><i class="fa fa-lg fa-camera-retro"></i></a>{% endif %}
            {% if event.report %}<a href="{{ event.report}}"><i class="fa fa-lg fa-file-text"></i></a>{% endif %}
    	</div>
    </div>
  </div>
{% if rowfinder == 1 %}
</div>
{% endif %}
{% assign loopindex = loopindex | plus: 1 %}
{% endif %}
{% endfor %}
{% if loopindex == 1 %}
</div>
{% endif %}


<div class="section">

<div class="row">
    <div class="col s12">
        <ul class="collapsible popout" data-collapsible="accordion">
            {% for item in site.data.LC %}
            <li>
              <div class="collapsible-header">
                <div class="center">
                  {{ item.nome }}
                </div>
              </div>
              <div class="collapsible-body">
                <table class="centered striped">
                  <tbody>
                    {% for event in site.events reversed%}
                    {% if event.date < site.time and event.CL contains item.nome %}
                    <tr>
                      <td>{{ event.title }}</td>
                      <td>{{ event.date | date: '%d %b %Y' }}</td>
                      <td>{% if event.facebook %}<a href="{{ event.facebook }}"><i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i></a>{% endif %}</td>
                      <td>{% if event.locandina %}<a href="{{ event.locandina }}"><i class="fa fa-lg fa-file-image-o"></i></a>{% endif %}</td>
                      <td>{% if event.link %}<a href="{{ event.link }}"><i class="fa fa-lg fa-link"></i></a>{% endif %}</td>
                      <td>{% if event.gallery %}<a href="{{ event.gallery }}"><i class="fa fa-lg fa-camera-retro"></i></a>{% endif %}</td>
                      <td>{% if event.report %}<a href="{{ event.report}}"><i class="fa fa-lg fa-file-text"></i></a>{% endif %}</td>
                    </tr>
                    {% endif %}
                    {% endfor %}
                  </tbody>
                </table>
              </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>

</div>
