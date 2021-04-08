import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
const AboutMePage = () => (
  <Layout>
      <Section animation={"fadeInDown"}>
        <h2>About Me</h2>
        <p>
          Currently, I serve as a frontend engineer over at{" "}
          <a href="https://foxtrotco.com/" target="__blank">
            Foxtrot
          </a>{" "}
          in River North.
        </p>
        <p>
          I love ideating solutions to difficult problems, and learning modern
          front-end technologies in order to get the job done efficiently.
        </p>
        <p>
          In my freetime, I love tinkering with synthesizers, samplers and drum
          machines. I like to fully understand how things work, and so I take
          time learning the ins and outs of my music gear. I apply the same
          concept to front-end development technologies.
        </p>
      </Section>
  </Layout>
)

export default AboutMePage
