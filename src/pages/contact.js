import React, { Component } from "react"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact | BackRoads" description="backroads Contact" />
        <StyledHero img={this.props.data.connectBcg.childImageSharp.fluid} />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
