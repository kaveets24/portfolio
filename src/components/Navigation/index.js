import React from "react"
import { Link } from "gatsby"
import { TopLi, RightLi, BottomLi, LeftLi, Nav } from "./styled"

import pdf from "../../images/steven.kveton.pdf"

import { LayoutContext } from "../../context"


const Navigation = (props) => {
  const animationTime = "0.7s"
  const animationDelay = "2s"

  // Should listen to global context api for firstLoad property. After first load, animation delays should be set close to or equal to 0
  return (
        <Nav>
        <ul>
          <TopLi
            firstVisit={props.firstVisit}
            animation={"moveFromTop"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
            <Link onClick={props.onNavClick} to="/aboutme">About Me</Link>
          </TopLi>
          <RightLi
            firstVisit={props.firstVisit}
            animation={"moveFromRight"}
            animationTime={animationTime}
            animationDelay={"2.1s"}
          >
            <a href={pdf} target="__blank">
              Resume
            </a>
          </RightLi>
          <BottomLi
            firstVisit={props.firstVisit}
            animation={"moveFromBottom"}
            animationTime={animationTime}
            animationDelay={"2.2s"}
          >
            <Link to="/contact">Contact</Link>
          </BottomLi>
          <LeftLi
            firstVisit={props.firstVisit}
            animation={"moveFromLeft"}
            animationTime={animationTime}
            animationDelay={"2.3s"}
          >
            <Link to="/projects">Projects</Link>
          </LeftLi>
        </ul>
      </Nav>
        // </LayoutContext.Consumer>
       
  )
}

export default Navigation
