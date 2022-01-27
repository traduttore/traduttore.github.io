/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Traduttore`,
    siteUrl: `localhost:8000`,
    description: `My own personal website, all about me!`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`,
          `bodoni mt`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Traduttore",
        short_name: "Traduttore",
        start_url: "/",
        icon: "static/trad-icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-217258965-1",
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sharp",
  ],
};
