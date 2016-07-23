import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Comics from './components/comics';
import Characters from './components/characters';
import {CharacterDetail} from "./components/character_detail";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Comics}/>
    <Route path="comics" component={Comics} />
    <Route path="characters" component={Characters} />
    <Route path="characters/:id" component={CharacterDetail} />
  </Route>
);
