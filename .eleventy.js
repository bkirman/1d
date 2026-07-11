import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
export const config = {
    //Directories
    dir: {
        input: "./src",
        output: "./docs"
    },
    pathPrefix: "/1d/",
};

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/downloads");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    transformOnRequest: false,
    urlPath: "/1d/img/"
  });
};