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
        <ContactContainer className="fadeInUpBig" path={props.path}>
          <form action="https://formspree.io/kaveets24@gmail.com" method="POST">
            <ContactLabel for="Name">Name</ContactLabel>
            <ContactInput type="text" placeholder="Full Name" name="Name" />
            <ContactLabel for="Email">Email</ContactLabel>
            <ContactInput
              type="text"
              placeholder="pete@example.com"
              name="Email"
            />
            <ContactLabel for="Phone">Phone</ContactLabel>
            <ContactInput
              type="text"
              placeholder="(123) 867-5309"
              name="Phone"
            />
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
