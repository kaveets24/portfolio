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
    transform: translateY(-8em);
    opacity: 0;
    
  }
  1% {
    opacity: 1;
  }
  100% {
    transform: translateY(0em);
    
  
  }
  `,
  moveFromRight: keyframes`
  0% {
    transform: translateX(8em) rotate(90deg);
    opacity: 0;
    
  }
  1% {
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(90deg);
  
  }`,

  moveFromBottom: keyframes`
  0% {
    transform: translateY(8em);
    opacity: 0;
    
  }
  1% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  
  }`,

  moveFromLeft: keyframes`
    0% {
      transform: translateX(-8em) rotate(-90deg);
      opacity: 0;
    }
    1% {
      opacity: 1;
  }
    100% {
      transform: translateX(0) rotate(-90deg);
    }
  `,
}

const animation = props =>
  css`
    animation: ${props.animationTime} ${animationTypes[props.animation]} ease-in
      ${props.animationDelay} forwards;
  `

export const Hamburger = styled.div`
  display: none;
  position: absolute;
  z-index: 3;
  right: 40px;
  top: 40px;
  cursor: pointer;

  :hover {
    .hamburger-border {
      transition: stroke ${styleguide.hoverTransitionDuration};
      stroke: ${styleguide.secondaryOpacity};
      

    }
    .hamburger-line {
      transition: fill ${styleguide.hoverTransitionDuration};
      fill: ${styleguide.secondaryOpacity};
    }
    .back {
      transition: stroke ${styleguide.hoverTransitionDuration};
      stroke: ${styleguide.secondaryOpacity};
    }
  }

  /* Mobile */
  @media screen and (max-width: ${styleguide.tabletBreakpoint.max}) {
    display: block;
  }
`

const isIndexPageStyles = props => css`
  @media screen and (max-width: ${styleguide.tabletBreakpoint.max}) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

const sectionBackButtonStyles = props => css`

@media screen and (max-width: ${styleguide.tabletBreakpoint.max}) {
  display: block;
  position: relative;
  height: 36px;

  svg {
    position: absolute;
    top: 40px;
    right: 40px;
  }
  
}


`
export const Nav = styled.nav`
  ${props => props.isIndexPage ? isIndexPageStyles : ""}
  user-select: none;


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

  /* Desktop Only Animation */
  @media screen and (min-width: ${styleguide.desktopBreakpoint.min}) {
    ${props => (props.firstVisit === "true" ? animation : "")}
  }

  /* Mobile */
  @media screen and (max-width: ${styleguide.tabletBreakpoint.max}) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${props => (props.mobileNav ? "block" : "none")};
    position: relative;
    transform: none;
    text-align: center;
    width: initial;
    font-size: ${styleguide.fontXL};
    line-height: 40px;
    margin-bottom: 20px;
  }
`

// Top
export const TopLi = styled(Li)`
  display: ${props =>
    props.isIndexPage || props.page.includes("about")
      ? "inline-block"
      : "none"};
  text-align: center;
  width: 100%;
  top: 4em;
  ${props => (props.isIndexPage ? "": sectionBackButtonStyles)};

`

// Right
export const RightLi = styled(Li)`
  display: ${props =>
    props.isIndexPage || props.page.includes("resume") ? "initial" : "none"};
  right: 4em;
  transform: rotate(90deg);
`
// Bottom

export const BottomLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("contact") ? "initial" : "none"};
  top: initial;
  bottom: 4em;
  text-align: center;
  width: 100%;
`

export const LeftLi = styled(Li)`
  display: ${props =>
    props.page === "/" || props.page.includes("projects") ? "initial" : "none"};
  ${props => console.log(props.page)}
  left: 4em;
  transform: rotate(-90deg);
`
