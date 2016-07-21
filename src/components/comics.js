import React from 'react';

import SearchBar from '../containers/search_bar';
import ComicsList from '../containers/comics_list';
import actionConstants from '../actions/constants';

export default class Comics extends React.Component {
  static FILTER_TYPES = {
    ALL: 'ALL',
    BY_CHARACTER: 'BY_CHARACTER',
    BY_SERIES: 'BY_SERIES'
  };

  constructor(props) {
    super(props);

    this.state = {
      filterBy: Comics.FILTER_TYPES.ALL
    };
  }

  onFilterChange(event) {
    this.setState({filterBy: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="col-xs-2">
          <select className="input-group" onChange={this.onFilterChange.bind(this)} >
            <option value={Comics.FILTER_TYPES.ALL}>Show All</option>
            <option value={Comics.FILTER_TYPES.BY_CHARACTER}>Filter by Character</option>
            <option value={Comics.FILTER_TYPES.BY_SERIES}>Filter by Series</option>
          </select>
        </div>
        <div className="col-xs-10 pull-xs-right">
          <SearchBar contentType={ actionConstants.CONTENT_TYPE.COMICS } />
        </div>
        <ComicsList />
      </div>
    );
  }
}
