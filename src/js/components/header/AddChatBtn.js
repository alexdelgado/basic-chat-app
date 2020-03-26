import React from 'react'
import { connect } from 'react-redux'

import { newConverstation } from '../../actions'

function mapDispatchToProps(dispatch) {
  return {
    newConverstation: (request) => {
      return dispatch(newConverstation(request))
    },
  }
}

export class AddChatBtn extends React.Component {

  handleClick = (event) => {
    this.props.newConverstation()
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.label}</button>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddChatBtn)
