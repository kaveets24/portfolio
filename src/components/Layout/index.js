/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes, { nominalTypeHack } from "prop-types"

import { MainContainer } from "./styled"


import "../../css/normalize.scss"
import "../../css/global.scss"
import "../../css/typography.scss"

export const LayoutContext = React.createContext({
  firstLoad: true,
  imageLoaded: false,
});

class Layout extends Component {
  state = {
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    transition: "background-position 3s",
    firstLoad: true,
    imageLoaded: false,
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
    // window.addEventListener("load", this.handleImageLoad());
    this.setState({
      firstLoad: false,
      
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
