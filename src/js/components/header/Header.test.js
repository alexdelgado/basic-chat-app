import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AddChatBtn from './AddChatBtn'

it('renders properly', () => {
  const title = "An awesome chat app"
  const component = mount(<Header title={title} />)

  // displays h1 text
  expect(component.find('h1').text()).toEqual(title)

  // displays btn
  expect(component.find(AddChatBtn).length).toEqual(1)
});
