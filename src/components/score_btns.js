import React from 'react';

import styles from './../styles/score_btn.css';

const ScoreBtns = (props) => {

  //touchdown, 6 points
  const touchdown = (team) => {
    props.action(6, team);
  }

  //field Goal, 3 points
  const fieldgoal = (team) => {
    props.action(3, team)
  }

  //safety, 2 points
  const safety = (team) => {
    props.action(2, team);
  }
  
  //extra point, 1 point
  const extraPoint = (team) => {
    props.action(1);
  }

  //extraPoint, 2 points
  const extraPointTwo = (team) => {
    props.action(2);
  }

  return (
    <div className="score-btn-container">
      <button className="score-touchdown" onClick={() => {touchdown(props.team)}}>Touchdown</button> 
      <button className="score-field-goal" onClick={() => {touchdown(props.team)}}>Field Goal</button>
      <button className="score-safety" onClick={() => {touchdown(props.team)}}>Safety</button>
      <button className="score-extra-point-one" onClick={() => {touchdown(props.team)}} disabled>Extra Point (1)</button>
      <button className="score-extra-point-two" onClick={() => {touchdown(props.team)}} disabled>Extra Point (2)</button>
      <button className="score-extra-point-zero" onClick={() => {touchdown(props.team)}} disabled>Missed FG</button>
    </div>
  );
};

export default ScoreBtns;