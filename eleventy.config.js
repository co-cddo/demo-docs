module.exports = function (eleventyConfig) {
  const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Demo Docs',
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
}
