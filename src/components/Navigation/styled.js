import styled, { keyframes, css } from "styled-components"
import { styleguide } from "../../utils"

const fadeIn = keyframes`
0% {
  opacity: 0;
  
}
100% {
  opacity: 1;
}
`

const fadeInAnimation = props => 
  css`
  animation: ${props.animationTime} ${fadeIn} ease-in ${props.animationDelay};
  `

const moveFromTop = keyframes`
0% {
  transform: translateY(-4em);
  
}
100% {
  transform: translateY(0);

}
`

const moveFromTopAnimation = props =>
 css`
  animation: ${props.animationTime} ${moveFromTop} ease-in ${props.animationDelay};
  `

export const Li = styled.li`
  font-size: ${styleguide.fontLarge};
  position: absolute;
  top: 50%;  
  opacity: 0;
  ${fadeInAnimation}
  animation-fill-mode: forwards;
  ${props => {
    switch (props.position) {
      case "top":
        return `
            top: 4em;
            // ${moveFromTopAnimation}
            display: inline-block;
            text-align: center;
            width: 100%;
        `
      case "right":
        return `
            transform: rotate(90deg);
            right: 4em;
        `
      case "bottom":
        return `
            top: initial;
            bottom: 4em;
            text-align: center;
            width: 100%;
        `
      case "left":
        return `
            transform: rotate(-90deg);
            left: 4em;
        `
      default:
        break
    }
  }}
`
