import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ProjectItemButtons from './ProjectItemButtons'

const ProjectItem = ({ image, name, summary, desc, repository, preview, download }) => (
  <AnimationOnScroll className="project-item grow-[9999] shrink desktop:basis-96 tablet:basis-80 phone:basis-full flex flex-col justify-between my-2 tablet:m-2 bg-blue-100 shadow-xl phone:rounded-xl tablet:rounded-3xl overflow-hidden" animateIn='animate__slideInUp' animateOnce='true'>
    <div className="project-item__container w-full p-4 desktop:p-8">
      <img className="w-full px-2" src={image} alt="Image Item"/>
      <h4 className="text-amber-900">{name}</h4>
      <h5 className="text-blue-600">{summary}</h5>
      <p className="italic text-sm mt-2">{desc}</p>
    </div>
    <ProjectItemButtons repository={repository} preview={preview} download={download}/>
  </AnimationOnScroll>
)

export default ProjectItem
