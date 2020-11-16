/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "Montserrat:300,400,500,700"],
      },
    },
    "semantic-ui-react",
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://matomo.prismref.ca/',
        siteUrl: 'https://aom.prismref.ca'
      }
    }
  ],
}
