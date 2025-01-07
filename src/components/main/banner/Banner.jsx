import React from 'react'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Banner = ({ scrollDown }) => (
  <div id="top-banner" className="resume-main__banner relative h-screen w-screen bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900 shadow-lg">
    {/* <div className="absolute inset-0 w-full h-full bg-black/50"></div> */}
    <img className="absolute inset-0 w-full h-full object-cover opacity-30" src={`${import.meta.env.BASE_URL}images/background.svg`} alt="Banner BG"/>
    <div className="content-container relative w-full h-full flex flex-col items-center justify-between text-white desktop:px-32 desktop:py-8 tablet:px-16 p-8 z-10">
      <br/>
      <h1 className="w-full font-sans"><Typewriter onInit={(typewriter) => {
        typewriter.typeString('Hi! 👋🏻').start()
      }} options={{ delay: 120, autoStart: true, cursor: '' }}/></h1>
      <h1 className="w-full font-sans"><Typewriter onInit={(typewriter) => {
        typewriter.pauseFor(1200).typeString('I\'m Vidi Fitriansyah Hidarlan').start()
      }} options={{ delay: 60, autoStart: true, cursor: '' }}/></h1>
      <br />
      <h2 className="text-justify w-full">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(4000)
              .typeString('I\'m an Electrical Engineer')
              .pauseFor(600)
              .deleteChars(19)
              .changeDelay(40)
              .pauseFor(300)
              .typeString('Enthusiastic with passions of React JS Web Development and Mobile Application Development.').pauseFor(1200)
              .changeDeleteSpeed(1)
              .deleteChars(97)
              .changeDelay(10)
              .pauseFor(300)
              .typeString(' also skilled and interested in Embedded System, Machine Learning Development, Data Engineer, Data Scientist, Data Analyst, and other related technological fields.')
              .pauseFor(2400)
              .changeDeleteSpeed(1)
              .start()
          }}
          options={{
            delay: 90,
            deleteSpeed: 30,
            autoStart: true,
            loop: true,
            cursor: '_'
          }}
        />
      </h2>
      <Link to="Profile" spy={true} smooth={true} offset={-60}><a href="#top-banner"><img className="w-32 mx-auto" src="/images/gif-arrow.gif" alt="Scroll Down" onClick={(event) => {
        event.preventDefault()
        return scrollDown()
      }}/></a></Link>
      <p className="">Scroll Down</p>
      <br/>
    </div>
  </div>
)

export default Banner
