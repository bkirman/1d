import { HtmlBasePlugin } from "@11ty/eleventy";

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
};