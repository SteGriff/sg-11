# sg-11

This is SteGriff's 11ty starter template.

This website is powered by the static site generator, [11ty](https://www.11ty.dev).

All pages use the layout `_includes/layouts/default.njk`. This is set in `_data/layout.js`; [see GitHub discussion][ghdl].

Top-bar nav links are set directly in the `default.njk` template.

All the CSS is in the `public/style.css` file, to reduce requests and make the site faster. The CSS file includes the [Tachyons][tac] atomic CSS library.

Content is written in markdown, see `index.md`, `profiles.md`, etc. The markdown pages can use [Liquid][lq] syntax.

Global site data is in `_data/siteData.js`. 

[ghdl]: https://github.com/11ty/eleventy/issues/380
[lq]: https://www.11ty.dev/docs/languages/liquid/
[tac]: https://tachyons.io/

## Extra features

Tooltips are powered by data in `siteData.js` and the Transform called "tooltips", configured in `.eleventy.js`.

Warning: it might mess you up if you have one of your tooltip terms included in an inline JS script on the page!