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

class Layout extends Component {
  state = {
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    transition: "background-position 3s",
    firstLoad: true
  }

  handleMouseMove = e => {
    e.persist();

    setTimeout(() => {
      this.setState({
        backgroundPositionX: `calc(100% + ${e.nativeEvent.offsetX / 100}px)`,
        backgroundPositionY: `calc(100% + ${e.nativeEvent.offsetY / 100}px)`,
      })
    }, 250);

  }

  componentDidMount() {
    this.setState({
      firstLoad: false
    })
  }


  render() {
    return (
      <MainContainer
        style={{ 
          // backgroundPositionX: this.state.backgroundPositionX, 
          // backgroundPositionY: this.state.backgroundPositionY, 
          // transition: this.state.transition
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.children}
      </MainContainer>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
