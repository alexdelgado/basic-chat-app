import React from 'react'
import { shallow } from 'enzyme'
import { Chats } from './Chats'

import Conversation from '../../models/Conversation'

describe('Chats', () => {

  let component

  const conversation = new Conversation({
    id: 1,
    subject: 'Agent ' + Math.floor((Math.random() * 10) + 1)
  })

  const mockSelectConversation = jest.fn()
  const mockDeleteConversation = jest.fn()

  beforeEach(() => {
    component = shallow(<Chats selectConversation={mockSelectConversation} deleteConversation={mockDeleteConversation} />)
  })

  it('should render properly', () => {
    expect(component.find('.chat').length).toBe(0)
  })

  it('should render children', () => {
    component.instance().setState({
      conversations: [conversation]
    })

    expect(component.find('.chat').length).toBe(1)
    expect(component.find('.chat__subject').text()).toBe(conversation.subject)
  })

  it('should call handleSelect and selectConversation', () => {
    const handleSelectSpy = jest.spyOn(component.instance(), 'handleSelect')

    component.instance().setState({
      conversations: [conversation]
    })

    component.find('.chat').simulate('click')

    expect(handleSelectSpy).toBeCalled()
    expect(mockSelectConversation).toHaveBeenCalled()
  })

  it('should dispatch the deleteConvesation action', () => {
    component.instance().setState({
      conversations: [conversation]
    })

    window.confirm = jest.fn().mockImplementation(() => true)

    component.find('button').simulate('click', { stopPropagation: () => {} })

    expect(mockDeleteConversation).toHaveBeenCalled()
  })
})
