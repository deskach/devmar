import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/comics" className="btn btn-primary filtering-button">Comics</Link>
        <Link to="/characters" className="btn btn-primary filtering-button">Characters</Link>
        {this.props.children}
      </div>
    );
  }
}
