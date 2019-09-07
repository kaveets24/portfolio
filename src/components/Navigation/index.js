import React from "react"
import { Link } from "gatsby"
import { Li } from "./styled"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Li id="aboutme">
          <Link to="/aboutme">About Me</Link>
        </Li>
        <Li id="resume">
          <a href="./static/steven.kveton.pdf" target="__blank">
            Resume
          </a>
        </Li>
        <Li id="contact">
          <Link to="/contact">Contact</Link>
        </Li>
        <Li id="projects">
          <Link to="/projects">Projects</Link>
        </Li>
      </ul>
    </nav>
  )
}

export default Navigation
