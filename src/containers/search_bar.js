import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {doFetchContent} from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentType: props.contentType,
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

    //console.log("FILTERING BY " + this.props.filterBy);

    this.props.doFetchContent(this.state.contentType, this.state.term, this.props.filterBy);
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

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({doFetchContent}, dispatch);
  }

  static mapStateToProps(state) {
    return {
      filterBy: state.filterBy
    };
  }
}

export default connect(SearchBar.mapStateToProps, SearchBar.mapDispatchToProps)(SearchBar);
