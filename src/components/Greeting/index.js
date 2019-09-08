import React from "react"
import { GreetingContainer, FadeInSpan } from "./styled"

const Greeting = () => {
  return (
    <GreetingContainer>
      <FadeInSpan animationTime={"1s"} animationDelay={"1s"} >Hi there, I'm Steven.</FadeInSpan>
      <FadeInSpan animationTime={"1s"} animationDelay={"2s"} >I'm a Front-End Developer living in Chicago.</FadeInSpan>
    </GreetingContainer>
  )
}

export default Greeting
