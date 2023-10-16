import React from 'react'

const Footer = () => (
  <footer className="resume-app__footer relative text-white bg-blue-100 overflow-hidden">
    <img className="absolute top-0 w-full h-full translate-y-4 opacity-75 drop-shadow-lg" src={`${import.meta.env.BASE_URL}images/waves-design.png`} alt="Waves Design"/>
    <img className="absolute w-full h-full opacity-50 scale-x-[-1] drop-shadow-lg" src={`${import.meta.env.BASE_URL}images/waves-design.png`} alt="Waves Design"/>
    <img className="absolute w-full h-full opacity-25 drop-shadow-lg" src={`${import.meta.env.BASE_URL}images/wave-design.png`} alt="Waves Design"/>
    <h5 className="relative flex items-end pb-4 justify-center h-24">Made by Vidi Fitriansyah Hidarlan | {new Date().getFullYear()}</h5>
  </footer>
)

export default Footer
