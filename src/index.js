import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SurveyrRducer from './containers/Store/survey';
import ResultReducer from './containers/Store/results';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  survey: SurveyrRducer,
  results: ResultReducer,
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))); 

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  app,    
  document.getElementById('root')
);
