import React from 'react'

import AddChatBtn from './AddChatBtn'

import './Header.css'

function Header(props) {
  return (
    <header className="chat__header header">
      <h1>{props.title}</h1>
      <AddChatBtn label="Add chat" />
    </header>
  )
}

export default Header
