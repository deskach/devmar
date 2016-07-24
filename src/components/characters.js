import React from "react";
import {connect} from "react-redux";
import CharacterList from "../containers/character_list";
import {doSetQueryParams} from "../actions/index";
// import SearchBar from '../containers/search_bar';
// import actionConstants from '../actions/constants';

class Characters extends React.Component {
  componentWillMount() {
    this.props.doSetQueryParams(this.props.location.query);
  }

  render() {
    return (
      <div>
        {/*<SearchBar contentType={ actionConstants.CONTENT_TYPE.CHARACTERS } />*/}
        <CharacterList />
      </div>
    );
  }
}

export default connect(null, {doSetQueryParams})(Characters);