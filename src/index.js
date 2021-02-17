import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/Home';
import './style/index.css';
import './style/home.css'
import './style/numberAnimate.scss';
import './style/titleStyle.css';
import './style/buttonStyle.scss';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
