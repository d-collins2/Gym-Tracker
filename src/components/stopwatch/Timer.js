import React from 'react';
import './Timer.css';

const Timer = ({minutes, seconds}) => {
  return (
    <div style={{marginLeft: 50}}>
      <h1 className=""> {minutes} : {seconds}</h1>
    </div>
  );
}

export default Timer;
