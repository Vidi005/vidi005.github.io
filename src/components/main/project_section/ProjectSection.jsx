import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectSection = ({ projects }) => (
  <section className="section__project-list flex flex-wrap mt-4 justify-center text-center">
    {projects.map(project => <ProjectItem key={project.name} {...project} />)}
  </section>
)

export default ProjectSection
