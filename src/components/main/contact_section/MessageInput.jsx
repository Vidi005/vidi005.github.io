import React from 'react'
import Swal from 'sweetalert2'

class MessageInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      isFocused: false
    }
    this.formRef = React.createRef()

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this)
    this.onMessageChangeEventHandler = this.onMessageChangeEventHandler.bind(this)
    this.onBlurHandler = this.onBlurHandler.bind(this)
    this.onFocusHandler = this.onFocusHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onNameChangeEventHandler (event) {
    if (event.target.value.length <= 50) {
      this.setState(prevState => {
        return {
          ...prevState,
          name: event.target.value
        }
      })
    }
  }

  onEmailChangeEventHandler (event) {
    if (event.target.value.length <= 50) {
      this.setState(prevState => {
        return {
          ...prevState,
          email: event.target.value
        }
      })
    }
  }

  onMessageChangeEventHandler (event) {
    if (event.target.value.length <= 500) {
      this.setState(prevState => {
        return {
          ...prevState,
          message: event.target.value
        }
      })
    }
  }

  onBlurHandler () {
    this.setState({ isFocused: false })
  }

  onFocusHandler () {
    this.setState({ isFocused: true })
  }

  onSubmitEventHandler (event) {
    event.preventDefault()
    const scriptUrl = `${import.meta.env.REACT_APP_MAILING_LIST_API_KEY}`
    Swal.fire({
      title: 'Sending message...',
      allowOutsideClick: false
    }).then(Swal.showLoading())
    fetch(scriptUrl, { method: 'POST', body: new FormData(this.formRef.current) })
      .then(response => {
        Swal.close()
        Swal.fire('Message Sent!', `${response.statusText}`, 'success')
        this.setState(prevState => {
          return {
            ...prevState,
            name: '',
            email: '',
            message: ''
          }
        })
      })
      .catch(error => {
        Swal.close()
        Swal.fire('Send Failed!', `${error.message}`, 'error')
      })
  }

  render () {
    let nameCharLimit = ''
    let emailCharLimit = ''
    let msgCharLimit = ''
    if (this.state.name.length >= 50) {
      nameCharLimit = 'Maximum Name character exceeded!'
    } else {
      nameCharLimit = `Character remaining: ${50 - this.state.name.length}`
    }
    if (this.state.email.length >= 50) {
      emailCharLimit = 'Maximum E-mail character exceeded!'
    } else {
      emailCharLimit = `Character remaining: ${50 - this.state.email.length}`
    }
    if (!this.state.email.includes('@') && this.state.email !== '') {
      emailCharLimit = 'E-mail isn\'t valid!'
    }
    if (this.state.message.length >= 500) {
      msgCharLimit = 'Maximum Message character exceeded!'
    } else {
      msgCharLimit = `Character remaining: ${500 - this.state.message.length}`
    }

    return (
      <section className="message-input tablet:max-w-xl tablet:mx-auto border border-blue-900 rounded-lg m-4 p-4 bg-gray-100 phone:m-2 phone:mt-4 phone:max-w-full">
        <h3 className="mb-2">Message Me</h3>
        <form name="submit-to-google-sheet" method="post" ref={this.formRef} onSubmit={this.onSubmitEventHandler}>
          <strong>Name:</strong>
          <br/>
          <input
            className="input-name w-full p-1 border border-blue-500 rounded-lg"
            name="Name"
            type="text"
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}
            required
          />
          <br/>
          {
            this.state.isFocused
              ? (
                  this.state.name.length === 50
                    ? (
                      <label className="text-justify text-sm text-red-600" htmlFor="input-name">{nameCharLimit}</label>
                      )
                    : (
                      <label className="text-justify text-sm text-gray-500" htmlFor="input-name">{nameCharLimit}</label>
                      )
                )
              : null
          }
          <br/>
          <strong>E-mail:</strong>
          <br/>
          <input
            className="input-email w-full p-1 border border-blue-500 rounded-lg"
            name="E-mail"
            type="email"
            placeholder="Enter your e-mail..."
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}
            required
          />
          <br/>
          {
            this.state.isFocused
              ? (
                  this.state.email.length === 50 || (!this.state.email.includes('@') && this.state.email !== '')
                    ? (
                      <label className="text-justify text-sm text-red-600" htmlFor="input-email">{emailCharLimit}</label>
                      )
                    : (
                      <label className="text-justify text-sm text-gray-500" htmlFor="input-email">{emailCharLimit}</label>
                      )
                )
              : null
          }
          <br/>
          <strong>Message:</strong>
          <br/>
          <textarea
            className="input-msg w-full p-1 border border-blue-500 rounded-lg h-40 text-justify"
            name="Messages"
            placeholder="Write your message here..."
            value={this.state.message}
            onChange={this.onMessageChangeEventHandler}
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}
            required>
          </textarea>
          <br/>
          {
            this.state.isFocused
              ? (
                  <React.Fragment>
                    {
                      this.state.message.length === 500
                        ? (
                          <label className="text-justify text-sm text-red-600" htmlFor="input-msg">{msgCharLimit}</label>
                          )
                        : (
                          <label className="text-justify text-sm text-gray-500" htmlFor="input-msg">{msgCharLimit}</label>
                          )
                      }
                      <br/>
                      <span className="text-orange-600 text-sm text-justify"><strong>Warning: </strong>Message which contains any spam, abusive, or promotion words won&apos;t be saved in my database and delivered to my e-mail, even if your message has been sent successfully!</span>
                  </React.Fragment>
                )
              : null
          }
          <br/>
          <button
            className="relative group w-full mt-4 p-0.5 duration-200 rounded-lg shadow-md overflow-hidden"
            type="submit">
              <div className="absolute inset-0 w-full h-full border border-blue-800 bg-blue-800 duration-500 translate-y-full group-hover:translate-y-0"></div>
              <p className="relative w-full p-1 border border-blue-700 bg-blue-700 hover:bg-white active:bg-blue-100 text-white hover:text-blue-700 active:text-blue-900 rounded-md">Send Message</p>
          </button>
        </form>
      </section>
    )
  }
}

export default MessageInput
