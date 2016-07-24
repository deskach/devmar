import React, {Component} from "react";
import {Link} from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/comics" className="active">Comics</Link></li>
            <li><Link to="/characters">Characters</Link></li>
          </ul>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>

      // <div>
      //     <div className="margin-bottom-1">
      //       <Link to="/comics" className="btn btn-primary filtering-button">Comics</Link>
      //       <Link to="/characters" className="btn btn-primary filtering-button">Characters</Link>
      //     </div>
      //     {this.props.children}
      //   </div>
    );
  }
}
