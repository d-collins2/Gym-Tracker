import React from 'react';
import Timer from './Timer.js';
import TimerInput from './TimerInput.js';
import Button from './Button.js';
import './StopWatch.css';

class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: '00',   // responsible for the seconds
      minutes: '0'  // responsible for the minutes
    }
    // bind the method to the constructor
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      minutes: event.target.value
    })
  }

  render(){
    console.log(this.state)
    const { minutes, seconds } = this.state
    return (
      <div className="card">
        <TimerInput minutes={minutes} handleChange={this.handleChange}/>
        <Timer minutes={minutes} seconds={seconds}/>
        <Button />
      </div>
    );
  }
}

export default StopWatch;
