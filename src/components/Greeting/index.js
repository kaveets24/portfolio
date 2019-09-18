import React from "react"
import { GreetingContainer, FadeInSpan } from "./styled"

const Greeting = (props) => {
  return (
    <GreetingContainer mobileNav={props.mobileNav} firstVisit={props.firstVisit}>
      <FadeInSpan firstVisit={props.firstVisit} animationTime={"1s"} animationDelay={"0.5s"} >Hi there, I'm Steven.</FadeInSpan>
      <FadeInSpan firstVisit={props.firstVisit} animationTime={"1s"} animationDelay={"1.5s"} >I'm a Front-End Developer living in Chicago.</FadeInSpan>
    </GreetingContainer>
  )
}

export default Greeting
