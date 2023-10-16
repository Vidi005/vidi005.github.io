import React from 'react'
import Banner from './banner/Banner'
import BottomBanner from './banner/BottomBanner'
import Navigation from '../navigation/Navigation'
import SectionContainer from './SectionContainer'
import BGDesign from './BGDesign'

const Main = ({ collapse, isTopBtnShown, scrollDown, sections, educations, experiences, skills, projects, organizations, certificates, contacts, navigate, scrollToTop }) => (
  <main className="resume-main w-full overflow-hidden" onScroll={() => navigate()} onClick={() => collapse()}>
    <BGDesign/>
    <Banner scrollDown={scrollDown} />
    <img className="w-full h-20 scale-y-[-1]" src="/images/waves-design.png" alt="Waves Design"/>
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
    {isTopBtnShown ? <Navigation scrollToTop={scrollToTop} /> : null}
  </main>
)

export default Main
