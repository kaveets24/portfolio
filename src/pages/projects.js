import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/"
import Section from "../components/Section"

const ProjectsPage = () => (
  <Layout>
    <Section animation={"fadeInLeft"}>
      <div>
        <ul>
          <li>
            <h2>React-MetaWeather</h2>

            <p>
              React-MetaWeather is a simple weather app that
              pulls data in real-time from the{" "}
              <a href="https://www.metaweather.com/" target="__blank">
                MetaWeather API
              </a>
              .
            </p>
            <p>
              <a
                href="https://github.com/kaveets24/react-metaweather"
                target="__blank"
              >
                Check out the code.
              </a>
            </p>

            <p>
              Check out the live version at{" "}
              <a
                href="https://react-metaweather.herokuapp.com/"
                target="__blank"
              >
                React-MetaWeather.com
              </a>
            </p>
          </li>
          <li>
            {" "}
            <h2>Hmny (deprecated)</h2>
            <p>
              Hmny (härmənē) is a music streaming app that lets users
              build playlists using songs from Spotify and YouTube. It's built
              with React, Redux and Express. 
            </p>
            <p>
              <a href="https://github.com/kaveets24/hmny" target="__blank">
                Check out the code.
              </a>
            </p>
          </li>
        </ul>
      </div>
    </Section>
  </Layout>
)

export default ProjectsPage
