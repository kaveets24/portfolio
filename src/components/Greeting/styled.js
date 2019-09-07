import styled from "styled-components"
import { styleguide } from "../../utils"

export const GreetingContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${styleguide.fontXXL};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15em;
    margin: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
`