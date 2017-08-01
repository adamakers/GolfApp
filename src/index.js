import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

//components
import ScoreCard from './components/score_card';

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
  
  render() {
    return (
      <div className={styles.inner_contain}>

      </div> 
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));