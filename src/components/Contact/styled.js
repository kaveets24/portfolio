import styled, { css } from "styled-components"
import { styleguide } from "../../utils"

const border = props => css`
  border: 2px solid ${styleguide.fontBlack};
`

export const ContactContainer = styled.div`
  form {
    color: ${styleguide.fontBlack};
  }
  input {
    ${border}
    width: 100%;
    height: 64px;
    padding: ${styleguide.formPadding};
    margin: 20px 0 0 0;
    background-color: ${styleguide.backgroundColor};
    border-radius: 0;
    ::placeholder {
      color: ${styleguide.fontBlack};
    }

    :focus {
        outline: none
    }
     ::placeholder {
      color: ${styleguide.fontBlack};
      opacity: 1;
    }

  }
  input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  ${border}
  background-color: ${styleguide.backgroundColor};
  -webkit-text-fill-color: ${styleguide.fontBlack};
  transition: background-color 5000s ease-in-out 0s;
}

  label {
  }

  textarea {
    ${border}
    color: ${styleguide.fontBlack};
    width: 100%;
    padding: ${styleguide.formPadding};
    background-color: ${styleguide.backgroundColor};
    margin: 20px 0 0 0;
    border-radius: 0;

    :invalid {
      box-shadow: none;
    }
    :required {
      box-shadow: none;
    }

    ::placeholder {
      color: ${styleguide.fontBlack};
      opacity: 1;
    }
    :focus {
        outline: none
    }
  }
`

export const ContactButton = styled.button`
  padding: ${styleguide.formPadding};
  margin: 20px auto;
  background-color: ${styleguide.backgroundColor};
  width: 125px;
  ${border}

  :hover {
    color: ${styleguide.secondaryOpacity};
    border-color: ${styleguide.secondaryOpacity};
    transition: color ${styleguide.hoverTransitionDuration},
      border-color ${styleguide.hoverTransitionDuration};
  }
`
