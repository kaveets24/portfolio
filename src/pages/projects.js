import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/"
import { Animated } from "react-animated-css"

const ProjectsPage = () => (
  <Layout>
    <Animated animationIn="fadeInLeftBig" isVisible={true}>
      Projects
      <div>
        Hmny (härmənē) is a music streaming application that lets users build
        playlists using songs from Spotify and Youtube. It's built with React
        and Redux.
      </div>
      <div>
        Check out the{" "}
        <a href="https://github.com/kaveets24/hmny" target="__blank">
          code
        </a>
        .
      </div>
      <div>
        If you have a Spotify Premium account, checkout the live version at{" "}
        <a href="https://www.hmnymusic.com" target="__blank">hmnymusic.com</a>
      </div>
      <div>Otherwise, checkout the video demo below:</div>
    </Animated>
  </Layout>
)

export default ProjectsPage
