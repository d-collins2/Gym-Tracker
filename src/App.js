import React from 'react';
import StopWatch from './components/stopwatch/StopWatch.js';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="container">
          <StopWatch />
      </div>
    );
  }
}

export default App;
