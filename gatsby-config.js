const siteConfig = require('./config/site-config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: { 
    ...siteConfig,
  },
  trailingSlash: `always`, 
  plugins: [
    `gatsby-transformer-remark`,
     {resolve:`gatsby-plugin-sass`,
          options: {
           implementation: require("sass"),
         },
       },

    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.discordeon.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/containers/Layout.js'),
      },
    },
     {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATO_CMS_KEY,
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Discordéon`,
        short_name: `Discordéon`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/discordeon-d.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
   //  `gatsby-plugin-offline`,
  ],
}
