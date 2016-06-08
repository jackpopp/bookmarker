import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App.jsx';

const mount = document.querySelector('#app');

ReactDom.render(<App />, mount);