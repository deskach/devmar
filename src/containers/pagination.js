import React from "react";
import {connect} from "react-redux";

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
    const query = this.props.location.query;
    const offset = (query && query.hasOwnProperty('offset')) ? parseInt(query.offset) : 0;
    const pathname = this.props.location.pathname;

    if (offset >= 20 && event.target.id === btnBackwardId) {
      this.context.router.push(`${this.props.location.pathname}?offset=${offset - 20}`);
    } else if (event.target.id === btnForwardId) {
      this.context.router.push(`${this.props.location.pathname}?offset=${offset + 20}`);
    }
    else {
      this.context.router.push(this.props.location.pathname);
    }
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