import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Greeting from "../components/Greeting"
// import { Link } from "gatsby"
import  { LayoutContext } from "../context"

const IndexPage = () => {
  return (
    <Layout>
      <LayoutContext.Consumer>
        {(value) => 
        <>
              <SEO title="Home" />
              <Navigation context={value}/>
              <Greeting /> 
        </>       
        }
   
      </LayoutContext.Consumer>
    </Layout>
  )
}

export default IndexPage
