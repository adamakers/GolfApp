


import React from 'react';

import styles from './../styles/score_card.css';

const ScoreCard = ({team}) => {
//create fn that will determine number of Time Outs team has and then draw it and then call it in render()
  return (
    <div className="team">
      <h2 className="team-name pb-2">{team.name}</h2> 
      <div className="possession-box"></div>
      <div className="team-score-contain">
        <h2 className="team-score">{team.score}</h2>  
      </div>
      {/*loop through and fill out how many boxes per timeouts left  */}
      <ul className="timeout-contain">
        <li className="timeout-box"></li>
        <li className="timeout-box"></li>
        <li className="timeout-box"></li>
      </ul>
    </div>
  );
}


export default ScoreCard;