import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import { Animated } from "react-animated-css"
const AboutMePage = () => (
  <Layout>
    <Animated animationIn="fadeInDownBig" isVisible={true}>
      <Section>
        <h2>About Me</h2>
        <p>
          Currently, I work over at{" "}
          <a href="https://www.designory.com/" target="__blank">
            Designory
          </a>{" "}
          building automated testing tools for our clients' websites. I also
          helped build <a href="https://www.myplenity.com">MyPlenity.com.</a>{" "}
          Day to day, I'm working with JavaScript (Node.js), Puppeteer and
          Nightwatch.js.
        </p>
        <p>
          I love ideating solutions to difficult problems, and learning modern
          front-end technologies in order to get the job done efficiently.
        </p>
        <p>
          Most recently, I've been working on{" "}
          <a href="https://www.hmnymusic.com" target="__blank">
            Hmny
          </a> 
          , a music streaming app that lets users build playlists using songs
          from Spotify and YouTube. I've had tons of fun building it in React,
          and manage the UI's global state with Redux.
        </p>
        <p>
          In my freetime, I love tinkering with synthesizers, samplers and drum
          machines. I like to fully understand how things work, and so I take
          time learning the ins and outs of my music gear. I apply the same
          concept to front-end development technologies.
        </p>
      </Section>
    </Animated>
  </Layout>
)

export default AboutMePage
