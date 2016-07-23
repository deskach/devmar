import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {doFetchContent} from '../actions/index';
import actionConstants from '../actions/constants';

class CharacterList extends Component {
  constructor() {
    super();

    this.renderCharacters = this.renderCharacters.bind(this);
  }

  componentWillMount() {
    //this function is called when the component is about to be rendered the 1st time
    this.props.doFetchContent(actionConstants.CONTENT_TYPE.CHARACTERS, '');
  }

  renderCharacters(characterData) {
    const key = characterData.id;
    const name = characterData.name;
    const description = characterData.description;
    const url = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;

    return (
      <tr key={key} className="clickable" id=${key} >
        <td>
          <div className="text-xs-center">{name}</div>
          <img className="img-thumbnail avatar" src={url}  />
        </td>
        <th scope="row">
          <span>{description}</span>
        </th>
      </tr>
    )
  }

  render() {
    console.log("Creating list of characters from " + this.props.characters);

    var tbody = "";
    if (this.props.characters) {
      console.log(this.props.characters);
      tbody = this.props.characters.data.results.map(this.renderCharacters);
      console.log('here');
    }

    return (
      <table className="table table-hover table-sm">
        <thead>
        <tr>
          <th>Character</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {tbody}
        </tbody>
      </table>
    );
  }

  static mapStateToProps({content}) {
    return {characters: content.characters};
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({doFetchContent}, dispatch);
  }
}

export default connect(CharacterList.mapStateToProps, CharacterList.mapDispatchToProps)(CharacterList);
