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
    const scriptUrl = `${process.env.REACT_APP_MAILING_LIST_API_KEY}`
    Swal.fire({
      title: 'Sending message...',
      allowOutsideClick: false
    }).then(Swal.showLoading())
    fetch(scriptUrl, { method: 'POST', body: new FormData(this.formRef.current) })
      .then(response => {
        Swal.close()
        Swal.fire('Message Sent!', `${response.statusText}`, 'success')
      })
      .catch(error => Swal.fire('Send Failed!', `${error.message}`, 'error'))
  }

  render () {
    let nameCharLimit = ''
    let emailCharLimit = ''
    let msgCharLimit = ''
    if (this.state.name.length >= 50) {
      nameCharLimit = 'Name is too long'
    } else {
      nameCharLimit = `Character remaining: ${50 - this.state.name.length}`
    }
    if (this.state.email.length >= 50) {
      emailCharLimit = 'E-mail is too long'
    } else {
      emailCharLimit = `Character remaining: ${50 - this.state.email.length}`
    }
    if (!this.state.email.includes('@') && this.state.email !== '') {
      emailCharLimit = 'E-mail isn\'t valid!'
    }
    if (this.state.message.length >= 500) {
      msgCharLimit = 'Message is too long'
    } else {
      msgCharLimit = `Character remaining: ${500 - this.state.message.length}`
    }

    return (
      <div className="message-input tablet:max-w-xl tablet:mx-auto border border-blue-900 rounded-lg m-4 p-4 bg-gray-100 phone:m-2 phone:mt-4 phone:max-w-full">
        <h3>Message Me:</h3>
        <form name="submit-to-google-sheet" method="post" ref={this.formRef} onSubmit={this.onSubmitEventHandler}>
          <input
            className="input-name w-full p-1 border border-blue-500 rounded-lg mt-2 mb-1"
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
          <input
            className="input-email w-full p-1 border border-blue-500 rounded-lg mt-2 mb-1"
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
          <textarea
            className="input-msg w-full p-1 border border-blue-500 rounded-lg mt-2 h-40 text-justify"
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
                  this.state.message.length === 500
                    ? (
                      <label className="text-justify text-sm text-red-600" htmlFor="input-msg">{msgCharLimit}</label>
                      )
                    : (
                      <label className="text-justify text-sm text-gray-500" htmlFor="input-msg">{msgCharLimit}</label>
                      )
                )
              : null
          }
          <br/>
          <button
            className="w-full mt-4 p-2 border border-blue-700 bg-blue-700 hover:bg-blue-900 active:bg-blue-100 text-white active:text-black rounded-lg shadow-md"
            type="submit">Send Message
          </button>
        </form>
      </div>
    )
  }
}

export default MessageInput
