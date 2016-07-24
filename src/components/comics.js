import React from "react";
import {connect} from "react-redux";
import SearchBar from "../containers/search_bar";
import ComicsList from "../containers/comics_list";
import actionConstants from "../actions/constants";
import domainConstants from "../domain/constants";
import {doFilterBy, doSetQueryParams} from "../actions/index";

class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: domainConstants.FILTER_TYPES.ALL
    };
  }

  componentWillMount() {
    this.props.doSetQueryParams(this.props.location.query);
  }

  onFilterChange(event) {
    this.props.doFilterBy(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="col-xs-2">
          <select className="input-group" onChange={this.onFilterChange.bind(this)} >
            <option value={domainConstants.FILTER_TYPES.ALL}>Show All</option>
            <option value={domainConstants.FILTER_TYPES.BY_CHARACTER}>Filter by Character</option>
            <option value={domainConstants.FILTER_TYPES.BY_SERIES}>Filter by Series</option>
          </select>
        </div>
        <div className="col-xs-10 pull-xs-right">
          <SearchBar contentType={ actionConstants.CONTENT_TYPE.COMICS } filterBy = { this.state.filterBy } />
        </div>
        <ComicsList />
      </div>
    );
  }
}

export default connect(null, {doFilterBy, doSetQueryParams})(Comics);
