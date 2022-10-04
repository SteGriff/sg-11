// docs: https://www.11ty.io/docs/config/
const fs = require("fs");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.on('eleventy.before', async ({ dir, runMode, outputMode }) => {
    // Read more below
    console.log("before", dir, runMode, outputMode)
    fs.readdir("posts", (err,files) => {
      console.log("files", files);
    })
  });
  
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