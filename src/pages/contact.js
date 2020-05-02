import React, { Component } from "react"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.connectBcg.childImageSharp.fluid}
        />
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

