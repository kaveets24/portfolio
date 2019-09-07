import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Greeting from "../components/Greeting"
// import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Greeting />
  </Layout>
)

export default IndexPage
