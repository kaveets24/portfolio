import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Greeting from "../components/Greeting"
import { LayoutContext } from "../context"
// import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <LayoutContext.Consumer>
        {value => <Greeting firstVisit={value.firstVisit} />}
      </LayoutContext.Consumer>
      
    </Layout>
  )
}

export default IndexPage
