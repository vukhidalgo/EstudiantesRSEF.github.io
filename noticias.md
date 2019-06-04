---
layout: page
title: "Noticias"
redirect_from:
  - /noticias.html
---

<ul class="article-list">
  {% for article in site.categories.noticias %}
  {% if article.hidden != true %}
  <li>
    <h2>
      <a class="article-link" href="{{ article.url | prepend: site.baseurl }}">
          {{ article.title }}
      </a>
    {% if article.date %}
        <div class="chip">
            <span class="article-meta">
                {{ article.date | date: "%-d %b %Y" }}
            </span>
        </div>
    {% endif %}
    {% if article.author %}
        <div class="chip">
            <span class="article-meta">
                {{ article.author }}
            </span>
        </div>
    {% endif %}
    {% if article.categories %}
        {% for category in article.categories %}
            {% if category == 'noticias' %}
            {% else %}
                <div class="chip">
                    <span class="article-meta">
                        {{ category }}
                    </span>
                </div>
            {% endif %}
        {% endfor %}
    {% endif %}
    </h2>
    <div class="entry-content">
        {{ article.excerpt | strip_html }}
    </div>
  </li>
  <div class="divider"></div>
  {% endif %}
  {% endfor %}
</ul>
