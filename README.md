# Pigskin Chronicle

This is a website powered by static site generator 11ty.

All pages use the layout `_includes/_layouts/default.njk`

All the CSS is in the `public/style.css` file, to reduce requests and make the site faster. The CSS file includes the [Tachyons][tac] atomic CSS library.

Content is written in markdown, see `index.md`, `profiles.md`, etc. The markdown pages can use [Liquid][lq] syntax.

Data for the Team Profiles is in `_data/siteData.json`. The profiles are populated from a Google Sheet that reads the Google Form results.

[lq]: https://www.11ty.dev/docs/languages/liquid/
[tac]: https://tachyons.io/

## Team colours and Infoboxes

Team colours are set in `public/style.css`

Short codes are controlled by the `Code` attribute of each team in the `siteData.js` file, and an 11ty Transform which is set up in `.eleventy.js`. It finds all instances in page output of a team's three letter code and replaces it with a special `<span>` element for that team. That makes the letters go their colour, and makes the infobox appear on hover.

The infoboxes are CSS only. The empty infobox templates are created in the base CSS, and the team-specific content is powered by a piece of inline JS which is added to every page in `default.njk`
