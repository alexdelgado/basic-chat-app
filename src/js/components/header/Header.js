import React from 'react'

import AddChatBtn from './AddChatBtn'

import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <AddChatBtn label={this.props.btn.label} />
      </header>
    )
  }
}
