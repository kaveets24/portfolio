import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Section from "../components/Section"
import { LayoutContext } from "../context"

const ContactPage = props => {
  console.log(props)
  return (
    <Layout>
        <Section animation={"fadeInUp"}>
          <h2>Contact</h2>
          <Contact path={props.path} />
        </Section>
    </Layout>
  )
}

export default ContactPage
