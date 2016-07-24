import React, {Component} from "react";
import {Link} from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="margin-bottom-1">
          <Link to="/comics" className="btn btn-primary filtering-button">Comics</Link>
          <Link to="/characters" className="btn btn-primary filtering-button">Characters</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
