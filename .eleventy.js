export const config = {
    //Directories
    dir: {
        input: "./src",
        output: "./docs"
    }
};

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
};