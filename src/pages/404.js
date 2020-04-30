import React, { Component } from "react"
import { Link } from "gatsby"

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
            <Link to="/" className="btn-white">
              back to home page
            </Link>
          </Banner>
        </header>
      </Layout>
    )
  }
}
