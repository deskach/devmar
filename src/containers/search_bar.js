import React from "react";
import {connect} from "react-redux";
import {doFetchContent, doFilterComicsByCharacter, doFilterComicsBySeries} from "../actions/index";
import domainConstants from "../domain/constants";

class SearchBar extends React.Component {
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
    switch (this.props.filterBy) {
      case domainConstants.FILTER_TYPES.COMICS_BY_CHARACTER:
        console.log('Do filtering by character');
        this.props.doFilterComicsByCharacter(this.state.term, this.props.location.query);
        break;
      case domainConstants.FILTER_TYPES.COMICS_BY_SERIES:
        console.log('Do filtering by series');
        this.props.doFilterComicsBySeries(this.state.term, this.props.location.query);
        break;
      default:
        console.log('No Filtering criteria');
    }

    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Input search string"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  static mapStateToProps({filterBy, location}) {
    return {filterBy, location};
  }
}

export default connect(SearchBar.mapStateToProps,
  {doFetchContent, doFilterComicsByCharacter, doFilterComicsBySeries}
)(SearchBar);

