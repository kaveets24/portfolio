import styled, { keyframes } from "styled-components"
import { styleguide } from "../../utils"

const animations = {
  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translate(0, 2000px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
`,
  fadeInDown: keyframes`
    from {
      opacity: 0;
      transform: translate(0, -2000px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
`,

  fadeInLeft: keyframes`
    from {
      opacity: 0;
      transform: translate(-2000px, 0);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
`,

  fadeInRight: keyframes`
    from {
      opacity: 0;
      transform: translate(2000px, 0);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
`,
}

export const SectionContainer = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 205px 20px 0 20px;
  animation: ${props => animations[props.animation]} 1s;

  p {
    margin: 20px 0;
    line-height: 40px;
  }

  a {
    display: inline-block;
    line-height: 0.9;
    border-bottom: 2px solid ${styleguide.fontBlack};

    :hover {
      color: ${styleguide.secondaryOpacity};
      border-color: ${styleguide.secondaryOpacity};
      transition: color ${styleguide.hoverTransitionDuration},
        border-color ${styleguide.hoverTransitionDuration};
    }
  }

  h2 {
    font-family: "DM Sans-Bold", sans-serif;
    margin: 20px 0;
  }

  @media screen and (max-width: ${styleguide.desktopBreakpoint.min}) {
    font-size: ${styleguide.fontMedium};
    padding: 140px 20px 0 20px;


  }
`
