import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

//my
import img from "../images/connectBcg.jpeg"

//query
const getImages = graphql`
  query Images {
    fixedFile: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 210, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluidFile: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" alt="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixedFile.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluidFile.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
