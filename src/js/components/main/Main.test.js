import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

it('renders properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
