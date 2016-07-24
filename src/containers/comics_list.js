import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {doFetchContent} from "../actions/index";
import actionConstants from "../actions/constants";

class ComicsList extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor() {
    super();

    this.renderComics = this.renderComics.bind(this);
  }

  componentWillMount() {
    this.props.doFetchContent(actionConstants.CONTENT_TYPE.COMICS, '', null, this.props.queryParams);
  }

  renderComics(comicsData) {
    const id = comicsData.id;
    const title = comicsData.title;
    const description = comicsData.description;
    const url = `${comicsData.thumbnail.path}.${comicsData.thumbnail.extension}`;

    return (
      <tr key={id} className="clickable" onClick={() => this.context.router.push(`comics/${id}`)}>
        <td>
          <img className="img-thumbnail avatar" src={url}/>
        </td>
        <td>
          <span className="text-xs-center text-xs-large">{title}</span>
          <p>{description}</p>
        </td>
      </tr>
    )
  }

  render() {
    var comics = this.props.comics;

    if (comics) {
      return (
        <table className="table table-hover table-sm table-1st-col-25">
          <thead>
          <tr className="text-xs-large">
            <th>Comic</th>
            <th>Title</th>
          </tr>
          </thead>
          <tbody>
          {comics.data.results.map(this.renderComics)}
          </tbody>
        </table>
      );
    }

    return <div>Loading...</div>
  }

  static mapStateToProps(state) {
    return {
      comics: state.content.comics,
      queryParams: state.queryParams
    };
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({doFetchContent}, dispatch);
  }
}

export default connect(ComicsList.mapStateToProps, ComicsList.mapDispatchToProps)(ComicsList);
