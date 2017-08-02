import React from 'react';
import styles from './../styles/big_timer.css';

const GameClock = () => {

  return (
      <div className="timer-container">
         <h1 className="timer-time">00:00</h1> {/* Enter game time here.  Needs to be updated with a timer*/}
         <h3 className="timer-quarter">QTR <span>4</span></h3>
      </div>
  );
}

export default GameClock;