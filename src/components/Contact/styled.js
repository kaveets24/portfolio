import styled, { css }from "styled-components";
import { styleguide } from "../../utils"

export const ContactContainer = styled.div`
    max-width: 300px;
    margin: 0 auto;
    padding: 50px 0;
    top: 50%;
    
`;


export const ContactInput = styled.input`
/* display: block; */
width: 100%;
padding: ${styleguide.formPadding};


`;

export const ContactLabel = styled.label`
/* display: block; */


`;

export const ContactTextArea = styled.textarea`
/* display: block; */
width: 100%;
padding: ${styleguide.formPadding};



`;

export const ContactButton = styled.button`
margin: 0 auto;
width: 100px;
`;