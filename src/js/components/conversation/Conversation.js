import React from 'react'
import { connect } from 'react-redux'

import { addMessage } from '../../actions'
import { CHAT_INPUT_PLACEHOLDER } from '../../constants'

import './Conversation.css'

function mapStateToProps(state) {
  const conversation = state.conversations.filter((conversation) => conversation.id === state.currentConversationId)
  return { messages: ( conversation && conversation[0] ? conversation[0].messages : [] ) }
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (request) => {
      return dispatch(addMessage(request))
    }
  }
}

export class Conversation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidUpdate() {
    const $message = document.querySelector('.message:last-child')

    if ($message) {
      $message.scrollIntoView()
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addMessage({
      message: this.state.value,
      timestamp: new Date(),
      user: 'guest'
    })

    this.setState({ value: '' })
  }

  handleInput(event) {
    this.setState({value: event.target.value})
  }

  renderMessages(messages) {
    return (
      messages.map((message) => (
        <div className={"message message--" + message.user} key={message.id}>
          <div className="message__container">
            <div className="message__timestamp">{message.timestamp.toLocaleString()}</div>
            <div className="message__message">{message.message}</div>
          </div>
        </div>
      ))
    )
  }

  render() {
    if (this.props.messages.length) {
      return (
        <div className="conversation">
          <div className="conversation__body" >
            {this.renderMessages(this.props.messages)}
          </div>
          <form className="conversation__form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} className="conversation__input" placeholder={CHAT_INPUT_PLACEHOLDER} onChange={this.handleInput.bind(this)} />
          </form>
        </div>
      )
    } else {
      return (
        <div className="conversation"></div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)
