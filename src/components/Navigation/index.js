import React from "react"
import { Link } from "gatsby"
import { TopLi, RightLi, BottomLi, LeftLi, Nav, Hamburger } from "./styled"

// import pdf from "file-loader?name=[name].[ext]!../../../static/steven-kveton.pdf"

const Navigation = props => {
  let animationTime = "0.7s"
  let animationDelay = "0s"
  let isIndexPage = props.page === "/"

  let backButton = (
    <Link to={"/"}>
      <svg
        onClick={props.mobileNav ? props.handleHamburgerClick : false}
        className="back"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          className="back"
          y1="-1"
          x2="23.4483"
          y2="-1"
          transform="matrix(0.707107 -0.707107 0.669938 0.742417 9.8501 26.5804)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          className="back"
          y1="-1"
          x2="23.4483"
          y2="-1"
          transform="matrix(0.707107 0.707107 -0.669938 0.742417 9 10)"
          stroke="black"
          strokeWidth="2"
        />
        <rect
          className="back"
          x="1"
          y="1"
          width="34"
          height="34"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </Link>
  )

  let hamburger = (
    <svg
      onClick={props.handleHamburgerClick}
      className="hamburger"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="hamburger-line"
        x="11"
        y="9"
        width="14"
        height="2"
        fill="black"
      />
      <rect
        className="hamburger-line"
        x="11"
        y="17"
        width="14"
        height="2"
        fill="black"
      />
      <rect
        className="hamburger-line"
        x="11"
        y="25"
        width="14"
        height="2"
        fill="black"
      />
      <rect
        className="hamburger-border"
        x="1"
        y="1"
        width="34"
        height="34"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )

  return (
    <div>
      {isIndexPage ? (
        <Hamburger>{props.mobileNav ? backButton : hamburger}</Hamburger>
      ) : (
        ""
      )}
      <Nav isIndexPage={isIndexPage}>
        <ul>
          <TopLi
            mobileNav={props.mobileNav}
            firstVisit={props.firstVisit}
            page={props.page}
            isIndexPage={isIndexPage}
            animation={"moveFromTop"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
            {isIndexPage ? (
              <Link onClick={props.onNavClick} to="/about">
                About Me
              </Link>
            ) : (
              backButton
            )}
          </TopLi>
          <RightLi
            mobileNav={props.mobileNav}
            firstVisit={props.firstVisit}
            page={props.page}
            isIndexPage={isIndexPage}
            animation={"moveFromRight"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
            {isIndexPage ? (
              <a rel="noopener noreferrer" href="https://www.dropbox.com/s/6fonknd1fsp3n8p/steven-kveton.pdf?dl=0" target="__blank">
                Resume
              </a>
            ) : (
              backButton
            )}
          </RightLi>
          <BottomLi
            mobileNav={props.mobileNav}
            firstVisit={props.firstVisit}
            isIndexPage={isIndexPage}
            page={props.page}
            animation={"moveFromBottom"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
            {isIndexPage ? <Link to="/contact">Contact</Link> : backButton}
          </BottomLi>
          <LeftLi
            mobileNav={props.mobileNav}
            firstVisit={props.firstVisit}
            isIndexPage={isIndexPage}
            page={props.page}
            animation={"moveFromLeft"}
            animationTime={animationTime}
            animationDelay={animationDelay}
          >
            {isIndexPage ? <Link to={"/projects"}>Projects</Link> : backButton}
          </LeftLi>
        </ul>
      </Nav>
    </div>
  )
}

export default Navigation
