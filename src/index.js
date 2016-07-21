import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//^if the payload is a promise redux_promise will wait for the response and put it in place (see doFetchContent action)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
