---
layout: layouts/default.njk
pageTitle: 🏈🐖 Profiles
---

# Profiles

Here come the teams and managers

{%- for profile in siteData.profiles -%}
  <div class="neu ph3 pv2 mv3">
    <h2>{{profile.TeamName}} &ndash; <small class="gray">{{profile.RealName}}</small></h2>
    <p class="gray i">
      {{profile.Fact}}
    </p>
  </div>
{%- endfor -%}
