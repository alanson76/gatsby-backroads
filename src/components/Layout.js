import React from "react"

//my components
import Navbar from "./Navbar"
import Footer from "./Footer"

//statics
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
