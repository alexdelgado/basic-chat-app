import React from 'react';

import AddChatBtn from './AddChatBtn'

function Header(props) {
  return (
    <header className="chat__header">
      <h1>{props.title}</h1>
      <AddChatBtn label="Add chat" />
    </header>
  );
}

export default Header;
