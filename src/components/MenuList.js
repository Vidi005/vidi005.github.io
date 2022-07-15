import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ isExpanded, sections, collapse }) => isExpanded
  ? (
    <div className="header-menu__list origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-gray-800/80 backdrop-blur-sm phone:w-[96vw] tablet:w-max">
      <ul className="list-none">
        {sections.map(section => <MenuItem key={section} section={section} collapse={collapse} />)}
      </ul>
    </div>
    )
  : (
    <div className="desktop:right-0 desktop:inline tablet:hidden phone:hidden">
      <ul>{sections.map(section => <MenuItem key={section} section={section} collapse={collapse} />)}</ul>
    </div>
    )

export default MenuList
