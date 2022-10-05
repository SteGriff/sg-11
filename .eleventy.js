// docs: https://www.11ty.io/docs/config/
// const fs = require("fs");
// const siteData = require("_data/siteData.json");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});
  
  
  
  // eleventyConfig.on('eleventy.before', async (config) => {
  //   fs.readdir("src/posts", (err,files) => {
  //     console.log("files", files);
  //   })
  // });
  
  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false
  });

  return {
    dir: {
      input: "src",
      output: "build"
    }
  };
};