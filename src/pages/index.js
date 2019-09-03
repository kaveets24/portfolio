import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js";
import SEO from "../components/seo";
import Form from "../components/Contact";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form/>
  </Layout>
)

export default IndexPage
