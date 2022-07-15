import React from 'react'
import { Link } from 'react-scroll'

const MenuItem = ({ section, collapse }) =>
<Link to={section} spy={true} smooth={true} offset={-60}><a href={section}><li className="list__menu-item tablet:px-3 phone:px-4 phone:py-2 desktop:hover:bg-blue-600 tablet:hover:bg-gray-500 phone:hover:bg-gray-500 hover:underline desktop:inline-block tablet:text-justify phone:text-center" onClick={(event) => {
  event.preventDefault()
  return collapse()
}}>{section}</li></a></Link>

export default MenuItem
