import React from 'react'
import { shallow } from 'enzyme'
import { Conversation } from './Conversation'

import Message from '../../models/Message'

describe('Conversation', () => {

  let component

  const message = new Message({
    id: 1,
    message: 'Welcome to the chat',
    timestamp: new Date(),
    user: 'guest'
  })

  const mockAddMessage = jest.fn()

  beforeEach(() => {
    component = shallow(<Conversation addMessage={mockAddMessage} messages={[]} />)
  })

  it('should render properly', () => {
    expect(component.find('.conversation__body').length).toBe(0)
    expect(component.find('.conversation__form').length).toBe(0)
  })

  it('should render children', () => {

    component.setProps({messages: [message]})

    expect(component.find('.conversation__body').length).toBe(1)
    expect(component.find('.conversation__body .message').length).toBe(1)
    expect(component.find('.conversation__form').length).toBe(1)
  })

  it('should call handleInput', () => {
    const handleInputSpy = jest.spyOn(component.instance(), 'handleInput')
    const value = 'Hello world'

    component.setProps({messages: [message]})

    component.find('.conversation__input').simulate('change', { target: { value  } })

    expect(handleInputSpy).toBeCalled()
    expect(component.state().value).toBe(value)
  })

  it('should call handleSubmit', () => {
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit')

    component.setProps({messages: [message]})

    component.find('.conversation__form').simulate('submit', { preventDefault: () => {} })

    expect(handleSubmitSpy).toBeCalled()
    expect(mockAddMessage).toBeCalled()
  })
})
