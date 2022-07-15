import React from 'react'
import { getCertificateData, getContactData, getEducationData, getOrganizationData, getProjectData, getSkillData, getWorkExperienceData } from '../utils/data'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

class MyResumeApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: false,
      sections: ['Profile', 'Education', 'Experience', 'Skill', 'Project & Achievement', 'Organization', 'Certificate', 'Contact'],
      educations: getEducationData(),
      experiences: getWorkExperienceData(),
      skills: getSkillData(),
      projects: getProjectData(),
      organizations: getOrganizationData(),
      certificates: getCertificateData(),
      contacts: getContactData()
    }

    this.onExpandDropDownHandler = this.onExpandDropDownHandler.bind(this)
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
    this.onClickBtnScrollDown = this.onClickBtnScrollDown.bind(this)
    this.onScrollEventHandler = this.onScrollEventHandler.bind(this)
    this.onClickBtnScrollToTop = this.onClickBtnScrollToTop.bind(this)
  }

  onExpandDropDownHandler () {
    this.setState(prevState => {
      return {
        isExpanded: !prevState.isExpanded
      }
    })
  }

  onClickOutsideHandler () {
    this.setState(() => {
      return {
        isExpanded: false
      }
    })
  }

  onClickBtnScrollDown () {
    this.setState(() => {
      return { isExpanded: false }
    })
  }

  onScrollEventHandler () {
    this.setState(() => null)
  }

  onClickBtnScrollToTop () {
    this.setState(() => {
      return { isExpanded: false }
    })
  }

  render () {
    return (
      <React.Fragment>
        <Header
          expand={this.onExpandDropDownHandler}
          isExpanded={this.state.isExpanded}
          sections={this.state.sections}
          collapse={this.onClickOutsideHandler}
        />
        <Main
          collapse={this.onClickOutsideHandler}
          scrollDown={this.onClickBtnScrollDown}
          sections={this.state.sections}
          educations={this.state.educations}
          experiences={this.state.experiences}
          skills={this.state.skills}
          projects={this.state.projects}
          organizations={this.state.organizations}
          certificates={this.state.certificates}
          contacts={this.state.contacts}
          navigate={this.onScrollEventHandler}
          scrollToTop={this.onClickBtnScrollToTop}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default MyResumeApp
