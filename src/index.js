import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Comics from './components/comics';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//^if the payload is a promise redux_promise will wait for the response and put it in place (see doFetchContent action)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Comics />
  </Provider>
  , document.querySelector('.container'));
