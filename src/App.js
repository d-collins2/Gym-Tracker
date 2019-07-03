import React from 'react';
import StopWatch from './components/stopwatch/StopWatch.js';
import Calendar from './components/calendar/Calendar.js';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="container">
          <Calendar />
          <StopWatch />  
      </div>
    );
  }
}

export default App;
