import React from "react"
import { Link } from "gatsby"
import { TopLi, RightLi, BottomLi, LeftLi } from "./styled"

const Navigation = () => {
  const animationTime = "0.7s";
  const animationDelay = "2s";
  return (
    <nav>
      <ul>
        <TopLi animation={"moveFromTop"} animationTime={animationTime} animationDelay={animationDelay}>
          <Link to="/aboutme">About Me</Link>
        </TopLi>
        <RightLi animation={"moveFromRight"} animationTime={animationTime} animationDelay={"2.1s"}>
          <a href="./static/steven.kveton.pdf" target="__blank">
            Resume
          </a>
        </RightLi>
        <BottomLi animation={"moveFromBottom"} animationTime={animationTime} animationDelay={"2.2s"}>
          <Link to="/contact">Contact</Link>
        </BottomLi>
        <LeftLi animation={"moveFromLeft"} animationTime={animationTime} animationDelay={"2.3s"}>
          <Link to="/projects">Projects</Link>
        </LeftLi>
      </ul>
    </nav>
  )
}

export default Navigation
