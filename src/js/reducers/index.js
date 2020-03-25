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

    default:
      return state
  }
}

export default rootReducer;
