import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import getDateApp from './reducers';
import App from './components/App';

let store = createStore(getDateApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);