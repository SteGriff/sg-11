// docs: https://www.11ty.io/docs/config/
const siteData = require("./src/_data/siteData.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});

  // Give all special terms a tooltip span
  eleventyConfig.addTransform("tooltips", function (content) {
    const terms = siteData.terms;
    terms.forEach((t) => {
      const replaceWith = `<span class='js-tt' data-tt="${t.text}">${t.term}</span>`;
      content = content.replaceAll(t.term, replaceWith);
    });
    return content;
  });

  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false,
  });

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
