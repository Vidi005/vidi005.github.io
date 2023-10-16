import React from 'react'
import LangSection from './languages/LangSection'
import TechSection from './technical/TechSection'

const SkillSections = ({ skills }) => (
  <div className="main-skill-sections__container">
    <TechSection technical={skills.technical}/>
    <LangSection languages={skills.languages}/>
  </div>
)

export default SkillSections
