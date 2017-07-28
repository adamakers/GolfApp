import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

//components
import SbHeader from './components/header';
import ScoreCard from './components/score_card';
import MainBoard from './components/main_board';

import GivePoint from './components/give_point';
import LogBtn from './components/log_btn';

//Styles
import styles from './styles/index.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.addTouchdown = this.addTouchdown.bind(this);

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

  }

  addTouchdown() {
    let newObj = _.assign({}, this.state.home);
    newObj.score = 28;
    this.setState({ home: newObj });
    console.log(this.state.home);
  }
  
  render() {
    return (
      <div className={styles.inner_contain}>
        <SbHeader />
        <ScoreCard teamInfo={this.state.away} />
        <ScoreCard teamInfo={this.state.home} /> 
        <MainBoard testItem={this.state.tacos} />
        <GivePoint giveTd={this.addTouchdown} />
      </div> 
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));