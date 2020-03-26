// src/js/models/Message.js

/**
 * Message
 *
 * @param int id Message ID
 * @param string message Actual message
 * @param datetime timestamp Timestamp of when the message was saved
 * @param string user "agent" if message came from bot, otherwise "guest"
 */
export default class Message {

  id
  message
  timestamp
  user

  constructor(data) {
    this.id = data.id
    this.message = data.message
    this.timestamp = data.timestamp
    this.user = data.user
  }
}
