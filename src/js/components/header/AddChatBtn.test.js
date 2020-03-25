import React from 'react'
import { shallow } from 'enzyme'
import { AddChatBtn } from './AddChatBtn'

describe('Add Chat button', () => {

  let component

  const label = 'Add chat'
  const mockNewConverstation = jest.fn()

  beforeEach(() => {
    component = shallow(<AddChatBtn label={label} newConverstation={mockNewConverstation} />)
  })

  it('should render properly', () => {
    expect(component.text()).toBe(label)
  })

  it('should dispatch the newConversation action', () => {
    component.find('button').simulate('click')
    expect(mockNewConverstation.mock.calls.length).toBe(1)
   })
})
