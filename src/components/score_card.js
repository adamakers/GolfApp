


import React, {Component} from 'react';



class ScoreCard extends Component {

  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      teamInfo: props.teamInfo
    }

  }

  render() {
    const team = this.state.teamInfo;
    return (
      <div className="home-score">
        <h2>{(team.name)}</h2>
      </div>
    );
  }

}




export default ScoreCard;