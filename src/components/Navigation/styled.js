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

const firstVisitPosition = props => css`
  ${props.firstVisit === "true" ? "-4em" : "4em"}
`

const animation = props =>
  css`
    animation: ${props.animationTime} ${animationTypes[props.animation]} ease-in
      ${props.animationDelay} forwards;
  `
export const Nav = styled.nav`

`
// Main <li> component
export const Li = styled.li`
  font-size: ${styleguide.fontLarge};
  position: absolute;
  top: 50vh;
  z-index: 1;
  


    a:hover {
        color: ${styleguide.secondaryOpacity}; 
        transition: color ${styleguide.hoverTransitionDuration};
        
        .back {
        stroke: ${styleguide.secondaryOpacity}; 
        transition: stroke ${styleguide.hoverTransitionDuration};

      }
  
      }
     }

/* Desktop */
  @media screen and (min-width: ${styleguide.desktopBreakpoint.min}) {
    ${props => (props.firstVisit === "true" ? animation : "")}
  }
`

// Top
export const TopLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("about") ? "inline-block" : "none"}; 
    text-align: center;
    width: 100%;
    top: ${firstVisitPosition};
`

// Right
export const RightLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("resume") ? "initial" : "none"};
    right: ${firstVisitPosition};
    transform: rotate(90deg);

`
// Bottom

export const BottomLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("contact") ? "initial" : "none"};
    top: initial;
    bottom: ${firstVisitPosition};
    text-align: center;
    width: 100%;
`

export const LeftLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("projects") ? "initial" : "none"};
    ${props => console.log(props.page)}
    left: ${firstVisitPosition};
    transform: rotate(-90deg);
`
