---
layout: page
title: "Test Joan 2 wo/ comment"
permalink: /testJoan2/
redirect_from:
---

<button class="chip_button" id="All" onclick="filterUsingCategory('All')">
  Todas las entradas
</button>
{% assign categories = site.categories | sort %}
{% for category in categories %}
  {% assign cat = category | first %}
  {% if cat == 'blog' %}
  {% else %}
  <button class="chip_button" id="{{ cat }}" onclick="filterUsingCategory(this.id)">
    {{ cat }}
  </button>
  {% endif %}
{% endfor %}

<ul class="post-list">
  {% assign id = 0 %}
  {% for post in site.categories.blog %}
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
              {% if category == 'blog' %}
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
      </li>
      <div class="divider"></div>
      </div>
    {% endif %}
  {% endfor %}
</ul>
