import React from "react"
import { Animated } from "react-animated-css"

const Projects = props => {
  return (
    <Animated animationIn="fadeInLeftBig" isVisible={true}>
      <h1>Hmny</h1>
      <div>
        Hmny (härmənē) is a music streaming application that lets users build
        playlists using songs from Spotify and YouTube. It's built with React
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
        <a href="https://www.hmnymusic.com" target="__blank">
          hmnymusic.com
        </a>
      </div>
      <div>Otherwise, checkout the video demo below:</div>
    </Animated>
  )
}

export default Projects;
