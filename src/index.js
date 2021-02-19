import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/Home';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/combineReducers';
import reduxThunk from 'redux-thunk';

import './style/index.css';
import './style/home.css'
import './style/sidebarStyle.css'
import './style/numberAnimate.scss';
import './style/titleStyle.css';
import './style/buttonStyle.scss';
import './i18n';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
