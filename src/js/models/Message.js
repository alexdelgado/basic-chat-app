// src/js/models/Message.js

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
