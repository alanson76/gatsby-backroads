import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//local styles
import styles from "../css/error.module.css"

//my components
import Layout from "../components/Layout"
import Banner from "../components/Banner"

export default class Error extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner title="oops it's a dead end">
            <AniLink fade to="/" className="btn-white">
              back to home page
            </AniLink>
          </Banner>
        </header>
      </Layout>
    )
  }
}
