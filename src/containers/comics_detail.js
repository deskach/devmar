import React from "react";
import {connect} from "react-redux";
import {doFetchComicById} from "../actions/index";

class ComicsDetail extends React.Component {
  componentWillMount() {
    this.props.doFetchComicById(this.props.params.id);
  }

  render() {
    console.log(this.props.comicDetail);
    return (
      <div>My id is {this.props.params.id}\n</div>
    )
  }

  static mapState2Props({comicDetail}) {
    return {comicDetail};
  }
}

export default connect(ComicsDetail.mapState2Props, {doFetchComicById})(ComicsDetail);
