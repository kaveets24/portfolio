import React from "react"
import { Link } from "gatsby"
import { TopLi, RightLi, BottomLi, LeftLi, Nav } from "./styled"

import pdf from "../../images/steven.kveton.pdf"
import backButtonImg from "../../images/back-button.svg"

import { LayoutContext } from "../../context"



const Navigation = (props) => {
  const animationTime = "0.7s"
  const animationDelay = "2s"

  // Should listen to global context api for firstLoad property. After first load, animation delays should be set close to or equal to 0
  let backButton = props.page === "/" ? false : <Link to={"/"}><svg className="back" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line className="back" y1="-1" x2="23.4483" y2="-1" transform="matrix(0.707107 -0.707107 0.669938 0.742417 9.8501 26.5804)" stroke="black" stroke-width="2"/>
  <line className="back" y1="-1" x2="23.4483" y2="-1" transform="matrix(0.707107 0.707107 -0.669938 0.742417 9 10)" stroke="black" stroke-width="2"/>
  <rect className="back" x="1" y="1" width="34" height="34" stroke="black" stroke-width="2"/>
  </svg>
  </Link>

  return (
        <Nav>
        <ul>
          <TopLi
            firstVisit={props.firstVisit}
            page={props.page}
            animation={"moveFromTop"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
           {backButton || <Link onClick={props.onNavClick} to="/about">About Me</Link> } 
          </TopLi>
          <RightLi
            firstVisit={props.firstVisit}
            page={props.page}
            animation={"moveFromRight"}
            animationTime={animationTime}
            animationDelay={"2.1s"}
          >
            {backButton || <a href={pdf} target="__blank">
              Resume
            </a>}
          </RightLi>
          <BottomLi
            firstVisit={props.firstVisit}
            page={props.page}
            animation={"moveFromBottom"}
            animationTime={animationTime}
            animationDelay={"2.2s"}
          >
            {backButton || <Link to="/contact">Contact</Link>}
          </BottomLi>
          <LeftLi
            firstVisit={props.firstVisit}
            page={props.page}
            animation={"moveFromLeft"}
            animationTime={animationTime}
            animationDelay={"2.3s"}
          >
            {backButton || <Link to={"/projects"}>Projects</Link>}
          </LeftLi>
        </ul>
      </Nav>
        // </LayoutContext.Consumer>
       
  )
}

export default Navigation
