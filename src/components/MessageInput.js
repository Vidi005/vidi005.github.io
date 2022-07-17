import React from 'react'
import Swal from 'sweetalert2'

class MessageInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      name: '',
      email: '',
      message: ''
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this)
    this.onMessageChangeEventHandler = this.onMessageChangeEventHandler.bind(this)
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

  onSubmitEventHandler (event) {
    event.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        date: new Date().toISOString()
      }
    })
    const scriptUrl = `${process.env.REACT_APP_MAILING_LIST_API_KEY}`
    const form = document.forms['submit-to-google-sheet']
    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
      .then(response => Swal.fire('Message Sent!', `${response.statusText}`, 'success'))
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
    // if (!this.state.email.match('@')) {
    //   emailCharLimit = 'E-mail isn\'t valid!'
    // }
    if (this.state.message.length >= 500) {
      msgCharLimit = 'Message is too long'
    } else {
      msgCharLimit = `Character remaining: ${500 - this.state.message.length}`
    }

    return (
      <div className="message-input tablet:max-w-xl tablet:mx-auto border border-blue-900 rounded-lg m-4 p-4 bg-gray-100 phone:m-2 phone:mt-4 phone:max-w-full">
        <h3>Message Me:</h3>
        <form name="submit-to-google-sheet" onSubmit={this.onSubmitEventHandler}>
          <input
            className="input-name w-full p-1 border border-blue-500 rounded-lg mt-2 mb-1"
            type="text"
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
            required
          />
          <br/>
          <label className="text-justify text-gray-500" htmlFor="input-name">{nameCharLimit}</label>
          <br/>
          <input
            className="input-email w-full p-1 border border-blue-500 rounded-lg mt-2 mb-1"
            type="text"
            placeholder="Enter your e-mail..."
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
            required
          />
          <br/>
          <label className="text-justify text-gray-500" htmlFor="input-email">{emailCharLimit}</label>
          <br/>
          <textarea
            className="input-msg w-full p-1 border border-blue-500 rounded-lg mt-2 h-40 text-justify"
            placeholder="Write your message here..."
            value={this.state.message}
            onChange={this.onMessageChangeEventHandler}
            required>
          </textarea>
          <br/>
          <label className="text-justify text-gray-500" htmlFor="input-msg">{msgCharLimit}</label>
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
