import React from "react"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>blog</StyledHero>
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
