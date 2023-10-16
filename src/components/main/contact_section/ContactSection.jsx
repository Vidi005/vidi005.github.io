import React from 'react'
import ContactItem from './ContactItem'
import MessageInput from './MessageInput'

const ContactSection = ({ contacts }) => (
  <React.Fragment>
    <section className="resume-main__contact-section flex flex-row justify-center tablet:flex-wrap tablet:shrink">
      {contacts.map(contact => <ContactItem key={contact.url} {...contact} />)}
    </section>
    <MessageInput />
  </React.Fragment>
)

export default ContactSection
