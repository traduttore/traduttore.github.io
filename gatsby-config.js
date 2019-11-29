/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Alex's Website`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Nanum Gothic Coding",
            variants: ["400", "400i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Alex's Website",
        short_name: "Alex Barkin",
        start_url: "/",
        icon: "static/AB-icon.svg",
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-eslint",
  ],
}
