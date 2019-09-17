import styled from "styled-components"
import { styleguide } from "../../utils"


export const SectionContainer = styled.section`
    max-width: 1024px;  
    margin: 0 auto;
    padding: 205px 0 0 0;
    p {
        margin: 20px 0;
        line-height: 40px;
    }

    a {
        display: inline-block;
        line-height: 0.9;
        border-bottom: 2px solid ${styleguide.fontBlack};
    }

    h2 {
    font-family: "DM Sans-Bold", sans-serif;
    margin: 20px 0
    }

    @media screen and (max-width: ${styleguide.desktopBreakpoint.min}) {
        font-size: ${styleguide.fontMedium}
    }



`





