const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.jsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        jquery: "jquery",
        Popper: "popper.js",
        Bootstrap: "bootstrap.js",
      }),
    ],
  };
  if (stage === "build-html") {
    config.module = {
      rules: [
        {
          test: require.resolve("bootstrap"),
          use: loaders.null(),
        },
        {
          test: require.resolve("bootstrap-table"),
          use: loaders.null(),
        },
        {
          test: require.resolve(
            "bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile"
          ),
          use: loaders.null(),
        },
        {
          test: require.resolve(
            "bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header"
          ),
          use: loaders.null(),
        },
        {
          test: require.resolve(
            "bootstrap-table/dist/extensions/cookie/bootstrap-table-cookie"
          ),
          use: loaders.null(),
        },
        {
          test: require.resolve("jquery"),
          use: loaders.null(),
        },
      ],
    };
  }
  actions.setWebpackConfig(config);
};
