import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Comics from './components/comics';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Comics}/>
    <Route path="comics" component={Comics} />
  </Route>
);
