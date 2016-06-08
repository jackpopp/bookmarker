import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.jsx';
import Reducers from './reducers';

const store = createStore(Reducers);
const mount = document.querySelector('#app');

const render = () => {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    mount
  );
}

store.subscribe(render);
render();