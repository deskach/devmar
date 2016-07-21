import React from 'react';

import SearchBar from '../containers/search_bar';
import ComicsList from '../containers/comics_list';
import actionConstants from '../actions/constants';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar contentType={ actionConstants.CONTENT_TYPE.COMICS } />
        <ComicsList />
      </div>
    );
  }
}
