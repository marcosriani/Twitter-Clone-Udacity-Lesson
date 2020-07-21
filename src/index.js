import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';

// Import middleware
import middleware from './middleware';

// Import the reducers
import reducer from './reducers';

// used to create the store
import { createStore } from 'redux';
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
