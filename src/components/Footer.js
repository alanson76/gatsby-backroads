import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//local styles
import styles from "../css/footer.module.css"

//constant files
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade to={item.path} key={index}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved.
      </div>
    </footer>
  )
}

export default Footer
