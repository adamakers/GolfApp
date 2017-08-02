import React from 'react';

import styles from './../styles/score_btn.css';

const ScoreBtns = () => {
  return (
    <div className="score-btn-container">
      <button className="score-touchdown">Touchdown</button>
      <button className="score-field-goal">Field Goal</button>
      <button className="score-extra-point-one">Extra Point (1)</button>
      <button className="score-extra-point-two">Extra Point (2)</button>
      <button className="score-safety">Safety</button>
    </div>
  );
};

export default ScoreBtns;