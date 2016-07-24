import React from "react";
import {connect} from "react-redux";
import {doFetchContent} from "../actions/index";
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
        break;
      case domainConstants.FILTER_TYPES.COMICS_BY_SERIES:
        console.log('Do filtering by series');
        break;
      default:
        console.log('No Filtering');
    }
    // this.props.doFetchContent(this.props.contentType, this.state.term, this.props.filterBy);
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

  static mapStateToProps({filterBy}) {
    return {filterBy};
  }
}

export default connect(SearchBar.mapStateToProps, {doFetchContent})(SearchBar);
