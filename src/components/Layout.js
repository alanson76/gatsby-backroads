import React from "react"

//my components
import Navbar from "./Navbar"
import Footer from "./Footer"

//global css
//when you use module.css, it applies for only the component. however, 
//it is only working with only classes
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
