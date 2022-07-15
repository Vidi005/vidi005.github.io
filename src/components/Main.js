import React from 'react'
import Banner from './Banner'
import BottomBanner from './BottomBanner'
import Navigation from './Navigation'
import SectionContainer from './SectionContainer'

const Main = ({ collapse, scrollDown, sections, educations, experiences, skills, projects, organizations, certificates, contacts, navigate, scrollToTop }) => (
  <div className="resume-main box-border" onScroll={() => navigate()} onClick={() => collapse()}>
    <Banner scrollDown={scrollDown} />
    {
      sections.map(section => (
        <SectionContainer
          key={section}
          section={section}
          educations={educations}
          experiences={experiences}
          skills={skills}
          projects={projects}
          organizations={organizations}
          certificates={certificates}
          contacts={contacts}
          {...section}
        />
      ))
    }
    <BottomBanner />
    {pageYOffset >= 400 ? <Navigation scrollToTop={scrollToTop} /> : null}
  </div>
)

export default Main
