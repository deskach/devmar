import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

export default class App extends Component {
  render() {
    const pathname = this.props.location ? this.props.location.pathname : "";

    return (
      <div>
        <div className="container">
          <div className="navbar navbar-default">
            <nav className="container-fluid">
              <ul className="nav navbar-nav">
                <li className={pathname == "/comics" ? "active" : ""}><Link to="/comics">Comics</Link></li>
                <li className={pathname == "/characters" ? "active" : ""}><Link to="/characters">Characters</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

  static mapStateToProps({location}) {
    return {location};
  }
}

export default connect(App.mapStateToProps)(App);
