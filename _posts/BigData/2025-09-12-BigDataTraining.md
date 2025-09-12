---
layout: page
icon: fas fa-file-pdf
order: 5
date: 2025-09-12
title: "SQL-BigData"
categories: [Projects, SQL]
tags: [project, sql]
---

# SQL-BigData project:

## Here is everything that i did in the SQL-course. The tasks were to perform SQL-queries, create tables, and manage data.

{% for file in site.static_files %}
  {% if file.path contains "assets/BigData/" %}
![{{ file.name }}]({{ file.path | relative_url }})
{% endif %}
{% endfor %}
