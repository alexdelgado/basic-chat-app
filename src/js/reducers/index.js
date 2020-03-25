// src/js/reducers/index.js

import * as constants from '../constants'
import Conversation from '../models/Conversation'

const initialState = {
  conversations: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHAT_NEW_CONVERSATION:
      const conversation = new Conversation({
        id: state.conversations.length + 1
      })
      conversation.addAgentMessage(constants.CHAT_WELCOME_MESSAGE)

      return Object.assign({}, state, {
        conversations: state.conversations.push(conversation)
      })
    default:
      return state
  }
}

export default rootReducer;
