import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ isMenuBarCloseClicked, isExpanded, sections, collapse }) => isExpanded
  ? (
      !isMenuBarCloseClicked
        ? (
            <div className="header-menu__list shadow-lg bg-blue-900/90 backdrop-blur-sm phone:w-screen animate__animated animate__fadeInDown animate__faster">
              <ul className="list-none">
                {sections.map(section => <MenuItem key={section} section={section} collapse={collapse} />)}
              </ul>
            </div>
          )
        : (
            <div className="header-menu__list shadow-lg bg-blue-900/90 backdrop-blur-sm phone:w-screen animate__animated animate__fadeOutUp animate__faster">
              <ul className="list-none">
                {sections.map(section => <MenuItem key={section} section={section} collapse={collapse} />)}
              </ul>
            </div>
          )
    )
  : (
    <div className="desktop:right-0 desktop:inline tablet:hidden phone:hidden">
      <ul>{sections.map(section => <MenuItem key={section} section={section} collapse={collapse} />)}</ul>
    </div>
    )

export default MenuList
