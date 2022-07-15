import React from 'react'
import ContactItem from './ContactItem'

const ContactSection = ({ contacts }) => (
  <div className="resume-main__contact-section flex flex-row justify-center tablet:flex-wrap tablet:shrink">
    {contacts.map(contact => <ContactItem key={contact.url} {...contact} />)}
  </div>
)

export default ContactSection
