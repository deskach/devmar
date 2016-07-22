import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../containers/search_bar';
import ComicsList from '../containers/comics_list';
import actionConstants from '../actions/constants';
import componentConstants from './constants';
import {doFilterBy} from '../actions/index';

class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: componentConstants.FILTER_TYPES.ALL
    };
  }

  onFilterChange(event) {
    console.log('Comics.onFilterChange');
    this.props.doFilterBy(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="col-xs-2">
          <select className="input-group" onChange={this.onFilterChange.bind(this)} >
            <option value={componentConstants.FILTER_TYPES.ALL}>Show All</option>
            <option value={componentConstants.FILTER_TYPES.BY_CHARACTER}>Filter by Character</option>
            <option value={componentConstants.FILTER_TYPES.BY_SERIES}>Filter by Series</option>
          </select>
        </div>
        <div className="col-xs-10 pull-xs-right">
          <SearchBar contentType={ actionConstants.CONTENT_TYPE.COMICS } filterBy = { this.state.filterBy } />
        </div>
        <ComicsList />
      </div>
    );
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({doFilterBy}, dispatch);
  }
}

export default connect(null, Comics.mapDispatchToProps)(Comics);
