import React, {Component} from 'react';

import styles from './../styles/score_btn.css';


class ScoreBtns extends Component {

  constructor(props) {
    super(props);

    //Binding functions
    this.touchdown = this.touchdown.bind(this);
    this.fieldgoal = this.fieldgoal.bind(this);
    this.safety = this.safety.bind(this);
    this.extraPoint = this.extraPoint.bind(this);
    this.extraPointTwo = this.extraPointTwo.bind(this);

    //State
    this.state = {
      extraPointAttempt: false
    }
  }

  //touchdown, 6 points
  touchdown(team) {
    this.props.action(6, team);
    this.setState({extraPointAttempt: true});
  }

  //field Goal, 3 points
  fieldgoal(team) {
    this.props.action(3, team)
  }

  //safety, 2 points
  safety(team) {
    this.props.action(2, team);
  }
  
  //extra point, 1 point
  extraPoint(team) {
    this.props.action(1, team);
    this.setState({extraPointAttempt: false});
  }

  //extraPoint, 2 points
  extraPointTwo(team) {
    this.props.action(2, team);
    this.setState({extraPointAttempt: false});
  }

  //enable or disable and add point




  render() {
    return (
      <div className="score-btn-container">
        <button className="score-touchdown" onClick={() => {this.touchdown(this.props.team)}}
                                                            disabled={this.state.extraPointAttempt}>Touchdown</button> 
        <button className="score-field-goal" onClick={() => {this.fieldgoal(this.props.team)}}
                                                             disabled={this.state.extraPointAttempt}>Field Goal</button>
        <button className="score-safety" onClick={() => {this.safety(this.props.team)}}
                                                         disabled={this.state.extraPointAttempt}>Safety</button>
        <button className="score-extra-point-one" onClick={() => {this.extraPoint(this.props.team)}} 
                                                                  disabled={!this.state.extraPointAttempt} >Extra Point (1)</button>
        <button className="score-extra-point-two" onClick={() => {this.extraPointTwo(this.props.team)}}
                                                                  disabled={!this.state.extraPointAttempt} >Extra Point (2)</button>
         <button className="score-extra-point-zero" onClick={() => {this.setState({extraPointAttempt: false})}} disabled={!this.state.extraPointAttempt}>Missed FG</button>
      </div>
    )
  };
}

export default ScoreBtns;