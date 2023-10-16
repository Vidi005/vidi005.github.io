import React from 'react'
import SkillItem from '../SkillItem'

const LangSection = ({ languages }) => (
  <section className="language-section text-center">
    <h3 className="text-blue-900">Languages Skill</h3>
    <div className="w-full pb-1 bg-blue-900 rounded-full mb-2"></div>
    <div className="language-container p-2 bg-blue-900 rounded-xl shadow-lg">
      {languages.map(language => <SkillItem key={language.language} {...language} />)}
    </div>
  </section>
)

export default LangSection
