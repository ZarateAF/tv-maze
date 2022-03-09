import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './routes/Navigation';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
