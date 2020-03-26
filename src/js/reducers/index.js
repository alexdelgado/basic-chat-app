// src/js/reducers/index.js

import * as constants from '../constants'
import Conversation from '../models/Conversation'

const initialState = {
  conversations: [],
  currentConversationId: null
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHAT_NEW_CONVERSATION:
      const conversation = new Conversation({
        id: state.conversations.length + 1,
        subject: 'Agent ' + Math.floor((Math.random() * 10) + 1)
      })
      conversation.addAgentMessage(constants.CHAT_WELCOME_MESSAGE)

      state.conversations.push(conversation)

      return Object.assign({}, state, {
        conversations: state.conversations,
        currentConversationId: conversation.id
      })

    case constants.CHAT_SELECT_CONVERSATION:
      return Object.assign({}, state, {
        currentConversationId: action.payload.conversationId
      })

    case constants.CHAT_DELETE_CONVERSATION:
      return Object.assign({}, state, {
        conversations: state.conversations.filter((conversation) => conversation.id !== action.payload.conversationId)
      })

    case constants.CHAT_ADD_MESSAGE:
      const idx = state.conversations.findIndex((c) => c.id === state.currentConversationId)

      if (idx >= 0) {
        const conversations = state.conversations
        conversations[idx] = new Conversation(conversations[idx])
        conversations[idx].addUserMessage(action.payload)
        conversations[idx].addAgentMessage('You said: ' + action.payload.message)

        return Object.assign({}, state, {
          conversations
        })
      }
      break

    default:
      return state
  }
}

export default rootReducer
