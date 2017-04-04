---
title:  "Weekly Updates"
subtitle: "One Step at a Time"
image: "img/g.jpg"
order: 60
---

{% for post in site.posts reversed %}
## {{ post.title }}
{% if post.subtitle %}
<p class="post_subtitle">{{ post.subtitle }}</p>
{% endif %}
_{{post.date | date: '%b %d, %Y'}}{% if post.location %} at {{post.location}}{% endif %}_
{{post.content}}
<hr>
{% endfor %}
