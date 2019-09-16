import styled, { css, keyframes }from "styled-components"

import { styleguide } from "../../utils"

// import img from "../../images/brad-knight-chicago-compressed.jpg"
import img50 from "../../images/brad-knight-chicago-unsplash-50.png"
import img10 from "../../images/brad-knight-chicago-unsplash-10.png"


const backgroundImagePreview = props => css`
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACigAwAEAAAAAQAAABsAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABsAKAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAgICAgICA0ICA0TDQ0NExoTExMTGiAaGhoaGiAnICAgICAgJycnJycnJycvLy8vLy83Nzc3Nz09PT09PT09PT3/2wBDAQkKChAPEBsPDxtALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/3QAEAAP/2gAMAwEAAhEDEQA/APSm05QMAVQl08eldeyCqcqLUPEWEsMmcPNp/tWRPYe1d3LGtZs0KmrjihSwR55cWOQRiqP9nj0rubiBcGqfkLXQq6ZzPBM//9Dau/iTpSyKIZBtBBbPcdxxwKrP8SNLIzhiMe/X8uleIQqrCd2GSI9340iAFSpAIPbFc6oxbsae3klc9hl8f2zSbohlSvQ+vOD06VQm8fKJOIQI8Dk7s+/bFeXkBWTHHyj+VQIA4AfnC559cmr9jFdB/WJvqejHxvG10/mp+7KgLtPcZPf60/8A4TOy/uN+YrzkAKZEXgDoB+IqHYv+TT5V2BVJdz//2Q==);
`

const backgroundImageLoaded = props => css`
/* Show background with opacity 50 only on home page */
  background-image: url(${props.page === "/" ? img50: img10});
`
  

export const MainContainer = styled.main`
  position: relative;
  font-family: "DM Sans", sans-serif;
  font-size: ${styleguide.fontXL};
  color: ${styleguide.fontBlack};
  height: 100vh;
  /* After large Image Loads */
  background: no-repeat center center fixed;
  background-color: ${styleguide.backgroundColor};
  background-size: cover;
  ${props => props.imageLoaded ? backgroundImageLoaded : backgroundImagePreview}
  background-blend-mode: soft-light;
 


`

