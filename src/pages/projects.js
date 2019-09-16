import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/"
import Section from "../components/Section"
import { Animated } from "react-animated-css"

const ProjectsPage = () => (
  <Layout>
    <Animated animationIn="fadeInLeftBig" isVisible={true}>
    <Section>
        <h2>Hmny</h2>
        <p>
          Hmny (härmənē) is a music streaming application that lets users build
          playlists using songs from Spotify and YouTube. It's built with React
          and Redux.
        </p>
        <p>
          <a href="https://github.com/kaveets24/hmny" target="__blank">
          Check out the code.
          </a>
        </p>
        <p>
          If you have a Spotify Premium account, checkout the live version at{" "}
          <a href="https://www.hmnymusic.com" target="__blank">
            hmnymusic.com
          </a>
        </p>
        <p>Otherwise, checkout the video demo below:</p>
      
        </Section>
        </Animated>
  </Layout>
)

export default ProjectsPage
