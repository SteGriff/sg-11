---
layout: layouts/default.njk
pageTitle: 🏈🐖 Profiles
---

# Profiles

Here come the teams and managers

      {%- for profile in siteData.profiles -%}
        <div>
        <p>{{profile.RealName}}</p>
        </div>
        
      {%- endfor -%}