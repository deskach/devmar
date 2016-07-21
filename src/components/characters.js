import React from 'react';

import SearchBar from '../containers/search_bar';
import CharacterList from '../containers/character_list';
import actionConstants from '../actions/constants';

export default class Characters extends React.Component {
  render() {
    return (
      <div>
        <SearchBar contentType={ actionConstants.CONTENT_TYPE.CHARACTERS } />
        <CharacterList />
      </div>
    );
  }
}
