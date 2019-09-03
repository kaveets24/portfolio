import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js";
import SEO from "../components/seo";
import Form from "../components/Contact";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a href="./static/steven.kveton.pdf" target="__blank">Resume</a>
    <Form/>
  </Layout>
)

export default IndexPage
