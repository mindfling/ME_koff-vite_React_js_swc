import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import 'modern-normalize';
import './index.scss';

const rootSelector = '#root';
const rootElement = document.querySelector(rootSelector);
rootElement.classList.add('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
);
