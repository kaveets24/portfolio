/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import { MainContainer } from "./styled"
import { LayoutContext } from "../../context"
import  Navigation  from "../Navigation"
import  Greeting  from "../Greeting"

import "../../css/normalize.scss"
import "../../css/global.scss"
import "../../css/typography.scss"
import { styleguide } from "../../utils"
// import imgLarge from "../../images/brad-knight-chicago-unsplash-10.png";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundSize: "cover",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      transition: "background-position 3s",
      firstVisit: null,
      imageLoaded: false,
      page: "home"
    }
  }


  checkIfFirstVisit = () => {
    let firstVisit = window.sessionStorage.getItem("firstVisit")
    if (firstVisit === null) {
      window.sessionStorage.setItem("firstVisit", "true")
    } else {
      window.sessionStorage.setItem("firstVisit", "false")
    }
    firstVisit = window.sessionStorage.getItem("firstVisit")
    return firstVisit
  }

  handleMouseMove = e => {
    e.persist()

    setTimeout(() => {
      this.setState({
        backgroundPositionX: `calc(100% + ${e.nativeEvent.offsetX / 100}px)`,
        backgroundPositionY: `calc(100% + ${e.nativeEvent.offsetY / 100}px)`,
      })
    }, 250)
  }

  handleImageLoad = () => {
    console.log("image loaded")
    this.setState({
      imageLoaded: true,
    })
  }

  onNavClick = () => {
    console.log("onNavClick")
    // this.setState({
    //   page: 
    // })
  }

  componentDidMount() {

    window.onload = this.handleImageLoad();
    this.setState({
      firstVisit: this.checkIfFirstVisit(),
      page: window.location.pathname
    })
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        <MainContainer
        page={this.state.page}
          imageLoaded={this.state.imageLoaded}
          style={
            {
              // backgroundPositionX: this.state.backgroundPositionX,
              // backgroundPositionY: this.state.backgroundPositionY,
              // transition: this.state.transition
            }
          }
          onMouseMove={this.handleMouseMove}
        >
          <Navigation firstVisit={this.state.firstVisit} onNavClick={this.onNavClick} />
          {this.props.children}
          {/* <img className="background background--large"src={imgLarge} onLoad={() => {this.handleImageLoad()}}></img> */}
        </MainContainer>
      </LayoutContext.Provider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
