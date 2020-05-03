import React from "react"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styles
import styles from "../../css/tour.module.css"

//query default image in case we don't get the images from contentful
const getDefaultImg = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  // if(!tour.image)
  const data = useStaticQuery(getDefaultImg)
  const defaultImg = data.file.childImageSharp.fluid

  const { name, price, country, days, slug, images } = tour

  let mainImage
  images ? (mainImage = images[0].fluid) : (mainImage = defaultImg)

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name || "N/A"}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "N/A"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6> from ${price} </h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
