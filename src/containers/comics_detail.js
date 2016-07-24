import React from "react";
import {connect} from "react-redux";
import {doFetchComicById} from "../actions/index";

class ComicsDetail extends React.Component {
  componentWillMount() {
    this.props.doFetchComicById(this.props.params.id);
  }

  render() {
    const details = this.props.comicDetails;

    if (details) {
      const results = details.data.data.results[0];
      const imgSrc = `${results.thumbnail.path}.${results.thumbnail.extension}`;
      const title = results.title;
      const description = results.description;
      const notAvailable = "Not available :o(";
      const seriesName = results.series.name;
      const isbn = results.isbn;

      return (
        <div>
          <img className="avatar-detailed img-responsive pull-right" src={imgSrc}/>
          <div>
            <p className="text-xs-large"><strong>Title:</strong>&nbsp;{title}</p>
            <p className="text-xs-large"><strong>ISBN:</strong>&nbsp;{isbn ? isbn : notAvailable}</p>
            <p>
              <strong className="text-xs-large">Description:</strong>&nbsp;{description ? description : notAvailable}
            </p>
            <p>
              <strong className="text-xs-large">Series:</strong>&nbsp;{seriesName ? seriesName : notAvailable}
            </p>
            {/*<div>*/}
            {/*<strong className="text-xs-large">Series:</strong>*/}
            {/*<ul className="list-unstyled">{series.length ? series : notAvailable}</ul>*/}
            {/*</div>*/}
          </div>
        </div>
      )
    }

    return <div>Loading...</div>
  }

  static mapState2Props({comicDetails}) {
    return {comicDetails};
  }
}

export default connect(ComicsDetail.mapState2Props, {doFetchComicById})(ComicsDetail);
