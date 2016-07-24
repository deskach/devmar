import React, {Component} from "react";
import {connect} from "react-redux";
import {doFetchContent} from "../actions/index";
import actionConstants from "../actions/constants";

class CharacterList extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor() {
    super();

    this.renderCharacters = this.renderCharacters.bind(this);
  }

  componentWillMount() {
    this.props.doFetchContent(actionConstants.CONTENT_TYPE.CHARACTERS, '', null, this.props.queryParams);
  }

  renderCharacters(characterData) {
    const id = characterData.id;
    const name = characterData.name;
    const description = characterData.description;
    const url = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;

    return (
      <tr key={id} id={id} className="clickable" onClick={() => this.context.router.push(`characters/${id}`)}>
        <td>
          <img className="img-thumbnail avatar" src={url}/>
        </td>
        <td>
          <span className="text-xs-center text-xs-large">{name}</span>
          <p>{description}</p>
        </td>
      </tr>
    )
  }

  render() {
    const characters = this.props.characters;

    if (characters) {
      return (
        <table className="table table-hover table-1st-col-25">
          <thead>
          <tr className="text-xs-large">
            <th>Character</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          {this.props.characters ? this.props.characters.data.results.map(this.renderCharacters) : ""}
          </tbody>
        </table>
      );
    }

    return <div>Loading...</div>
  }

  static mapStateToProps(state) {
    return {
      characters: state.content.characters,
      queryParams: state.location.query
    };
  }
}

export default connect(CharacterList.mapStateToProps, {doFetchContent})(CharacterList);
