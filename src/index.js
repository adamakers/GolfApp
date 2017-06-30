import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super(props);

    this.state = {
      //some state stuff in here
    }
  }
  
  render() {
    return (
      <div>
        Hi world
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));