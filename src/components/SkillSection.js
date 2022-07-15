import React from 'react'
import SkillItem from './SkillItem'

const SkillSection = ({ skills }) => (
  <React.Fragment>
    {skills.map(skill => <SkillItem key={skill.name} {...skill} />)}
  </React.Fragment>
)

export default SkillSection
