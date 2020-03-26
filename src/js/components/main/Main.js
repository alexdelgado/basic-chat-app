import React from 'react'

import Chats from '../chats/Chats'
import Conversation from '../conversation/Conversation'

import './Main.css'

function Main() {
  return (
    <main className="main">
      <Chats />
      <Conversation />
    </main>
  )
}

export default Main
