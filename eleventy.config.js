export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ CNAME: "CNAME" });

  eleventyConfig.addShortcode("youtube", (id) => {
    if (!id) return "";
    const safe = String(id).replace(/[^A-Za-z0-9_-]/g, "");
    return `<div class="relative my-6 aspect-video bg-black">
  <iframe
    class="absolute inset-0 h-full w-full border-0"
    src="https://www.youtube.com/embed/${safe}?rel=0"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"></iframe>
</div>`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
