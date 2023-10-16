import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SkillItem = ({ name, icon, language, ability }) => {
  if (icon?.length > 0) {
    return (
      <section className="skill-item__tech flex flex-col items-center justify-between px-2 py-4 text-center text-white">
        <h5></h5>
        <img className="w-1/2 mb-2" src={icon} alt="Icon"/>
        <h5>{name}</h5>
      </section>
    )
  } else {
    return (
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <section className="skill-item__lang flex text-left bg-white m-2 px-3 py-1 rounded-xl shadow-lg">
          <h5 className="text-amber-900">{language}</h5>
          <h5 className="text-amber-900 mx-2">:</h5>
          <h5 className="text-blue-900">{ability}</h5>
        </section>
      </AnimationOnScroll>
    )
  }
}

export default SkillItem
