import React from "react";
import {connect} from "react-redux";
import {doFetchCharacterByName} from "../actions/index";
import {getRandomKey} from "../domain/utils";

class CharacterDetail extends React.Component {
  componentWillMount() {
    this.props.doFetchCharacterByName(this.props.params.id);
  }

  render() {
    const details = this.props.characterDetails;

    if (details) {
      const results = details.data.data.results[0];
      const imgSrc = `${results.thumbnail.path}.${results.thumbnail.extension}`;
      const name = results.name;
      const description = results.description;
      const notAvailable = "Not available :o(";
      const series = results.series.items.map((item) => {
        return (<li key={getRandomKey()}>{item.name}</li>)
      });
      const comics = results.comics.items.map((item) => {
        return (<li key={getRandomKey()}>{item.name}</li>)
      });
      const events = results.events.items.map((item) => {
        return (<li key={getRandomKey()}>{item.name}</li>)
      });

      return (
        <div>
          <h1 className="info">Character details</h1>
          <img className="avatar-detailed img-thumbnail pull-xs-right" src={imgSrc}/>
          <div>
            <p className="text-xs-large"><strong>Name:</strong>&nbsp;{name}</p>
            <p>
              <strong className="text-xs-large">Description:</strong>&nbsp;{description ? description : notAvailable}
            </p>
            <div>
              <strong className="text-xs-large">Series:</strong>
              <ul className="list-unstyled">{series.length ? series : notAvailable}</ul>
            </div>
            <div>
              <strong className="text-xs-large">Comics:</strong>
              <ul className="list-unstyled">{comics.length ? comics : notAvailable}</ul>
            </div>
            <div>
              <strong className="text-xs-large">Events:</strong>
              <ul className="list-unstyled">{events.length ? events : notAvailable}</ul>
            </div>
          </div>
        </div>
      )
    }

    return <div>Loading...</div>
  }

  static mapStateToProps({characterDetails}) {
    return {characterDetails};
  }
}

export default connect(CharacterDetail.mapStateToProps, {doFetchCharacterByName})(CharacterDetail);
