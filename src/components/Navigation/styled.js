import styled, { keyframes, css } from "styled-components"
import { styleguide } from "../../utils"

// Animations

const animationTypes = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
      
    }
    100% {
      opacity: 1;
    }
    `,
  moveFromTop: keyframes`
  0% {
    transform: translateY(0);
    
  }
  100% {
    transform: translateY(8em);
  
  }
  `,
  moveFromRight: keyframes`
  0% {
    transform: translateX(0) rotate(90deg);
    
  }
  100% {
    transform: translateX(-8em) rotate(90deg);
  
  }`,

  moveFromBottom: keyframes`
  0% {
    transform: translateY(0);
    
  }
  100% {
    transform: translateY(-8em);
  
  }`,

  moveFromLeft: keyframes`
    0% {
      transform: translateX(0) rotate(-90deg);
    }

    100% {
      transform: translateX(8em) rotate(-90deg);
    }
  `,
}

const animation = props =>
  css`
    animation: ${props.animationTime} ${animationTypes[props.animation]} ease-in
      ${props.animationDelay} forwards;
  `

// Main <li> component
export const Li = styled.li`
  font-size: ${styleguide.fontLarge};
  position: absolute;
  top: 50%;
  // opacity: 0;

  :hover {
    transform: scale(1.1);
  }
`

// Top
export const TopLi = styled(Li)`
  top: -4em;
  display: inline-block;
  text-align: center;
  width: 100%;
  ${animation}
`

// Right
export const RightLi = styled(Li)`
  right: -4em;
  transform: rotate(90deg);
  ${animation}
`
// Bottom
export const LeftLi = styled(Li)`
  left: -4em;
  transform: rotate(-90deg);

  ${animation}
`
// Left
export const BottomLi = styled(Li)`
  top: initial;
  bottom: -4em;
  text-align: center;
  width: 100%;
  ${animation}
`
