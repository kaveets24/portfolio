import React from "react"
import { SectionContainer } from "./styled"

const Section = props => {
  return (
    
      <SectionContainer>
        {props.children}
      </SectionContainer>
    
  )
}

export default Section
