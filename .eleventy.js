/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("functions/micropub-latest.json");
  
  eleventyConfig.addPassthroughCopy("functions");

  eleventyConfig.addFilter("webmentionsByUrl", (webmentions, url) =>
    webmentions.filter((webmention) => webmention["wm-target"] === url)
  );
  eleventyConfig.addFilter("getLikes", (webmentions) =>
    webmentions.filter((webmention) => webmention["wm-property"] === "like-of")
  );
  eleventyConfig.addFilter("getReplies", (webmentions) =>
    webmentions.filter(
      (webmention) => webmention["wm-property"] === "in-reply-to"
    )
  );
};
