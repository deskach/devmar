import React from "react";
import {connect} from "react-redux";
import SearchBar from "../containers/search_bar";
import ComicsList from "../containers/comics_list";
import actionConstants from "../actions/constants";
import domainConstants from "../domain/constants";
import {doFilterBy, doSaveLocation, doFetchContent} from "../actions/index";
import Pagination from "../containers/pagination";


class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: domainConstants.FILTER_TYPES.ALL
    };
  }

  componentWillMount() {
    this.props.doSaveLocation(this.props.location);
  }

  componentDidUpdate() {
    this.props.doSaveLocation(this.props.location);
    this.props.doFetchContent(actionConstants.CONTENT_TYPE.COMICS, this.props.location.query);
  }

  onFilterChange(event) {
    this.props.doFilterBy(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-3">
            <select className="input-group form-control" onChange={this.onFilterChange.bind(this)}>
              <option value={domainConstants.FILTER_TYPES.ALL}>No Filtering</option>
              <option value={domainConstants.FILTER_TYPES.COMICS_BY_CHARACTER}>Filter by Character</option>
              <option value={domainConstants.FILTER_TYPES.COMICS_BY_SERIES}>Filter by Series</option>
            </select>
          </div>
          <SearchBar contentType={ actionConstants.CONTENT_TYPE.COMICS } filterBy={ this.state.filterBy }/>
        </div>
        <ComicsList />
        <Pagination />
      </div>
    );
  }
}

export default connect(null, {doFilterBy, doSaveLocation, doFetchContent})(Comics);
