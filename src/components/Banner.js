import React from 'react'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Banner = ({ scrollDown }) => (
  <div id="top-banner" className="resume-main__banner flex flex-col items-center justify-center h-screen w-full bg-[url('/public/images/background.jpg')] bg-cover bg-center shadow-lg">
    <h2 className="text-white mt-48">
      <Typewriter
        options={{
          strings: ['I\'m an Electrical Engineer', 'I\'m an Android Enthusiast', 'I\'m a React Enthusiast'],
          delay: 90,
          autoStart: true,
          loop: true
        }}
      />
    </h2>
    <Link to="Profile" spy={true} smooth={true} offset={-60}><a href="#top-banner"><img className="w-32" src="/images/gif-arrow.gif" alt="Scroll Down" onClick={(event) => {
      event.preventDefault()
      return scrollDown()
    }}/></a></Link>
    <p className="text-white">Scroll Down</p>
  </div>
)

export default Banner
