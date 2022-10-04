// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.on('eleventy.before', async ({ dir, runMode, outputMode }) => {
    // Read more below
    
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