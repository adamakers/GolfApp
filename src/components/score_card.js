


import React from 'react';



const ScoreCard = (props) => {
  const team = props.teamInfo
//create fn that will determine number of Time Outs team has and then draw it and then call it in render()
  return (
    <div className="team">
      <h2>{team.name}</h2>
      <h3 className="team-score">{team.score}</h3>
    </div>
  );
}


export default ScoreCard;