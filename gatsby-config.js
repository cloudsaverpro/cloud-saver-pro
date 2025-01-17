/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'Cloud Cost Optimization Services',
    description: 'Professional cloud cost optimization consulting',
    siteUrl: `https://www.cloudsaverpro.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
  ],
}
