---
layout: layouts/default.njk
pageTitle: 🏈🐖 Posts
---

# Posts

Here come the match reports

{%- for post in collections.post -%}
  <div class="neu ph3 pv2 mv3">
  <h2>{{post.data.title}} </h2>
  <p>
  </p>
  </div>
{%- endfor -%}
