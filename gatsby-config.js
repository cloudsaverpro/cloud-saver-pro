/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'Cloud Cost Optimization Services',
    description: 'Professional cloud cost optimization consulting',
    siteUrl: `https://www.cloudsaverpro.com`,
    image: `/csp.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cloud Saver Pro`,
        short_name: `Cloud Saver Pro`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/csp.png`, 
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GDFJ1637HE",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    }
  ],
}
