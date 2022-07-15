import React from 'react'
import Menu from './Menu'

const Header = ({ expand, isExpanded, sections, collapse }) => (
  <div className="resume-app__header fixed z-10 w-full top-0 bg-blue-800/80 shadow-header text-white backdrop-blur-sm py-2 px-3">
    <h2 className="inline align-middle">Vidi&apos;s Resume</h2>
    <Menu expand={expand} isExpanded={isExpanded} sections={sections} collapse={collapse} />
  </div>
)

export default Header
