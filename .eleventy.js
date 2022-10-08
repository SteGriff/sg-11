// docs: https://www.11ty.io/docs/config/
// const fs = require("fs");
const siteData = require("./src/_data/siteData.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});

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
