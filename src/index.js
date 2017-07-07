import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import SbHeader from './components/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //some state stuff in here
    }
  }
  
  render() {
    return (
      <div>
        <SbHeader/>
      </div> 
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));