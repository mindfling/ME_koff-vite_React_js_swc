import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import 'modern-normalize';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.js';


const rootSelector = '#root';
const rootElement = document.querySelector(rootSelector);
rootElement.classList.add('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
