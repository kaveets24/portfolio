import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/aboutme">About Me</Link>
    <a href="./static/steven.kveton.pdf" target="__blank">
      Resume
    </a>
    <Link to="/contact">Contact</Link>
    <Link to="/projects">Projects</Link>
  </Layout>
)

export default IndexPage
