exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}