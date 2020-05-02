import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

//my components
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default ({ data }) => (
  <React.Fragment>
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} home="true">
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio"
        >
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  </React.Fragment>
)

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
