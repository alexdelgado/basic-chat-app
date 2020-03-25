import React from 'react'
import { connect } from 'react-redux'

import { selectConversation, deleteConversation } from '../../actions'
import { CHAT_CONFIRM_CLOSE } from '../../constants'
import store from '../../store'

import './Chats.css'

function mapDispatchToProps(dispatch) {
  return {
    selectConversation: (request) => {
      return dispatch(selectConversation(request))
    },
    deleteConversation: (request) => {
      return dispatch(deleteConversation(request))
    }
  }
}

export class Chats extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      conversations: [],
      currentConversationId: null
    }

    store.subscribe(() => {
      const state = store.getState()

      this.setState({
        conversations: state.conversations,
        currentConversationId: state.currentConversationId
      })
    })
  }

  handleSelect(conversationId) {
    if (conversationId !== this.state.currentConversationId) {
      this.props.selectConversation({ conversationId })
    }
  }

  handleClose(conversationId, e) {
    e.stopPropagation()

    if (window.confirm(CHAT_CONFIRM_CLOSE)) {
      this.props.deleteConversation({ conversationId })
    }
  }

  renderConversations(conversations) {
    return (
      conversations.map((conversation) => (
        <div className={"chat" + (conversation.id === this.state.currentConversationId ? ' chat--active' : '' )}
          onClick={this.handleSelect.bind(this, conversation.id)} key={conversation.id}>
          <div className="chat__subject">{conversation.subject}</div>
          <div><button className="chat__toggle" onClick={this.handleClose.bind(this, conversation.id)}>&times;</button></div>
        </div>
      ))
    )
  }

  render() {
    if (this.state.conversations.length) {
      return (
        <div className="chats">
          {this.renderConversations(this.state.conversations)}
        </div>
      )
    } else {
      return (
        <div className="chats"></div>
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(Chats)
