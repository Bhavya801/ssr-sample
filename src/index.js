import React from 'react';
import ReactDOM from 'react-dom/server';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
