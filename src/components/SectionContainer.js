import React from 'react'
import CertificateSection from './CertificateSection'
import ContactSection from './ContactSection'
import ProfileSection from './ProfileSection'
import ProjectSection from './ProjectSection'
import SkillSection from './SkillSection'
import TimelineSectionList from './TimelineSectionList'

const SectionContainer = ({ section, educations, experiences, skills, projects, organizations, certificates, contacts }) => section !== 'Contact'
  ? (
    <div id={section} className="resume-main__section-container w-auto my-4 p-4 shadow-md rounded-xl bg-blue-50 desktop:mx-32 desktop:my-8 tablet:mx-16 phone:mx-4">
      <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-300 relative px-4 mb-6 border-b-2 border-blue-900">
        <span className="relative text-blue-900">{`${section}s`}</span>
      </h2>
      {(section === 'Profile') && <ProfileSection />}
      {(section === 'Education' || section === 'Experience' || section === 'Organization') && <TimelineSectionList section={section} educations={educations} experiences={experiences} organizations={organizations} />}
      {(section === 'Skill') && <SkillSection skills={skills} />}
      {(section === 'Project & Achievement') && <ProjectSection projects={projects} />}
      {(section === 'Certificate') && <CertificateSection certificates={certificates} />}
    </div>
    )
  : <div id={section} className="resume-main__section-container border-t-2 border-blue-900 bg-blue-100 p-4">
      <h3 className="text-center mb-3">{`${section}s:`}</h3>
      {(section === 'Contact') && <ContactSection contacts={contacts} />}
    </div>

export default SectionContainer
