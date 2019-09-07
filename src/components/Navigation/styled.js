import styled from "styled-components"
import { styleguide } from "../../utils"

export const Nav = styled.nav`
  background-color: ${styleguide.backgroundColor} !important;
`
export const Li = styled.li`
  font-size: ${styleguide.fontLarge};
  position: absolute;
  top: 50%;
  ${props => {
    switch (props.id) {
      case "aboutme":
        return `
            top: 4em;
            display: inline-block;
            text-align: center;
            width: 100%;
        `
      case "resume":
        return `
            transform: rotate(90deg);
            right: 4em;
        `
      case "contact":
        return `
            top: initial;
            bottom: 4em;
            text-align: center;
            width: 100%;
        `
      case "projects":
        return `
            transform: rotate(-90deg);
            left: 4em;
        `
      default:
        break
    }
  }}
`
