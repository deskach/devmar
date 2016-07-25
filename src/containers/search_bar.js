import React from "react";
import {connect} from "react-redux";
import {
  doFetchContent,
  doFilterComicsByCharacter,
  doFilterComicsBySeries
} from "../actions/index";
import domainConstants from "../domain/constants";
import {createSearchStringFromArgs} from "../domain/utils";

class SearchBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    var newQuery = {};

    switch (this.props.filterBy) {
      case domainConstants.FILTER_TYPES.COMICS_BY_CHARACTER:
        console.log('Do filtering by character');
        newQuery[domainConstants.URL_SEARCH_COMICS_BY_CHARACTER] = this.state.term;

        break;
      case domainConstants.FILTER_TYPES.COMICS_BY_SERIES:
        console.log('Do filtering by series');
        newQuery[domainConstants.URL_SEARCH_COMICS_BY_SERIES] = this.state.term;
        break;
      default:
        console.log('No Filtering criteria');
    }

    var search = createSearchStringFromArgs(newQuery);
    this.context.router.push(`${this.props.location.pathname}?${search}`);
  }

  render() {
    return (
      <div className="col-xs-9">
        <form onSubmit={this.onFormSubmit} className="input-group col-xs-12">
          <div className="col-xs-10">
            <input
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Input search string"/>
          </div>
          <button type="submit" className="btn btn-primary col-xs-2">
            Submit
          </button>
        </form>
      </div>
    );
  }

  static mapStateToProps({filterBy, location}) {
    return {filterBy, location};
  }
}

export default connect(SearchBar.mapStateToProps,
  {doFetchContent, doFilterComicsByCharacter, doFilterComicsBySeries}
)(SearchBar);

