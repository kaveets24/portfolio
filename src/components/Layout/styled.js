import styled from "styled-components"

import { styleguide } from "../../utils"

import img from "../../images/brad-knight-chicago-unsplash.jpg"

export const MainContainer = styled.main`
  font-family: "DM Sans", sans-serif;
  color: ${styleguide.fontBlack};
  height: 100vh;
  background: url(${img}) no-repeat center center fixed;
  background-size: cover;
  background-blend-mode: soft-light;
  background-color: ${styleguide.backgroundColor};
`;
