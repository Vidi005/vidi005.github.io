import React from 'react'
import MenuList from './MenuList'

const Menu = ({ expand, isExpanded, sections, collapse }) => (
  <div className="header-menu inline fixed right-0 mr-2 desktop:top-1">
    <button className="hover:bg-blue-900 tablet:inline desktop:hidden" onClick={() => expand()}>
      {isExpanded ? <img className="max-h-8" src="/images/close.svg" alt="Menu"/> : <img className="max-h-8" src="/images/menu.svg" alt="Menu"/>}
    </button>
    <MenuList isExpanded={isExpanded} sections={sections} collapse={collapse} />
  </div>
)

export default Menu
