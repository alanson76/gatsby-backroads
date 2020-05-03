import React from "react"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

const tours = props => {
  return (
    <Layout>
      <SEO title="Tours | BackRoads" description="backroads Tours" />
      <StyledHero
        img={props.data.defaultBcg.childImageSharp.fluid}
      ></StyledHero>
      <Tours />
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
