const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function (eleventyConfig) {

    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('src/css');  
    eleventyConfig.addPassthroughCopy('src/js');  
    eleventyConfig.addPassthroughCopy('src/assets');
    
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('src/js');

    // Watch content images for the image pipeline.
	  eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

    // Minify HTML
    const tinyHTMLOptions = {
      html5: true,
      removeRedundantAttributes : true,
    };
  
    eleventyConfig.addPlugin(tinyHTML, tinyHTMLOptions);

    // Create RSS
    eleventyConfig.addPlugin(pluginRss);

    // Syntax highlighting https://www.11ty.dev/docs/plugins/syntaxhighlight/
    eleventyConfig.addPlugin(syntaxHighlight);

    return {
      dir: {
        input: "src",
        output: "site",
        // includes: "_includes",
        // layouts: "_includes/layouts"
      }
    }

  };