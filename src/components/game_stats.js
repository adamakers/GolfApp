import React from 'react';

import styles from './../styles/game_stats.css';

const GameStats = ({stats}) => {
  return (
    <section className="game-stats">
      <div className="game-downs stat-box">DOWN <span className="num-box">1</span></div>
      <div className="game-togo stat-box">TO GO <span className="num-box">10</span></div>
      <div className="game-ball-pos stat-box">BALL ON <span className="num-box">50</span></div>
    </section>
  );
};

export default GameStats;