import React from 'react'

import History from '../history/History'
import Conversation from '../conversation/Conversation'

function Main() {
  return (
    <main className="chat__main">
      <History />
      <Conversation />
    </main>
  )
}

export default Main
