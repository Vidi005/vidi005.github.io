import React from 'react'
import { Link } from 'react-scroll'

const Navigation = ({ scrollToTop }) => (
  <nav className="resume-app__navigation w-fit fixed bottom-8 right-4 z-10 shadow-nav rounded-md animate__animated animate__fadeIn" onClick={() => scrollToTop()}>
    <Link to="top-banner" spy={true} smooth={true}>
      <a href="#top-banner">
        <h4 className="bg-blue-900/40 backdrop-blur-sm rounded-md hover:bg-blue-900/60 duration-300 px-4 pt-2 pb-1 font-mono text-white">^</h4>
      </a>
    </Link>
  </nav>
)

export default Navigation
