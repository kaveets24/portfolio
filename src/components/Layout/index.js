/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import { MainContainer } from "./styled"
import  { LayoutContext } from "../../context"

import "../../css/normalize.scss"
import "../../css/global.scss"
import "../../css/typography.scss"


class Layout extends Component {
  state = {
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        transition: "background-position 3s",
        firstVisit: null,
        imageLoaded: false,
      }

  checkIfFirstVisit = () => {
    let firstVisit = window.sessionStorage.getItem("firstVisit");
    if (firstVisit === null) {
      window.sessionStorage.setItem("firstVisit", "true");
    } else {
      window.sessionStorage.setItem("firstVisit", "false");
    }
    firstVisit = window.sessionStorage.getItem("firstVisit");
    return firstVisit;
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
      imageLoaded: true
    })
  }

  componentDidMount() {
    this.handleImageLoad();
    this.setState({
      firstVisit: this.checkIfFirstVisit()
    })
    
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
      <MainContainer imageLoaded={this.state.imageLoaded}
     
        style={
          {
            // backgroundPositionX: this.state.backgroundPositionX,
            // backgroundPositionY: this.state.backgroundPositionY,
            // transition: this.state.transition
          }
        }
        onMouseMove={this.handleMouseMove}
      >
        {/* <img src={img} style={{visibility, backgroundImage: `url(${img})`, height: '100%', width: '100%' }} onLoad={this.handleImageLoad}></img> */}
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
