// src/js/models/Message.js

export default class Conversation {

  id
  subject
  messages

  constructor(data) {
    this.id = data.id
    this.subject = data.subject
    this.messages = data.messages || []
  }

  addUserMessage(message) {
    message.id = this.messages.length + 1;
    this.messages.push(message)
  }

  addAgentMessage(message) {
    this.messages.push({
      id: this.messages.length + 1,
      message: message,
      timestamp: new Date(),
      user: 'agent'
    })
  }
}
