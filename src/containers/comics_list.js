import React, {Component} from 'react';
import {connect} from 'react-redux';

class ComicsList extends Component {
  constructor() {
    super();

    this.renderComics = this.renderComics.bind(this);
  }

  renderComics(comicsData) {
    const key = comicsData.id;
    const title = comicsData.title;
    const resourceURI = comicsData.resourceURI;

    return (
      <tr key={key}>
        <th scope="row">
          <span>{title}</span>
        </th>
        <td>
          <span>{resourceURI}</span>
        </td>
      </tr>
    )
  }

  render() {
    console.log("Creating list of comics from " + this.props.comics);

    var tbody = "";
    if (this.props.comics) {
      tbody = this.props.comics.data.results.map(this.renderComics);
    }

    return (
      <table className="table table-hover table-sm">
        <thead>
        <tr>
          <th>Title</th>
          <th>Format</th>
        </tr>
        </thead>
        <tbody>
        {tbody}
        </tbody>
      </table>
    );
  }

  static mapStateToProps({comics}) {
    return {comics};
  }
}

export default connect(ComicsList.mapStateToProps)(ComicsList);
