import React from 'react';
import ReactDOM from 'react-dom';
import Chats from './Chats';

it('renders properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chats />, div);
});
