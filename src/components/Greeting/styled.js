import styled, { keyframes } from "styled-components"
import { styleguide } from "../../utils"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${styleguide.fontXXL};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15em;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  // Mobile and Tablet
  @media (max-width: ${styleguide.tabletBreakpoint.max}) {
    font-size: ${styleguide.fontLarge};
  }

  // Mobile
  @media (max-width: ${styleguide.mobileBreakpoint.max}) {
    // margin: 0;  
  }

`

export const FadeInSpan = styled.span`
  opacity: 0;
  animation: ${props => props.animationTime} ${fadeIn} ease-in
    ${props => props.animationDelay} forwards;
`
