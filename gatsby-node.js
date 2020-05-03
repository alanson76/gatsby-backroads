const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `tours/${slug}`,
      component: path.resolve(`./src/templates/tour-template.js`),
      context: {
        slug,
      },
    })
  })

  data.posts.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug,
      },
    })
  })

  //amount of posts
  const posts = data.posts.edges
  //posts per page
  const postsPerPage = 3
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
