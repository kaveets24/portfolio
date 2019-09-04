import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js";
import SEO from "../components/seo";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/aboutme">About Me</Link>
    <a href="./static/steven.kveton.pdf" target="__blank">Resume</a>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    
  </Layout>
)

export default IndexPage
