import React from "react"

import {
  ContactContainer,
  ContactButton,
} from "./styled"


const Contact = props => {
  return (
        <ContactContainer path={props.path}>
          <form action="https://formspree.io/kaveets24@gmail.com" method="POST">
            <label htmlFor="Name"></label>
            <input required type="text" placeholder="Name" name="Name" />
            <label htmlFor="Email"></label>
            <input
              required
              type="email"
              placeholder="Email"
              name="Email"
            />
            <label htmlFor="Message"></label>
            <textarea
              required
              name="Message"
              rows="4"
              placeholder="Message"
            />

            <ContactButton type="submit">Submit</ContactButton>
          </form>
        </ContactContainer>
  )
}

export default Contact
