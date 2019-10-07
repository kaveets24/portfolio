/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import { MainContainer, GlobalStyle } from "./styled"
import { LayoutContext } from "../../context"
import Navigation from "../Navigation"

import { styleguide } from "../../utils"
// import imgLarge from "../../images/brad-knight-chicago-unsplash-10.png";

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundSize: "cover",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      transition: "background-position 3s",
      firstVisit: null,
      imageLoaded: false,
      page: "home",
      mobileNav: false,
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
    this.setState({
      imageLoaded: true,
    })
  }
  handleHamburgerClick = () => {
    this.setState({ mobileNav: !this.state.mobileNav })
  }

  handleWindowResize = () => {
    if (window.innerWidth > parseInt(styleguide.tabletBreakpoint.max)) {
      this.setState({
        mobileNav: false,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize)
    window.onload = this.handleImageLoad()
    this.setState({
      firstVisit: this.checkIfFirstVisit(),
      page: window.location.pathname,
    })
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        <GlobalStyle
          page={this.state.page}
          imageLoaded={this.state.imageLoaded}
          mobileNav={this.state.mobileNav}
        />
        <MainContainer
          page={this.state.page}
          imageLoaded={this.state.imageLoaded}
          mobileNav={this.state.mobileNav}
          onMouseMove={this.handleMouseMove}
        >
          <Navigation
            mobileNav={this.state.mobileNav}
            handleHamburgerClick={this.handleHamburgerClick}
            firstVisit={this.state.firstVisit}
            page={this.state.page}
          />
          {this.props.children}
        </MainContainer>
      </LayoutContext.Provider>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
