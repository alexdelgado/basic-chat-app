import React from 'react';
import { mount } from 'enzyme';
import AddChatBtn from './AddChatBtn';

it('renders properly', () => {
  const label = "Add chat"
  const component = mount(<AddChatBtn label={label} />)

  expect(component.find('button').text()).toEqual(label)
});
