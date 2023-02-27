---
layout: enef_page
title: "Todas las noticias del ENEF 2023"
permalink: /ENEF2023/Noticias
redirect_from:
---

<ul class="post-list">
  {% assign id = 0 %}
  {% for post in site.categories.enef2023 %}
    {% if post.hidden != true %}
      {% assign id = id | plus:1 %}
      <div  id="{{id}}">
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            {{ post.title }}
          </a>
          {% if post.date %}
            <div class="chip">
              <span class="post-meta">
                {{ post.date | date: "%-d %b %Y" }}
              </span>
            </div>
          {% endif %}
          {% if post.author %}
            <div class="chip">
              <span class="post-meta">
                {{ post.author }}
              </span>
            </div>
          {% endif %}
          {% if post.categories %}
            {% for category in post.categories %}
              {% if category == 'enef2023' %}
                {% else %}
                  <div class="chip">
                    <span class="post-meta">
                      {{ category }}
                    </span>
                  </div>
              {% endif %}
            {% endfor %}
          {% endif %}
        </h2>
        <div class="entry-content">
          {{ post.excerpt | strip_html }}
        </div>
        <br>
        </li>
        <div class="divider">
        </div>
      </div>
    {% endif %}
  {% endfor %}
</ul>

<div class="row center">
  <a href="{{ site.url }}/ENEF2023" id="about-button" class="btn-large waves-effect waves-light" style="color:#FFFFFF;background-color:#313FBB">Vuelve a la página del ENEF</a>
</div>


<script type="text/javascript">
  function filterUsingCategory(selectedCategory) {
    var id = 0;
    {% for post in site.categories.enef %}
      var cats = {{ post.categories | jsonify }}

      var postDiv = document.getElementById(++id);
      postDiv.style.display =
        (selectedCategory == 'All' || cats.includes(selectedCategory)) 
          ? 'unset' 
          : 'none';
    {% endfor %}
  }
</script>
