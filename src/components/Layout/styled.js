import styled, { css, keyframes, createGlobalStyle } from "styled-components"

import { styleguide } from "../../utils"

// import img from "../../images/brad-knight-chicago-compressed.jpg"
import img50 from "../../images/brad-knight-chicago-unsplash-50.png"
import img10 from "../../images/brad-knight-chicago-unsplash-10.png"

// Fonts
import fontReg from "../../fonts/DMSans-Regular.ttf"
import fontBold from "../../fonts/DMSans-Bold.ttf"

// const backgroundImagePreview = props => css`
//   background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACigAwAEAAAAAQAAABsAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABsAKAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAgICAgICA0ICA0TDQ0NExoTExMTGiAaGhoaGiAnICAgICAgJycnJycnJycvLy8vLy83Nzc3Nz09PT09PT09PT3/2wBDAQkKChAPEBsPDxtALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/3QAEAAP/2gAMAwEAAhEDEQA/APSm05QMAVQl08eldeyCqcqLUPEWEsMmcPNp/tWRPYe1d3LGtZs0KmrjihSwR55cWOQRiqP9nj0rubiBcGqfkLXQq6ZzPBM//9Dau/iTpSyKIZBtBBbPcdxxwKrP8SNLIzhiMe/X8uleIQqrCd2GSI9340iAFSpAIPbFc6oxbsae3klc9hl8f2zSbohlSvQ+vOD06VQm8fKJOIQI8Dk7s+/bFeXkBWTHHyj+VQIA4AfnC559cmr9jFdB/WJvqejHxvG10/mp+7KgLtPcZPf60/8A4TOy/uN+YrzkAKZEXgDoB+IqHYv+TT5V2BVJdz//2Q==);
// `

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`
const globalCss = props => css`
  background: no-repeat center center fixed;
  background-image: url(${props.page === "/" && !props.mobileNav ? img50 : img10});
  background-color: ${styleguide.backgroundColor};
  background-blend-mode: soft-light;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const GlobalStyle = createGlobalStyle`
html {
  ${globalCss};
  
}
`

export const MainContainer = styled.main`
  @font-face {
    font-family: "DM Sans";
    src: url(${fontReg});
  }
  @font-face {
    font-family: "DM Sans-Bold";
    src: url(${fontBold});
  }
  font-family: "DM Sans", sans-serif;
  position: relative;
  font-size: ${styleguide.fontXL};
  color: ${styleguide.fontBlack};
  height: 100%;
  /* background: transparent; */
  animation: ${fadeIn} 1.5s;

  .social-media {
    position: fixed;
    right: 10px;
    bottom: 10px;

   display: ${props => props.page === "/" ? "block": "none"};

    svg {
      width: 20px;
      height: 20px;
      margin: 0 4px;
      transition: fill ${styleguide.hoverTransitionDuration};

      &:hover {
        fill: ${styleguide.secondaryOpacity};

      }
     
    }
  }
`
