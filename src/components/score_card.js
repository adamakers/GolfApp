


import React, {Component} from 'react';



class ScoreCard extends Component {

  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      teamInfo: props.teamInfo
    }

  }

  //create fn that will determine number of Time Outs team has and then draw it and then call it in render()

  render() {
    const team = this.state.teamInfo;
    return (
      <div className="team">
        <h2>{(team.name)}</h2>
        <h3 className="team-score">{(team.score)}</h3>
      </div>
    );
  }

}




export default ScoreCard;