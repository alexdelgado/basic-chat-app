import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './js/store';
import Header from './js/components/header/Header';
import Main from './js/components/main/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div className="chat">
      <Header title="An awesome chat app" />
      <Main />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
