// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 7/2/2024, 8:24:13 AM
const configMerger = require("/Users/jlangley/Projects/joeylangley/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.mjs");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.js")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: ["/Users/jlangley/Projects/joeylangley/components/**/*.{vue,js,mjs}","/Users/jlangley/Projects/joeylangley/layouts/**/*.{vue,js,mjs}","/Users/jlangley/Projects/joeylangley/pages/**/*.{vue,js,mjs}","/Users/jlangley/Projects/joeylangley/composables/**/*.{js,ts,mjs}","/Users/jlangley/Projects/joeylangley/utils/**/*.{js,ts,mjs}","/Users/jlangley/Projects/joeylangley/{A,a}pp.{vue,js,mjs}","/Users/jlangley/Projects/joeylangley/{E,e}rror.{vue,js,mjs}","/Users/jlangley/Projects/joeylangley/app.config.{js,ts,mjs}"] }));

module.exports = config
