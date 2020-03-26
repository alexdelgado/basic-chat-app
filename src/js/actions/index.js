// src/js/actions/index.js

import * as constants from '../constants'

// Converstions
export function newConverstation(payload) {
  return {
    type: constants.CHAT_NEW_CONVERSATION,
    payload
  }
}

export function selectConversation(payload) {
  return {
    type: constants.CHAT_SELECT_CONVERSATION,
    payload
  }
}

export function deleteConversation(payload) {
  return {
    type: constants.CHAT_DELETE_CONVERSATION,
    payload
  }
}

// Chat
export function addMessage(payload) {
  return {
    type: constants.CHAT_ADD_MESSAGE,
    payload
  }
}
