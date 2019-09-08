import React from "react"
import { Link } from "gatsby"
import { Li } from "./styled"

const Navigation = () => {
  const animationTime = "0.5s";
  const animationDelay = "4s";
  return (
    <nav>
      <ul>
        <Li position={"top"} animationTime={animationTime} animationDelay={animationDelay}>
          <Link to="/aboutme">About Me</Link>
        </Li>
        <Li position={"right"} animationTime={animationTime} animationDelay={animationDelay}>
          <a href="./static/steven.kveton.pdf" target="__blank">
            Resume
          </a>
        </Li>
        <Li position={"bottom"} animationTime={animationTime} animationDelay={animationDelay}>
          <Link to="/contact">Contact</Link>
        </Li>
        <Li position={"left"} animationTime={animationTime} animationDelay={animationDelay}>
          <Link to="/projects">Projects</Link>
        </Li>
      </ul>
    </nav>
  )
}

export default Navigation
