// docs: https://www.11ty.io/docs/config/
// const fs = require("fs");
const siteData = require("./src/_data/siteData.js");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addFilter( "myFilter", function() {});
  
  const teamCodes = siteData.profiles.map(t => t.Code);
  console.log(teamCodes);
  
  teamCodes.forEach(tc => {
    eleventyConfig.addShortcode(tc, function() { 
      return `<span class='${tc}'>${tc}</span>`;
    });
  })
  
  eleventyConfig.addTransform("team-codes", function(content) {
    // Replace all teamcodes in bold markdown, eg **SKY**
    // with the liquid shortcode, eg {% SKY %}
    teamCodes.forEach(tc => {
      const lookFor = `**${tc}**`;
      const replaceWith = `{% ${tc} %}`;
      console.log("look for", lookFor, replaceWith);
      content = content.replaceAll(lookFor, replaceWith);
    })

    return content;
  });
    
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