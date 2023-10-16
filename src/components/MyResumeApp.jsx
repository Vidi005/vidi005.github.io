import React from 'react'
import Swal from 'sweetalert2'
import { getCertificateData, getContactData, getEducationData, getOrganizationData, getProjectData, getSkillData, getWorkExperienceData } from '../utils/data'
import { ProfileProvider } from './contexts/ProfileContext'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'

class MyResumeApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: false,
      isMenuBarCloseClicked: true,
      isAgeLoading: false,
      isTopBtnShown: false,
      getCurrentAges: '-',
      sections: ['Profile', 'Education', 'Experience', 'Skill', 'Project & Achievement', 'Organization', 'Certificate', 'Contact'],
      educations: getEducationData(),
      experiences: getWorkExperienceData(),
      skills: getSkillData(),
      projects: getProjectData().reverse(),
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

  componentDidMount () {
    onscroll = () => {
      if (scrollY > 400) {
        this.setState({ isTopBtnShown: true })
      } else {
        this.setState({ isTopBtnShown: false })
      }
    }
    this.fetchCurrentAges()
  }

  componentWillUnmount () {
    onscroll = null
  }

  fetchCurrentAges () {
    const scriptUrl = `${import.meta.env.VITE_MAILING_LIST_API_KEY}?age=getCurrentAge`
    this.setState({ isAgeLoading: true }, () => {
      fetch(scriptUrl, { method: 'GET' })
        .then(response => response.json())
        .then(response => {
          if (response?.ages !== undefined) {
            this.setState({
              getCurrentAges: response.ages,
              isAgeLoading: false
            })
          } else {
            Swal.fire('Failed loading age data!', `${response?.message}`, 'warning')
            this.setState({ isAgeLoading: false })
          }
        })
        .catch(error => {
          Swal.fire('Failed loading age data!', `${error.message}`, 'error')
          this.setState({ isAgeLoading: false })
        })
    })
  }

  onExpandDropDownHandler () {
    this.setState(prevState => ({
      isMenuBarCloseClicked: !prevState.isMenuBarCloseClicked,
      isExpanded: true
    }))
  }

  onClickOutsideHandler () {
    this.setState(() => ({ isMenuBarCloseClicked: true }))
    setTimeout(() => {
      this.setState({ isExpanded: false })
    }, 500)
  }

  onClickBtnScrollDown () {
    this.onClickOutsideHandler()
  }

  onScrollEventHandler () {
    this.setState(() => null)
  }

  onClickBtnScrollToTop () {
    this.onClickOutsideHandler()
  }

  render () {
    return (
      <React.Fragment>
        <Header
          expand={this.onExpandDropDownHandler}
          isMenuBarCloseClicked={this.state.isMenuBarCloseClicked}
          isExpanded={this.state.isExpanded}
          sections={this.state.sections}
          collapse={this.onClickOutsideHandler}
        />
        <ProfileProvider value={{
          isAgeLoading: this.state.isAgeLoading,
          getCurrentAges: this.state.getCurrentAges
        }}>
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
            isTopBtnShown={this.state.isTopBtnShown}
          />
        </ProfileProvider>
        <Footer />
      </React.Fragment>
    )
  }
}

export default MyResumeApp
