import React from 'react';

const TimerInput = ({minutes, handleChange}) => {
  return (
    <div style={{marginLeft:100}}>
      <h3>Input your desired time</h3>
      <input
        type="number"
        minutes={minutes}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default TimerInput;
