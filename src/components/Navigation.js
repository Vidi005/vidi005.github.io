import React from 'react'
import { Link } from 'react-scroll'

const Navigation = ({ scrollToTop }) => (
  <div className="resume-app__navigation w-fit fixed bottom-8 right-4 z-10 bg-gray-900/40 backdrop-blur-sm rounded-md hover:bg-gray-900/60 px-4 pt-3 pb-1 text-white shadow-nav" onClick={() => scrollToTop()}>
    <Link to="top-banner" spy={true} smooth={true}>
      <a href="#top-banner"><h4>^</h4></a>
    </Link>
  </div>
)

export default Navigation
