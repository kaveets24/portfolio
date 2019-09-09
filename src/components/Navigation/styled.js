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

  export const Nav = styled.nav`
  // Mobile and Tablet
  @media (max-width: ${styleguide.desktopBreakpoint}) {
    display: flex;
    flex-direction: row-wrap;
    justify-content: center;
  }

  @media (max-width: ${styleguide.mobileBreakpoint}) {
    position: absolute;
    // top: 40%;
    width: 100%;
    text-align: center;
  }

  `
// Main <li> component
export const Li = styled.li`
  font-size: ${styleguide.fontLarge};
  position: absolute;
  top: 50%;
  z-index: 1;

    a:hover {
        color: ${styleguide.secondaryOpacity}; 
  
      }
    }

  // Mobile and Tablet
  @media (max-width: ${styleguide.desktopBreakpoint}) {
    position: initial;
    display: inline-block;
    top: initial;
    right: initial;
    bottom: initial;
    left: initial;
    
    text-align: center;
    width: initial;
    font-size: ${styleguide.fontMedium};
    padding: 1em 0.8em 0;
    transform: initial;
    transition: transform 0.3s;

    :hover {
      transform: translateY(-3px);
    }
  }

  // Mobile 
  @media (max-width: ${styleguide.mobileBreakpoint}) {
    display: block;
  }
//  Desktop
  @media (min-width: ${styleguide.desktopBreakpoint}) {
    /* ${props => props.context.firstLoad ? animation : "" } */
    ${animation}
  }
`

// Top
export const TopLi = styled(Li)`
  top: -4em;
  display: inline-block;
  text-align: center;
  width: 100%;

  :hover {
    color: brown !important;
  }
`

// Right
export const RightLi = styled(Li)`
  right: -4em;
  transform: rotate(90deg);
`
// Bottom
export const LeftLi = styled(Li)`
  left: -4em;
  transform: rotate(-90deg);

`
// Left
export const BottomLi = styled(Li)`
  top: initial;
  bottom: -4em;
  text-align: center;
  width: 100%;
`
