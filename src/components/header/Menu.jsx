import React from 'react'
import MenuList from './MenuList'

const Menu = ({ expand, isMenuBarCloseClicked, isExpanded, sections, collapse }) => (
  <div className="header-menu absolute top-0 left-0 w-full text-right desktop:top-1">
    {
      isMenuBarCloseClicked
        ? (
            <button className="p-2 hover:bg-blue-900 duration-200 tablet:inline desktop:hidden" onClick={() => expand()}>
              <img className="max-h-8" src="/images/menu.svg" alt="Menu"/>
            </button>
          )
        : (
            <button className="p-2 hover:bg-blue-900 duration-200 tablet:inline desktop:hidden" onClick={() => collapse()}>
              <img className="max-h-8" src="/images/close.svg" alt="Close"/>
            </button>
          )
    }
    <MenuList isMenuBarCloseClicked={isMenuBarCloseClicked} isExpanded={isExpanded} sections={sections} collapse={collapse} />
  </div>
)

export default Menu
