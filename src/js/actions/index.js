// src/js/actions/index.js

import { CHAT_NEW_CONVERSATION } from '../constants'

export function newConverstation(payload) {
  return {
    type: CHAT_NEW_CONVERSATION,
    payload
  }
}

