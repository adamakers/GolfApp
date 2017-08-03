import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

//components
import ScoreCard from './components/score_card';
import BigTimer from './components/big_timer';
import GameStats from './components/game_stats';
import ScoreBtns from './components/score_btns.js';

//Styles
import styles from './styles/index.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: {
        name: 'Broncos',
        score: 21,
        timeouts: 3
      },
      away: {
        name: 'Chiefs',
        score: 0,
        timeouts: 3
      },
      game: {
        quarter: 0,
        down: 0,
        ydToGo: 0,
        time: '00:00',
        possession: 'team'
      }
    };

  }//constructor

  //////
  //button callbacks
  //////

  scoreTouchdown() {
    this.setState();
  }

  render() {
    return (
      <div className="app dinner_contain">
        <div className="top-row">
          <ScoreCard team={this.state.away}/>
          <BigTimer gameClock={this.state.game.time}
                    quarter={this.state.game.quarter}/>
          <ScoreCard team={this.state.home}/>
        </div>
        <div className="bottom-row">
          <GameStats stats={this.state.game} />
        </div>
        <div className="control-board">
          <ScoreBtns />
          <ScoreBtns />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.dcontainer'));