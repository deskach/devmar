import React from "react";
import {connect} from "react-redux";
import CharacterList from "../containers/character_list";
import {doSaveLocation, doFetchContent} from "../actions/index";
import actionConstants from "../actions/constants";
import Pagination from "../containers/pagination";

// import SearchBar from '../containers/search_bar';
// import actionConstants from '../actions/constants';

class Characters extends React.Component {
  componentWillMount() {
    this.props.doSaveLocation(this.props.location);
  }

  componentDidUpdate() {
    this.props.doSaveLocation(this.props.location);
    this.props.doFetchContent(actionConstants.CONTENT_TYPE.CHARACTERS, this.props.location.query);
  }

  render() {
    return (
      <div>
        {/*<SearchBar contentType={ actionConstants.CONTENT_TYPE.CHARACTERS } />*/}
        <CharacterList />
        <Pagination/>
      </div>
    );
  }
}

export default connect(null, {doSaveLocation, doFetchContent})(Characters);