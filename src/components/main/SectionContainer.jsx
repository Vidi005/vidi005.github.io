import React from 'react'
import CertificateSection from './cert_section/CertificateSection'
import ContactSection from './contact_section/ContactSection'
import ProfileSection from './profile_section/ProfileSection'
import ProjectSection from './project_section/ProjectSection'
import SkillSections from './skill_section/SkillSections'
import TimelineSectionList from './timeline_sections_container/TimelineSectionList'
import { AnimationOnScroll } from 'react-animation-on-scroll'
// import Particles from 'react-tsparticles'
// import { particlesConfig } from '../../configs/particlesConfig'

const SectionContainer = ({ section, educations, experiences, skills, projects, organizations, certificates, contacts }) => {
  if (section === 'Profile') {
    return (
      <article id={section} className="resume-main__section-container relative w-auto my-4 shadow-md rounded-xl bg-blue-50 desktop:mx-32 desktop:my-8 tablet:mx-16 phone:mx-4">
        {/* <Particles options={particlesConfig} className="absolute w-full top-0 bottom-0"/> */}
        <div className="p-4">
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
            <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-300 relative px-4 mb-6 border-b-2 border-blue-900">
              <span className="relative text-blue-900">{`${section}s`}</span>
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
            <ProfileSection />
          </AnimationOnScroll>
        </div>
      </article>
    )
  } else if (section === 'Education' || section === 'Experience' || section === 'Organization') {
    return (
      <article id={section} className="resume-main__section-container w-auto my-4 p-4 shadow-md rounded-xl bg-gradient-to-tl from-blue-200 via-blue-50 to-blue-50 desktop:mx-32 desktop:my-8 tablet:mx-16 phone:mx-4">
        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
          <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-300 relative px-4 mb-6 border-b-2 border-blue-900">
            <span className="relative text-blue-900">{`${section}s`}</span>
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce='true'>
          <TimelineSectionList section={section} educations={educations} experiences={experiences} organizations={organizations} />
        </AnimationOnScroll>
      </article>
    )
  } else if (section === 'Skill') {
    return (
      <article id={section} className="resume-main__section-container relative w-auto my-4 shadow-md rounded-xl bg-gradient-to-bl from-blue-300 via-blue-50 to-blue-50 desktop:mx-32 desktop:my-8 tablet:mx-16 phone:mx-4">
        <div className="skill-section__design absolute w-full top-0 bottom-0 bg-gradient-to-br from-transparent via-blue-200 rounded-xl"></div>
        <div className="skill-section__content p-4">
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
            <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-300 relative px-4 mb-6 border-b-2 border-blue-900">
              <span className="relative text-blue-900">{`${section}s`}</span>
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__zoomIn' animateOnce='true'>
            <SkillSections skills={skills} />
          </AnimationOnScroll>
        </div>
      </article>
    )
  } else if (section === 'Project & Achievement') {
    return (
      <article id={section} className="resume-main__section-container w-auto my-4 p-4 shadow-md rounded-2xl bg-blue-900 desktop:mx-32 desktop:my-8 tablet:mx-16">
        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
          <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-400 relative px-4 mb-6 border-b-2 border-blue-100">
            <span className="relative text-blue-100">{`${section}s`}</span>
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
          <ProjectSection projects={projects} />
        </AnimationOnScroll>
      </article>
    )
  } else if (section === 'Certificate') {
    return (
      <article id={section} className="resume-main__section-container w-auto my-4 px-4 py-8 shadow-md rounded-xl bg-blue-900 desktop:mx-32 desktop:my-8 tablet:mx-16">
        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
          <h2 className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:bg-gradient-to-r before:from-blue-400 relative mx-2 px-4 mb-6 border-b-2 border-blue-100">
            <span className="relative text-blue-100">{`${section}s`}</span>
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInUp' animateOnce='true'>
          <CertificateSection certificates={certificates} />
        </AnimationOnScroll>
      </article>
    )
  } else {
    return (
      <article id={section} className="resume-main__section-container border-t-2 border-blue-900 bg-blue-100 p-4">
        <AnimationOnScroll animateIn='animate__slideInUp' animateOnce='true'>
          <h3 className="text-center mb-3">{`${section}s:`}</h3>
          <ContactSection contacts={contacts} />
        </AnimationOnScroll>
      </article>
    )
  }
}

export default SectionContainer
