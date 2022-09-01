---
layout: layouts/default.njk
pageTitle: 🏈🐖 Posts
title: Posts
---

Here come the match reports

{%- for post in collections.post -%}

  <div class="neu ph3 pv2 mv3">
  <h2>
    <a href="{{post.url}}">{{post.data.title}}</a>
  </h2>
  <p>
    {{ post.templateContent | strip_html | truncate:100 }}
  </p>
  </div>
{%- endfor -%}
