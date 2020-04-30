import React from "react"
import { Link } from "gatsby"

//my components
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <React.Fragment>
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio?"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  </React.Fragment>
)
