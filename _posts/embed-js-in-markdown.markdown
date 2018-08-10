<!--add to layout-->
---
layout: post
title: Adding custom JavaScript for a specific post
category: posts
customjs:
 - http://code.jquery.com/jquery-1.4.2.min.js
 ---
 
 <!-- in post -->
 <!-- Custom JavaScript files set in YAML front matter -->
{% for js in page.customjs %}
<script async type="text/javascript" src="{{ js }}"></script>
{% endfor %}
