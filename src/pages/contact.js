import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Section from "../components/Section"
import { LayoutContext } from "../context"
import { Animated } from "react-animated-css"

const ContactPage = props => {
  console.log(props)
  return (
    <Layout>
      <Animated animationIn="fadeInUpBig" isVisible={true}>
        <Section>
          <Contact path={props.path} />
        </Section>
      </Animated>
    </Layout>
  )
}

export default ContactPage
