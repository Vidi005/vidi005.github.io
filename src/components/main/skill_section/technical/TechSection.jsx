import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SkillItem from '../SkillItem'

const TechSection = ({ technical }) => (
  <section className="technical-section text-center">
    <h3 className="text-blue-900">Technical Skills</h3>
    <div className="w-full pb-1 bg-blue-900 rounded-full mb-2"></div>
    <ul className="flex text-amber-900 items-center text-justify pl-2 pr-8 py-1 bg-blue-100 w-fit border-2 border-blue-900 rounded-tl-lg rounded-tr-3xl shadow-xl">
      <li className="mr-2 p-1 rounded-full bg-amber-900"></li>
      <h4 className="grow">Programming and Markup</h4>
    </ul>
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="programming-container grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-2 py-4 px-2 bg-blue-900 rounded-b-xl rounded-tr-xl mb-2 shadow-lg">
      {technical.programmings.map(programming => <SkillItem key={programming.name} {...programming} />)}
      </div>
    </AnimationOnScroll>
    <ul className="flex text-amber-900 items-center text-justify pl-2 pr-8 py-1 bg-blue-100 w-fit border-2 border-blue-900 rounded-tl-lg rounded-tr-3xl shadow-xl">
      <li className="mr-2 p-1 rounded-full bg-amber-900"></li>
      <h4 className="grow">Frameworks</h4>
    </ul>
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="framework-container grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-2 py-4 px-2 bg-blue-900 rounded-b-xl rounded-tr-xl mb-2 shadow-lg">
      {technical.frameworks.map(framework => <SkillItem key={framework.name} {...framework} />)}
      </div>
    </AnimationOnScroll>
    <ul className="flex text-amber-900 items-center text-justify pl-2 pr-8 py-1 bg-blue-100 w-fit border-2 border-blue-900 rounded-tl-lg rounded-tr-3xl shadow-xl">
      <li className="mr-2 p-1 rounded-full bg-amber-900"></li>
      <h4 className="grow">Databases</h4>
    </ul>
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="db-container grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-2 py-4 px-2 bg-blue-900 rounded-b-xl rounded-tr-xl mb-2 shadow-lg">
      {technical.dbs.map(db => <SkillItem key={db.name} {...db} />)}
      </div>
    </AnimationOnScroll>
    <ul className="flex text-amber-900 items-center text-justify pl-2 pr-8 py-1 bg-blue-100 w-fit border-2 border-blue-900 rounded-tl-lg rounded-tr-3xl shadow-xl">
      <li className="mr-2 p-1 rounded-full bg-amber-900"></li>
      <h4 className="grow">IDE and Text Editor</h4>
    </ul>
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="ide-container grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-2 py-4 px-2 bg-blue-900 rounded-b-xl rounded-tr-xl mb-2 shadow-lg">
      {technical.ides.map(ide => <SkillItem key={ide.name} {...ide} />)}
      </div>
    </AnimationOnScroll>
    <ul className="flex text-amber-900 items-center text-justify pl-2 pr-8 py-1 bg-blue-100 w-fit border-2 border-blue-900 rounded-tl-lg rounded-tr-3xl shadow-xl">
      <li className="mr-2 p-1 rounded-full bg-amber-900"></li>
      <h4 className="grow">Others</h4>
    </ul>
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="other-container grid desktop:grid-cols-5 tablet:grid-cols-3 phone:grid-cols-2 py-4 px-2 bg-blue-900 rounded-b-xl rounded-tr-xl mb-2 shadow-lg">
      {technical.others.map(other => <SkillItem key={other.name} {...other} />)}
      </div>
    </AnimationOnScroll>
  </section>
)

export default TechSection
