import React from 'react'

const ProjectItem = ({ image, name, summary, desc, site }) => (
  <div className="project-item w-72 h-72 border-2 bg-white shadow-lg rounded-xl mx-4 p-4 text-center flex-none">
    <a className="hover:underline active:text-purple-900" href={site}>
      <img className="w-16 mx-auto mb-3" src={image} alt="Image Item"/>
      <h4 className="text-amber-900">{name}</h4>
      <h5 className="text-blue-600">{summary}</h5>
      <p className="italic text-sm mt-2">{desc}</p>
    </a>
  </div>
)

export default ProjectItem
