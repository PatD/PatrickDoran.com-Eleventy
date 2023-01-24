const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');

    // Minify HTML
    const tinyHTMLOptions = {
      html5: true,
      removeRedundantAttributes : true,
    };
  
    eleventyConfig.addPlugin(tinyHTML, tinyHTMLOptions);

    // Create RSS
    eleventyConfig.addPlugin(pluginRss);

  };