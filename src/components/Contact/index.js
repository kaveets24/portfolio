import React from "react"

import {
  ContactContainer,
  ContactInput,
  ContactLabel,
  ContactButton,
  ContactTextArea,
} from "./styled"

import { Animated } from "react-animated-css"

const Contact = props => {
  return (
    <div>
        <ContactContainer path={props.path}>
          <form action="https://formspree.io/kaveets24@gmail.com" method="POST">
            <ContactLabel htmlFor="Name"></ContactLabel>
            <ContactInput type="text" placeholder="Full Name" name="Name" />
            <ContactLabel htmlFor="Email"></ContactLabel>
            <ContactInput
              type="text"
              placeholder="pete@example.com"
              name="Email"
            />
            <ContactLabel htmlFor="Message"></ContactLabel>
            <ContactTextArea
              name="Message"
              placeholder="Write your message here."
            />

            <ContactButton type="submit">Submit</ContactButton>
          </form>
        </ContactContainer>
    </div>
  )
}

export default Contact
