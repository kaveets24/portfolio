import React from "react"
import { SectionContainer } from "./styled"

const Section = props => {
  return (
    
      <SectionContainer animation={props.animation}>
        {props.children}
      </SectionContainer>
    
  )
}

export default Section
