import React from "react";
import {connect} from "react-redux";
import {createSearchStringFromArgs} from "../domain/utils";

const btnBackwardId = 'btnBackward';
const btnForwardId = 'btnForward';

class Pagination extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id != btnBackwardId && event.target.id != btnForwardId) {
      throw `incorrect button id ${event.target.id}`;
    }

    var query = this.props.location.query;
    var offset = (query && query.hasOwnProperty('offset')) ? parseInt(query.offset) : 0;
    const limit = (query && query.hasOwnProperty('limit')) ? parseInt(query.limit) : 20;

    if (event.target.id === btnBackwardId) {
      if (offset >= limit) {
        offset -= limit;
      }
    } else {
      offset += limit;
    }
    query.offset = offset;

    const search = createSearchStringFromArgs(query);

    this.context.router.push(`${this.props.location.pathname}?${search}`);
  }

  render() {
    return (
      <div>
        <button id={btnBackwardId}
                className="btn btn-info pull-xs-left margin-bottom-1"
                onClick={this.handleClick}
        >Backward
        </button>
        <button id={btnForwardId}
                className="btn btn-info pull-xs-right margin-bottom-1"
                onClick={this.handleClick}
        >Forward
        </button>
      </div>
    )
  }

  static mapState2Props({location}) {
    return {location};
  }
}

export default connect(Pagination.mapState2Props)(Pagination);