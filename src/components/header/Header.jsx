import React from 'react'
import Menu from './Menu'

const Header = ({ expand, isMenuBarCloseClicked, isExpanded, sections, collapse }) => (
  <header className="resume-app__header fixed z-20 w-full top-0 bg-blue-900/70 shadow-header text-white backdrop-blur-sm py-2 px-3">
    <h2 className="inline align-middle">Vidi&apos;s Resume</h2>
    <Menu expand={expand} isMenuBarCloseClicked={isMenuBarCloseClicked} isExpanded={isExpanded} sections={sections} collapse={collapse} />
  </header>
)

export default Header
