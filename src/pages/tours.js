import React from "react"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const tours = props => {
  return (
    <Layout>
      <StyledHero
        img={props.data.defaultBcg.childImageSharp.fluid}
      ></StyledHero>
    </Layout>
  )
}

export default tours

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
