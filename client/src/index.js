import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './config/store'
import App from './components/App';
import './components/App.css'

ReactDOM.render
(<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));