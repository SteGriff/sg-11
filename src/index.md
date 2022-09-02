---
layout: layouts/default.njk
pageTitle: 🏈🐖 Home
title: Welcome to The Pigskin Chronicle
---

Football. Need I say more?

## Latest post:

{% for post in collections.post limit: 1 %}

<div class="neu ph3 pv2 mv3">
<h3>
  <a class="no-underline" href="{{post.url}}">{{post.data.title}}</a>
</h3>
<p class="mv0">
  <small>{{post.date| date: "%d %B %Y"}}</small>
</p>
<p>
  {{ post.templateContent | strip_html | truncate:130 }}
</p>
</div>

{% endfor %}

## See also:

 + [Team Profiles](/teams/)
 + [About TPC](/about/)