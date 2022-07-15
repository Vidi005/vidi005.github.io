import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectSection = ({ projects }) => (
  <div className="flex overflow-auto flex-row pb-4">
    {projects.map(project => <ProjectItem key={project.name} {...project} />)}
  </div>
)

export default ProjectSection
