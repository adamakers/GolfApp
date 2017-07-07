import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import helloWorld from './components/helloWorld';

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
        <helloWorld />
      </div> 
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));