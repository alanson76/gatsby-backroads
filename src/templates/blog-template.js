import React from "react"
import { graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//styles
import styles from "../css/template.module.css"

//components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"


const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
    image,
  } = data.post

  //options for json
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="blog "
            />
            <p>images provided by johon doe</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div className="rich">
            <h3>{title["en-US"]}</h3>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt="another blog"
            />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={`${title} | BackRoads`} description="backroads Blog" />
      <section className={styles.template}>
        <StyledHero img={image.fluid} />
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            back to blog
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default blogTemplate
