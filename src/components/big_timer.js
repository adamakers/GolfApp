import React from 'react';
import styles from './../styles/big_timer.css';

const GameClock = (props) => {

  return (
      <div className="timer-container">
         <h1 className="timer-time">{props.gameClock}</h1> {/* Enter game time here.  Needs to be updated with a timer*/}
         <h3 className="timer-quarter">QTR <span>4</span></h3>
      </div>
  );
}

export default GameClock;