import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/Contact";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a href="./static/steven.kveton.pdf" target="__blank">Resume</a>
    <Contact/>
  </Layout>
)

export default IndexPage
