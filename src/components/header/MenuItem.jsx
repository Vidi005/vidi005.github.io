import React from 'react'
import { Link } from 'react-scroll'

const MenuItem = ({ section, collapse }) =>
<Link to={section} spy={true} smooth={true} offset={-60}><a href={section}><li className="list__menu-item tablet:px-3 phone:px-4 phone:py-2 desktop:hover:bg-blue-500/50 tablet:hover:bg-blue-500/50 phone:hover:bg-blue-500/50 hover:underline duration-200 desktop:inline-block tablet:text-justify phone:text-center animate__animated animate__fadeInDown animate__faster" onClick={(event) => {
  event.preventDefault()
  return collapse()
}}>{section}</li></a></Link>

export default MenuItem
