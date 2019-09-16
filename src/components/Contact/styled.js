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
    ::placeholder {
      color: ${styleguide.fontBlack};
    }

    :focus {
        outline: none
    }
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

    ::placeholder {
      color: ${styleguide.fontBlack};
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

`
