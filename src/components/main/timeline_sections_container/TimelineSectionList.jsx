import React from 'react'
import TimelineSectionItem from './TimelineSectionItem'

const TimelineSectionList = ({ section, educations, experiences, organizations }) => (
  <section className="resume-app__section-list mb-4">
    {(section === 'Education') &&
      educations.map(education =>
        <TimelineSectionItem key={education.duration} section={section} education={education} />
      ).reverse()
    }
    {(section === 'Experience') &&
      experiences.map(experience =>
        <TimelineSectionItem key={experience.id} section={section} experience={experience} />
      ).reverse()
    }
    {(section === 'Organization') &&
      organizations.map(org =>
        <TimelineSectionItem key={org.year} section={section} org={org} />
      ).reverse()
    }
  </section>
)

export default TimelineSectionList
