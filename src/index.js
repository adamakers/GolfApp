import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import SbHeader from './components/header';
import HomeScore from './components/score_card';

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
        name: 'Away',
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
      <div>
        <SbHeader/>
        <HomeScore teamInfo={this.state.home} />
        {/* <AwayScore awayPoints={this.state.away} /> */}
      </div> 
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));