import React from 'react';

export class CharacterDetail extends React.Component {
  render() {
    return (
      <div className="container article">
        <h1 className="info">Character details</h1>
        <img className="img-thumbnail avatar pull-xs-left"
             src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"/>
        <div>
          <span className="text-xs-large"><strong>Name:</strong>&nbsp;3-D Man</span>
          <br/>
          <span className="text-xs-large"><strong>Series:</strong>&nbsp;Avengers: The Initiative (2007) #19</span>
          <br/>
          <p>
            <strong className="text-xs-large">Description:</strong>&nbsp;
            Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and
            heroes around America in the battle that will decide the fate of the planet and the future of the
            Initiative program. Will the Kill Krew Army win the day?\n
          </p>
          <p>
            <strong className="text-xs-large">Related characters:</strong>&nbsp;Ant-Man (Eric O'Grady), Avengers, Bengal
          </p>
          <p>
            <strong className="text-xs-large">Creators:</strong>&nbsp;Mahmud Asrar, Bong Dazo, Rebecca Buchman
          </p>
        </div>
      </div>
    )
  }
}
