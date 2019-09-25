import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchPokemons } from './redux/reducers/searchReducer';
import { requestPokemons } from './redux/reducers/fetchingPokemonsReducer';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchPokemons, requestPokemons });

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, logger),
    composeWithDevTools()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
