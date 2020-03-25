import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {

  let component;

  const title = 'An awesome chat app'
  const btn = { label: 'Add chat' }

  beforeEach(() => {
    component = shallow(<Header title={title} btn={btn} />)
  })

  it('should render properly', () => {
    expect(component.find('h1').text()).toBe(title)
    expect(component.find('Connect(AddChatBtn)')).toHaveLength(1)
  })
})
