import React from 'react'

const ContactItem = ({ image, account, url }) => (
  <div className="list__contact-item mx-2 tablet:pb-2">
    <a href={url} target='_blank' rel='noreferrer'><img className="inline max-h-6 px-2" src={image} alt="Contact Icon"/></a>
    <p className="underline tablet:inline my-auto phone:hidden"><a href={url} target='_blank' rel='noreferrer'>{account}</a></p>
  </div>
)

export default ContactItem
