


import React from 'react';



const ScoreCard = (props) => {
  const team = props.teamInfo
//create fn that will determine number of Time Outs team has and then draw it and then call it in render()
  return (
    <div className="team">
      <h2>{team.name}</h2>
      <div className="possession-box"></div>
      <h3 className="team-score">{team.score}</h3>
      
      {/*loop through and fill out how many boxes per timeouts left  */}
      <ul>
        <li className="timeout-box"></li>
        <li className="timeout-box"></li>
        <li className="timeout-box"></li>
      </ul>
    </div>
  );
}


export default ScoreCard;