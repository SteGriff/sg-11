---
title: Posts
---

Here come the posts

{%- for post in collections.post reversed -%}
  <div class="neu ph3 pv2 mv3">
  <h2>
    <a class="no-underline" href="{{post.url}}">{{post.data.title}}</a>
  </h2>
  <p class="mv0">
    <small>{{post.date| date: "%d %B %Y"}}</small>
  </p>
  <p>
    {{ post.templateContent | strip_html | truncate:100 }}
  </p>
  </div>
{%- endfor -%}
