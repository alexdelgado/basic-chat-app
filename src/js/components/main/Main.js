import React from 'react'

import Chats from '../chats/Chats'
import Chat from '../chat/Chat'

import './Main.css'

function Main() {
  return (
    <main className="main">
      <Chats />
      <Chat />
    </main>
  )
}

export default Main
