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
    const series = comicsData.series.name;
    const characters = comicsData.characters.items.map(c => { return c.name + '; '; } );

    return (
      <tr key={key}>
        <th scope="row">
          <span>{title}</span>
        </th>
        <td>
          <span>{characters}</span>
        </td>
        <td>
          <span>{series}</span>
        </td>
      </tr>
    )
  }

  render() {
    console.log("Creating list of comics from " + this.props.comics);

    var tbody = "";
    if (this.props.comics) {
      console.log(this.props.comics);
      tbody = this.props.comics.data.results.map(this.renderComics);
      console.log('here');
    }

    return (
      <table className="table table-hover table-sm">
        <thead>
        <tr>
          <th>Title</th>
          <th>Characters</th>
          <th>Series</th>
        </tr>
        </thead>
        <tbody>
        {tbody}
        </tbody>
      </table>
    );
  }

  static mapStateToProps({content}) {
    return {comics: content.comics};
  }
}

export default connect(ComicsList.mapStateToProps)(ComicsList);
